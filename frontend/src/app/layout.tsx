import { FC, PropsWithChildren } from 'react';
import Nav from '../components/Nav';

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] });

export const metadate = {
    title: 'Docker test',
    description: 'Docker test'
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
        <body className={inter.className}>
            <main>
                <Nav />
                <div className='bg-neutral-900 h-screen'>
                  {children}
                </div>
            </main>
        </body>
    </html>
  )
}

export default RootLayout