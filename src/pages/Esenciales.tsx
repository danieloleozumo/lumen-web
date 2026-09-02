import { useState } from 'react';
import { useRouter } from '../router';

import merchBotella from '../assets/images/merch_botella.png';
import merchEsterilla from '../assets/images/merch_esterilla.png';
import merchMochila from '../assets/images/merch_mochila.png';
import merchToalla from '../assets/images/merch_toalla.png';
import merchCamiseta from '../assets/images/merch_camiseta.png';
import merchTotebag from '../assets/images/merch_totebag.png';
import merchCuaderno from '../assets/images/merch_cuaderno.png';

interface Product {
  id: string;
  nombre: string;
  categoria: 'practica' | 'estilo' | 'nutricion';
  categoriaEtiqueta: string;
  descripcion: string;
  precio: string;
  imagen: string;
  destacado?: boolean;
  proximamente?: boolean;
}

const PRODUCTOS: Product[] = [
  {
    id: 'esterilla-pilates',
    nombre: 'Esterilla de Pilates & Yoga Pro',
    categoria: 'practica',
    categoriaEtiqueta: 'Práctica & Estudio',
    descripcion: 'Superficie antideslizante de máxima densidad y tacto suave. Diseñada para proteger articulaciones en trabajo de suelo.',
    precio: '45 €',
    imagen: merchEsterilla,
    destacado: true
  },
  {
    id: 'botella-termica',
    nombre: 'Botella Térmica de Acero Inoxidable',
    categoria: 'estilo',
    categoriaEtiqueta: 'Hidratación & Accesorios',
    descripcion: 'Doble pared aislante para mantener tu bebida fría hasta 24h o caliente hasta 12h. Libre de BPA con acabado mate soft-touch.',
    precio: '28 €',
    imagen: merchBotella,
    destacado: true
  },
  {
    id: 'toalla-microfibra',
    nombre: 'Toalla de Estudio Ultra-Absorbente',
    categoria: 'practica',
    categoriaEtiqueta: 'Práctica & Estudio',
    descripcion: 'Microfibra técnica de secado rápido, ligera y compacta. Ideal para tus sesiones de Reformer o entrenamiento funcional.',
    precio: '18 €',
    imagen: merchToalla
  },
  {
    id: 'mochila-deporte',
    nombre: 'Mochila de Entrenamiento Lumen',
    categoria: 'estilo',
    categoriaEtiqueta: 'Hidratación & Accesorios',
    descripcion: 'Diseño ergonómico con compartimentos ventilados independientes para calzado y ropa. Resistente al agua.',
    precio: '52 €',
    imagen: merchMochila
  },
  {
    id: 'tote-bag',
    nombre: 'Bolsa Tote Bag Algodón Orgánico',
    categoria: 'estilo',
    categoriaEtiqueta: 'Hidratación & Accesorios',
    descripcion: '100% algodón orgánico de gramaje superior. Cómoda y espaciosa para llevar todo lo que necesitas a tu práctica diaria.',
    precio: '22 €',
    imagen: merchTotebag
  },
  {
    id: 'camiseta-lumen',
    nombre: 'Camiseta Essential Breathable',
    categoria: 'estilo',
    categoriaEtiqueta: 'Textil & Estudio',
    descripcion: 'Tejido ultra-transpirable de caída fluida y movimiento libre. Corte unisex en tonos tierra y neutros.',
    precio: '32 €',
    imagen: merchCamiseta
  },
  {
    id: 'cuaderno-habitos',
    nombre: 'Cuaderno Journaling & Hábitos',
    categoria: 'estilo',
    categoriaEtiqueta: 'Bienestar & Hábitos',
    descripcion: 'Guía de reflexión diaria, registro de progreso de entrenamiento y planificación de bienestar consciente.',
    precio: '16 €',
    imagen: merchCuaderno
  },
  {
    id: 'suplemento-magnesio',
    nombre: 'Bisglicinato de Magnesio & Recuperación',
    categoria: 'nutricion',
    categoriaEtiqueta: 'Nutrición & Suplementación',
    descripcion: 'Fórmula limpia de alta biodisponibilidad para optimizar la relajación muscular, la calidad del sueño y reducir la fatiga.',
    precio: 'Consultar',
    imagen: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    proximamente: true
  },
  {
    id: 'proteina-vegetal',
    nombre: 'Proteína Vegetal Nutrición Consciente',
    categoria: 'nutricion',
    categoriaEtiqueta: 'Nutrición & Suplementación',
    descripcion: 'Mezcla limpia de proteína de guisante y arroz orgánico, rica en aminoácidos esenciales para la recuperación post-sesión.',
    precio: 'Consultar',
    imagen: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=800',
    proximamente: true
  }
];

export function Esenciales() {
  const { navigate } = useRouter();
  const [categoriaActiva, setCategoriaActiva] = useState<'todas' | 'practica' | 'estilo' | 'nutricion'>('todas');

  const productosFiltrados = PRODUCTOS.filter(p => {
    if (categoriaActiva === 'todas') return true;
    return p.categoria === categoriaActiva;
  });

  const handleConsultarWhatsApp = (nombreProducto: string) => {
    const texto = encodeURIComponent(`Hola, me gustaría consultar disponibilidad para adquirir el producto: ${nombreProducto} en el centro Lumen.`);
    window.open(`https://wa.me/34600000000?text=${texto}`, '_blank');
  };

  return (
    <main className="w-full flex-grow pt-24 pb-32 bg-background min-h-screen">
      {/* Header Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto text-center">
          <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-4 block">ESENCIALES LUMEN</span>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-6">
            Equipamiento, Nutrición & Bienestar
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Una selección exclusiva de accesorios de estudio, textil y suplementación pensada para acompañarte y enriquecer tu práctica día a día.
          </p>

          {/* Filtros por Categoría */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {[
              { id: 'todas', label: 'Todos los productos' },
              { id: 'practica', label: 'Práctica & Estudio' },
              { id: 'estilo', label: 'Accesorios & Estilo' },
              { id: 'nutricion', label: 'Nutrición & Suplementación' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategoriaActiva(cat.id as any)}
                className={`px-5 py-2 rounded-full font-label-caps text-xs tracking-wider uppercase transition-all duration-200 ${
                  categoriaActiva === cat.id
                    ? 'bg-primary text-on-primary shadow-sm font-semibold'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-background border border-outline-variant/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Productos */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productosFiltrados.map(prod => (
              <div
                key={prod.id}
                className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/50 hover:border-primary transition-all duration-300 overflow-hidden flex flex-col h-full hover:shadow-md hover:shadow-primary/5 relative"
              >
                {/* Imagen del Producto */}
                <div className="h-72 relative overflow-hidden bg-surface-container-low flex items-center justify-center p-6">
                  <img
                    src={prod.imagen}
                    alt={prod.nombre}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full border border-surface-container shadow-sm font-label-caps text-[10px] uppercase tracking-widest text-primary font-medium">
                      {prod.categoriaEtiqueta}
                    </span>
                  </div>

                  {prod.proximamente && (
                    <div className="absolute top-4 right-4 bg-secondary/90 text-on-secondary backdrop-blur-sm px-3 py-1 rounded-full font-label-caps text-[10px] uppercase tracking-widest font-semibold shadow-sm">
                      Próximamente
                    </div>
                  )}
                </div>

                {/* Info del Producto */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-baseline mb-3">
                    <h3 className="font-headline-sm text-headline-sm text-on-background group-hover:text-primary transition-colors">
                      {prod.nombre}
                    </h3>
                  </div>

                  <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">
                    {prod.descripcion}
                  </p>

                  <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="font-label-caps text-[10px] text-on-surface-variant/70 uppercase tracking-widest">PVP Recomendado</span>
                      <span className="font-headline-sm text-xl text-primary font-bold">{prod.precio}</span>
                    </div>

                    <button
                      onClick={() => handleConsultarWhatsApp(prod.nombre)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface-variant font-label-caps text-xs uppercase tracking-wider transition-all duration-300 border border-outline-variant/40"
                    >
                      <span>Reservar en centro</span>
                      <span className="material-symbols-outlined text-sm">storefront</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Nutrición y Suplementación */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto bg-surface-container-low border border-outline-variant/40 rounded-3xl p-8 md:p-14 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="material-symbols-outlined text-primary text-4xl mb-4 block">nutrition</span>
            <span className="font-label-caps text-xs tracking-widest text-secondary uppercase mb-2 block font-semibold">NUEVO DESARROLLO</span>
            <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-background mb-4">
              Línea de Nutrición & Suplementación Consciente
            </h2>
            <p className="font-body-md text-on-surface-variant mb-8">
              Estamos seleccionando fórmulas limpias y suplementos antiinflamatorios de alta calidad para complementar tu entrenamiento y potenciar tu recuperación muscular.
            </p>
            <button
              onClick={() => navigate('contacto')}
              className="px-8 py-3.5 rounded-full bg-primary text-on-primary font-label-caps text-xs uppercase tracking-wider font-semibold hover:bg-primary/90 transition-colors shadow-sm"
            >
              Consultar disponibilidad en recepción
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
