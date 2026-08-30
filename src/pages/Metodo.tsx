import { useRouter } from '../router';
import { Reveal } from '../components/Reveal';

export function Metodo() {
  const { navigate } = useRouter();
  
  return (
    <main className="pt-24 pb-32 md:pb-0 bg-background">
      {/* Hero Section */}
      <section className="relative flex items-center pt-16 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-gutter w-full relative z-10 items-center">
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 pt-8 lg:pt-0">
            <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] uppercase mb-4 block">NUESTRO ENFOQUE</span>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background mb-6">
              Un método enfocado en tu evolución.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              En Lumen integramos la fisioterapia especializada y el entrenamiento científico para ofrecerte un acompañamiento verdaderamente personalizado, seguro y medible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#proceso" className="inline-flex justify-center items-center font-label-caps text-label-caps bg-primary text-on-primary px-8 py-4 rounded-full hover:bg-surface-tint transition-colors shadow-sm">
                CONOCER EL PROCESO
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden order-1 lg:order-2 border border-outline-variant/30">
            <img className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop" alt="Metodología Lumen" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </div>
        </Reveal>
      </section>

      {/* El Método Lumen */}
      <section id="proceso" className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant/30">
        <Reveal className="max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-4 block">NUESTRA METODOLOGÍA</span>
            <h2 className="font-headline-md text-headline-md text-on-background mb-6">
              El Método Lumen
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              En Lumen nos alejamos de las rutinas genéricas de gimnasio y de los tratamientos aislados. Hemos creado un ecosistema integrado donde la fisioterapia especializada y el entrenamiento científico se unen bajo una misma dirección.
            </p>
          </div>

          {/* El Recorrido Diferencial (4 Pasos) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 text-left">
            {/* Paso 1: Conocer */}
            <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/30 flex flex-col justify-between hover:border-primary-container transition-colors shadow-sm min-h-[320px]">
              <div>
                <span className="font-headline-lg text-primary/30 block mb-4 text-5xl font-extralight font-primary">01</span>
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-3">Conocer</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Todo comienza con una <strong>Valoración Inicial Integral</strong> de 45 a 60 minutos. Analizamos tu historial de salud, hábitos, suelo pélvico, movilidad y fuerza.
                </p>
              </div>
              <div className="mt-6 text-[10px] text-primary font-label-caps tracking-wider font-semibold">Diagnosticar antes de entrenar</div>
            </div>

            {/* Paso 2: Orientar */}
            <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/30 flex flex-col justify-between hover:border-primary-container transition-colors shadow-sm min-h-[320px]">
              <div>
                <span className="font-headline-lg text-primary/30 block mb-4 text-5xl font-extralight font-primary">02</span>
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-3">Orientar</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Te prescribimos un <strong>Programa Personalizado</strong> adaptado a tus necesidades específicas (Recover, Strength o Longevity) combinando ejercicio, clínica y tecnología.
                </p>
              </div>
              <div className="mt-6 text-[10px] text-primary font-label-caps tracking-wider font-semibold">Prescripción, no improvisación</div>
            </div>

            {/* Paso 3: Entrenar */}
            <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/30 flex flex-col justify-between hover:border-primary-container transition-colors shadow-sm min-h-[320px]">
              <div>
                <span className="font-headline-lg text-primary/30 block mb-4 text-5xl font-extralight font-primary">03</span>
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-3">Entrenar</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Entrenas en grupos de máximo 6 a 10 personas (<strong>Círculos Lumen</strong>), guiada siempre por graduados en CAFYD y fisioterapeutas en un entorno de calma y privacidad.
                </p>
              </div>
              <div className="mt-6 text-[10px] text-primary font-label-caps tracking-wider font-semibold">Supervisión constante</div>
            </div>

            {/* Paso 4: Progresar */}
            <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/30 flex flex-col justify-between hover:border-primary-container transition-colors shadow-sm min-h-[320px]">
              <div>
                <span className="font-headline-lg text-primary/30 block mb-4 text-5xl font-extralight font-primary">04</span>
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-3">Progresar</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Cada 8-12 semanas realizamos una <strong>Revisión de Resultados</strong>. Volvemos a medir tus indicadores funcionales para mostrarte tu evolución objetiva en datos.
                </p>
              </div>
              <div className="mt-6 text-[10px] text-primary font-label-caps tracking-wider font-semibold">Tu progreso en datos reales</div>
            </div>
          </div>

          {/* Bloque de Evolución Objetivable (Simulación Visual de Progreso) */}
          <div className="bg-background p-8 md:p-12 rounded-3xl border border-outline-variant/30 max-w-4xl mx-auto shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="text-left">
                <h4 className="font-headline-sm text-headline-sm text-on-background mb-4">Verás y sentirás tu progreso en datos reales</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  En los gimnasios tradicionales entrenas sin saber si estás mejorando. En Lumen, medimos tu evolución física y de bienestar. Este es un ejemplo del reporte sencillo que recibirás periódicamente:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="font-body-md text-body-md text-on-background">Evaluación de fuerza muscular y tono del core.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="font-body-md text-body-md text-on-background">Evolución de tu rango de movilidad y equilibrio.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="font-body-md text-body-md text-on-background">Reducción del nivel de molestia o dolor percibido.</span>
                  </div>
                </div>
              </div>
              
              {/* Tabla de Demostración */}
              <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/30">
                <span className="font-label-caps text-[10px] tracking-wider text-on-surface-variant/80 block mb-4 text-left">EJEMPLO DE EVOLUCIÓN LUMEN (TRIMESTRAL)</span>
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-outline-variant/30 text-on-surface-variant/75 font-medium">
                      <th className="py-2 text-left">Indicador</th>
                      <th className="py-2 text-center">Inicio</th>
                      <th className="py-2 text-right">Mes 3</th>
                    </tr>
                  </thead>
                  <tbody className="text-on-background font-light">
                    <tr className="border-b border-outline-variant/10">
                      <td className="py-3 text-left">Fuerza muscular</td>
                      <td className="py-3 text-center">100</td>
                      <td className="py-3 text-right text-primary font-semibold">123 (+23%)</td>
                    </tr>
                    <tr className="border-b border-outline-variant/10">
                      <td className="py-3 text-left">Rango de movilidad</td>
                      <td className="py-3 text-center">62°</td>
                      <td className="py-3 text-right text-primary font-semibold">78° (+16°)</td>
                    </tr>
                    <tr className="border-b border-outline-variant/10">
                      <td className="py-3 text-left">Equilibrio / Estabilidad</td>
                      <td className="py-3 text-center">68%</td>
                      <td className="py-3 text-right text-primary font-semibold">82% (+14%)</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-left">Nivel de dolor / Molestia</td>
                      <td className="py-3 text-center">6 / 10</td>
                      <td className="py-3 text-right text-primary font-semibold">2 / 10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-section-gap bg-primary text-on-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
        <Reveal className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-md text-headline-md mb-6">Empieza a cuidarte con criterio científico</h2>
          <p className="font-body-lg text-body-lg opacity-90 mb-10">
            Reserva hoy tu Valoración Inicial y descubre el programa ideal para alcanzar tus objetivos de salud y bienestar.
          </p>
          <button onClick={() => navigate('empieza')} className="font-label-caps text-label-caps bg-background text-primary px-8 py-4 rounded-full hover:bg-surface-container-lowest transition-colors shadow-lg hover:-translate-y-0.5 cursor-pointer">
            QUIERO EMPEZAR MI VALORACIÓN
          </button>
        </Reveal>
      </section>
    </main>
  );
}
