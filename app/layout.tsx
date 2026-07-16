import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mainzer-autoteile-discount.de"),
  title: {
    default: "Djawed Yussufi Reifenservice und Kfz-Aufbereitung Mainz",
    template: "%s | Djawed Yussufi Mainz",
  },
  description:
    "Reifenservice, Autoteile, Felgen, Werkstatt, Fahrzeugaufbereitung und Smart Repair in Mainz.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Djawed Yussufi Reifenservice und Kfz-Aufbereitung Mainz",
    description:
      "Autoteile, Reifenservice, Felgen, Werkstatt und Fahrzeugaufbereitung am Weisenauer Weg 4-6 in Mainz.",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/mainzer/hero-tire-service.jpg",
        width: 1920,
        height: 800,
        alt: "Professioneller Reifenservice in einer Kfz-Werkstatt",
      },
    ],
  },
  icons: {
    icon: "/images/mainzer/favicon.png",
    shortcut: "/images/mainzer/favicon.png",
    apple: "/images/mainzer/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#111317",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
