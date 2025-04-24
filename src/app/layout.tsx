import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { AnimationProvider } from '@/contexts/AnimationContext';
import './globals.css';

const hauoraFont = localFont({ src: './fonts/Hauora.woff2' });

export const metadata: Metadata = {
  title: 'Map animation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hauoraFont.className} antialiased`}>
        <main className="min-h-screen flex justify-center items-center">
          <AnimationProvider>{children}</AnimationProvider>
        </main>
      </body>
    </html>
  );
}
