import localFont from "next/font/local";
import "../../global.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import QueryProvider from "../shared/provider/QueryProvider";
import MaintenanceChecker from "@/components/MaintenanceChecker";

const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/montserrat/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/montserrat/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/montserrat/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/montserrat/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/montserrat/Montserrat-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/montserrat/Montserrat-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
});
const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="light" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="format-detection" content="telephone=no" />
        <style>{`html { -webkit-text-size-adjust: 100%; }`}</style>
      </head>
      <body className={`${montserrat.variable} ${poppins.variable}`}>
        <QueryProvider>
          <MaintenanceChecker>
            <SiteNav />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </MaintenanceChecker>
        </QueryProvider>
      </body>
    </html>
  );
}
