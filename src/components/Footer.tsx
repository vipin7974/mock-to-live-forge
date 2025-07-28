const Footer = () => {
  return (
    <footer className="bg-hero py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold text-primary mb-4">Be Ballsy</div>
            <p className="text-hero-foreground/80 text-sm mb-4">
              India's Most Trusted Men's Wellness Platform
            </p>
            <p className="text-hero-foreground/60 text-xs">
              This site cannot prescribe emotional treatment or diagnose medical conditions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-hero-foreground mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-hero-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Mental Health</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Physical Fitness</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Intimate Wellness</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Stress Management</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Relationship Coaching</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-hero-foreground mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-hero-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-hero-foreground mb-4">An Initiative Of</h4>
            <ul className="space-y-2 text-sm text-hero-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-hero-foreground/20 pt-8 text-center">
          <p className="text-hero-foreground/60 text-sm">
            © 2024 Be Ballsy. All rights reserved. | Website designed and developed with ❤️ for Indian men.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;