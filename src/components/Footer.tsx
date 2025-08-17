export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-screen-2xl px-6 py-12 md:px-10">
        {/* Top navigation columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              Our Story
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Leadership</li>
              <li>Brand</li>
              <li>Brand Kit</li>
              <li>Working at Instagram</li>
              <li>Politics</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              Features
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Reels</li>
              <li>Stories</li>
              <li>DMs</li>
              <li>Search & Explore</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">Safety</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Safety Tools</li>
              <li>Privacy Tools</li>
              <li>Account Security</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              Community
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>School Partnerships</li>
              <li>Teen Accounts</li>
              <li>Anti-Bullying</li>
              <li>Parents</li>
              <li>Programs</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              Threads
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Edits↗</li>
              <li>Business</li>
              <li>Creators</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">News</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Meta</li>
              <li>Family Center</li>
              <li>Help Center↗</li>
            </ul>
          </div>
        </div>

        {/* Social icons */}
        <div className="mt-10 flex justify-center space-x-4">
          {["instagram", "facebook", "threads", "youtube", "x", "linkedin"].map(
            (icon) => (
              <a
                key={icon}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white hover:opacity-80"
              >
                <span className="sr-only">{icon}</span>
                {/* 실제 아이콘은 react-icons/lucide 등 라이브러리로 교체 */}
                <span className="text-xs font-bold uppercase">{icon[0]}</span>
              </a>
            )
          )}
        </div>

        {/* Bottom links */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-400">
          <span>English (US)</span>
          <span>Instagram from Meta</span>
          <span>API</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Sitemap</span>
        </div>
      </div>
    </footer>
  );
}
