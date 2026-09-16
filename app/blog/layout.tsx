import type { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <header>
        <h2>Blog Area</h2>
      </header>
      {children}
    </section>
  );
}
