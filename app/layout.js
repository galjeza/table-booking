import '../styles/globals.css';
import 'tailwindcss/tailwind.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
