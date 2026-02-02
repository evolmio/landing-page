export default function EvolmioFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* Branding Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Evolmio</h3>
            <p className="text-gray-600 text-sm">
              Built to help people grow
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-600 text-sm text-center">
            © {currentYear} Evolmio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
