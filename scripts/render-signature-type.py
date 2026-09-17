"""Optional artwork authoring step: convert the existing system typefaces to paths.
Requires fontTools 4.60.1. The site build uses the checked-in path artwork directly;
font files and this authoring dependency are never served to visitors.
"""
from pathlib import Path
import json
import sys
sys.path.insert(0, str(Path('.local/font-tools').resolve()))
from fontTools.ttLib import TTFont
from fontTools.pens.basePen import BasePen

class OutlinePen(BasePen):
    def __init__(self, glyphs, units):
        super().__init__(glyphs)
        self.commands = []
        self.units = units
    def point(self, point):
        return [round(point[0] / self.units, 5), round(-point[1] / self.units, 5)]
    def _moveTo(self, point): self.commands.append(['M', *self.point(point)])
    def _lineTo(self, point): self.commands.append(['L', *self.point(point)])
    def _curveToOne(self, a, b, c): self.commands.append(['C', *self.point(a), *self.point(b), *self.point(c)])
    def _qCurveToOne(self, a, b): self.commands.append(['Q', *self.point(a), *self.point(b)])
    def _closePath(self): self.commands.append(['Z'])
    def _endPath(self): pass

def phrase(text, filename):
    font = TTFont('/System/Library/Fonts/Supplemental/' + filename)
    glyphs = font.getGlyphSet()
    cmap = font.getBestCmap()
    units = font['head'].unitsPerEm
    output = []
    for character in text:
        if ord(character) not in cmap:
            raise ValueError(f'Missing character {character!r} in {filename}')
        name = cmap[ord(character)]
        pen = OutlinePen(glyphs, units)
        glyphs[name].draw(pen)
        output.append({'char': character, 'advance': round(font['hmtx'][name][0] / units, 5), 'commands': pen.commands})
    return {'text': text, 'glyphs': output}

phrases = {
    'name': phrase('riḍā', 'Georgia.ttf'),
    'by': phrase('BY RAHMA', 'Arial.ttf'),
    'tagline': phrase('Mind & heart, in conversation.', 'Georgia.ttf'),
    'taglineStart': phrase('Mind & heart,', 'Georgia.ttf'),
    'taglineEnd': phrase('in conversation.', 'Georgia.ttf'),
}
Path('public/signature-type.mjs').write_text('// Fixed phrase artwork from the site\'s existing Georgia serif and Arial sans serif.\n// No font files or general-purpose font character set are included.\nexport const phrases=' + json.dumps(phrases, separators=(',', ':')) + ';\n')
print('Created serif wordmark and upright tagline outlines.')
