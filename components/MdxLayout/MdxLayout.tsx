import { Navigation } from '@/components/Navigation/Navigation'
import '@/app/globals.css'
import { Footer } from '@/components/Footer/Footer'
import Head from 'next/head'

export function MdxLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="center-content">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}