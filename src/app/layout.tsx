import NavMenu from "@/components/NavMenu";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-background flex justify-center ${geistSans.variable} antialiased font-sans`}>
        {/* Navigation */}
        <div className="absolute mt-3">
          <NavMenu/>
        </div>
        <div className="h-screen w-[600px]">
          {children}
        </div>
      </body>
    </html>
  );
}
