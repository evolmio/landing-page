export default function Navigation() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="14" r="6" fill="#000"/>
              <circle cx="24" cy="34" r="6" fill="#000"/>
              <circle cx="14" cy="24" r="6" fill="#000"/>
              <circle cx="34" cy="24" r="6" fill="#000"/>
            </svg>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#products" className="text-gray-900 hover:text-gray-600 transition-colors">Products</a>
            <a href="#solutions" className="text-gray-900 hover:text-gray-600 transition-colors">Solutions</a>
            <a href="#community" className="text-gray-900 hover:text-gray-600 transition-colors">Community</a>
            <a href="#resources" className="text-gray-900 hover:text-gray-600 transition-colors">Resources</a>
            <a href="#pricing" className="text-gray-900 hover:text-gray-600 transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-900 hover:text-gray-600 transition-colors">Contact</a>
            <a href="#link" className="text-gray-900 hover:text-gray-600 transition-colors">Link</a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors">
              Sign in
            </button>
            <button className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="p-2 rounded-md text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
