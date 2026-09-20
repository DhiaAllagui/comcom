Add-Type -AssemblyName System.IO.Compression.FileSystem

function Get-DocxText($filePath) {
    $zip = [System.IO.Compression.ZipFile]::OpenRead($filePath)
    $entry = $zip.GetEntry('word/document.xml')
    $stream = $entry.Open()
    $reader = New-Object System.IO.StreamReader($stream)
    $xmlContent = $reader.ReadToEnd()
    $reader.Close()
    $stream.Close()
    $zip.Dispose()
    
    # Replace paragraphs with newlines
    $xmlContent = $xmlContent -replace '<w:p[ >]', "`n"
    # Remove XML tags
    $text = $xmlContent -replace '<[^>]+>', ''
    # Decode XML entities
    $text = [System.Net.WebUtility]::HtmlDecode($text)
    return $text.Trim()
}

Write-Output "=== COMCOM.DOCX ==="
Get-DocxText "C:\Users\WINKOM\Desktop\comcomwebsite\comcom\comcom.docx"

Write-Output "`n`n=== COMCOMET.DOCX ==="
Get-DocxText "C:\Users\WINKOM\Desktop\comcomwebsite\comcom\comcomet.docx"
