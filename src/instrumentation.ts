export async function register() {
  // The nodejs check must wrap the import so it is dropped from the edge bundle
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { startNotFoundCacheCleanup } = await import('./lib/not-found-cache-cleanup')
    startNotFoundCacheCleanup()
  }
}
