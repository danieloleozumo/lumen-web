import { useEffect, useState } from 'react';
import { useRouter } from '../router';
import { Logo } from './Logo';

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

  const navClass = `fixed top-0 w-full z-50 transition-all duration-300 border-b ${
    isScrolled || isMenuOpen
      ? 'bg-surface/95 shadow-sm border-outline-variant/30' 
      : 'bg-surface/90 border-outline-variant/30'
  } backdrop-blur-md`;

  return (
    <>
      <header className={navClass}>
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-24 max-w-container-max mx-auto">
          <button 
            onClick={() => handleNavClick('home')}
            className="focus:outline-none"
          >
            <Logo variant="horizontal" />
          </button>
          
          <nav className="hidden md:flex gap-8 items-center font-label-caps text-label-caps">
            <button 
              onClick={() => navigate('home')}
              className={`${currentRoute === 'home' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors duration-300`}
            >
              Inicio
            </button>
            <button 
              onClick={() => navigate('metodo')}
              className={`${currentRoute === 'metodo' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors duration-300`}
            >
              El Método
            </button>
            <button 
              onClick={() => navigate('entrenamientos')}
              className={`${currentRoute === 'entrenamientos' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors duration-300`}
            >
              Programas
            </button>
            <button 
              onClick={() => navigate('centro')}
              className={`${currentRoute === 'centro' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors duration-300`}
            >
              El Centro
            </button>
            <button 
              onClick={() => navigate('blog')}
              className={`${currentRoute === 'blog' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors duration-300`}
            >
              Blog
            </button>
            <button 
              onClick={() => navigate('equipo')}
              className={`${currentRoute === 'equipo' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors duration-300`}
            >
              Equipo
            </button>
            <button 
              onClick={() => navigate('contacto')}
              className={`${currentRoute === 'contacto' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors duration-300`}
            >
              Contacto
            </button>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => navigate('empieza')}
              className="font-label-caps text-label-caps bg-primary text-on-primary px-6 py-3 rounded-full border border-primary-container hover:bg-surface-tint transition-colors duration-300 shadow-sm"
            >
              CÍRCULO FUNDADOR
            </button>
          </div>
          
          <button 
            className="md:hidden text-primary p-2 z-50 relative active:scale-90 transition-transform duration-150"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-surface z-40 transition-transform duration-300 flex flex-col pt-28 px-margin-mobile pb-8 overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col font-label-caps text-label-caps text-on-surface text-base">
            {[
              { route: 'home', label: 'Inicio' },
              { route: 'metodo', label: 'El Método' },
              { route: 'entrenamientos', label: 'Programas' },
              { route: 'centro', label: 'El Centro' },
              { route: 'equipo', label: 'Equipo' },
              { route: 'blog', label: 'Blog' },
              { route: 'contacto', label: 'Contacto' },
            ].map((item, idx) => (
              <button 
                key={idx}
                onClick={() => handleNavClick(item.route as any)}
                className={`text-left py-4.5 border-b border-outline-variant/15 w-full flex justify-between items-center transition-colors active:bg-surface-container-low px-2 rounded-lg -mx-2 ${
                  currentRoute === item.route ? 'text-primary font-bold' : 'text-on-surface-variant font-medium'
                }`}
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-sm opacity-60">arrow_forward_ios</span>
              </button>
            ))}
          </nav>
          <div className="mt-10">
            <button 
              onClick={() => handleNavClick('empieza')}
              className="w-full font-label-caps text-label-caps bg-primary text-on-primary px-6 py-4 rounded-full shadow-md active:scale-[0.98] transition-transform duration-150 cursor-pointer"
            >
              UNIRSE AL CÍRCULO FUNDADOR
            </button>
          </div>
        </div>

      {/* Mobile Bottom Nav */}
      <nav className={`fixed bottom-0 left-0 w-full z-50 flex justify-center items-center px-margin-mobile pt-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] md:hidden bg-surface/95 backdrop-blur-lg rounded-t-[2rem] border-t border-outline-variant/20 shadow-sm transition-transform duration-300 ${isMenuOpen ? 'translate-y-full' : 'translate-y-0'}`}>
        <button 
          onClick={() => handleNavClick('empieza')}
          className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-full px-12 py-3.5 active:scale-[0.96] transition-transform duration-100 shadow-md w-full max-w-[280px] cursor-pointer"
        >
          <span className="material-symbols-outlined fill-icon mb-0.5">bolt</span>
          <span className="font-label-caps text-label-caps text-xs tracking-wider">CÍRCULO FUNDADOR</span>
        </button>
      </nav>
    </>
  );
}
