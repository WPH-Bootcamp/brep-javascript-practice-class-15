import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Tentang develoeper',
};

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>

      <p>Belajar Next.js App Router.</p>
    </main>
  );
}
