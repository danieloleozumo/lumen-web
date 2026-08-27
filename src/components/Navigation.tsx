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

  const handleNavClick = (route: string) => {
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
              onClick={() => navigate('entrenamientos')}
              className={`${currentRoute === 'entrenamientos' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors duration-300`}
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
              onClick={() => navigate('centro')}
              className={`${currentRoute === 'centro' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-medium hover:text-primary'} transition-colors duration-300`}
            >
              Equipo
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
            className="md:hidden text-primary p-2 z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 bg-surface z-40 transition-transform duration-300 flex flex-col pt-32 px-margin-mobile ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col gap-6 font-headline-md text-headline-md text-on-surface">
            <button 
              onClick={() => handleNavClick('home')}
              className={`text-left ${currentRoute === 'home' ? 'text-primary font-bold' : ''}`}
            >
              Inicio
            </button>
            <button 
              onClick={() => handleNavClick('entrenamientos')}
              className={`text-left ${currentRoute === 'entrenamientos' ? 'text-primary font-bold' : ''}`}
            >
              El Método & Programas
            </button>
            <button 
              onClick={() => handleNavClick('centro')}
              className={`text-left ${currentRoute === 'centro' ? 'text-primary font-bold' : ''}`}
            >
              El Centro & Equipo
            </button>
            <button 
              onClick={() => handleNavClick('blog')}
              className={`text-left ${currentRoute === 'blog' ? 'text-primary font-bold' : ''}`}
            >
              Blog
            </button>
          </nav>
          <div className="mt-12">
            <button 
              onClick={() => handleNavClick('empieza')}
              className="w-full font-label-caps text-label-caps bg-primary text-on-primary px-6 py-4 rounded-full shadow-md"
            >
              UNIRSE AL CÍRCULO FUNDADOR
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav className={`fixed bottom-0 left-0 w-full z-50 flex justify-center items-center px-margin-mobile py-4 md:hidden bg-surface/95 backdrop-blur-lg rounded-t-[2rem] border-t border-outline-variant/20 shadow-sm transition-transform duration-300 ${isMenuOpen ? 'translate-y-full' : 'translate-y-0'}`}>
        <button 
          onClick={() => handleNavClick('empieza')}
          className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-full px-12 py-3 scale-95 duration-150 shadow-md w-full max-w-[250px]"
        >
          <span className="material-symbols-outlined fill-icon mb-1">bolt</span>
          <span className="font-label-caps text-label-caps text-xs">CÍRCULO FUNDADOR</span>
        </button>
      </nav>
    </>
  );
}
