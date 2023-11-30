import type { Metadata } from 'next'
import './globals.css'
import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils'
import { Header2 } from '@/sections/Header'
import Footer, { Footer2 } from '@/sections/Footer'
import { Toaster } from "@/components/ui/toaster"

import { ThemeProvider } from "@/components/theme/theme-provider"


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Sirdaryo tuman tibbiyot birlashmasi',
  description: 'Sirdaryo viloyat Sirdaryo tuman tibbiyot birlashmasi',
  keywords: ['ttb', 'sogliqni saqlash', 'sirdaryo', 'tibbiyot', 'salomatlik', 'bolnitsa sirdaryo', 'bolnitsa', 'klinika', 'kasalliklar', 'viloyat', "infeksion", "sirdaryo tuman", "tibbiyot birlashmasi", "Sirdaryo tuman tibbiyot birlashmasi"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head />
      <body className={cn(
        "min-h-screen font-sans antialiased",
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Header2/> */}
          {children}
          <Toaster />
          {/* <Footer/> */}
          {/* <Footer2/> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
