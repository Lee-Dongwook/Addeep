import "../../global.css";
import SiteNav from "@/components/SiteNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="light" suppressHydrationWarning>
      <body>
        <SiteNav />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
