import type { Metadata } from 'next';

import './globals.css';
export const metadata: Metadata = {
  title: 'Car Dealer',
  description: 'car picking application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" h-full">
      <body className="h-full flex flex-col grow bg-amber-400">
        <h1 className="text-white text-5xl p-5 font-bold">Car Dealer</h1>
        <div className="flex flex-col grow items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
