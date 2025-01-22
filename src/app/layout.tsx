import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/theme/ThemeProvider';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const robotoSans = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Github Profile App - Challenge Front End',
  description: 'Aplicação onde ',
};
export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={cn(
          robotoSans.className,
          'min-h-screen text-pretty bg-neutral-300 px-0 antialiased transition-all md:px-8'
        )}
      >
        <ThemeProvider>
          <main className="flex min-h-screen flex-col items-center justify-center">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
