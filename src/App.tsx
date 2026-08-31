/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RouterProvider, useRouter } from './router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Metodo } from './pages/Metodo';
import { Entrenamientos } from './pages/Entrenamientos';
import { Centro } from './pages/Centro';
import { Equipo } from './pages/Equipo';
import { Empieza } from './pages/Empieza';
import { Blog } from './pages/Blog';
import { Contacto } from './pages/Contacto';
import { AvisoLegal } from './pages/AvisoLegal';
import { Cookies } from './pages/Cookies';
import { Privacidad } from './pages/Privacidad';
import { Admin } from './pages/Admin';
import { motion, AnimatePresence } from 'motion/react';

function AppContent() {
  const { currentRoute } = useRouter();

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      <Navigation />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {currentRoute === 'home' && <Home />}
            {currentRoute === 'metodo' && <Metodo />}
            {currentRoute === 'entrenamientos' && <Entrenamientos />}
            {currentRoute === 'centro' && <Centro />}
            {currentRoute === 'equipo' && <Equipo />}
            {currentRoute === 'empieza' && <Empieza />}
            {currentRoute === 'blog' && <Blog />}
            {currentRoute === 'contacto' && <Contacto />}
            {currentRoute === 'aviso-legal' && <AvisoLegal />}
            {currentRoute === 'cookies' && <Cookies />}
            {currentRoute === 'privacidad' && <Privacidad />}
            {currentRoute === 'admin' && <Admin />}
          </motion.div>
        </AnimatePresence>
      </main>
      
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
