import { ThemeProvider } from "next-themes";
import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Treavor Gagne Portfolio Blog Website",
  description:
    "My personal website displaying my work experience, portfolio, and blog.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ubuntu.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <Header />

              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3"></div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                  <div className="prose prose-lg mx-auto p-6">{children}</div>
                </div>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
