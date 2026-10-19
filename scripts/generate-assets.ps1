Add-Type -AssemblyName System.Drawing

function Create-ResizedImage {
    param(
        [string]$SourcePath,
        [string]$TargetPath,
        [int]$Width,
        [int]$Height,
        [string]$Format = "PNG",
        [long]$Quality = 90
    )

    $src = [System.Drawing.Image]::FromFile($SourcePath)
    $dest = New-Object System.Drawing.Bitmap($Width, $Height)
    $g = [System.Drawing.Graphics]::FromImage($dest)

    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    $g.DrawImage($src, 0, 0, $Width, $Height)

    if ($Format -eq "JPEG" -or $Format -eq "JPG") {
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq 'JPEG' }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $Quality)
        $dest.Save($TargetPath, $codec, $encoderParams)
    } elseif ($Format -eq "ICO") {
        # Create an icon from bitmap
        $iconHandle = $dest.GetHicon()
        $icon = [System.Drawing.Icon]::FromHandle($iconHandle)
        $fs = New-Object System.IO.FileStream($TargetPath, [System.IO.FileMode]::Create)
        $icon.Save($fs)
        $fs.Close()
        $icon.Dispose()
    } else {
        $dest.Save($TargetPath, [System.Drawing.Imaging.ImageFormat]::Png)
    }

    $g.Dispose()
    $dest.Dispose()
    $src.Dispose()
}

$favSrc = Resolve-Path "public/images/logo/favicon.png"
$ogSrc  = Resolve-Path "public/images/logo/opengraph.png"

# Generate standard favicon files
Create-ResizedImage -SourcePath $favSrc -TargetPath "public/favicon.ico" -Width 32 -Height 32 -Format "ICO"
Create-ResizedImage -SourcePath $favSrc -TargetPath "public/favicon-16x16.png" -Width 16 -Height 16 -Format "PNG"
Create-ResizedImage -SourcePath $favSrc -TargetPath "public/favicon-32x32.png" -Width 32 -Height 32 -Format "PNG"
Create-ResizedImage -SourcePath $favSrc -TargetPath "public/apple-touch-icon.png" -Width 180 -Height 180 -Format "PNG"
Create-ResizedImage -SourcePath $favSrc -TargetPath "public/android-chrome-192x192.png" -Width 192 -Height 192 -Format "PNG"
Create-ResizedImage -SourcePath $favSrc -TargetPath "public/android-chrome-512x512.png" -Width 512 -Height 512 -Format "PNG"

# Generate optimized Open Graph image for WhatsApp (< 300KB) and general sharing
# WhatsApp prefers 1200x630 or 1200x628
Create-ResizedImage -SourcePath $ogSrc -TargetPath "public/images/logo/opengraph-optimized.png" -Width 1200 -Height 628 -Format "PNG"
Create-ResizedImage -SourcePath $ogSrc -TargetPath "public/images/logo/opengraph.jpg" -Width 1200 -Height 628 -Format "JPEG" -Quality 88

# Also place og-image in public root for crawlers that check root
Copy-Item "public/images/logo/opengraph.png" "public/opengraph.png" -Force
Copy-Item "public/images/logo/opengraph.jpg" "public/opengraph.jpg" -Force

Write-Output "Assets generated successfully."
