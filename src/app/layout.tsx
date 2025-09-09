import "../../global.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import QueryProvider from "../shared/provider/QueryProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="light" suppressHydrationWarning>
      <body>
        <QueryProvider>
          <SiteNav />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
