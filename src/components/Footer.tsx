import { Logo } from './Logo';
import { useRouter } from '../router';

export function Footer() {
  const { navigate } = useRouter();
  return (
    <footer className="bg-surface-container-low w-full py-16 md:py-section-gap border-t border-outline-variant/50 pb-32 md:pb-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        
        {/* Brand & Social */}
        <div className="lg:col-span-4 mb-2 lg:mb-0">
          <div className="mb-6 -ml-2">
            <Logo variant="horizontal" />
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-8 tracking-wide font-medium">
            CUIDA DE TI. VIVE MEJOR.
          </p>
          <div className="flex gap-4">
            <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer bg-surface-container w-10 h-10 rounded-full flex items-center justify-center" href="https://www.instagram.com/lumenmovimiento/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer bg-surface-container w-10 h-10 rounded-full flex items-center justify-center" href="https://www.facebook.com/lumenmovimiento/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer bg-surface-container w-10 h-10 rounded-full flex items-center justify-center" href="#" aria-label="WhatsApp">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.975 0C5.36 0 0 5.36 0 11.975c0 2.122.551 4.137 1.517 5.92L.032 23.992l6.25-1.611A11.9 11.9 0 0011.975 24C18.59 24 24 18.64 24 11.975S18.59 0 11.975 0zM7.5 7.683c.277 0 .553.013.799.026.246.012.573-.092.899.704.34.815 1.144 2.793 1.246 3.002.102.209.171.455.034.729-.136.274-.205.442-.409.684-.205.242-.429.544-.614.734-.205.209-.42.434-.181.842.24.409 1.066 1.758 2.292 2.855 1.583 1.417 2.9 1.854 3.31 2.063.409.208.648.17.886-.07.24-.242 1.023-1.196 1.296-1.605.273-.409.546-.34.921-.205.375.137 2.387 1.127 2.796 1.332.409.205.682.307.785.478.102.171.102.99-.205 1.947-.307.957-1.808 1.884-2.524 1.918-.716.034-1.57-.171-4.707-1.386-3.137-1.215-5.187-4.417-5.342-4.622-.153-.205-1.277-1.696-1.277-3.234 0-1.537.785-2.296 1.058-2.569.273-.273.597-.341.799-.341z"/></svg>
            </a>
          </div>
        </div>

        {/* Entrenamientos Links */}
        <div className="lg:col-span-2">
          <h4 className="font-label-caps text-label-caps text-on-background mb-6">ENTRENAMIENTOS</h4>
          <ul className="space-y-4 font-body-md text-body-md">
            <li><a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">Pilates Reformer</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">Pilates Suelo</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">Fuerza</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">Movilidad</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">Suelo Pélvico</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">Embarazo</a></li>
          </ul>
        </div>

        {/* Centro Links */}
        <div className="lg:col-span-2">
          <h4 className="font-label-caps text-label-caps text-on-background mb-6">LUMEN</h4>
          <ul className="space-y-4 font-body-md text-body-md flex flex-col items-start">
            <li><button onClick={() => navigate('entrenamientos')} className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer text-left">El Método</button></li>
            <li><button onClick={() => navigate('centro')} className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer text-left">El Centro</button></li>
            <li><button onClick={() => navigate('equipo')} className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer text-left">Nuestro Equipo</button></li>
            <li><button onClick={() => navigate('contacto')} className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer text-left">Contacto</button></li>
            <li><button onClick={() => navigate('blog')} className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer text-left">Blog</button></li>
          </ul>
        </div>

        {/* Contacto & Horarios */}
        <div className="lg:col-span-4">
          <h4 className="font-label-caps text-label-caps text-on-background mb-6">CONTACTO Y HORARIOS</h4>
          <ul className="space-y-5 font-body-md text-body-md text-on-surface-variant">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">location_on</span>
              <span>
                <strong className="font-medium text-on-background block mb-1">Centro Lumen</strong>
                Calle de Ejemplo 123, Local 4<br />
                28001 Madrid, España
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">schedule</span>
              <span>
                <strong className="font-medium text-on-background block mb-1">Horario de apertura</strong>
                Lunes a Viernes: 07:00 - 22:00<br />
                Sábados: 09:00 - 14:00
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary shrink-0">mail</span>
              <a className="hover:text-primary transition-colors cursor-pointer" href="mailto:hola@lumenmovimiento.es">hola@lumenmovimiento.es</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary shrink-0">call</span>
              <a className="hover:text-primary transition-colors cursor-pointer" href="tel:+34600000000">+34 600 000 000</a>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-16 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-caps text-label-caps text-on-surface-variant opacity-80">
          © {new Date().getFullYear()} Lumen Bienestar y Movimiento. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 font-label-caps text-label-caps text-on-surface-variant flex-wrap justify-center">
          <button onClick={() => navigate('aviso-legal')} className="hover:text-primary transition-colors cursor-pointer">Aviso Legal</button>
          <button onClick={() => navigate('cookies')} className="hover:text-primary transition-colors cursor-pointer">Cookies</button>
          <button onClick={() => navigate('privacidad')} className="hover:text-primary transition-colors cursor-pointer">Privacidad</button>
        </div>
      </div>
    </footer>
  );
}
