import { useRouter } from '../router';
import { Reveal } from '../components/Reveal';

export function Entrenamientos() {
  const { navigate } = useRouter();
  
  return (
    <main className="pt-24 pb-32 md:pb-0 bg-background">
      {/* Hero Section */}
      <section className="relative flex items-center pt-16 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-gutter w-full relative z-10 items-center">
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 pt-8 lg:pt-0">
            <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] uppercase mb-4 block">MÁS ALLÁ DEL ENTRENAMIENTO</span>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background mb-6">
              Programas de salud diseñados para ti.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              En Lumen no vendemos simplemente "clases". Construimos programas cerrados de alto valor enfocados en resultados reales: menopausia, suelo pélvico, longevidad y recuperación integral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#programas" className="inline-flex justify-center items-center font-label-caps text-label-caps bg-primary text-on-primary px-8 py-4 rounded-full hover:bg-surface-tint transition-colors shadow-sm">
                EXPLORAR PROGRAMAS
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden order-1 lg:order-2 border border-outline-variant/30">
            <img className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop" alt="Lumen programas de salud" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </div>
        </Reveal>
      </section>

      {/* El Método Lumen */}
      <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant/30">
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

      {/* Flagship Programs */}
      <section id="programas" className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low relative">
        <Reveal className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-4 block">PROGRAMAS DE ALTO VALOR</span>
            <h2 className="font-headline-md text-headline-md text-on-background max-w-2xl mx-auto">
              Especialidades Clínicas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Menopause */}
            <div className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/40 hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col h-full shadow-sm">
              <div className="h-56 relative overflow-hidden">
                <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop" alt="Lúmen 45+" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="inline-block px-3 py-1 bg-surface-container text-on-surface-variant font-label-caps text-[10px] rounded-full w-fit mb-4">12 SEMANAS</span>
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-3">Lúmen 45+</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">
                  Programa integral para la perimenopausia y menopausia. Foco en fuerza, metabolismo, protección ósea y longevidad femenina.
                </p>
                <button onClick={() => navigate('empieza')} className="font-label-caps text-label-caps text-primary text-left hover:text-secondary transition-colors">
                  SOLICITAR VALORACIÓN →
                </button>
              </div>
            </div>
            
            {/* Pelvic Floor */}
            <div className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/40 hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col h-full shadow-sm">
              <div className="h-56 relative overflow-hidden">
                <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop" alt="Fisioterapia y Suelo Pélvico" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="inline-block px-3 py-1 bg-surface-container text-on-surface-variant font-label-caps text-[10px] rounded-full w-fit mb-4">8 SEMANAS</span>
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-3">Suelo Pélvico y Maternidad</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">
                  Fisioterapia especializada, ejercicio terapéutico e hipopresivos para embarazo, recuperación postparto y diástasis.
                </p>
                <button onClick={() => navigate('empieza')} className="font-label-caps text-label-caps text-primary text-left hover:text-secondary transition-colors">
                  SOLICITAR VALORACIÓN →
                </button>
              </div>
            </div>

            {/* Longevity */}
            <div className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/40 hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col h-full shadow-sm">
              <div className="h-56 relative overflow-hidden">
                <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1552674605-171ff7786ed8?q=80&w=800&auto=format&fit=crop" alt="Lúmen Longevity" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="inline-block px-3 py-1 bg-surface-container text-on-surface-variant font-label-caps text-[10px] rounded-full w-fit mb-4">12-24 SEMANAS</span>
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-3">Lúmen Longevity</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">
                  Para mujeres y hombres +55. Pruebas de movilidad, fuerza de agarre y equilibrio para garantizar tu autonomía a largo plazo.
                </p>
                <button onClick={() => navigate('empieza')} className="font-label-caps text-label-caps text-primary text-left hover:text-secondary transition-colors">
                  SOLICITAR VALORACIÓN →
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Core Method: Pilates & Strength */}
      <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-background relative overflow-hidden">
        <div className="max-w-container-max mx-auto">
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden border border-outline-variant/30">
              <img className="w-full h-full object-cover grayscale-[0.2]" src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1000&auto=format&fit=crop" alt="Pilates Reformer" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest block mb-4 border border-outline-variant px-3 py-1 rounded-full w-fit">NÚCLEO LUMEN</span>
              <h2 className="font-headline-sm text-headline-sm md:font-headline-md md:text-headline-md text-on-background mb-6">
                Pilates Reformer Avanzado
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Nuestras máquinas premium no son solo para clases genéricas. Ofrecemos una segmentación precisa para maximizar resultados, siempre en grupos reducidos o sesiones individuales.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">circle</span><span className="font-body-md text-on-surface-variant">Reformer Premium (Grupos 4-6)</span></li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">circle</span><span className="font-body-md text-on-surface-variant">Reformer Clínico y Rehabilitación</span></li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">circle</span><span className="font-body-md text-on-surface-variant">Reformer Maternidad (Embarazo/Postparto)</span></li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">circle</span><span className="font-body-md text-on-surface-variant">Sesiones Individuales</span></li>
              </ul>
              <div className="bg-surface-container-low border border-outline-variant/30 p-6 rounded-2xl flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1616781297055-32e6eeeb5724?q=80&w=200&auto=format&fit=crop" alt="Lumen Grip Socks" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
                </div>
                <div>
                  <h4 className="font-headline-sm text-base text-on-background mb-1">Kit Esencial Lúmen</h4>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                    Para garantizar la higiene y el agarre perfecto, el uso de calcetines antideslizantes técnicos y toalla es obligatorio en todas las sesiones de Reformer. Disponibles en nuestra boutique.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest block mb-4 border border-outline-variant px-3 py-1 rounded-full w-fit">NÚCLEO LUMEN</span>
              <h2 className="font-headline-sm text-headline-sm md:font-headline-md md:text-headline-md text-on-background mb-6">
                Fuerza y Composición Corporal
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                El músculo es el órgano de la longevidad. Sesiones diseñadas para ganar masa muscular de calidad, proteger tus articulaciones y acelerar tu metabolismo en un entorno libre de intimidación.
              </p>
              <button onClick={() => navigate('empieza')} className="font-label-caps text-label-caps bg-transparent border border-primary text-primary px-8 py-3 rounded-full hover:bg-surface-container-low transition-colors">
                DESCUBRIR HORARIOS
              </button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-outline-variant/30">
              <img className="w-full h-full object-cover grayscale-[0.3]" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" alt="Entrenamiento de fuerza" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cross-selling Ecosystem (Recovery, Nutrition, Personal Training) */}
      <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <Reveal className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-4 block">ECOSISTEMA INTEGRAL</span>
            <h2 className="font-headline-md text-headline-md text-on-background max-w-2xl mx-auto">
              Más allá del movimiento
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-background rounded-2xl border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">nutrition</span>
              <h3 className="font-headline-sm text-on-background mb-4">Nutrición y Evolución</h3>
              <p className="font-body-md text-on-surface-variant mb-6">Consultas nutricionales y nuestro <em>Lúmen Health Check</em> (evaluación de composición corporal cada 3-6 meses) para medir progreso real.</p>
            </div>
            <div className="p-8 bg-background rounded-2xl border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">spa</span>
              <h3 className="font-headline-sm text-on-background mb-4">Lúmen Recovery</h3>
              <p className="font-body-md text-on-surface-variant mb-6">Acelera tu recuperación y reduce el estrés con sesiones de presoterapia, terapia manual y estiramientos asistidos en nuestra zona relax.</p>
            </div>
            <div className="p-8 bg-background rounded-2xl border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">person_play</span>
              <h3 className="font-headline-sm text-on-background mb-4">Personal Premium</h3>
              <p className="font-body-md text-on-surface-variant mb-6">Entrenamiento 1-a-1 o en pareja (Lúmen Personal). Atención milimétrica para objetivos muy específicos o patologías complejas.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Premium Memberships Concept */}
      <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-primary text-on-primary">
        <Reveal className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline-md text-headline-md mb-6">Membresías Lúmen</h2>
          <p className="font-body-lg text-body-lg opacity-90 mb-12">
            Nuestros planes están diseñados para ofrecerte resultados a largo plazo. Desde el acceso <strong>Essential</strong> hasta nuestra experiencia <strong>Health & Unlimited</strong>, que incluye revisiones corporales y sesiones de Recovery.
          </p>
          <button onClick={() => navigate('empieza')} className="font-label-caps text-label-caps bg-background text-primary px-8 py-4 rounded-full hover:bg-surface-container-lowest transition-colors shadow-lg cursor-pointer">
            SOLICITAR TARIFAS DEL CÍRCULO FUNDADOR
          </button>
        </Reveal>
      </section>
    </main>
  );
}
