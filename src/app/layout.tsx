import { cookies } from "next/headers";
import "../../global.css";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookiesStore = await cookies();
  const locale = cookiesStore.get("NEXT_LOCALE")?.value || "ko";

  return (
    <html
      lang={locale}
      className="light"
      data-be-installed="true"
      style={{ width: "100%" }}
      suppressHydrationWarning={true}
    >
      <body data-liner-extension-version="7.16.5">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
