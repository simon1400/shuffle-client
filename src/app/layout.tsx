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
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
}

// Force all pages to be dynamic - skip static generation at build time
export const dynamic = 'force-dynamic'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  let navigation
  try {
    navigation = await getTopNav()
  } catch (error) {
    console.error('Failed to fetch navigation:', error)
    navigation = { topNav: { items: [] } } // Fallback to empty navigation
  }

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
