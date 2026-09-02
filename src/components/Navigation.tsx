import { useEffect, useState } from 'react';
import { useRouter } from '../router';
import { Logo } from './Logo';
import { trackBookingClick } from '../utils/analytics';
import { Calendar, Menu, X, ChevronRight } from 'lucide-react';

export function Navigation() {
  const { currentRoute, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (route: any) => {
    setIsMenuOpen(false);
    navigate(route);
  };

  const handleBookingClick = (locationStr: string) => {
    trackBookingClick(locationStr);
    handleNavClick('empieza');
  };

  const navClass = `fixed top-0 w-full z-50 transition-all duration-300 border-b ${
    isScrolled || isMenuOpen
      ? 'bg-surface/95 shadow-sm border-outline-variant/30' 
      : 'bg-surface/90 border-outline-variant/30'
  } backdrop-blur-md`;

  return (
    <>
      <header className={navClass}>
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 md:h-24 max-w-container-max mx-auto">
          <button 
            onClick={() => handleNavClick('home')}
            className="focus:outline-none cursor-pointer"
            aria-label="Lúmen Inicio"
          >
            <Logo variant="horizontal" />
          </button>
          
          <nav className="hidden md:flex gap-8 items-center font-label-caps text-label-caps" aria-label="Navegación principal">
            <button 
              onClick={() => navigate('home')}
              className={`${currentRoute === 'home' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors duration-300 cursor-pointer`}
            >
              Inicio
            </button>
            <button 
              onClick={() => navigate('metodo')}
              className={`${currentRoute === 'metodo' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors duration-300 cursor-pointer`}
            >
              El Método
            </button>
            <button 
              onClick={() => navigate('entrenamientos')}
              className={`${currentRoute === 'entrenamientos' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors duration-300 cursor-pointer`}
            >
              Programas
            </button>
            <button 
              onClick={() => navigate('centro')}
              className={`${currentRoute === 'centro' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors duration-300 cursor-pointer`}
            >
              El Centro
            </button>
            <button 
              onClick={() => navigate('blog')}
              className={`${currentRoute === 'blog' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors duration-300 cursor-pointer`}
            >
              Blog
            </button>
            <button 
              onClick={() => navigate('esenciales')}
              className={`${currentRoute === 'esenciales' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors duration-300 cursor-pointer`}
            >
              Esenciales
            </button>
            <button 
              onClick={() => navigate('equipo')}
              className={`${currentRoute === 'equipo' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors duration-300 cursor-pointer`}
            >
              Equipo
            </button>
            <button 
              onClick={() => navigate('contacto')}
              className={`${currentRoute === 'contacto' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors duration-300 cursor-pointer`}
            >
              Contacto
            </button>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => handleBookingClick('header_desktop')}
              className="font-label-caps text-label-caps bg-primary text-on-primary px-6 py-3 rounded-full border border-primary-container hover:bg-surface-tint transition-colors duration-300 shadow-sm cursor-pointer font-semibold"
            >
              RESERVAR VALORACIÓN
            </button>
          </div>
          
          <button 
            className="md:hidden text-primary p-2 z-50 relative active:scale-95 transition-transform cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* MENÚ MÓVIL FULL SCREEN (Pista 11) */}
      <div 
        className={`md:hidden fixed inset-0 bg-surface z-40 transition-all duration-300 flex flex-col justify-between pt-24 px-6 pb-12 overflow-y-auto ${
          isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <nav className="flex flex-col space-y-2 pt-4">
          {[
            { route: 'home', label: 'Inicio' },
            { route: 'metodo', label: 'El Método Lúmen' },
            { route: 'entrenamientos', label: 'Especialidades' },
            { route: 'centro', label: 'El Centro' },
            { route: 'esenciales', label: 'Esenciales Lumen' },
            { route: 'equipo', label: 'Equipo' },
            { route: 'blog', label: 'Blog & Actualidad' },
            { route: 'contacto', label: 'Contacto' },
          ].map((item, idx) => (
            <button 
              key={idx}
              onClick={() => handleNavClick(item.route as any)}
              className={`text-left py-3.5 border-b border-outline-variant/15 w-full flex justify-between items-center text-lg font-serif transition-colors ${
                currentRoute === item.route ? 'text-primary font-semibold' : 'text-stone-700'
              }`}
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>
          ))}
        </nav>

        <div className="pt-8 space-y-4">
          <button 
            onClick={() => handleBookingClick('mobile_fullscreen_menu')}
            className="w-full font-label-caps text-label-caps bg-primary text-on-primary py-4 rounded-full shadow-md text-sm font-semibold cursor-pointer active:scale-[0.98] transition-transform"
          >
            RESERVAR VALORACIÓN
          </button>

          <p className="text-center text-xs text-stone-500 pt-2">
            Jaén · Bienestar, Pilates & Salud
          </p>
        </div>
      </div>

      {/* BARRA MÓVIL STICKY INFERIOR (Pistas 9, 12, 40) */}
      <nav className={`fixed bottom-0 left-0 w-full z-50 flex justify-center items-center px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] md:hidden bg-surface/95 backdrop-blur-lg border-t border-outline-variant/20 shadow-lg transition-transform duration-300 ${isMenuOpen ? 'translate-y-full' : 'translate-y-0'}`}>
        <button 
          onClick={() => handleBookingClick('mobile_bottom_sticky')}
          className="flex items-center justify-center gap-2 bg-amber-800 text-white rounded-full px-8 py-3.5 active:scale-[0.96] transition-transform shadow-md w-full max-w-[320px] cursor-pointer font-medium"
        >
          <Calendar className="w-4 h-4 text-amber-200" />
          <span className="font-label-caps text-label-caps text-xs tracking-wider font-semibold">RESERVAR MI VALORACIÓN</span>
        </button>
      </nav>
    </>
  );
}
