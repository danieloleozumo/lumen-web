import { useRouter } from '../router';
import blogMorningImage from '../assets/images/blog_morning_routine_1787821714000.jpg';
import blogStretchingImage from '../assets/images/blog_stretching_1787821731335.jpg';
import blogNutritionImage from '../assets/images/blog_nutrition_1787821746227.jpg';

const blogPosts = [
  {
    id: 1,
    title: "El ritual de la mañana: Cómo empezar el día con energía y foco",
    snippet: "Descubre cómo pequeños ajustes en tu rutina matutina pueden transformar tu día. Desde la hidratación hasta los primeros movimientos.",
    category: "Bienestar",
    date: "12 Oct 2026",
    readTime: "4 min",
    image: blogMorningImage
  },
  {
    id: 2,
    title: "Movilidad articular: El secreto de la longevidad física",
    snippet: "No se trata solo de ser flexible. Entiende la diferencia entre flexibilidad pasiva y movilidad activa para proteger tus articulaciones.",
    category: "Movimiento",
    date: "05 Oct 2026",
    readTime: "6 min",
    image: blogStretchingImage
  },
  {
    id: 3,
    title: "Nutrición antiinflamatoria para potenciar tu recuperación",
    snippet: "Qué comer después de tu sesión de Reformer para maximizar la adaptación muscular y reducir la inflamación.",
    category: "Nutrición",
    date: "28 Sep 2026",
    readTime: "5 min",
    image: blogNutritionImage
  }
];

export function Blog() {
  const { navigate } = useRouter();

  return (
    <main className="w-full flex-grow pt-20 pb-32 bg-background min-h-screen">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/50 hover:border-primary transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-md hover:shadow-primary/5">
                <div className="h-64 relative overflow-hidden">
                  <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src={post.image} alt={post.title} />
                  <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full border border-surface-container shadow-sm">
                    <span className="font-label-caps text-[10px] uppercase tracking-widest text-primary">{post.category}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-body-md text-[14px] text-on-surface-variant/80">{post.date}</span>
                    <span className="font-body-md text-[14px] text-on-surface-variant/80">{post.readTime}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-background mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-8 line-clamp-3">
                    {post.snippet}
                  </p>
                  <a href="#" className="font-label-caps text-label-caps text-primary inline-flex items-center gap-2 hover:gap-3 transition-all w-fit mt-auto" onClick={(e) => { e.preventDefault(); }}>
                    LEER ARTÍCULO <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
