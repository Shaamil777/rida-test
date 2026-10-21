Add-Type -AssemblyName System.Drawing

$srcPath = "$PSScriptRoot\..\public\images\logo\favicon.png"
if (-not (Test-Path $srcPath)) {
    Write-Error "Source image not found at $srcPath"
    exit 1
}

$srcBmp = [System.Drawing.Bitmap]::FromFile($srcPath)

# Source bounds of butterfly artwork inside favicon.png
$srcRect = New-Object System.Drawing.Rectangle(109, 126, 1092, 1009)
$bgColor = [System.Drawing.Color]::FromArgb(255, 23, 63, 70) # Brand teal: #173f46

function Create-SquareFavicon {
    param(
        [int]$Size,
        [string]$OutPath,
        [double]$Scale = 0.70
    )

    $destBmp = New-Object System.Drawing.Bitmap($Size, $Size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($destBmp)

    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $g.Clear($bgColor)

    $targetW = [int]($Size * $Scale)
    $targetH = [int]($targetW * 1009 / 1092)
    $targetX = [int](($Size - $targetW) / 2)
    $targetY = [int](($Size - $targetH) / 2)
    $destRect = New-Object System.Drawing.Rectangle($targetX, $targetY, $targetW, $targetH)

    $g.DrawImage($srcBmp, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

    $destBmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)

    $g.Dispose()
    $destBmp.Dispose()
    Write-Host "Created $OutPath ($Size x $Size)"
}

$pubDir = "$PSScriptRoot\..\public"

# Generate standard square favicon sizes
Create-SquareFavicon -Size 512 -OutPath "$pubDir\android-chrome-512x512.png" -Scale 0.70
Create-SquareFavicon -Size 512 -OutPath "$pubDir\favicon.png" -Scale 0.70
Create-SquareFavicon -Size 192 -OutPath "$pubDir\android-chrome-192x192.png" -Scale 0.70
Create-SquareFavicon -Size 180 -OutPath "$pubDir\apple-touch-icon.png" -Scale 0.70
Create-SquareFavicon -Size 96  -OutPath "$pubDir\favicon-96x96.png" -Scale 0.70
Create-SquareFavicon -Size 48  -OutPath "$pubDir\favicon-48x48.png" -Scale 0.70
Create-SquareFavicon -Size 32  -OutPath "$pubDir\favicon-32x32.png" -Scale 0.70
Create-SquareFavicon -Size 16  -OutPath "$pubDir\favicon-16x16.png" -Scale 0.70

# Also update public\images\logo\favicon.png to the square master so any existing reference is square
$masterSquare = "$pubDir\images\logo\favicon.png"
# We first close srcBmp before overwriting
$srcBmp.Dispose()

Copy-Item "$pubDir\favicon.png" $masterSquare -Force
Write-Host "Updated $masterSquare to square 512x512"
