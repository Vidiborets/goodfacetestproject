import type { ReactNode } from 'react';

type AppProps = {
  children?: ReactNode;
};

export function App({ children }: AppProps) {
  return (
    <main style={{ padding: '1.5rem' }}>
      <h1>Next.js Boilerplate</h1>
      {children}
    </main>
  );
}
