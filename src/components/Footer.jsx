export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-gray-700 pb-12 mb-12">
        
        {/* Left - Newsletter */}
        <div className="space-y-4">
          <h3 className="font-semibold text-sm tracking-wide">BE THE FIRST TO KNOW</h3>
          <p className="text-gray-400 text-sm">
            Sign up for updates from mettā muse.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="w-full bg-transparent border border-gray-600 px-3 py-2 text-sm focus:outline-none focus:border-white transition"
            />
            <button className="bg-gray-800 px-6 py-2 text-sm font-semibold hover:bg-white hover:text-black transition whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Right - Contact + Currency */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-sm mb-2">CONTACT US</h3>
            <p className="text-gray-400 text-sm">+44 221 133 5360</p>
            <p className="text-gray-400 text-sm">customercare@mettamuse.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-2">CURRENCY</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span role="img" aria-label="US flag">🇺🇸</span> USD
            </div>
            <p className="text-xs text-gray-500 pt-2">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-12 mb-8">
        
        {/* Column 1 */}
        <div>
          <h4 className="font-semibold text-sm mb-4">mettā muse</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Stories</a></li>
            <li><a href="#" className="hover:text-white transition">Artisans</a></li>
            <li><a href="#" className="hover:text-white transition">Boutiques</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition">EU Compliances Docs</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-sm mb-4">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition">Orders & Shipping</a></li>
            <li><a href="#" className="hover:text-white transition">Join/Login as a Seller</a></li>
            <li><a href="#" className="hover:text-white transition">Payment & Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Return & Refunds</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-sm mb-4">FOLLOW US</h4>
          <div className="flex gap-3">
            <a href="#" className="p-2 border border-gray-600 rounded-full hover:border-white transition">
              <i className="fa-brands fa-instagram text-white text-lg"></i>
            </a>
            <a href="#" className="p-2 border border-gray-600 rounded-full hover:border-white transition">
              <i className="fa-brands fa-linkedin-in text-white text-lg"></i>
            </a>
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold text-sm mb-4">mettā muse ACCEPTS</h4>
          <div className="flex flex-wrap gap-2">
            <img src="https://pngimg.com/d/google_pay_PNG5.png" alt="GPay" className="h-6 bg-white rounded px-1" />
            <img src="https://pngimg.com/d/mastercard_PNG16.png" alt="Mastercard" className="h-6 bg-white rounded px-1" />
            <img src="https://pngimg.com/d/visa_PNG8.png" alt="Visa" className="h-6 bg-white rounded px-1" />
            <img src="https://pngimg.com/d/american_express_PNG14.png" alt="Amex" className="h-6 bg-white rounded px-1" />
            <img src="https://pngimg.com/d/apple_pay_PNG9.png" alt="Apple Pay" className="h-6 bg-white rounded px-1" />
            <img src="https://pngimg.com/d/paypal_PNG14.png" alt="PayPal" className="h-6 bg-white rounded px-1" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
}