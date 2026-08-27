import React from 'react';

export function Location() {
  return (
    <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-4 block">DÓNDE ENCONTRARNOS</span>
            <h2 className="font-headline-md text-headline-md text-on-background mb-6">Tu nuevo espacio en el centro de Jaén</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              Lumen estará ubicado en el corazón de Jaén. Un refugio diseñado meticulosamente para ofrecerte paz, concentración y los mejores estándares de calidad en cada una de nuestras disciplinas.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm border border-outline-variant/30">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-background text-lg mb-1">Dirección</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Centro de Jaén<br/>23001 Jaén, España</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm border border-outline-variant/30">
                  <span className="material-symbols-outlined text-xl">directions_car</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-background text-lg mb-1">Cómo llegar</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Fácil acceso en transporte público y zonas de aparcamiento cercanas para tu comodidad.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-sm border border-outline-variant/50 relative bg-surface-container-low group">
            {/* Map Placeholder using iframe (No API Key Required for basic place embeds) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100780.20815418872!2d-3.8647039542031737!3d37.777085750013996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6dd713cb5303c7%3A0x89c79207a9775fc!2sJa%C3%A9n!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses" 
              className="absolute inset-0 w-full h-full grayscale-[0.8] contrast-125 opacity-80 group-hover:grayscale-[0.3] group-hover:opacity-100 transition-all duration-700"
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación de Lumen en Jaén"
            ></iframe>
            {/* Elegant overlay to match brand colors */}
            <div className="absolute inset-0 bg-primary/10 pointer-events-none mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
