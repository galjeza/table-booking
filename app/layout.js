import '../styles/globals.css';
import AuthContext from './AuthContext';

export default function RootLayout({ children }) {
  return (
    <AuthContext>
      <html className="h-full">
        <head />
        <body className="h-full bg-gray-50">{children}</body>
      </html>
    </AuthContext>
  );
}
