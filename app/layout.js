import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html className="h-full">
      <head />
      <body className="h-full">{children}</body>
    </html>
  );
}
