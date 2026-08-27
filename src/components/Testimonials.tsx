import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Desde que entreno en Lumen, mis dolores de espalda han desaparecido por completo. El enfoque en la técnica es excepcional.",
    name: "María Fernández",
    role: "Pilates Reformer"
  },
  {
    id: 2,
    quote: "Nunca pensé que el entrenamiento de fuerza pudiera adaptarse tan bien a mis 55 años. Me siento más ágil y fuerte que nunca.",
    name: "Carlos Ruiz",
    role: "Fuerza & Movilidad"
  },
  {
    id: 3,
    quote: "El ambiente es increíble, y la atención de los entrenadores te hace sentir seguro. No es un gimnasio tradicional, es un centro de salud.",
    name: "Elena Gómez",
    role: "Entrenamiento Personal"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-4 block">TESTIMONIOS</span>
          <h2 className="font-headline-md text-headline-md text-on-background">Historias de nuestros alumnos</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm border border-outline-variant/30 flex flex-col relative group hover:border-primary-container transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary/20 mb-6 group-hover:scale-110 transition-transform origin-left">format_quote</span>
              <div className="flex-1">
                <p className="font-headline-sm text-[22px] text-on-background leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30">
                <p className="font-body-lg text-body-lg text-on-background font-semibold">{t.name}</p>
                <p className="font-label-caps text-label-caps text-on-surface-variant mt-2">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
