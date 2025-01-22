'use client';

import queryClient from '@/lib/react-query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import './globals.css';

export default function RootTemplate({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <HeaderNavbar /> */}
      <div className="flex min-h-[800px] w-full max-w-[1440px] flex-col items-center justify-center space-y-8 bg-background p-12 px-4 shadow-2xl md:p-12 md:px-24">
        <div className="flex w-full flex-1 justify-center">{children}</div>
        <footer className="flex-0 flex w-full justify-end gap-6 border-t border-t-neutral-300 pt-2">
          <p className="text-xs opacity-15">Github Profile App</p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
