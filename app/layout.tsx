import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: {
    default: 'Developer Academy',
    template: '%s | Developer Academy',
  },
  description: 'Belajar Next.js dan FE',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <header style={{ display: 'flex', justifyContent: 'space-between' }}>
          My Blog
          <Navbar />
        </header>

        {children}

        <footer>2026 &copy; My Blog</footer>
      </body>
    </html>
  );
}
