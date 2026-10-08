import type { Metadata } from 'next'

import { CtaSec } from 'components/CtaSec'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { WebVitals } from 'components/WebVitals'
import { getTopNav } from 'fetch/nav'
import { Bai_Jamjuree } from 'next/font/google'
import Script from 'next/script'

import './globals.scss'

const baiJamjuree = Bai_Jamjuree({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bai-jamjuree',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://shuffleking.com'),
  title: 'Shuffle king',
  description: 'Shuffle king',
}

// Content changes rarely: pages are prerendered at build (needs Strapi at APP_API)
// and served from cache. Strapi webhook -> /api/revalidate refreshes them right after
// an edit; this daily revalidation is only a fallback if the webhook was missed.
// Fetch errors must not be swallowed here: a thrown error keeps the previous cached page,
// a fallback would be cached instead.
export const revalidate = 86400

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navigation = await getTopNav()

  return (
    <html lang={'en'} className={`overflow-x-hidden max-w-screen ${baiJamjuree.variable}`}>
      <head>
        <meta name={'theme-color'} content={'#03001b'} />
      </head>
      <Script
        id={'gtm'}
        strategy={'afterInteractive'}
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KBFFQ6DV');`,
        }}
      />
      <body
        className={`${baiJamjuree.className} antialiased bg-[url('/assets/top-background.png')] bg-[position:center_bottom] bg-[length:100%_auto] bg-no-repeat overflow-x-hidden max-w-screen`}
      >
        <noscript>
          <iframe
            src={'https://www.googletagmanager.com/ns.html?id=GTM-KBFFQ6DV'}
            height={0}
            width={0}
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <WebVitals />
        <Header nav={navigation} />
        <main>{children}</main>
        <CtaSec />
        <Footer />
      </body>
    </html>
  )
}
