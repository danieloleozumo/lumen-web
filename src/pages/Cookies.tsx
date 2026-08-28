import React from 'react';
import { Reveal } from '../components/Reveal';

export function Cookies() {
  return (
    <main className="bg-background min-h-screen">
      {/* Header Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-b border-outline-variant/30">
        <Reveal className="max-w-container-max mx-auto text-center">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-4 block">INFORMACIÓN LEGAL</span>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background max-w-4xl mx-auto leading-tight mb-6">
            Política de Cookies
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Última actualización: 28 de agosto de 2026.
          </p>
        </Reveal>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-background">
        <div className="max-w-4xl mx-auto bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-outline-variant/30 shadow-sm">
          <Reveal className="prose prose-stone max-w-none space-y-8 text-on-surface-variant leading-relaxed font-body-md text-sm md:text-base">
            
            <div>
              <p className="mb-4">
                Le informamos que en este sitio web utilizamos cookies con objeto de facilitar el uso y navegación a través de la web, así como elaborar nuestras estadísticas de uso de la web.
              </p>
            </div>

            <div>
              <h2 className="font-headline-sm text-on-background text-xl mb-4">Consentimiento</h2>
              <p className="mb-4">
                En este sitio web utilizamos cookies técnicas y analíticas propias y de terceros para poder realizar estadísticas e informes sobre el uso de la web y análisis de navegación, así como gestionar nuestra tienda virtual, mejorando su experiencia de usuario.
              </p>
              <p className="mb-4 font-semibold text-on-background">
                Al pulsar el botón aceptar, nos indica que está consintiendo el uso de las cookies antes enunciadas, y en las condiciones contenidas en la presente Política de Cookies.
              </p>
              <p className="mb-4">
                Este consentimiento se entiende al amparo del artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico, entendiendo que si usted no consiente el uso que hacemos de las cookies puede, empleando entre otras, la información que proporcionamos en esta política de cookies, configurar su navegador para no aceptar su uso.
              </p>
              <p>
                Lumen Bienestar y Movimiento puede modificar esta Política de Cookies en función de exigencias reglamentarias, legislativas o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos. En el caso que se produzcan cambios significativos en esta Política de Cookies, se comunicará debidamente a los usuarios.
              </p>
            </div>

            <div>
              <h2 className="font-headline-sm text-on-background text-xl mb-4">¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños ficheros de datos que se generan en el ordenador, Smartphone, tablet o cualquier otro dispositivo del usuario cuando se hace uso o se accede a una página web y que permiten al titular de dicha página almacenar o recuperar determinada información sobre la navegación que se efectúa desde dicho equipo.
              </p>
            </div>

            <div>
              <h2 className="font-headline-sm text-on-background text-xl mb-4">Tipología de cookies</h2>
              <p className="mb-4">
                A continuación, ofrecemos información sobre el tipo de cookies y la finalidad de las mismas:
              </p>
              
              <h3 className="font-headline-sm text-on-background text-lg mb-2">1. Tipos de cookies según la entidad que las gestione</h3>
              <p className="mb-4">
                Según sea la entidad que gestione el equipo o dominio desde donde se envían las cookies y trate los datos que se obtengan, podemos distinguir:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Cookies propias:</strong> Son aquéllas que se envían al equipo terminal del usuario desde o hacia nuestro propio servicio web.
                </li>
                <li>
                  <strong>Cookies de terceros:</strong> Son aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por Lumen Bienestar y Movimiento sino por otra entidad que trata los datos obtenidos a través de las cookies. Dado que son estos terceros quienes proceden a su implementación, el bloqueo y desinstalación de las mismas se rige por sus condiciones y mecanismos específicos.
                </li>
              </ul>

              <h3 className="font-headline-sm text-on-background text-lg mb-2">2. Tipos de cookies según el plazo de tiempo que permanecen activadas en el equipo terminal</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Cookies de sesión:</strong> Son un tipo de cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. Estas cookies se almacenan en su terminal hasta que finalice la sesión de navegación del usuario.
                </li>
                <li>
                  <strong>Cookies persistentes:</strong> Son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.
                </li>
              </ul>

              <h3 className="font-headline-sm text-on-background text-lg mb-2">3. Tipos de cookies según su finalidad</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Cookies técnicas:</strong> Son aquéllas que permiten al usuario la navegación a través de la página web o la plataforma y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, utilizar elementos de seguridad durante la navegación o almacenar contenidos para la difusión de videos o sonido o compartir contenidos a través de redes sociales como Facebook o Youtube. Se trata de cookies de sesión y persistentes.
                </li>
                <li>
                  <strong>Cookies de personalización:</strong> Son aquéllas que permiten al usuario acceder al servicio con algunas características predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.
                </li>
                <li>
                  <strong>Cookies analíticas:</strong> Son aquéllas que nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios de nuestra web. Para ello se analiza su navegación en nuestra página web con el fin de mejorarla.
                </li>
                <li>
                  <strong>Cookies publicitarias:</strong> Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que se pudieran incluir en nuestra página web.
                </li>
                <li>
                  <strong>Cookies de publicidad comportamental:</strong> Estas cookies almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada. Gracias a ellas, podemos conocer los hábitos de navegación en internet y mostrarte publicidad relacionada con tu perfil de navegación.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline-sm text-on-background text-xl mb-4">Gestión y Deshabilitación de Cookies</h2>
              <p className="mb-4">
                Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador de Internet. En caso de que no permitas la instalación de cookies en tu navegador es posible que no puedas acceder a algunos de los servicios y que tu experiencia en nuestra web pueda resultar menos satisfactoria.
              </p>
              <p className="mb-4">
                En los siguientes enlaces, y exclusivamente de modo orientativo, tienes a tu disposición información para configurar o deshabilitar sus cookies en cada navegador:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a href="https://support.google.com/accounts/answer/61416?hl=es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we&redirectlocale=es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/es-es/topic/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Internet Explorer
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/es-es/windows/microsoft-edge-datos-de-exploraci%C3%B3n-y-privacidad-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Microsoft Edge
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/kb/PH17191?locale=es-es&viewlocale=es_ES" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Safari
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/es-es/HT201265" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Safari para iOS (iPhone y iPad)
                  </a>
                </li>
              </ul>
            </div>

          </Reveal>
        </div>
      </section>
    </main>
  );
}
