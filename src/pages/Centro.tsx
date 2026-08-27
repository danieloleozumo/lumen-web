import { useRouter } from '../router';
import { Reveal } from '../components/Reveal';

export function Centro() {
  const { navigate } = useRouter();
  
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed grayscale-[0.2]" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1VwOOTQ7bS-taDS50zm1020759Q2qCsMDBHMFexh8yNC6xjyNmrn6LzUl8aJQoS9MAp9RNPPHVX6wsrpkt3kXtAwzfz5QjO4K79w1pBZTVU_n5__cW4wYUCgzdpxTyX_tuBMrnqxgQ6OeEh21m0-fhSwyJespNAZc8hOlCqgU8_TmIlH2iBMBTI1rMDJTf10h7zZvCo0PdeY1MIoE55J4KS9dxTYltJjQA_MbinbyMztrS-OcqNQQ')" }}
        ></div>
        <div className="absolute inset-0 bg-surface/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <Reveal className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mt-20">
          <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] uppercase mb-4 block">Quiet Luxury Wellness</span>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background max-w-4xl mx-auto leading-tight">
            Calma. Salud. Movimiento. Elegancia.
          </h1>
          <p className="mt-6 font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            No vienes a un gimnasio. Vienes a un lugar que te hace sentir bien. Competencia sanitaria y sofisticación en el corazón de Jaén.
          </p>
        </Reveal>
      </section>

      {/* Concept Detail */}
      <section className="py-16 md:py-section-gap bg-background">
        <Reveal className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-4 block">EL LENGUAJE VISUAL</span>
              <h2 className="font-headline-md text-headline-md text-on-background mb-6">Un entorno diseñado para la conexión cuerpo-mente</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Lumen huye de la estética deportiva tradicional. Utilizamos una base de tonos neutros cálidos, revestimientos con texturas minerales y madera de roble natural para situarnos más cerca de un boutique spa que de un centro de entrenamiento.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">lightbulb</span>
                  <p className="font-body-md text-body-md text-on-surface-variant"><strong>Iluminación circadiana:</strong> Luz cálida, indirecta y escenas automatizadas que acompañan cada fase de tu sesión.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">air</span>
                  <p className="font-body-md text-body-md text-on-surface-variant"><strong>Aromaterapia y Aire Puro:</strong> Una firma olfativa exclusiva de té blanco y cedro, junto a un sistema avanzado de renovación de aire.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">graphic_eq</span>
                  <p className="font-body-md text-body-md text-on-surface-variant"><strong>Acústica premium:</strong> Aislamiento clínico en consultas y listas de reproducción exclusivas (Lumen Flow, Lumen Strong) para cada espacio.</p>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-surface-container-low border border-outline-variant/30">
                <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop" alt="Textura y calma" className="w-full h-full object-cover opacity-90" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/5] mt-8 bg-surface-container-low border border-outline-variant/30">
                <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop" alt="Materiales nobles" className="w-full h-full object-cover opacity-90" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Espacios - Alternate Layout */}
      <section className="py-16 md:py-section-gap bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <Reveal className="text-center mb-16 md:mb-24">
            <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-4 block">LOS ESPACIOS</span>
            <h2 className="font-headline-md text-headline-md text-on-background">Tu recorrido en Lumen</h2>
          </Reveal>

          <div className="space-y-24">
            {/* Recepción & Lumen Living */}
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-container border border-outline-variant/30">
                 <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" alt="Recepción" className="absolute inset-0 w-full h-full object-cover opacity-80" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-4">Recepción y Lumen Living</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Mitad boutique hotel, mitad club wellness. Te recibe un mostrador curvo de roble con luz suave. Aquí puedes relajarte en nuestra pequeña zona social antes o después de entrenar, disfrutando de nuestra "hospitality corner" con agua filtrada o infusiones. Sin cartelería agresiva, sólo la calidez de tu comunidad.
                </p>
              </div>
            </Reveal>

            {/* Sala Pilates Reformer */}
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-4">Sala Pilates Reformer: Movimiento en calma</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Nuestra sala icónica. Seis reformers premium dispuestos con un lujo espacial excepcional. Grandes espejos verticales arqueados, cortinas de techo a suelo para filtrar la luz natural e islas acústicas en un techo foseado. Aquí el movimiento fluye al ritmo de una iluminación que baja su intensidad para tu relajación final.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-container border border-outline-variant/30">
                <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop" alt="Sala de Pilates" className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale-[0.2]" />
              </div>
            </Reveal>

            {/* Sala de Fuerza */}
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-container border border-outline-variant/30">
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" alt="Sala de Fuerza" className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale-[0.3]" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-4">Sala de Fuerza y Funcional: Strong, not aggressive</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Un espacio que transmite capacidad, autonomía y longevidad, especialmente pensado para no resultar intimidante. Tonos topo y oliva oscuro, equipamiento ordenado al milímetro en paredes técnicas de diseño y un lema discreto: "Move well. Live strong". Suelo de caucho en tonos arena que huye del clásico gris industrial.
                </p>
              </div>
            </Reveal>

            {/* Fisioterapia y Suelo Pélvico */}
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-4">Suites Terapéuticas Privadas</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Nuestras consultas de fisioterapia y suelo pélvico no parecen clínicas médicas, sino suites wellness. Mobiliario en madera suspendido, material sanitario oculto y una privacidad acústica absoluta (doble placa y aislamiento). Un lugar seguro, cálido, en tonos arena y rosa empolvado, donde la tecnología solo aparece cuando la necesitas.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-container border border-outline-variant/30">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop" alt="Fisioterapia" className="absolute inset-0 w-full h-full object-cover opacity-80" />
              </div>
            </Reveal>

            {/* Vestuarios */}
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-container border border-outline-variant/30">
                 <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" alt="Vestuarios Boutique" className="absolute inset-0 w-full h-full object-cover opacity-80" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-4">Vestuarios Boutique</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  El lujo está en los detalles. Pavimentos de piedra clara, muebles de lavabo en roble y espejos retroiluminados diseñados para favorecer tu rostro. Disfruta de amenities premium en dispensadores de diseño, con el aroma sutil de Lumen, y un pequeño recordatorio antes de marcharte: "Take care of yourself".
                </p>
              </div>
            </Reveal>

            {/* Merchandising & Amenities */}
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest block mb-4 border border-outline-variant px-3 py-1 rounded-full w-fit">COLECCIÓN ESENCIAL</span>
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-4">Lumen Lifestyle</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  Hemos diseñado una colección exclusiva para acompañarte en tu práctica. Desde nuestras botellas térmicas en tono oliva mate, pasando por los calcetines antideslizantes técnicos para Pilates, hasta las tote bags de algodón orgánico.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Equipamiento estético, funcional y alineado con nuestros valores, pensado para que la experiencia y la comunidad Lumen te acompañen siempre.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-surface-container border border-outline-variant/30">
                    <img src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=800&auto=format&fit=crop" alt="Lumen Botella Térmica" className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square bg-surface-container border border-outline-variant/30">
                    <img src="https://images.unsplash.com/photo-1597484662317-9bd7baa42909?q=80&w=800&auto=format&fit=crop" alt="Lumen Tote Bag" className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply" />
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden h-full bg-surface-container border border-outline-variant/30 mt-8">
                  <img src="https://images.unsplash.com/photo-1616781297055-32e6eeeb5724?q=80&w=800&auto=format&fit=crop" alt="Lumen Soft Touch Towel & Socks" className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-section-gap bg-primary text-on-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-black/10 blur-2xl pointer-events-none"></div>
        <Reveal className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <h2 className="font-headline-md text-headline-md mb-6">Un espacio exclusivo a punto de abrir sus puertas</h2>
          <p className="font-body-lg text-body-lg opacity-90 mb-10">
            Forma parte del Círculo Fundador Lumen y asegura tu plaza en este nuevo concepto de bienestar integral para la mujer en Jaén.
          </p>
          <button onClick={() => navigate('empieza')} className="font-label-caps text-label-caps bg-background text-primary px-8 py-4 rounded-full hover:bg-surface-container-lowest transition-colors shadow-lg hover:-translate-y-0.5 cursor-pointer">
            QUIERO SER FUNDADORA
          </button>
        </Reveal>
      </section>
    </main>
  );
}

