import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const baseDir = process.cwd();
const doc1 = path.join(baseDir, 'comcom', 'comcom.docx');
const doc2 = path.join(baseDir, 'comcom', 'comcomet.docx');
const xml1 = path.join(baseDir, 'comcom', 'comcom_doc.xml');
const xml2 = path.join(baseDir, 'comcom', 'comcomet_doc.xml');
const txt1 = path.join(baseDir, 'comcom', 'comcom_text.txt');
const txt2 = path.join(baseDir, 'comcom', 'comcomet_text.txt');

const psScript = `
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

Extract-Docx '${doc1.replace(/\\/g, '\\\\')}' '${xml1.replace(/\\/g, '\\\\')}'
Extract-Docx '${doc2.replace(/\\/g, '\\\\')}' '${xml2.replace(/\\/g, '\\\\')}'
`;

fs.writeFileSync(path.join(baseDir, 'extract.ps1'), psScript, 'utf8');
execSync('powershell -ExecutionPolicy Bypass -File extract.ps1', { stdio: 'inherit' });

function parseXml(xmlPath) {
  const raw = fs.readFileSync(xmlPath, 'utf8');
  const paragraphs = raw.split(/<w:p[ >]/);
  const lines = [];
  for (const p of paragraphs) {
    const texts = [];
    const matches = p.matchAll(/<w:t[^>]*>(.*?)<\/w:t>/g);
    for (const m of matches) {
      texts.push(m[1]);
    }
    const line = texts.join('').trim();
    if (line) lines.push(line);
  }
  return lines.join('\n');
}

const t1 = parseXml(xml1);
const t2 = parseXml(xml2);

fs.writeFileSync(txt1, t1, 'utf8');
fs.writeFileSync(txt2, t2, 'utf8');

console.log('SUCCESS! Extracted:');
console.log('Doc 1 lines:', t1.split('\n').length);
console.log('Doc 2 lines:', t2.split('\n').length);
