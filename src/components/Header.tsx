import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-primary">Be Ballsy</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Our Story</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Contact Us</a>
          </nav>
        </div>
        <Button variant="default" className="bg-primary hover:bg-primary/90">
          Book a Free Consultation
        </Button>
      </div>
    </header>
  );
};

export default Header;