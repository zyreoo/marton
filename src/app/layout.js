import { Bebas_Neue, DynaPuff, Lato } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const dynaPuff = DynaPuff({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dyna-puff',
});

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

export const metadata = {
  title: 'Simone Marton',
  description: 'Personal Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dynaPuff.variable} ${lato.variable}`}>
      <body className={bebasNeue.className}>{children}</body>
    </html>
  );
}
