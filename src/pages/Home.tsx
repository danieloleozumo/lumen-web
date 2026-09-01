import { useRouter } from '../router';
import { Testimonials } from '../components/Testimonials';
import { PilatesHighlight } from '../components/PilatesHighlight';
import { Location } from '../components/Location';
import { Reveal } from '../components/Reveal';
import { StartingPointFinder } from '../components/StartingPointFinder';
import { trackBookingClick } from '../utils/analytics';
import heroHomeFitness from '../assets/images/hero_home_fitness.jpg';
import merchBotella from '../assets/images/merch_botella.png';
import merchToalla from '../assets/images/merch_toalla.png';
import merchCamiseta from '../assets/images/merch_camiseta.png';
import merchTotebag from '../assets/images/merch_totebag.png';
import merchCuaderno from '../assets/images/merch_cuaderno.png';
import merchEsterilla from '../assets/images/merch_esterilla.png';
import merchMochila from '../assets/images/merch_mochila.png';

export function Home() {
  const { navigate } = useRouter();

  const handleHeroBooking = () => {
    trackBookingClick('hero_home_mobile');
    navigate('empieza');
  };
  
  return (
    <main className="pt-20 md:pt-24">
      {/* PANTALLA 1: HERO MÓVIL (85-95dvh) */}
      <section className="relative min-h-[85dvh] md:min-h-[88vh] lg:min-h-[900px] flex items-center justify-center pt-8 pb-12 md:py-0 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroHomeFitness}
            alt="Entrenamiento y Pilates Reformer en Lúmen"
            className="w-full h-full object-cover object-center scale-[1.02]"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-background/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/95"></div>
        </div>

        <Reveal className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-4 border border-outline-variant px-4 py-1.5 rounded-full bg-surface-container/60 backdrop-blur-sm text-xs">
            BIENESTAR Y MOVIMIENTO EN JAÉN
          </span>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-6 leading-tight font-serif">
            Tu cuerpo cambia.<br />Tu forma de cuidarlo también.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed text-base md:text-lg">
            Entrenamiento personalizado, Pilates Reformer y fisioterapia diseñados para acompañarte con criterio en cada etapa de tu vida.
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 font-label-caps text-label-caps text-on-surface-variant opacity-85 text-[11px] md:text-xs">
            <span>PILATES REFORMER</span>
            <span className="text-primary-container">•</span>
            <span>ENTRENAMIENTO PERSONAL</span>
            <span className="text-primary-container">•</span>
            <span>SUELO PÉLVICO</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={handleHeroBooking}
              className="font-label-caps text-label-caps bg-primary text-on-primary px-8 py-4 rounded-full border border-primary-container shadow-md hover:shadow-lg active:scale-[0.98] transition-all w-full sm:w-auto text-center cursor-pointer font-semibold text-sm"
            >
              RESERVAR MI VALORACIÓN
            </button>
          </div>
        </Reveal>
      </section>

      {/* PANTALLA 2: IDENTIFICACIÓN ('No necesitas entrenar más...') */}
      <section className="py-12 md:py-16 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest text-center border-b border-outline-variant/30">
        <Reveal className="max-w-2xl mx-auto space-y-4">
          <span className="font-label-caps text-xs text-secondary tracking-widest uppercase block">NUESTRA FILOSOFÍA</span>
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-stone-900 leading-snug">
            No necesitas entrenar más.<br />Necesitas entrenar mejor.
          </h2>
          <p className="text-stone-600 text-base md:text-lg leading-relaxed">
            En Lúmen no improvisamos. Comenzamos evaluando cómo se encuentra tu cuerpo, cómo se mueve y cuáles son tus metas para diseñar un plan a tu medida.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('metodo')}
              className="inline-flex items-center gap-1.5 font-label-caps text-xs text-primary font-semibold hover:underline cursor-pointer"
            >
              DESCUBRE EL MÉTODO LÚMEN →
            </button>
          </div>
        </Reveal>
      </section>

      {/* PANTALLA 3: HERRAMIENTA INTERACTIVA "ENCUENTRA TU PUNTO DE PARTIDA" */}
      <Reveal>
        <StartingPointFinder />
      </Reveal>

      {/* PANTALLA 4: EL MÉTODO LÚMEN EN 4 PASOS VISUALES */}
      <section className="py-14 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-background">
        <Reveal className="max-w-container-max mx-auto text-center">
          <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-3 block">CÓMO TRABAJAMOS</span>
          <h2 className="font-headline-md text-2xl md:text-3xl text-on-background mb-10 font-serif font-semibold">
            El Método Lúmen en 4 pasos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 shadow-sm relative">
              <span className="text-3xl font-serif font-light text-primary/40 block mb-2">01</span>
              <h3 className="font-serif text-lg font-semibold text-stone-900 mb-1">Te conocemos</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Valoración inicial completa de tu postura, movilidad y fuerza antes de empezar.</p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 shadow-sm relative">
              <span className="text-3xl font-serif font-light text-primary/40 block mb-2">02</span>
              <h3 className="font-serif text-lg font-semibold text-stone-900 mb-1">Diseñamos tu plan</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Prescripción de ejercicio adaptado a tus necesidades específicas y nivel real.</p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 shadow-sm relative">
              <span className="text-3xl font-serif font-light text-primary/40 block mb-2">03</span>
              <h3 className="font-serif text-lg font-semibold text-stone-900 mb-1">Te acompañamos</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Grupos reducidos supervisados por entrenadores graduados y fisioterapeutas.</p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 shadow-sm relative">
              <span className="text-3xl font-serif font-light text-primary/40 block mb-2">04</span>
              <h3 className="font-serif text-lg font-semibold text-stone-900 mb-1">Medimos tu evolución</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Revisiones periódicas para mostrarte tu progreso objetivo con datos claros.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PANTALLA 5: SERVICIOS CARDS (Priorizando movimiento) */}
      <section className="py-14 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant/30">
        <Reveal className="max-w-container-max mx-auto">
          <div className="text-center mb-10">
            <span className="font-label-caps text-xs tracking-widest text-secondary block mb-2 uppercase">DISCIPLINAS Y SALUD</span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-stone-900">
              Nuestras Especialidades
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Pilates Reformer */}
            <div 
              onClick={() => navigate('entrenamientos')}
              className="group bg-surface-container rounded-2xl border border-outline-variant/40 hover:border-primary/40 transition-all overflow-hidden cursor-pointer shadow-sm flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800&auto=format&fit=crop" 
                  alt="Pilates Reformer en Lúmen" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">Pilates Reformer</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">Control, postura y trabajo de core profundo en máquinas de última generación.</p>
                </div>
                <span className="font-label-caps text-xs text-primary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                  DESCUBRIR →
                </span>
              </div>
            </div>

            {/* Card 2: Entrenamiento Personal */}
            <div 
              onClick={() => navigate('entrenamientos')}
              className="group bg-surface-container rounded-2xl border border-outline-variant/40 hover:border-primary/40 transition-all overflow-hidden cursor-pointer shadow-sm flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" 
                  alt="Entrenamiento Personal 1 a 1" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">Entrenamiento Personal</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">Sesiones 1-a-1 adaptadas milimétricamente a tu condición física y metas de salud.</p>
                </div>
                <span className="font-label-caps text-xs text-primary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                  DESCUBRIR →
                </span>
              </div>
            </div>

            {/* Card 3: Entrenamiento Funcional */}
            <div 
              onClick={() => navigate('entrenamientos')}
              className="group bg-surface-container rounded-2xl border border-outline-variant/40 hover:border-primary/40 transition-all overflow-hidden cursor-pointer shadow-sm flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" 
                  alt="Entrenamiento Funcional" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">Entrenamiento Funcional</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">Mejora tu fuerza, agilidad y resistencia en grupos pequeños y motivadores.</p>
                </div>
                <span className="font-label-caps text-xs text-primary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                  DESCUBRIR →
                </span>
              </div>
            </div>

            {/* Card 4: Suelo Pélvico y Maternidad */}
            <div 
              onClick={() => navigate('entrenamientos')}
              className="group bg-surface-container rounded-2xl border border-outline-variant/40 hover:border-primary/40 transition-all overflow-hidden cursor-pointer shadow-sm flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop" 
                  alt="Suelo pélvico e hipopresivos" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">Suelo Pélvico y Pelvis</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">Fisioterapia especializada para embarazo, postparto e hipopresivos.</p>
                </div>
                <span className="font-label-caps text-xs text-primary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                  DESCUBRIR →
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Pilates Highlight */}
      <PilatesHighlight />

      {/* Lumen Boutique / Merchandising */}
      <section className="py-14 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low border-t border-outline-variant/30">
        <Reveal className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
              <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-3 block">LUMEN LIFESTYLE</span>
              <h2 className="font-headline-md text-2xl md:text-3xl text-on-background font-serif font-semibold">
                La esencia del bienestar
              </h2>
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
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#D2C5B6] mb-3 shadow-sm border border-outline-variant/30 flex items-center justify-center">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                </div>
                <h4 className="font-headline-sm text-base text-on-background mb-0.5">{item.name}</h4>
                <p className="font-body-md text-xs text-on-surface-variant">{item.desc}</p>
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
