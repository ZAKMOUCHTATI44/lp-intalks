import type { Metadata } from "next";
import "@/app/globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import ScrollToTopButton from "@/components/layouts/ScrollToTopButton";
import Script from "next/script";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "In Talks",
  description: "In Talks est la première plateforme de marketing d'influence alimentée par l'IA, conçue pour la région MENA et au-delà. Elle connecte les marques, les agences et les créateurs grâce à des outils intelligents qui simplifient la collaboration, la gestion des campagnes et le suivi des performances.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${spaceGrotesk.className} antialiased bg-body text-soft-white`}
      >
        <NextIntlClientProvider>
          <Script
            id="clarity-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "r10mfx9hky");`,
            }}
          />

          <Navbar />
          {children}
          <ScrollToTopButton />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
