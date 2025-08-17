import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import "../../global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * ⚠️ NOTE: Instagram Sans(변수 폰트)를 프로젝트에 추가해 아래 부분을 교체하세요.
 * - public/fonts/InstagramSansVar.woff2 를 넣고, next/font/local로 주입하면 CLS 없이 1px 근접 가능
 */
// import localFont from "next/font/local";
// const instagramSans = localFont({
//   src: [{ path: "./fonts/InstagramSansVar.woff2", style: "normal" }],
//   variable: "--font-ig-sans",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Instagram | About",
  description: "Learn more about Instagram.",
  // Open Graph / Twitter도 원본과 유사하게
  openGraph: {
    type: "website",
    title: "Instagram | About",
    url: "https://about.instagram.com/",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookiesStore = await cookies();
  const locale = cookiesStore.get("NEXT_LOCALE")?.value || "ko";

  return (
    <html
      lang={locale}
      dir="ltr"
      className={[
        "light", // 강제 라이트 모드
        "scroll-smooth", // 스크롤 느낌 일치
        // instagramSans.variable,   // ← 실제 폰트 연결 시 주석 해제
      ].join(" ")}
      data-be-installed="true"
      suppressHydrationWarning
    >
      <body
        className={[
          // 기본 타이포 느낌(시스템 폰트 스택 / 실제는 Instagram Sans로 교체)
          "antialiased text-gray-900 selection:bg-black selection:text-white",
          // 폰트 변수 사용 시: "font-ig", // :root { font-family: var(--font-ig-sans), system-ui, -apple-system, ... }
          "min-h-screen",
          // 플랫폼 스크롤바/폰트 렌더링 차이 완화
          "[text-rendering:optimizeLegibility] [font-synthesis-weight:none]",
        ].join(" ")}
        data-liner-extension-version="7.16.5"
      >
        {/* 스킵 링크(접근성) — 시각적으로는 숨기되 포커스 시 노출 */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-black focus:px-3 focus:py-2 focus:text-white"
        >
          본문으로 건너뛰기
        </a>

        {/* 상단 글로벌 헤더(페이지별 컴포넌트에서 재사용) */}
        <Header />

        {/* 원본 컨테이너 폭: 약 1200~1280px대, 좌우 넉넉한 패딩 */}
        <main id="main" className="min-h-screen">
          {children}
        </main>

        {/* 글로벌 푸터(about.instagram.com과 동일 구조로 구성한 컴포넌트를 별도 제작 권장) */}
        <Footer />
      </body>
    </html>
  );
}
