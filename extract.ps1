
Add-Type -AssemblyName System.IO.Compression.FileSystem

function Extract-Docx($d, $o) {
  $zip = [System.IO.Compression.ZipFile]::OpenRead($d)
  $entry = $zip.GetEntry('word/document.xml')
  $stream = $entry.Open()
  $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
  $content = $reader.ReadToEnd()
  $reader.Close()
  $stream.Close()
  $zip.Dispose()
  [System.IO.File]::WriteAllText($o, $content, [System.Text.Encoding]::UTF8)
}

Extract-Docx 'C:\\Users\\WINKOM\\Desktop\\comcomwebsite\\comcom\\comcom.docx' 'C:\\Users\\WINKOM\\Desktop\\comcomwebsite\\comcom\\comcom_doc.xml'
Extract-Docx 'C:\\Users\\WINKOM\\Desktop\\comcomwebsite\\comcom\\comcomet.docx' 'C:\\Users\\WINKOM\\Desktop\\comcomwebsite\\comcom\\comcomet_doc.xml'
