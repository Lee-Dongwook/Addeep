export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-14 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6 md:px-10">
        {/* Left: Hamburger */}
        <button
          type="button"
          aria-label="메뉴 열기"
          className="inline-flex items-center rounded-lg p-2 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
        >
          <svg
            className="h-6 w-6 text-gray-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Center: empty (About는 가운데 컨텐츠 없음) */}
        <div aria-hidden className="flex-1" />

        {/* Right: 로그인 + IG mark */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-sm font-medium text-gray-900 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
          >
            로그인
          </button>

          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.7)] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
          >
            <div className="relative h-5 w-5 rounded-[6px] border-2 border-white/95">
              <div className="absolute right-[2px] top-[2px] h-1 w-1 rounded-full bg-white/95" />
              <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/95" />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
