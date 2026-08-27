import { createContext, useContext, useState, ReactNode } from 'react';

type Route = 'home' | 'entrenamientos' | 'centro' | 'equipo' | 'empieza' | 'blog';

interface RouterContextType {
  currentRoute: Route;
  navigate: (route: Route) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');

  const navigate = (route: Route) => {
    setCurrentRoute(route);
    window.scrollTo(0, 0);
  };

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
