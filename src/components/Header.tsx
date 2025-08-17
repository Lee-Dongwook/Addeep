export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 w-full">
      <div className="max-w-full mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Hamburger Menu */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Instagram Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white rounded-sm relative">
                <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <button className="text-gray-800 font-medium hover:text-gray-600 transition-colors">
            로그인
          </button>
        </div>
      </div>
    </header>
  );
}
