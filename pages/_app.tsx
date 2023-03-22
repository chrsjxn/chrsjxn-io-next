import { Navigation } from '@/components/Navigation/Navigation'
import './globals.css'
import { Footer } from '@/components/Footer/Footer'
import { AppProps } from 'next/app'

export const metadata = {
  title: 'chrsjxn.io',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌊</text></svg>'
  }
}

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <div className="center-content">
      <Navigation />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
