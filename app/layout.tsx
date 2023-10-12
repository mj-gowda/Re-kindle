"use client"

import '../globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SnackbarProvider } from 'notistack'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SnackbarProvider>
      <body className="{inter.className} flex flex-col min-h-screen dark:bg-slate-200">
        <div>
        <Navbar/>
        </div>
          <div className="pt-20 pb-20">
          {children}
          </div>
          <Footer/>
      </body>
      </SnackbarProvider>
    </html>
  )
}
