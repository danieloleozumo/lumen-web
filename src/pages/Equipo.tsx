import { useRouter } from '../router';
import { Reveal } from '../components/Reveal';
import equipoRecepcion from '../assets/images/equipo_recepcion.jpg';
import equipoFisioterapia from '../assets/images/equipo_fisioterapia.jpg';
import equipoNutricion from '../assets/images/equipo_nutricion.jpg';
import equipoEntrenamientoSuelo from '../assets/images/equipo_entrenamiento_suelo.jpg';
import equipoEntrenamientoReformer from '../assets/images/equipo_entrenamiento_reformer.jpg';

export function Equipo() {
  const { navigate } = useRouter();

  const areas = [
    {
      title: 'Recepción y Hospitality',
      specialty: 'Bienvenida y Experiencia de Cliente',
      image: equipoRecepcion,
      description: 'El primer contacto con el bienestar. Un servicio atento, cálido y personalizado enfocado en la hospitalidad, haciendo que cada visita comience en un ambiente de calma y confort desde el primer segundo.',
    },
    {
      title: 'Fisioterapia y Suelo Pélvico',
      specialty: 'Área Clínica y Terapia Manual',
      image: equipoFisioterapia,
      description: 'Recuperación, prevención y cuidado especializado (especialmente en suelo pélvico y salud femenina) en cabinas privadas de máxima comodidad y discreción acústica.',
    },
    {
      title: 'Pilates Reformer',
      specialty: 'Movimiento Consciente y Postura',
      image: equipoEntrenamientoReformer,
      description: 'Clases guiadas en reformers premium, diseñadas para mejorar la fuerza del core, la flexibilidad y la alineación corporal mediante la precisión del método Pilates.',
    },
    {
      title: 'Entrenamiento Funcional y Suelo',
      specialty: 'Fuerza, Vitalidad y Longevidad',
      image: equipoEntrenamientoSuelo,
      description: 'Sesiones personalizadas o en grupos reducidos de entrenamiento funcional y Pilates suelo. Adaptamos cada sesión para mejorar tu capacidad física y vitalidad diaria.',
    },
    {
      title: 'Dietética y Nutrición',
      specialty: 'Salud Hormonal y Alimentación Real',
      image: equipoNutricion,
      description: 'Asesoramiento personalizado sin restricciones extremas. Nos enfocamos en tu salud digestiva y hormonal para construir hábitos sostenibles y potenciar tu bienestar.',
    },
  ];

  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <Reveal className="max-w-container-max mx-auto text-center">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-4 block">LAS ÁREAS DE LUMEN</span>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background max-w-4xl mx-auto leading-tight mb-6">
            El corazón de Lumen
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Un equipo multidisciplinar y especializado que cuida de ti de forma integral. A través de nuestras áreas de trabajo coordinadas, te ofrecemos una experiencia de salud, calma y movimiento de excelencia.
          </p>
        </Reveal>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-background">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {areas.map((area, index) => (
              <div key={index}>
                <Reveal className="group">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-low mb-6 border border-outline-variant/30">
                    <div className="w-full h-full overflow-hidden">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                      />
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-background mb-1">{area.title}</h3>
                  <p className="font-body-md text-primary font-medium mb-3">{area.specialty}</p>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    {area.description}
                  </p>
                </Reveal>
              </div>
            ))}
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
