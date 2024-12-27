import type { Metadata } from "next"
import type { PropsWithChildren } from "react"
import { fontsVariables } from "@/app/fonts"
import "@/styles/global.css"

export const metadata: Metadata = {
  description: "Boilerplate Components",
  title: "Boilerplate Components",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${fontsVariables} antialiased`}>{children}</body>
    </html>
  )
}
