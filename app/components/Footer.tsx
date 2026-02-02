export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Social */}
          <div>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
              <circle cx="24" cy="14" r="6" fill="#000"/>
              <circle cx="24" cy="34" r="6" fill="#000"/>
              <circle cx="14" cy="24" r="6" fill="#000"/>
              <circle cx="34" cy="24" r="6" fill="#000"/>
            </svg>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {/* X (Twitter) */}
              <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              
              {/* YouTube */}
              <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Use cases */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Use cases</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">UI design</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">UX design</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Wireframing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Diagramming</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Brainstorming</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Online whiteboard</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Team collaboration</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Design</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Prototyping</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Development features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Design systems</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Collaboration features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Design process</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">FigJam</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Best practices</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Colors</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Color wheel</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Developers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Resource library</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
