import { copyFile, mkdir, rm, stat } from 'node:fs/promises'

async function exists(path) {
  try {
    await stat(path)
    return true
  } catch {
    return false
  }
}

await rm('dist', { recursive: true, force: true })
await mkdir('dist', { recursive: true })

await copyFile('index.html', 'dist/index.html')

if (await exists('public/favicon.svg')) {
  await copyFile('public/favicon.svg', 'dist/favicon.svg')
}

console.log('Static site built successfully into dist/')
