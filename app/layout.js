import TheHeader from '@/components/TheHeader'
import './globals.css'
import { Inter } from 'next/font/google'
import TheFooter from '@/components/TheFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rehabilitacja Medyczna Praktika',
  description: 'Rehabilitacja Medyczna Praktika Rzeszów',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={`bg-body-bg-color text-main-page-text-color font-main flex flex-col min-h-screen`}>
        <TheHeader/>  
          <main className='flex-grow'>
            {children}
          </main>      
        
        <TheFooter className="mt-auto" />
          {/* cookie */}
          {/* <script type="text/javascript" data-cmp-ab="1" src="https://cdn.consentmanager.net/delivery/autoblocking/3732be521186b.js" data-cmp-host="c.delivery.consentmanager.net" data-cmp-cdn="cdn.consentmanager.net" data-cmp-codesrc="0"></script> */}
        </body>
    </html>
  )
}
