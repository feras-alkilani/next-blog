import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "next-themes";
import ThemeCom from "./components/ThemeCom.jsx";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, light } from "@clerk/themes";
import { ThemeModeScript } from "flowbite-react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <ThemeModeScript />
        </head>
        <body className="antialiased">
          <ThemeProvider>
            <ThemeCom>
              <Header />
              {children}
            </ThemeCom>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
