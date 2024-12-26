// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Chatbot from '@/components/Chatbot';
import Head from 'next/head'; // Import the Head component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OWAISE AND ASSOCIATES | Professional Accounting Services',
  description: 'OWAISE AND ASSOCIATES offers expert financial services for businesses and individuals. Contact us for reliable accounting solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Add Google AdSense script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8232236830358247"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        <main>{children}</main>
        <Footer />
        
        {/* First Ad Placement */}
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-8232236830358247"
            data-ad-slot="1997798361"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>

        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>

        <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-4">
          <Chatbot />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
