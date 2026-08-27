/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RouterProvider, useRouter } from './router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Entrenamientos } from './pages/Entrenamientos';
import { Centro } from './pages/Centro';
import { Equipo } from './pages/Equipo';
import { Empieza } from './pages/Empieza';
import { Blog } from './pages/Blog';

function AppContent() {
  const { currentRoute } = useRouter();

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      <Navigation />
      
      {currentRoute === 'home' && <Home />}
      {currentRoute === 'entrenamientos' && <Entrenamientos />}
      {currentRoute === 'centro' && <Centro />}
      {currentRoute === 'equipo' && <Equipo />}
      {currentRoute === 'empieza' && <Empieza />}
      {currentRoute === 'blog' && <Blog />}
      
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
