import { League_Spartan } from 'next/font/google';
import './globals.css';

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-league-spartan',
});

export const metadata = {
  title: 'Simone Marton',
  description: 'Personal Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={leagueSpartan.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={leagueSpartan.className}>{children}</body>
    </html>
  );
}
