import { readdir, readFile, rm } from 'node:fs/promises'
import path from 'node:path'

// ISR caches a 404 page for every unknown /<slug> and /article/<slug>. Scanners request
// ~200 new junk URLs a day (~40 KB of cache each), so cached 404s are dropped on start
// and then once a day. Relies on the Next 15.5 cache layout (.next/server/route-cache);
// if it changes, this silently does nothing.
const CACHE_DIR = path.join(process.cwd(), '.next/server/route-cache')
const DAY = 24 * 60 * 60 * 1000

async function* metaFiles(dir: string): AsyncGenerator<string> {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => [])
  for (const entry of entries) {
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* metaFiles(file)
    else if (entry.name.endsWith('.meta')) yield file
  }
}

async function removeNotFoundEntries() {
  for await (const meta of metaFiles(CACHE_DIR)) {
    try {
      if (JSON.parse(await readFile(meta, 'utf8')).status !== 404) continue
    } catch {
      continue
    }
    const base = meta.slice(0, -'.meta'.length)
    await Promise.all(['.html', '.rsc', '.meta'].map((ext) => rm(base + ext, { force: true })))
  }
}

export function startNotFoundCacheCleanup() {
  const run = () => removeNotFoundEntries().catch(() => {})
  run()
  setInterval(run, DAY).unref()
}
