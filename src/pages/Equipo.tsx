import { useRouter } from '../router';
import { Reveal } from '../components/Reveal';

export function Equipo() {
  const { navigate } = useRouter();

  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <Reveal className="max-w-container-max mx-auto text-center">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-4 block">LOS PROFESIONALES</span>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background max-w-4xl mx-auto leading-tight mb-6">
            El corazón de Lumen
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Un equipo multidisciplinar de fisioterapeutas, entrenadores y especialistas en salud pélvica unidos por una misma visión: cuidar de ti con la máxima excelencia.
          </p>
        </Reveal>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-background">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Team Member 1 */}
            <Reveal className="group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-low mb-6 border border-outline-variant/30">
                <div className="w-full h-full bg-surface-container flex flex-col items-center justify-center text-on-surface-variant/50 group-hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-5xl mb-4">person</span>
                  <p className="font-label-caps tracking-widest text-sm">FOTO PENDIENTE</p>
                </div>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-1">Nombre del Profesional</h3>
              <p className="font-body-md text-primary font-medium mb-3">Cargo / Especialidad</p>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Breve descripción de su trayectoria, filosofía de trabajo y especialidad dentro del centro Lumen.
              </p>
            </Reveal>

            {/* Team Member 2 */}
            <Reveal className="group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-low mb-6 border border-outline-variant/30">
                <div className="w-full h-full bg-surface-container flex flex-col items-center justify-center text-on-surface-variant/50 group-hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-5xl mb-4">person</span>
                  <p className="font-label-caps tracking-widest text-sm">FOTO PENDIENTE</p>
                </div>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-1">Nombre del Profesional</h3>
              <p className="font-body-md text-primary font-medium mb-3">Cargo / Especialidad</p>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Breve descripción de su trayectoria, filosofía de trabajo y especialidad dentro del centro Lumen.
              </p>
            </Reveal>

            {/* Team Member 3 */}
            <Reveal className="group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-low mb-6 border border-outline-variant/30">
                <div className="w-full h-full bg-surface-container flex flex-col items-center justify-center text-on-surface-variant/50 group-hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-5xl mb-4">person</span>
                  <p className="font-label-caps tracking-widest text-sm">FOTO PENDIENTE</p>
                </div>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-1">Nombre del Profesional</h3>
              <p className="font-body-md text-primary font-medium mb-3">Cargo / Especialidad</p>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Breve descripción de su trayectoria, filosofía de trabajo y especialidad dentro del centro Lumen.
              </p>
            </Reveal>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-section-gap bg-primary text-on-primary text-center px-margin-mobile md:px-margin-desktop">
        <Reveal className="max-w-2xl mx-auto">
          <h2 className="font-headline-md text-headline-md mb-6">Únete a nuestra comunidad</h2>
          <p className="font-body-lg text-body-lg opacity-90 mb-10">
            Estamos seleccionando los primeros perfiles para el Círculo Fundador. 
            Déjate guiar por los mejores profesionales.
          </p>
          <button onClick={() => navigate('empieza')} className="font-label-caps text-label-caps bg-background text-primary px-8 py-4 rounded-full hover:bg-surface-container-lowest transition-colors shadow-lg hover:-translate-y-0.5 cursor-pointer">
            QUIERO EMPEZAR
          </button>
        </Reveal>
      </section>
    </main>
  );
}
