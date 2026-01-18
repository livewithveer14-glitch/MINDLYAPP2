import './globals.css'

export const metadata = {
  title: 'Mindly App',
  description: 'Mental wellness app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* No visual header/footer yet - just functional */}
        <main>{children}</main>
      </body>
    </html>
  )
}
