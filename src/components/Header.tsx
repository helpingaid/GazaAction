import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  logo: string;
  navItems: {
    home: string;
    about: string;
    partners: string;
    resources: string;
    search: string;
  };
}

export const Header = ({ logo, navItems }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-800/95 backdrop-blur-sm text-white z-40 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl md:text-3xl font-bold hover:text-teal-400 transition-colors"
          >
            {logo}
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-teal-400 transition-colors font-medium"
            >
              {navItems.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-teal-400 transition-colors font-medium"
            >
              {navItems.about}
            </button>
            <button
              onClick={() => scrollToSection('partners')}
              className="hover:text-teal-400 transition-colors font-medium"
            >
              {navItems.partners}
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="hover:text-teal-400 transition-colors font-medium"
            >
              {navItems.resources}
            </button>
            <button
              onClick={() => scrollToSection('search')}
              className="hover:text-teal-400 transition-colors font-medium"
            >
              {navItems.search}
            </button>
          </nav>

          <button
            className="md:hidden p-2 hover:bg-slate-700 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left px-4 py-2 hover:bg-slate-700 rounded-lg transition-colors font-medium"
              >
                {navItems.home}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 hover:bg-slate-700 rounded-lg transition-colors font-medium"
              >
                {navItems.about}
              </button>
              <button
                onClick={() => scrollToSection('partners')}
                className="text-left px-4 py-2 hover:bg-slate-700 rounded-lg transition-colors font-medium"
              >
                {navItems.partners}
              </button>
              <button
                onClick={() => scrollToSection('resources')}
                className="text-left px-4 py-2 hover:bg-slate-700 rounded-lg transition-colors font-medium"
              >
                {navItems.resources}
              </button>
              <button
                onClick={() => scrollToSection('search')}
                className="text-left px-4 py-2 hover:bg-slate-700 rounded-lg transition-colors font-medium"
              >
                {navItems.search}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
