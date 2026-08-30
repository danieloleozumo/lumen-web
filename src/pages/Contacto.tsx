import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';

export function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    interes: 'pilates-reformer',
    mensaje: '',
    privacidad: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const asunto = `Contacto Web Lumen - Interés: ${formData.interes}`;
    const cuerpo = `Datos del Formulario de Contacto:\n\n` +
      `- Nombre: ${formData.nombre}\n` +
      `- Teléfono: ${formData.telefono}\n` +
      `- Correo de cliente: ${formData.email}\n` +
      `- Interés indicado: ${formData.interes}\n\n` +
      `Mensaje:\n${formData.mensaje}`;

    const mailtoUrl = `mailto:hola@lumenmovimiento.es?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <Reveal className="max-w-container-max mx-auto text-center">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-4 block">CONTACTO</span>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background max-w-4xl mx-auto leading-tight mb-6">
            Ponte en contacto con nosotros
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            ¿Tienes alguna pregunta sobre nuestros programas, horarios o tarifas? Escríbenos y nuestro equipo te responderá lo antes posible.
          </p>
        </Reveal>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-background">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 shadow-sm">
              <Reveal>
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-8">Envíanos un mensaje</h3>
                
                {submitted ? (
                  <div className="bg-primary/10 border border-primary/20 text-on-background p-8 rounded-2xl text-center">
                    <span className="material-symbols-outlined text-primary text-5xl mb-4">check_circle</span>
                    <h4 className="font-headline-sm text-lg mb-2">¡Mensaje enviado con éxito!</h4>
                    <p className="font-body-md text-on-surface-variant leading-relaxed">
                      Muchas gracias por ponerte en contacto. Nos comunicaremos contigo a la mayor brevedad posible.
                    </p>
                    <button 
                      onClick={() => { setSubmitted(false); setFormData({ nombre: '', email: '', telefono: '', interes: 'pilates-reformer', mensaje: '', privacidad: false }); }}
                      className="mt-6 font-label-caps text-label-caps bg-primary text-on-primary px-6 py-3 rounded-full hover:bg-surface-tint transition-all text-sm cursor-pointer"
                    >
                      ENVIAR OTRO MENSAJE
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label htmlFor="nombre" className="font-label-caps text-xs text-on-surface-variant mb-2 font-semibold">Nombre Completo *</label>
                        <input 
                          type="text" 
                          id="nombre" 
                          required
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-3 text-on-background focus:outline-none focus:border-primary font-body-md text-sm"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="telefono" className="font-label-caps text-xs text-on-surface-variant mb-2 font-semibold">Teléfono *</label>
                        <input 
                          type="tel" 
                          id="telefono" 
                          required
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-3 text-on-background focus:outline-none focus:border-primary font-body-md text-sm"
                          placeholder="Tu número de teléfono"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="email" className="font-label-caps text-xs text-on-surface-variant mb-2 font-semibold">Correo Electrónico *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-3 text-on-background focus:outline-none focus:border-primary font-body-md text-sm"
                        placeholder="ejemplo@correo.com"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="interes" className="font-label-caps text-xs text-on-surface-variant mb-2 font-semibold">¿En qué estás interesada?</label>
                      <select 
                        id="interes"
                        value={formData.interes}
                        onChange={(e) => setFormData({ ...formData, interes: e.target.value })}
                        className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-3.5 text-on-background focus:outline-none focus:border-primary font-body-md text-sm cursor-pointer"
                      >
                        <option value="pilates-reformer">Pilates Reformer</option>
                        <option value="pilates-suelo-yoga">Pilates Suelo y Yoga</option>
                        <option value="entrenamiento-funcional">Entrenamiento Funcional y Fuerza</option>
                        <option value="fisioterapia">Fisioterapia y Suelo Pélvico</option>
                        <option value="nutricion">Dietética y Nutrición</option>
                        <option value="otro">Otras consultas</option>
                      </select>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="mensaje" className="font-label-caps text-xs text-on-surface-variant mb-2 font-semibold">Mensaje *</label>
                      <textarea 
                        id="mensaje" 
                        required
                        rows={5}
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-3 text-on-background focus:outline-none focus:border-primary font-body-md text-sm resize-none"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        id="privacidad" 
                        required
                        checked={formData.privacidad}
                        onChange={(e) => setFormData({ ...formData, privacidad: e.target.checked })}
                        className="mt-1 w-4 h-4 text-primary bg-surface border-outline-variant/60 rounded focus:ring-primary cursor-pointer"
                      />
                      <label htmlFor="privacidad" className="font-body-md text-sm text-on-surface-variant select-none cursor-pointer">
                        Acepto la política de privacidad y el tratamiento de mis datos personales para responder a esta solicitud.
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full font-label-caps text-label-caps bg-primary text-on-primary py-4.5 rounded-full shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer text-center"
                    >
                      ENVIAR SOLICITUD
                    </button>
                  </form>
                )}
              </Reveal>
            </div>

            {/* Info & Map Column */}
            <div className="lg:col-span-5 space-y-12">
              <Reveal>
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-8">Información de contacto</h3>
                
                <div className="space-y-6">
                  {/* Dirección */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary shadow-sm border border-outline-variant/20">
                      <span className="material-symbols-outlined text-xl">location_on</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-on-background text-base mb-1">Ubicación</h4>
                      <p className="font-body-md text-on-surface-variant leading-relaxed">
                        Centro de Jaén<br/>
                        23001 Jaén, España
                      </p>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary shadow-sm border border-outline-variant/20">
                      <span className="material-symbols-outlined text-xl">call</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-on-background text-base mb-1">Teléfono</h4>
                      <a href="tel:+34600000000" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">
                        +34 600 000 000
                      </a>
                    </div>
                  </div>

                  {/* Correo */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary shadow-sm border border-outline-variant/20">
                      <span className="material-symbols-outlined text-xl">mail</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-on-background text-base mb-1">Email</h4>
                      <a href="mailto:hola@lumenmovimiento.es" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">
                        hola@lumenmovimiento.es
                      </a>
                    </div>
                  </div>

                  {/* Redes Sociales */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary shadow-sm border border-outline-variant/20">
                      <span className="material-symbols-outlined text-xl">share</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-on-background text-base mb-2">Síguenos</h4>
                      <div className="flex gap-3">
                        <a 
                          href="https://www.instagram.com/lumenmovimiento/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-surface-container-low border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                          aria-label="Instagram"
                        >
                          <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </a>
                        <a 
                          href="https://www.facebook.com/lumenmovimiento/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-surface-container-low border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                          aria-label="Facebook"
                        >
                          <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal className="h-[300px] md:h-[350px] w-full rounded-2xl overflow-hidden shadow-sm border border-outline-variant/50 relative bg-surface-container-low group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100780.20815418872!2d-3.8647039542031737!3d37.777085750013996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6dd713cb5303c7%3A0x89c79207a9775fc!2sJa%C3%A9n!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses" 
                  className="absolute inset-0 w-full h-full grayscale-[0.8] contrast-125 opacity-80 group-hover:grayscale-[0.3] group-hover:opacity-100 transition-all duration-700"
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de ubicación de Lumen en Jaén"
                ></iframe>
                <div className="absolute inset-0 bg-primary/10 pointer-events-none mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700"></div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
