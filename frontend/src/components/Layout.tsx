import { Outlet, Link, useRouterState } from '@tanstack/react-router';
import { Wrench, Phone, Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useGetContactInfo } from '../hooks/useQueries';
import ThemeToggle from './ThemeToggle';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { data: contactInfo } = useGetContactInfo();

  const phoneNumber = contactInfo?.phoneNumber || '9980481645';
  const whatsappNumber = contactInfo?.whatsappNumber || '9980481645';

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/machines', label: 'Machines' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Wrench className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="hidden sm:inline-block">Sewing Machine Services</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle variant="segmented" />
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call Now</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle variant="icon" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-accent rounded-lg transition-colors border border-border/40"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background">
            <nav className="container py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(link.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-border/40 flex items-center justify-between px-1">
                <span className="text-sm font-medium text-muted-foreground">Theme</span>
                <ThemeToggle variant="segmented" />
              </div>
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors mt-2"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">Call Now</span>
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Floating Theme Switcher for Viewers */}
      <ThemeToggle variant="floating" />

      <footer className="border-t border-border/40 bg-muted/30 mt-auto">
        <div className="container py-8">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm">Contact Us</h3>
              <a
                href={`tel:${phoneNumber}`}
                className="text-lg font-bold text-primary hover:underline"
              >
                {phoneNumber}
              </a>
              <div className="flex gap-2 mt-2">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/91${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors text-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm">Quick Links</h3>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm">Services</h3>
              <p className="text-sm text-muted-foreground">
                Expert repairs, new & used machines, home delivery
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-border/40">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Reliable Sewing Machine Services. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Theme:</span>
                <ThemeToggle variant="segmented" />
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <span>Built with</span>
                <span>❤️</span>
                <span>by</span>
                <span className="font-medium text-foreground">D-Tech</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
