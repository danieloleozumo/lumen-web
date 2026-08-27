export function Empieza() {
  return (
    <main className="flex-grow pt-24 md:pt-32 pb-section-gap bg-background">
      {/* Hero Section */}
      <section className="relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12 md:py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] opacity-10 pointer-events-none"></div>
        <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-6 border border-outline-variant px-4 py-1.5 rounded-full bg-surface-container/50 backdrop-blur-sm relative z-10 inline-block">MUY PRONTO EN JAÉN</span>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background mb-6 relative z-10">
          Círculo Fundador Lumen
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8 relative z-10">
          Algo está cambiando en Jaén. Únete a nuestra lista privada y tendrás acceso anticipado a nuestro centro de bienestar y movimiento antes de la inauguración oficial.
        </p>
        <div className="inline-flex items-center justify-center gap-2 bg-surface-container-low border border-primary-container/30 px-6 py-3 rounded-full relative z-10 mb-12">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="font-label-caps text-label-caps text-on-surface-variant font-bold">SÓLO 100 PLAZAS DISPONIBLES</span>
        </div>
      </section>

      {/* Form & Benefits Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Form */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-8 md:p-12 shadow-sm order-2 lg:order-1">
            <h3 className="font-headline-md text-headline-md text-on-background mb-8 text-center lg:text-left">Únete a la lista de espera</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Tu nombre" 
                  className="w-full bg-background border border-outline-variant rounded-lg px-4 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body-md"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Teléfono (WhatsApp)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="Tu teléfono" 
                  className="w-full bg-background border border-outline-variant rounded-lg px-4 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="tu@email.com" 
                  className="w-full bg-background border border-outline-variant rounded-lg px-4 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body-md"
                />
              </div>
              <div className="pt-6">
                <button 
                  type="submit" 
                  className="w-full font-label-caps text-label-caps px-6 py-5 bg-primary text-on-primary rounded-lg hover:bg-surface-tint transition-colors shadow-sm cursor-pointer hover:-translate-y-0.5"
                >
                  QUIERO SER FUNDADORA
                </button>
              </div>
              <p className="font-body-md text-sm text-center text-on-surface-variant/70 mt-4">Tus datos están seguros. Cero spam, solo salud.</p>
            </form>
          </div>

          {/* Benefits */}
          <div className="order-1 lg:order-2 lg:pt-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-8">Beneficios exclusivos para Fundadoras</h2>
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl fill-icon">sell</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-background text-xl mb-2">Precio Fundador Garantizado</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Mantén las condiciones especiales de apertura durante 24 meses, sin subidas de tarifa.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl fill-icon">health_and_safety</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-background text-xl mb-2">Valoración Inicial Gratuita</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Entrevista personal, evaluación de fuerza y movilidad antes de empezar a entrenar.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl fill-icon">celebration</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-background text-xl mb-2">Experiencia VIP Inauguración</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Acceso prioritario a nuestros Open Days, elección anticipada de horarios y obsequio de bienvenida Lúmen.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
