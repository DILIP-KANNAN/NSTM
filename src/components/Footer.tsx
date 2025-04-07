
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">NSTM</h3>
            <p className="text-sm text-muted-foreground">
              Namakku Sooru Than Mukiyam - Serving crispy, delicious snacks that bring joy to every bite.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>Rajalakshmi Engineering College, Thandalam</p>
              <p>Email: nstmatrec@gmail.com</p>
              <p>Phone: +91 8754437547</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} NSTM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
