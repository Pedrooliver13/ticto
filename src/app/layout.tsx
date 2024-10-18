// Packages
import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';

// Components
import { DefaultProvider } from 'components/layout/defaultProvider';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-default',
  weight: ['400', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-title',
  weight: ['600', '700'],
});

export const metadata: Metadata = {
  title: 'Ticto',
  description: 'Seu site de finanças!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${poppins.variable}`}>
        <DefaultProvider>{children}</DefaultProvider>
      </body>
    </html>
  );
}
