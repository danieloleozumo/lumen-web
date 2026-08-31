import React, { useState, useEffect } from 'react';
import { useRouter } from '../router';

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

// Para desarrollo local, apuntamos a la URL correcta. Si está en producción, la llamada relativa a '/api.php' funcionará.
const API_URL = '/api.php';

export function Admin() {
  const { navigate } = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [checkingAuth, setCheckingAuth] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');
  const [submittingLogin, setSubmittingLogin] = useState<boolean>(false);

  // Estados del Gestor de Artículos
  const [posts, setPosts] = useState<Post[]>([]);
  const [loadingPosts, setLoadingPosts] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string>('');

  // Estados del Formulario de Creación
  const [titulo, setTitulo] = useState<string>('');
  const [snippet, setSnippet] = useState<string>('');
  const [categoria, setCategoria] = useState<string>('Movilidad');
  const [enlace, setEnlace] = useState<string>('');
  const [tiempoLectura, setTiempoLectura] = useState<string>('');
  const [imagen, setImagen] = useState<File | null>(null);
  const [submittingPost, setSubmittingPost] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<string>('');
  const [submitError, setSubmitError] = useState<string>('');

  // 1. Verificar si hay un token válido al cargar
  useEffect(() => {
    const token = localStorage.getItem('lumen_admin_token');
    if (!token) {
      setCheckingAuth(false);
      return;
    }

    fetch(`${API_URL}?action=verify_token`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => {
        if (res.ok) {
          setIsAuthenticated(true);
          loadPosts();
        } else {
          localStorage.removeItem('lumen_admin_token');
        }
      })
      .catch(() => {
        // En caso de error de red, asumimos que no autenticado o local sin servidor corriendo aún
        localStorage.removeItem('lumen_admin_token');
      })
      .finally(() => {
        setCheckingAuth(false);
      });
  }, []);

  // 2. Cargar artículos
  const loadPosts = () => {
    setLoadingPosts(true);
    setApiError('');
    fetch(`${API_URL}?action=list`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          // Filtrar fallbacks del mock local para que no salgan en el admin si están vacíos
          const realPosts = data.filter(post => !post.is_fallback);
          setPosts(realPosts);
        } else if (data.error) {
          setApiError(data.message || 'Error al conectar con la base de datos MySQL.');
        }
      })
      .catch(err => {
        setApiError('No se pudo conectar con el servidor de la API PHP en Hostalia.');
      })
      .finally(() => {
        setLoadingPosts(false);
      });
  };

  // 3. Manejo de Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;

    setSubmittingLogin(true);
    setLoginError('');

    fetch(`${API_URL}?action=login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password })
    })
      .then(async res => {
        const data = await res.json();
        if (res.ok && data.success) {
          localStorage.setItem('lumen_admin_token', data.token);
          setIsAuthenticated(true);
          setLoginError('');
          loadPosts();
        } else {
          setLoginError(data.message || 'Contraseña incorrecta.');
        }
      })
      .catch(() => {
        setLoginError('Error al conectar con la API PHP. Asegúrate de tener api.php subida al servidor.');
      })
      .finally(() => {
        setSubmittingLogin(false);
      });
  };

  // 4. Cerrar Sesión
  const handleLogout = () => {
    localStorage.removeItem('lumen_admin_token');
    setIsAuthenticated(false);
    setPassword('');
  };

  // 5. Crear Artículo
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo.trim() || !snippet.trim() || !categoria || !enlace.trim() || !imagen) {
      setSubmitError('Por favor, rellena todos los campos obligatorios y selecciona una imagen de portada.');
      return;
    }

    setSubmittingPost(true);
    setSubmitError('');
    setSubmitSuccess('');

    const token = localStorage.getItem('lumen_admin_token');
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('snippet', snippet);
    formData.append('categoria', categoria);
    formData.append('enlace', enlace);
    formData.append('tiempo_lectura', tiempoLectura || '5 min');
    formData.append('imagen', imagen);

    fetch(`${API_URL}?action=create`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    })
      .then(async res => {
        const data = await res.json();
        if (res.ok && data.success) {
          setSubmitSuccess('¡Artículo publicado con éxito en el servidor de Hostalia!');
          // Limpiar formulario
          setTitulo('');
          setSnippet('');
          setCategoria('Movilidad');
          setEnlace('');
          setTiempoLectura('');
          setImagen(null);
          // Reiniciar selector de archivos HTML
          const fileInput = document.getElementById('imagen-file') as HTMLInputElement;
          if (fileInput) fileInput.value = '';
          
          loadPosts();
        } else {
          setSubmitError(data.message || 'Error al intentar guardar el artículo.');
        }
      })
      .catch(() => {
        setSubmitError('Error de red. No se pudo subir el artículo al servidor.');
      })
      .finally(() => {
        setSubmittingPost(false);
      });
  };

  // 6. Eliminar Artículo
  const handleDeletePost = (id: number, titulo: string) => {
    const confirm = window.confirm(`¿Estás seguro de que quieres eliminar permanentemente el artículo "${titulo}"? Esta acción borrará también la foto en Hostalia.`);
    if (!confirm) return;

    const token = localStorage.getItem('lumen_admin_token');

    fetch(`${API_URL}?action=delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ id })
    })
      .then(async res => {
        const data = await res.json();
        if (res.ok && data.success) {
          alert('Artículo eliminado correctamente.');
          loadPosts();
        } else {
          alert(data.message || 'Error al eliminar el artículo.');
        }
      })
      .catch(() => {
        alert('Error de red al intentar eliminar el artículo.');
      });
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center pt-20">
        <div className="text-center">
          <span className="material-symbols-outlined text-primary text-5xl animate-spin mb-4">sync</span>
          <p className="font-body-md text-on-surface-variant">Comprobando credenciales...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full flex-grow pt-28 pb-32 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-0">
        
        {/* LOGIN FORM */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 shadow-sm mt-12">
            <div className="text-center mb-8">
              <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-2 block">LUMEN ACCESO PRIVADO</span>
              <h2 className="font-headline-sm text-headline-sm text-on-background">Panel de Administración</h2>
              <p className="font-body-sm text-on-surface-variant mt-2 text-sm">
                Área reservada al personal autorizado de Lumen para la gestión de las publicaciones del blog.
              </p>
            </div>

            {loginError && (
              <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-xl text-error text-sm font-body-md">
                <span className="font-bold">Error:</span> {loginError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="pass" className="font-label-caps text-xs text-on-surface-variant mb-2 font-semibold">Contraseña de Administrador</label>
                <input
                  type="password"
                  id="pass"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-3 text-on-background focus:outline-none focus:border-primary font-body-md text-sm"
                  placeholder="Introduce la contraseña"
                  disabled={submittingLogin}
                />
              </div>

              <button
                type="submit"
                disabled={submittingLogin}
                className="w-full font-label-caps text-label-caps bg-primary text-on-primary py-4 rounded-full shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer text-center disabled:opacity-50"
              >
                {submittingLogin ? 'VERIFICANDO...' : 'INICIAR SESIÓN'}
              </button>
            </form>

            <div className="text-center mt-6">
              <button 
                onClick={() => navigate('blog')}
                className="text-primary font-label-caps text-xs hover:underline cursor-pointer"
              >
                VOLVER AL BLOG PÚBLICO
              </button>
            </div>
          </div>
        ) : (
          
          /* ADMIN DASHBOARD */
          <div className="space-y-12">
            
            {/* Header del Admin */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 gap-4">
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-background">Panel del Blog de Lumen</h2>
                <p className="font-body-sm text-on-surface-variant text-sm">Gestiona de forma privada los artículos visibles en la web.</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={loadPosts}
                  className="font-label-caps text-xs bg-surface border border-outline-variant/50 text-on-surface hover:bg-surface-container px-4 py-2 rounded-full cursor-pointer transition-all"
                >
                  ACTUALIZAR LISTA
                </button>
                <button
                  onClick={handleLogout}
                  className="font-label-caps text-xs bg-error/10 hover:bg-error/20 text-error border border-error/20 px-4 py-2 rounded-full cursor-pointer transition-all"
                >
                  CERRAR SESIÓN
                </button>
              </div>
            </div>

            {/* ERROR DE BASE DE DATOS */}
            {apiError && (
              <div className="p-6 bg-error/10 border border-error/20 rounded-2xl text-error font-body-md text-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-base">
                  <span className="material-symbols-outlined">warning</span>
                  <span>Configuración Pendiente de MySQL</span>
                </div>
                <p>{apiError}</p>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Para guardar artículos de forma permanente, debes editar el archivo <code className="bg-surface p-1 rounded font-mono">public/api.php</code> en tu servidor de Hostalia y colocar los datos correctos de la base de datos de tu hosting (Host, Nombre de BD, Usuario y Contraseña).
                </p>
              </div>
            )}

            {/* SECCIÓN 1: FORMULARIO NUEVA PUBLICACIÓN */}
            <section className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 shadow-sm">
              <h3 className="font-headline-sm text-xl text-on-background mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">add_box</span>
                Publicar un nuevo Artículo
              </h3>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-xl text-on-background text-sm font-body-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>{submitSuccess}</span>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-xl text-error text-sm font-body-md">
                  <span className="font-bold">Error:</span> {submitError}
                </div>
              )}

              <form onSubmit={handleCreatePost} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="titulo" className="font-label-caps text-xs text-on-surface-variant mb-2 font-semibold">Título del Artículo *</label>
                    <input
                      type="text"
                      id="titulo"
                      required
                      value={titulo}
                      onChange={(e) => setTitulo(e.target.value)}
                      className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-3 text-on-background focus:outline-none focus:border-primary font-body-md text-sm"
                      placeholder="Ej. Beneficios del Pilates en la Movilidad"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="categoria" className="font-label-caps text-xs text-on-surface-variant mb-2 font-semibold">Categoría *</label>
                    <select
                      id="categoria"
                      required
                      value={categoria}
                      onChange={(e) => setCategoria(e.target.value)}
                      className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-3 text-on-background focus:outline-none focus:border-primary font-body-md text-sm cursor-pointer"
                    >
                      <option value="Movilidad">Movilidad</option>
                      <option value="Bienestar">Bienestar</option>
                      <option value="Nutrición">Nutrición</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="enlace" className="font-label-caps text-xs text-on-surface-variant mb-2 font-semibold">Enlace al Artículo Completo *</label>
                    <input
                      type="url"
                      id="enlace"
                      required
                      value={enlace}
                      onChange={(e) => setEnlace(e.target.value)}
                      className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-3 text-on-background focus:outline-none focus:border-primary font-body-md text-sm"
                      placeholder="Ej. https://notion.so/mi-articulo-de-lumen o #"
                    />
                    <span className="text-[11px] text-on-surface-variant/70 mt-1">Inserta la dirección URL externa donde esté escrito el artículo o pon "#" si es temporal.</span>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="tiempo" className="font-label-caps text-xs text-on-surface-variant mb-2 font-semibold">Tiempo de Lectura</label>
                    <input
                      type="text"
                      id="tiempo"
                      value={tiempoLectura}
                      onChange={(e) => setTiempoLectura(e.target.value)}
                      className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-3 text-on-background focus:outline-none focus:border-primary font-body-md text-sm"
                      placeholder="Ej. 5 min"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="snippet" className="font-label-caps text-xs text-on-surface-variant mb-2 font-semibold">Resumen / Extracto *</label>
                  <textarea
                    id="snippet"
                    required
                    rows={3}
                    value={snippet}
                    onChange={(e) => setSnippet(e.target.value)}
                    className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-3 text-on-background focus:outline-none focus:border-primary font-body-md text-sm resize-none"
                    placeholder="Escribe un breve resumen de 2-3 líneas para la tarjeta de presentación en la lista del blog."
                  ></textarea>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="imagen-file" className="font-label-caps text-xs text-on-surface-variant mb-2 font-semibold">Fotografía de Portada *</label>
                  <input
                    type="file"
                    id="imagen-file"
                    required
                    accept="image/*"
                    onChange={(e) => setImagen(e.target.files ? e.target.files[0] : null)}
                    className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-3 text-on-background focus:outline-none focus:border-primary font-body-md text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 file:cursor-pointer"
                  />
                  <span className="text-[11px] text-on-surface-variant/70 mt-1">Formatos admitidos: JPG, PNG o WEBP. Peso recomendado: menor a 1MB.</span>
                </div>

                <button
                  type="submit"
                  disabled={submittingPost}
                  className="w-full font-label-caps text-label-caps bg-primary text-on-primary py-4.5 rounded-full shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer text-center disabled:opacity-50"
                >
                  {submittingPost ? 'PUBLICANDO ARTÍCULO...' : 'PUBLICAR EN EL BLOG'}
                </button>
              </form>
            </section>

            {/* SECCIÓN 2: LISTADO Y ELIMINACIÓN */}
            <section className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 shadow-sm">
              <h3 className="font-headline-sm text-xl text-on-background mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">article</span>
                Artículos Publicados ({posts.length})
              </h3>

              {loadingPosts ? (
                <div className="text-center py-12">
                  <span className="material-symbols-outlined text-primary animate-spin text-3xl mb-2">sync</span>
                  <p className="font-body-md text-on-surface-variant text-sm">Cargando publicaciones...</p>
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-12 bg-surface/50 rounded-2xl border border-dashed border-outline-variant/60">
                  <span className="material-symbols-outlined text-on-surface-variant/50 text-4xl mb-2">draw</span>
                  <p className="font-body-md text-on-surface-variant text-sm">No hay artículos publicados todavía en tu base de datos de Hostalia.</p>
                </div>
              ) : (
                <div className="divide-y divide-outline-variant/30">
                  {posts.map((post) => (
                    <div key={post.id} className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 first:pt-0 last:pb-0">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container flex-shrink-0 border border-outline-variant/20">
                          <img className="w-full h-full object-cover" src={`/${post.url_imagen}`} alt={post.titulo} onError={(e)=>{ (e.target as HTMLImageElement).src = 'https://placehold.co/150x150?text=Lumen'; }} />
                        </div>
                        <div>
                          <h4 className="font-headline-sm text-base text-on-background line-clamp-1">{post.titulo}</h4>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="font-label-caps text-[10px] text-primary uppercase tracking-wider">{post.categoria}</span>
                            <span className="text-xs text-on-surface-variant/70">•</span>
                            <span className="text-xs text-on-surface-variant/70">{post.fecha}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleDeletePost(post.id, post.titulo)}
                        className="self-end sm:self-auto font-label-caps text-xs bg-error/10 hover:bg-error/20 text-error border border-error/10 px-4 py-2 rounded-full cursor-pointer transition-all flex items-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                        ELIMINAR
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </section>
            
          </div>
        )}
        
      </div>
    </main>
  );
}
