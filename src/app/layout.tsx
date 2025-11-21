import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AppProvider } from './provider';
import './globals.css';
import { spaceGrotesk } from './fonts';

export const metadata: Metadata = {
  title: 'Next Boilerplate',
  description: 'Reusable Next.js boilerplate for test tasks',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
