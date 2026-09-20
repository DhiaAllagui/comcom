import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-video-mov',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith('/comcom-logo-video.mov')) {
            const filePath = path.resolve(__dirname, 'public/comcom-logo-video.mov')
            if (fs.existsSync(filePath)) {
              const stat = fs.statSync(filePath)
              const range = req.headers.range
              if (range) {
                const parts = range.replace(/bytes=/, '').split('-')
                const start = parseInt(parts[0], 10)
                const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1
                const chunksize = end - start + 1
                const file = fs.createReadStream(filePath, { start, end })
                res.writeHead(206, {
                  'Content-Range': `bytes ${start}-${end}/${stat.size}`,
                  'Accept-Ranges': 'bytes',
                  'Content-Length': chunksize,
                  'Content-Type': 'video/quicktime',
                })
                file.pipe(res)
                return
              } else {
                res.writeHead(200, {
                  'Content-Length': stat.size,
                  'Content-Type': 'video/quicktime',
                  'Accept-Ranges': 'bytes',
                })
                fs.createReadStream(filePath).pipe(res)
                return
              }
            }
          }
          next()
        })
      },
    },
  ],
  assetsInclude: ['**/*.mov'],
  server: {
    host: '127.0.0.1',
    port: 5173,
    watch: {
      ignored: ['**/.agents/**', '**/comcom/**', '**/*.mov'],
    },
  },
})
