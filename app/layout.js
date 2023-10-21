import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ],
});

export const metadata = {
  title: 'Maycam Evolve',
  description: 'Maycam, donde se crea el gaming.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='bg-[#1a1e1c]'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
