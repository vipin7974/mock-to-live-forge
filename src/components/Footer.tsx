const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-16">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Left - Brand and Subscribe */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold text-[#54C7BF] mb-4">
              Be <span className="text-white">Ballsy</span>
            </div>
            <p className="font-semibold mb-3 text-white">
              Get Weekly Men's Wellness Tips
            </p>
            <div className="flex items-center bg-[#1C1C1C] p-1.5 rounded-md max-w-xs">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent text-white text-sm px-3 py-2 outline-none w-full"
              />
              <button className="bg-[#54C7BF] text-black font-semibold px-4 py-2 rounded-md">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-white/60 mt-2 max-w-xs">
              By subscribing, you agree to our privacy policy and consent to receive updates.
            </p>
          </div>

          {/* Column: Solutions */}
          <div>
            <h4 className="font-bold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Emotional Wellness</li>
              <li>Physical Health</li>
              <li>Intimate Wellness</li>
              <li>Dad's Wellness</li>
              <li>Corporate Programs</li>
            </ul>
          </div>

          {/* Column: Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Blog</li>
              <li>Wellness Guides</li>
              <li>Wellness Quiz</li>
              <li>Events</li>
              <li>Community</li>
            </ul>
          </div>

          {/* Column: Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column: As Featured In */}
          <div>
            <h4 className="font-bold mb-4">As Featured In</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Men's Health</li>
              <li>GQ</li>
              <li>Healthline</li>
              <li>WebMD</li>
              <li>Psychology Today</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/60 gap-4">
          <p>© 2025 Be Ballsy. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Accessibility</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
