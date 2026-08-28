import { useRouter } from '../router';
import { Testimonials } from '../components/Testimonials';
import { PilatesHighlight } from '../components/PilatesHighlight';
import { Location } from '../components/Location';
import { Reveal } from '../components/Reveal';
import heroHomeFitness from '../assets/images/hero_home_fitness.jpg';
import centroFacade from '../assets/images/centro_facade.png';
import merchBotella from '../assets/images/merch_botella.png';
import merchToalla from '../assets/images/merch_toalla.png';
import merchCamiseta from '../assets/images/merch_camiseta.png';
import merchTotebag from '../assets/images/merch_totebag.png';
import merchCuaderno from '../assets/images/merch_cuaderno.png';
import merchEsterilla from '../assets/images/merch_esterilla.png';
import merchMochila from '../assets/images/merch_mochila.png';

export function Home() {
  const { navigate } = useRouter();
  
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] lg:min-h-[921px] flex items-center justify-center px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroHomeFitness}
            alt="Entrenamiento y Pilates en Lumen"
            className="w-full h-full object-cover object-center scale-[1.02]"
          />
          {/* Overlay principal - fondo beige sobre toda la imagen para matar el contraste */}
          <div className="absolute inset-0 bg-background/60"></div>
          {/* Gradiente vertical para asegurar legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/90"></div>
        </div>
        <Reveal className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-6 border border-outline-variant px-4 py-1.5 rounded-full bg-surface-container/50 backdrop-blur-sm">BIENESTAR Y MOVIMIENTO EN JAÉN</span>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-8 leading-tight">
            Tu cuerpo cambia.<br />Tu forma de cuidarlo también.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            Un centro diseñado para acompañar a la mujer en las distintas etapas de su vida mediante ejercicio, fisioterapia, suelo pélvico, Pilates y salud.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12 font-label-caps text-label-caps text-on-surface-variant opacity-80">
            <span>PILATES REFORMER</span>
            <span className="text-primary-container mx-2">•</span>
            <span>FUERZA</span>
            <span className="text-primary-container mx-2">•</span>
            <span>MOVILIDAD</span>
            <span className="text-primary-container mx-2">•</span>
            <span>SUELO PÉLVICO</span>
            <span className="text-primary-container mx-2">•</span>
            <span>LONGEVIDAD</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button onClick={() => navigate('empieza')} className="font-label-caps text-label-caps bg-primary text-on-primary px-8 py-4 rounded-full border border-primary-container shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center cursor-pointer">
              ÚNETE AL CÍRCULO FUNDADOR
            </button>
          </div>
        </Reveal>
      </section>

      {/* Brand Values Strip */}
      <section className="bg-primary text-on-primary py-8 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 font-label-caps text-label-caps tracking-[0.2em] opacity-90 text-[10px] md:text-xs">
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span>EQUILIBRIO</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span>FUERZA</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span>MOVIMIENTO</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span>BIENESTAR</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span>CONEXIÓN</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span>COMUNIDAD</span>
          </div>
        </div>
      </section>

      {/* Etapas de la mujer */}
      <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-background">
        <Reveal className="max-w-container-max mx-auto text-center">
          <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-4 block">ACOMPAÑAMIENTO INTEGRAL</span>
          <h2 className="font-headline-md text-headline-md text-on-background mb-12">Una solución para cada etapa</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/40 hover:border-primary-container transition-colors shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">pregnant_woman</span>
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-2">Embarazo y Postparto</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Preparación para el parto y recuperación segura de suelo pélvico, abdomen y fuerza.</p>
            </div>
            
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/40 hover:border-primary-container transition-colors shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">vital_signs</span>
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-2">Perimenopausia</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Entrena para la etapa que viene. Foco en fuerza, movilidad y composición corporal.</p>
            </div>
            
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/40 hover:border-primary-container transition-colors shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">accessibility_new</span>
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-2">Menopausia y Silver</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Protección ósea, muscular y metabólica. Mantén la fuerza, el equilibrio y la autonomía.</p>
            </div>
            
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/40 hover:border-primary-container transition-colors shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">healing</span>
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-2">Fisioterapia y Dolor</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Recupera el movimiento sin miedo. Tratamiento de lesiones con profesionales sanitarios.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Otra forma de entrenar */}
      <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant/30">
        <Reveal className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-on-background">Otra forma de entrenar</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-surface-container rounded-xl border border-outline-variant/30 hover:border-primary-container transition-colors group">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center mb-6 shadow-sm border border-outline-variant/50 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">groups</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-3 text-lg">Grupos reducidos</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Atención personalizada para asegurar la técnica correcta y resultados óptimos.</p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-surface-container rounded-xl border border-outline-variant/30 hover:border-primary-container transition-colors group">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center mb-6 shadow-sm border border-outline-variant/50 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">tune</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-3 text-lg">Entrenamiento adaptado</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Programas ajustados a tus necesidades específicas, historial y objetivos.</p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-surface-container rounded-xl border border-outline-variant/30 hover:border-primary-container transition-colors group">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center mb-6 shadow-sm border border-outline-variant/50 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">fitness_center</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-3 text-lg">Equipo especializado</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Instalaciones premium con equipamiento de alta gama para cada disciplina.</p>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center p-6 bg-surface-container rounded-xl border border-outline-variant/30 hover:border-primary-container transition-colors group">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center mb-6 shadow-sm border border-outline-variant/50 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-3 text-lg">Progreso a largo plazo</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Enfoque en la constancia y la construcción de hábitos sostenibles.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Pilates Highlight */}
      <PilatesHighlight />

      {/* Lumen Boutique / Merchandising */}
      <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low border-t border-outline-variant/30">
        <Reveal className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-4 block">LUMEN LIFESTYLE</span>
              <h2 className="font-headline-md text-headline-md text-on-background">La esencia del bienestar,<br/>más allá del centro</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'botella', name: 'Botella Térmica Lumen', desc: 'Verde oliva mate · 500ml', img: merchBotella },
              { id: 'toalla', name: 'Toalla Lumen', desc: 'Algodón suave · Bordado', img: merchToalla },
              { id: 'camiseta', name: 'Camiseta Essential', desc: 'Algodón orgánico · Corte relajado', img: merchCamiseta },
              { id: 'totebag', name: 'Canvas Tote Bag', desc: 'Lino natural · Serigrafía', img: merchTotebag },
              { id: 'cuaderno', name: 'Cuaderno Lumen', desc: 'Papel reciclado · Tapa blanda', img: merchCuaderno },
              { id: 'esterilla', name: 'Esterilla Premium', desc: 'Verde oliva · Antideslizante', img: merchEsterilla },
              { id: 'mochila', name: 'Mochila Lumen', desc: 'Diseño minimalista · Multiusos', img: merchMochila }
            ].map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#D2C5B6] mb-4 shadow-sm border border-outline-variant/30 flex items-center justify-center">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <h4 className="font-headline-sm text-lg text-on-background mb-1">{item.name}</h4>
                <p className="font-body-md text-sm text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Location */}
      <Reveal>
        <Location />
      </Reveal>

      {/* Testimonials */}
      <Reveal>
        <Testimonials />
      </Reveal>
    </main>
  );
}
