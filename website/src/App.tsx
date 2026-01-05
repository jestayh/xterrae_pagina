import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Experience from './pages/Experience';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-xterrae-orange selection:text-white flex flex-col">
      
      {/* Navbar Global */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled || location.pathname !== '/' ? 'bg-white/95 shadow-sm py-2 border-gray-100' : 'bg-transparent py-6 border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo.png" 
                className={`transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'h-12' : 'h-16'} ${!scrolled && location.pathname === '/' ? 'brightness-0 invert' : ''}`} 
                alt="Xterrae Logo" 
              />
            </Link>
            
            <div className="hidden lg:flex items-center space-x-10">
              <Link to="/" className={`text-sm uppercase tracking-widest font-bold transition-colors ${scrolled || location.pathname !== '/' ? 'text-xterrae-text hover:text-xterrae-orange' : 'text-white hover:text-xterrae-orange'}`}>Inicio</Link>
              <Link to="/nosotros" className={`text-sm uppercase tracking-widest font-bold transition-colors ${scrolled || location.pathname !== '/' ? 'text-xterrae-text hover:text-xterrae-orange' : 'text-white hover:text-xterrae-orange'}`}>Nosotros</Link>
              <Link to="/servicios" className={`text-sm uppercase tracking-widest font-bold transition-colors ${scrolled || location.pathname !== '/' ? 'text-xterrae-text hover:text-xterrae-orange' : 'text-white hover:text-xterrae-orange'}`}>Servicios</Link>
              <Link to="/experiencia" className={`text-sm uppercase tracking-widest font-bold transition-colors ${scrolled || location.pathname !== '/' ? 'text-xterrae-text hover:text-xterrae-orange' : 'text-white hover:text-xterrae-orange'}`}>Experiencia</Link>
              <Link to="/blog" className={`text-sm uppercase tracking-widest font-bold transition-colors ${scrolled || location.pathname !== '/' ? 'text-xterrae-text hover:text-xterrae-orange' : 'text-white hover:text-xterrae-orange'}`}>Blog</Link>
              <Link to="/contacto" className={`text-sm uppercase tracking-widest font-bold transition-colors ${scrolled || location.pathname !== '/' ? 'text-xterrae-text hover:text-xterrae-orange' : 'text-white hover:text-xterrae-orange'}`}>Contacto</Link>
              
              <button className="bg-xterrae-orange text-white px-6 py-2 rounded-full hover:bg-xterrae-text transition-all font-bold shadow-lg text-xs tracking-wide">
                COTIZAR
              </button>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={scrolled || location.pathname !== '/' ? 'text-xterrae-text' : 'text-white'}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-100 p-4 space-y-4 shadow-lg absolute w-full top-full left-0">
            <Link to="/" className="block text-gray-700 font-bold py-2">Inicio</Link>
            <Link to="/nosotros" className="block text-gray-700 font-bold py-2">Nosotros</Link>
            <Link to="/servicios" className="block text-gray-700 font-bold py-2">Servicios</Link>
            <Link to="/experiencia" className="block text-gray-700 font-bold py-2">Experiencia</Link>
            <Link to="/blog" className="block text-gray-700 font-bold py-2">Blog</Link>
            <Link to="/contacto" className="block text-gray-700 font-bold py-2">Contacto</Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/experiencia" element={<Experience />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
          {/* Placeholder routes for future pages */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer Global */}
      <footer className="bg-xterrae-text text-white pt-20 pb-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <img src="/images/logo.png" className="h-12 mb-6 brightness-0 invert" alt="Xterrae" />
              <p className="text-gray-400 text-sm leading-relaxed">
                Consultoría geológica de excelencia. Transformamos datos complejos en soluciones sostenibles para la industria y el territorio.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif font-bold text-lg mb-6">Contacto</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-center gap-3"><Mail size={16} className="text-xterrae-orange"/> contacto@xterrae.cl</li>
                <li className="flex items-center gap-3"><Phone size={16} className="text-xterrae-orange"/> +56 9 1234 5678</li>
                <li className="flex items-center gap-3"><MapPin size={16} className="text-xterrae-orange"/> Santiago, Chile</li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-lg mb-6">Servicios</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/servicios" className="hover:text-xterrae-orange transition-colors">Geología de Base</Link></li>
                <li><Link to="/servicios" className="hover:text-xterrae-orange transition-colors">Riesgos Naturales</Link></li>
                <li><Link to="/servicios" className="hover:text-xterrae-orange transition-colors">Hidrogeología</Link></li>
                <li><Link to="/servicios" className="hover:text-xterrae-orange transition-colors">Planificación Territorial</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-lg mb-6">Síguenos</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-xterrae-orange transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-xterrae-orange transition-colors"><Instagram size={20} /></a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-xterrae-orange transition-colors"><Facebook size={20} /></a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-xs text-gray-500">
            <p>© 2025 Xterrae Geología SpA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
