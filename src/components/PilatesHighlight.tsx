import { useRouter } from '../router';
import pilatesImage from '../assets/images/centro_pilates.png';

export function PilatesHighlight() {
  const { navigate } = useRouter();
  
  return (
    <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="lg:w-1/2">
            <div className="relative rounded-[2rem] overflow-hidden shadow-sm">
              <img src={pilatesImage} alt="Estudio de Pilates Reformer" className="w-full h-auto object-cover aspect-[4/5] lg:aspect-[4/4]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-on-background/10 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 border border-outline-variant/20 rounded-[2rem] pointer-events-none"></div>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col items-start">
            <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-4 block">ESPECIALIDAD LUMEN</span>
            <h2 className="font-headline-lg-mobile md:font-headline-md text-headline-lg-mobile md:text-headline-md text-on-background mb-6">Pilates Reformer</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              El corazón de nuestra metodología. El entrenamiento con Reformer te permite trabajar todo el cuerpo con precisión, control y fluidez, adaptándose a cualquier nivel físico.
            </p>
            <ul className="space-y-5 mb-10 w-full">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <p className="font-body-md text-on-background">Mejora la flexibilidad y la movilidad articular en cada sesión.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <p className="font-body-md text-on-background">Fortalece la musculatura profunda y estabilizadora del core.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <p className="font-body-md text-on-background">Corrige desequilibrios posturales y previene dolores de espalda.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <p className="font-body-md text-on-background">Grupos hiperreducidos (máx. 4 personas) para técnica perfecta.</p>
              </li>
            </ul>
            <button 
              onClick={() => navigate('entrenamientos')}
              className="font-label-caps text-label-caps bg-primary text-on-primary px-8 py-4 rounded-full border border-primary-container shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              MÁS INFORMACIÓN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
