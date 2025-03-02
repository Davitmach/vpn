import type { Metadata } from "next";

import Script from "next/script";
import "./globals.scss";





export const metadata: Metadata = {
  title: "ProstoVPN",
  description: "ProstoVPN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body
        className={`  antialiased`}
      >
        {children}
        <Script src="https://telegram.org/js/telegram-web-app.js"/>
      </body>
    </html>
  );
}
