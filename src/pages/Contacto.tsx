import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { trackBookingClick } from '../utils/analytics';

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
    if (!formData.nombre || !formData.telefono || !formData.email || !formData.privacidad) {
      return;
    }
    
    trackBookingClick('contact_form', formData.interes);

    const asunto = `Contacto Web Lúmen - Interés: ${formData.interes}`;
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
    <main className="bg-background min-h-screen pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative pt-12 pb-12 md:pt-20 md:pb-16 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-b border-outline-variant/30">
        <Reveal className="max-w-container-max mx-auto text-center">
          <span className="font-label-caps text-xs text-secondary tracking-widest uppercase mb-3 block">CONTACTO Y VALORACIÓN</span>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold text-stone-900 max-w-4xl mx-auto leading-tight mb-4">
            Estamos aquí para escucharte
          </h1>
          <p className="font-body-lg text-stone-600 max-w-2xl mx-auto text-base md:text-lg">
            ¿Tienes alguna duda sobre nuestros programas, horarios o valoración inicial? Escríbenos y resolveremos todas tus inquietudes.
          </p>
        </Reveal>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-background">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-surface-container-low p-6 md:p-8 rounded-3xl border border-outline-variant/30 shadow-sm">
              <Reveal>
                <h2 className="font-serif text-xl md:text-2xl font-semibold text-stone-900 mb-6">
                  Envíanos un mensaje
                </h2>
                
                {submitted ? (
                  <div className="bg-primary/10 border border-primary/20 text-stone-900 p-6 md:p-8 rounded-2xl text-center">
                    <span className="material-symbols-outlined text-primary text-5xl mb-3">check_circle</span>
                    <h3 className="font-serif text-lg font-semibold mb-2">¡Solicitud recibida!</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Muchas gracias por contactar con Lúmen. Nos comunicaremos contigo por teléfono o correo lo antes posible.
                    </p>
                    <button 
                      onClick={() => { setSubmitted(false); setFormData({ nombre: '', email: '', telefono: '', interes: 'pilates-reformer', mensaje: '', privacidad: false }); }}
                      className="mt-6 font-label-caps text-xs bg-primary text-on-primary px-6 py-3 rounded-full hover:bg-surface-tint transition-all cursor-pointer font-semibold"
                    >
                      ENVIAR OTRO MENSAJE
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col">
                        <label htmlFor="nombre" className="font-label-caps text-xs text-stone-700 mb-2 font-semibold">Nombre Completo *</label>
                        <input 
                          type="text" 
                          id="nombre" 
                          name="nombre"
                          required
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-3.5 text-stone-900 focus:outline-none focus:border-primary text-base md:text-sm"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="telefono" className="font-label-caps text-xs text-stone-700 mb-2 font-semibold">Teléfono *</label>
                        <input 
                          type="tel" 
                          id="telefono" 
                          name="telefono"
                          inputMode="tel"
                          required
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-3.5 text-stone-900 focus:outline-none focus:border-primary text-base md:text-sm"
                          placeholder="Ej: 600 000 000"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="email" className="font-label-caps text-xs text-stone-700 mb-2 font-semibold">Correo Electrónico *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        inputMode="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-3.5 text-stone-900 focus:outline-none focus:border-primary text-base md:text-sm"
                        placeholder="tu@correo.com"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="interes" className="font-label-caps text-xs text-stone-700 mb-2 font-semibold">Interés principal</label>
                      <select 
                        id="interes"
                        name="interes"
                        value={formData.interes}
                        onChange={(e) => setFormData({ ...formData, interes: e.target.value })}
                        className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-3.5 text-stone-900 focus:outline-none focus:border-primary text-base md:text-sm cursor-pointer"
                      >
                        <option value="pilates-reformer">Pilates Reformer</option>
                        <option value="entrenamiento-personal">Entrenamiento Personal 1 a 1</option>
                        <option value="entrenamiento-funcional">Entrenamiento Funcional</option>
                        <option value="suelo-pelvico">Fisioterapia y Suelo Pélvico</option>
                        <option value="nutricion">Nutrición y Salud</option>
                        <option value="otro">Consulta general</option>
                      </select>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="mensaje" className="font-label-caps text-xs text-stone-700 mb-2 font-semibold">Mensaje o consulta (Opcional)</label>
                      <textarea 
                        id="mensaje" 
                        name="mensaje"
                        rows={4}
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-3 text-stone-900 focus:outline-none focus:border-primary text-base md:text-sm resize-none"
                        placeholder="Cuéntanos tus dudas..."
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-3 pt-1">
                      <input 
                        type="checkbox" 
                        id="privacidad" 
                        name="privacidad"
                        required
                        checked={formData.privacidad}
                        onChange={(e) => setFormData({ ...formData, privacidad: e.target.checked })}
                        className="mt-1 w-4 h-4 text-primary bg-surface border-outline-variant/60 rounded focus:ring-primary cursor-pointer"
                      />
                      <label htmlFor="privacidad" className="text-xs text-stone-600 select-none cursor-pointer">
                        Acepto la política de privacidad y el tratamiento de mis datos personales.
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full font-label-caps text-xs bg-primary text-on-primary py-4 rounded-full shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer text-center font-semibold tracking-wider"
                    >
                      SOLICITAR VALORACIÓN EN JAÉN
                    </button>
                  </form>
                )}
              </Reveal>
            </div>

            {/* Info & Map Column */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal className="space-y-6">
                <h2 className="font-serif text-xl font-semibold text-stone-900 mb-4">Información del Centro</h2>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-stone-900 text-sm">Ubicación</h3>
                    <p className="text-stone-600 text-sm">Centro de Jaén, 23001 Jaén, España</p>
                    <a 
                      href="https://maps.google.com/?q=Jaen" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline mt-1"
                    >
                      <Navigation className="w-3 h-3" />
                      CÓMO LLEGAR EN MAPS →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-stone-900 text-sm">Teléfono</h3>
                    <a href="tel:+34600000000" className="text-stone-600 text-sm hover:text-primary transition-colors">
                      +34 600 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-stone-900 text-sm">Email</h3>
                    <a href="mailto:hola@lumenmovimiento.es" className="text-stone-600 text-sm hover:text-primary transition-colors">
                      hola@lumenmovimiento.es
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal className="h-[260px] w-full rounded-2xl overflow-hidden shadow-sm border border-outline-variant/40 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100780.20815418872!2d-3.8647039542031737!3d37.777085750013996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6dd713cb5303c7%3A0x89c79207a9775fc!2sJa%C3%A9n!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses" 
                  className="w-full h-full border-0 grayscale-[0.5]"
                  loading="lazy" 
                  title="Ubicación Lúmen Jaén"
                ></iframe>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
