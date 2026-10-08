// The project has no Server Actions. Requests with the `Next-Action` header come
// only from scanners probing for React2Shell (CVE-2025-55182) and related bugs,
// and each one ends up in the error log as "Failed to find Server Action".
// Reject them before they reach the Server Actions handler.
//
// IMPORTANT: if real Server Actions ("use server") are ever added, remove this
// middleware (or this check), otherwise every action call will get a 404.
export function middleware(request: Request) {
  if (request.headers.has('next-action')) return new Response(null, { status: 404 })
}

export const config = {
  matcher: [
    {
      // Skip Next.js assets and static files
      source:
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|webp|avif|svg|txt|xml|webmanifest|css|js|map|woff2?)$).*)',
      // Run only for requests with the header, so normal traffic skips middleware entirely
      has: [{ type: 'header', key: 'next-action' }],
    },
  ],
}
