import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import { NavbarNameProvider } from "./contexts/NavbarNameContext";
import { NavbarVisibilityProvider } from "./contexts/NavbarVisibilityContext";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { NavbarHeightProvider } from "@/app/contexts/NavbarHeightContext";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Chrome, Firefox OS and Opera */}
        <meta content="#bffb4f" name="theme-color" />
        {/* Windows Phone */}
        <meta content="#bffb4f" name="msapplication-navbutton-color" />
        {/* iOS Safari */}
        <meta content="#bffb4f" name="apple-mobile-web-app-status-bar-style" />
        <meta content="hidden" name="apple-mobile-web-app-status-bar-style" />
        <meta content="yes" name="mobile-web-app-capable" />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <NavbarHeightProvider>
            <NavbarNameProvider>
              <NavbarVisibilityProvider>
                {" "}
                {/* Wrap with the provider */}
                <div className="fixed top-0 left-0 w-full z-50">
                  <Navbar />
                </div>
                <main
                  className="container mx-auto max-w-7xl px-6 flex-grow"
                  style={{ paddingTop: "146px" }}
                >
                  {children}
                </main>
              </NavbarVisibilityProvider>
            </NavbarNameProvider>
          </NavbarHeightProvider>
        </Providers>
      </body>
    </html>
  );
}
