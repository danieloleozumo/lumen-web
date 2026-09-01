import { useState } from 'react';
import { useRouter } from '../router';
import { Compass, ArrowRight, CheckCircle2, Sparkles, RefreshCw } from 'lucide-react';
import { trackQuizStart, trackQuizSelect, trackBookingClick } from '../utils/analytics';

interface Option {
  id: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  recommendedService: string;
  route: string;
}

const OPTIONS: Option[] = [
  {
    id: 'fuerza',
    label: 'Sentirme más fuerte y tonificada',
    badge: 'RECOMENDACIÓN LUMEN',
    title: 'Entrenamiento Personal o Funcional',
    description: 'Trabajo de fuerza muscular progresivo y guiado para aumentar tu densidad ósea, acelerar tu metabolismo y ganar tonicidad libre de lesiones.',
    recommendedService: 'Entrenamiento Personal / Funcional',
    route: 'entrenamientos',
  },
  {
    id: 'pilates',
    label: 'Moverme mejor y aliviar mi espalda',
    badge: 'RECOMENDACIÓN LUMEN',
    title: 'Pilates Reformer en Máquina',
    description: 'Control, fuerza profunda de core y descompresión vertebral en grupos reducidos de máximo 6 personas supervisados por especialistas.',
    recommendedService: 'Pilates Reformer',
    route: 'entrenamientos',
  },
  {
    id: 'pelvis',
    label: 'Cuidar mi suelo pélvico (Embarazo/Postparto)',
    badge: 'ESPECIALIDAD CLÍNICA',
    title: 'Fisioterapia Pélvica e Hipopresivos',
    description: 'Valoración ecográfica y ejercicio terapéutico adaptado para recuperar tu faja abdominal, tratar diástasis y proteger tu musculatura perineal.',
    recommendedService: 'Suelo Pélvico',
    route: 'entrenamientos',
  },
  {
    id: 'menopausia',
    label: 'Salud en Perimenopausia / Menopausia',
    badge: 'PROGRAMA LÚMEN 45+',
    title: 'Programa Longevidad y Salud Femenina',
    description: 'Entrenamiento de fuerza y acondicionamiento metabólico diseñado específicamente para preservar masa muscular y salud arterial a partir de los 45 años.',
    recommendedService: 'Lúmen 45+ Longevidad',
    route: 'entrenamientos',
  },
  {
    id: 'dudas',
    label: 'No sé qué necesito exactamente',
    badge: 'PUNTO DE PARTIDA IDEAL',
    title: 'Valoración Inicial Integral',
    description: 'Nosotras evaluamos tu postura, movilidad y fuerza en una consulta de 45 min para orientarte hacia la actividad idónea para tu cuerpo.',
    recommendedService: 'Valoración Inicial',
    route: 'empieza',
  },
];

export function StartingPointFinder() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { navigate } = useRouter();

  const handleSelect = (opt: Option) => {
    setSelectedId(opt.id);
    trackQuizSelect(opt.label, opt.recommendedService);
  };

  const handleBooking = (opt: Option) => {
    trackBookingClick('starting_point_finder', opt.recommendedService);
    navigate('empieza');
  };

  const selectedOption = OPTIONS.find((o) => o.id === selectedId);

  return (
    <section className="py-12 md:py-16 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 font-label-caps text-xs text-secondary tracking-widest uppercase mb-3 px-3.5 py-1 rounded-full bg-surface-container border border-outline-variant/40">
            <Compass className="w-3.5 h-3.5" />
            HERRAMIENTA DE ORIENTACIÓN
          </span>
          <h2 className="font-headline-md text-2xl md:text-3xl text-on-background font-serif font-semibold">
            Encuentra tu punto de partida
          </h2>
          <p className="font-body-md text-stone-600 mt-2 text-sm md:text-base">
            ¿Qué busca tu cuerpo en este momento? Selecciona la opción que mejor te describe:
          </p>
        </div>

        {!selectedOption ? (
          <div className="space-y-3">
            {OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  trackQuizStart();
                  handleSelect(opt);
                }}
                className="w-full text-left p-4 md:p-5 rounded-2xl bg-surface-container/60 hover:bg-surface-container border border-outline-variant/40 hover:border-primary/40 transition-all flex items-center justify-between group active:scale-[0.99] cursor-pointer"
              >
                <span className="font-medium text-stone-800 text-sm md:text-base pr-4">
                  {opt.label}
                </span>
                <div className="w-8 h-8 rounded-full bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-center text-stone-400 group-hover:text-primary group-hover:border-primary/40 flex-shrink-0 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="bg-surface-container/80 p-6 md:p-8 rounded-3xl border border-primary/30 shadow-sm animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                <Sparkles className="w-3 h-3" />
                {selectedOption.badge}
              </span>
              <button
                onClick={() => setSelectedId(null)}
                className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-800 transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                Cambiar opción
              </button>
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-semibold text-stone-900 mb-3">
              {selectedOption.title}
            </h3>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6">
              {selectedOption.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleBooking(selectedOption)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-on-primary rounded-full font-medium text-sm hover:bg-surface-tint transition-all shadow-sm cursor-pointer font-label-caps"
              >
                RESERVAR MI VALORACIÓN
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('entrenamientos')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-stone-300 text-stone-800 rounded-full font-medium text-sm hover:bg-surface-container transition-all cursor-pointer"
              >
                Saber más sobre este programa
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
