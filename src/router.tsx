import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Route = 'home' | 'metodo' | 'entrenamientos' | 'centro' | 'equipo' | 'empieza' | 'blog' | 'esenciales' | 'contacto' | 'aviso-legal' | 'cookies' | 'privacidad' | 'admin';

const VALID_ROUTES: Route[] = ['home', 'metodo', 'entrenamientos', 'centro', 'equipo', 'empieza', 'blog', 'esenciales', 'contacto', 'aviso-legal', 'cookies', 'privacidad', 'admin'];

interface RouterContextType {
  currentRoute: Route;
  navigate: (route: Route) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function getRouteFromPath(path: string): Route {
  const clean = path.replace(/^\//, '').replace(/\/$/, '') || 'home';
  return VALID_ROUTES.includes(clean as Route) ? (clean as Route) : 'home';
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState<Route>(() =>
    getRouteFromPath(window.location.pathname)
  );

  const navigate = (route: Route) => {
    setCurrentRoute(route);
    const path = route === 'home' ? '/' : `/${route}`;
    window.history.pushState({ route }, '', path);
    window.scrollTo(0, 0);
  };

  // Escuchar el botón Atrás/Adelante del navegador
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      const route = e.state?.route ?? getRouteFromPath(window.location.pathname);
      setCurrentRoute(route);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (context === undefined) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

