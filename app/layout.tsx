import "./globals.css";
import "@fontsource/manrope";
import "@fontsource/cormorant-garamond";
import AppThemeProvider from "@/components/theme/AppThemeProvider";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "Carmel Oasis | Pushpasadan Old Age Home",
    template: "%s | Carmel Oasis",
  },
  description:
    "Carmel Oasis at Pushpasadan Old Age Home is a convent-run elder care home presented with real campus photography, compassionate storytelling, and a peaceful visual identity.",
  keywords: [
    "Carmel Oasis",
    "Pushpasadan",
    "Pushpasadan old age home",
    "convent-run elder care",
    "elder care",
    "old age home",
    "senior care",
    "residential elder care",
    "faith-based care home",
    "old age home website",
  ],
  robots: {
    index: true,
    follow: true,
  },
  applicationName: "Carmel Oasis",
  category: "elder care",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FCF8F3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppThemeProvider>
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}
