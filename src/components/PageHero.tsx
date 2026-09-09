import type { ReactNode } from 'react';

export function PageHero({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  );
}
