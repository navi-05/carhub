import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ToasterProvider from '@/providers/ToasterProvider'

import './globals.css'

export const metadata = {
  title: 'Carhub',
  description: 'Browse and view stuff about cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <ToasterProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
