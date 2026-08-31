import { useState, useEffect } from 'react';
import { useRouter } from '../router';
import blogMorningImage from '../assets/images/blog_morning_routine_1787821714000.jpg';
import blogStretchingImage from '../assets/images/blog_stretching_1787821731335.jpg';
import blogNutritionImage from '../assets/images/blog_nutrition_1787821746227.jpg';

interface Post {
  id: number;
  titulo: string;
  snippet: string;
  categoria: string;
  fecha: string;
  tiempo_lectura?: string;
  url_imagen: string;
  enlace: string;
  is_fallback?: boolean;
}

export function Blog() {
  const { navigate } = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch('/api.php?action=list')
      .then(res => {
        if (!res.ok) {
          throw new Error('Error al obtener la lista de artículos');
        }
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          throw new Error('Formato de datos incorrecto');
        }
      })
      .catch(err => {
        setError('No se pudo conectar con el gestor de artículos.');
        // Fallback local en caso de error crítico de red para no dejar el blog en blanco
        setPosts([
          {
            id: 1,
            titulo: "El ritual de la mañana: Cómo empezar el día con energía y foco",
            snippet: "Descubre cómo pequeños ajustes en tu rutina matutina pueden transformar tu día. Desde la hidratación hasta los primeros movimientos.",
            categoria: "Bienestar",
            fecha: "12 Oct 2026",
            tiempo_lectura: "4 min",
            url_imagen: "morning_routine",
            enlace: "#",
            is_fallback: true
          },
          {
            id: 2,
            titulo: "Movilidad articular: El secreto de la longevidad física",
            snippet: "No se trata solo de ser flexible. Entiende la diferencia entre flexibilidad pasiva y movilidad activa para proteger tus articulaciones.",
            categoria: "Movilidad",
            fecha: "05 Oct 2026",
            tiempo_lectura: "6 min",
            url_imagen: "stretching",
            enlace: "#",
            is_fallback: true
          },
          {
            id: 3,
            titulo: "Nutrición antiinflamatoria para potenciar tu recuperación",
            snippet: "Qué comer después de tu sesión de Reformer para maximizar la adaptación muscular y reducir la inflamación.",
            categoria: "Nutrición",
            fecha: "28 Sep 2026",
            tiempo_lectura: "5 min",
            url_imagen: "nutrition",
            enlace: "#",
            is_fallback: true
          }
        ]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Función para resolver la URL de la imagen (estática local o subida dinámicamente)
  const getPostImage = (post: Post) => {
    if (post.is_fallback) {
      if (post.url_imagen.includes('morning_routine')) return blogMorningImage;
      if (post.url_imagen.includes('stretching')) return blogStretchingImage;
      if (post.url_imagen.includes('nutrition')) return blogNutritionImage;
    }
    // Para imágenes dinámicas subidas en Hostalia
    const path = post.url_imagen;
    return path.startsWith('/') ? path : `/${path}`;
  };

  // Mapear "Movimiento" (categoría original) o "Movilidad" a un nombre consistente en la vista pública
  const getCategoryDisplay = (categoria: string) => {
    if (categoria.toLowerCase() === 'movimiento') return 'Movilidad';
    return categoria;
  };

  return (
    <main className="w-full flex-grow pt-24 pb-32 bg-background min-h-screen">
      {/* Header Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto text-center">
          <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-4 block">LUMEN JOURNAL</span>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-6">Lecturas para vivir mejor</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Explora nuestros artículos sobre movimiento consciente, nutrición, hábitos y recuperación para llevar tu práctica más allá del estudio.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-primary text-5xl animate-spin mb-4">sync</span>
              <p className="font-body-md text-on-surface-variant">Cargando lecturas...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/50 hover:border-primary transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-md hover:shadow-primary/5">
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                      src={getPostImage(post)} 
                      alt={post.titulo} 
                      onError={(e) => {
                        // Fallback de imagen en caso de error de carga
                        (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Lumen+Movimiento';
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full border border-surface-container shadow-sm">
                      <span className="font-label-caps text-[10px] uppercase tracking-widest text-primary">
                        {getCategoryDisplay(post.categoria)}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-body-md text-[14px] text-on-surface-variant/80">{post.fecha}</span>
                      <span className="font-body-md text-[14px] text-on-surface-variant/80">{post.tiempo_lectura || '5 min'}</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-background mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {post.titulo}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-8 line-clamp-3">
                      {post.snippet}
                    </p>
                    <a 
                      href={post.enlace} 
                      target={post.enlace.startsWith('http') ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="font-label-caps text-label-caps text-primary inline-flex items-center gap-2 hover:gap-3 transition-all w-fit mt-auto"
                    >
                      LEER ARTÍCULO <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
