import React from 'react';
import { Reveal } from '../components/Reveal';

export function Privacidad() {
  return (
    <main className="bg-background min-h-screen">
      {/* Header Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-b border-outline-variant/30">
        <Reveal className="max-w-container-max mx-auto text-center">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-4 block">INFORMACIÓN LEGAL</span>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background max-w-4xl mx-auto leading-tight mb-6">
            Política de Privacidad
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
            
            <p className="font-semibold text-on-background text-lg">
              Este sitio web es propiedad, y está bajo responsabilidad de, Lumen Bienestar y Movimiento, con correo electrónico info@oleozumo.com, inscrita en el Registro Mercantil de JAÉN: T 338, F 194, S 8, H J 12573, I/A 1, aunque en adelante nos llamaremos Lumen Bienestar y Movimiento o simplemente “nosotros”, y a usted, que es el usuario de esta web le llamaremos “usuario”, usted o simplemente “tú”.
            </p>

            <p>
              El hecho de acceder a esta web implica el conocimiento y la aceptación sin reservas de los siguientes términos y condiciones.
            </p>

            <p>
              Para poder desarrollar nuestra actividad, realizamos tratamiento de los datos personales que nuestros clientes y usuarios nos proporcionan, a través de los formularios habilitados tanto en nuestra página web como en soporte físico en nuestros puntos de atención, con la finalidad de resolver sus consultas, gestionar las ventas y mantener informados a nuestros suscriptores acerca de las novedades disponibles en nuestro establecimiento que pudieran ser de su interés.
            </p>

            <p>
              Por otro lado, si aún no es nuestro cliente y solamente es un usuario de esta web, los únicos datos personales que tratamos acerca de usted son los gestionados a través de las cookies que empleamos en esta web (lea nuestra política de cookies para más información) y los que voluntariamente nos haya hecho llegar a través de los medios de contacto que ponemos a su disposición en esta web para atención a sus consultas.
            </p>

            <p>
              Además, existe la posibilidad de que nuestros usuarios y clientes reciban periódicamente información acerca de novedades relacionadas con nuestra actividad, incluyendo información acerca de promociones comerciales, nuevos productos, noticias importantes del sector o que puedan ser de interés para ellos. Solo les remitiremos esta información si nos han prestado su consentimiento y, por supuesto, si deciden dejar de recibir este tipo de comunicaciones por nuestra parte solo tienen que indicarlo a través de las formas de contacto que ponemos a su disposición en la web y en cada una de las comunicaciones que les enviamos.
            </p>

            <p>
              Por otra parte, debe saber que no realizamos selección de personal a través de esta web, por lo que si usted nos facilita datos personales porque está interesado en trabajar con nosotros, sus datos personales, incluidos los datos curriculares que pudiera proporcionarnos, serán tratados únicamente para su inmediata supresión.
            </p>

            <hr className="border-outline-variant/30 my-8" />

            <div>
              <h2 className="font-headline-sm text-on-background text-xl mb-4">Finalidades del tratamiento</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Realizar la gestión de las dudas y consultas que el usuario nos presenta, respecto a nuestros servicios, productos, precios, promociones o cualquier otra característica mostrada o inducida a través de la información que publicamos en la web, ya sea mediante el formulario habilitado para ello, por teléfono o mediante el correo electrónico que aparece en la web.
                </li>
                <li>
                  Envío de información comercial, acerca de productos, catálogos y novedades en nuestro sector, a los suscriptores de la misma.
                </li>
                <li>
                  Realizar la compra online de los productos o servicios que ofertamos a través de la web mediante las diferentes formas de compra.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline-sm text-on-background text-xl mb-4">Legitimación del tratamiento</h2>
              <p className="mb-4">
                Para el desarrollo de la atención a sus consultas, nos amparamos en la ejecución del contrato y en aplicación de medidas precontractuales (Art. 6.1b RGPD).
              </p>
              <p className="mb-4">
                Para el envío de información comercial, nos amparamos en su consentimiento expreso (Art. 6.1a RGPD).
              </p>
              <p>
                Estas legitimaciones son complementadas con el cumplimiento de obligaciones legales por parte de este responsable en los casos que corresponda.
              </p>
            </div>

            <div>
              <h2 className="font-headline-sm text-on-background text-xl mb-4">Destinatarios de la información</h2>
              <p className="mb-4">
                Sus datos tienen como destinatarios nuestros encargados de tratamiento, las cuales se comprometen a cumplir con lo dispuesto en la legislación vigente en materia de protección de datos y con las instrucciones indicadas por nosotros respecto al tratamiento de datos, y no podrán utilizarlos para una finalidad diferente de la aquí expresada.
              </p>
              <p>
                Asimismo, le informamos que no realizamos tratamiento internacional de datos.
              </p>
            </div>

            <div>
              <h2 className="font-headline-sm text-on-background text-xl mb-4">Plazos de conservación</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Ejecución de nuestros servicios:</strong> Conservaremos sus datos durante cuatro años desde la extinción de la relación comercial.
                </li>
                <li>
                  <strong>Finalidad comercial:</strong> Conservaremos sus datos mientras mantenga activa su suscripción para recibir nuestras comunicaciones y no haya indicado su negativa a recibirlas. Una vez mostrada su negativa a la recepción de información, procederemos a suprimir sus datos, al margen de posibles obligaciones legales, las cuales pueden dar lugar a un plazo mayor de conservación de los datos (aunque en este caso serán debidamente bloqueados).
                </li>
                <li>
                  <strong>Bolsa de empleo y ofertas laborales:</strong> Conservaremos sus datos durante 1 año.
                </li>
              </ul>
              <p className="mt-4">
                Debe tener en cuenta que el cumplimiento de una obligación legal puede conllevar la conservación de sus datos, o parte de ellos, por un periodo superior de tiempo.
              </p>
            </div>

            <div>
              <h2 className="font-headline-sm text-on-background text-xl mb-4">Derechos</h2>
              <p className="mb-4">
                Todos aquellos usuarios cuyos datos personales sean objeto de tratamiento, podrán ejercitar gratuitamente los derechos de acceso, rectificación, supresión de sus datos, oposición al tratamiento, y limitación al tratamiento, así como portabilidad (en los casos que sea posible atendiendo a la legislación vigente) y de información en las decisiones individuales automatizadas (caso de que se realicen).
              </p>
              <p className="mb-4">
                Estos derechos podrán ser ejercitados a través de la siguiente vía:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>A través de correo electrónico</strong> a la dirección <a href="mailto:info@oleozumo.com" className="text-primary hover:underline">info@oleozumo.com</a> firmando digitalmente su solicitud mediante el Documento Nacional de Identidad (DNI) electrónico español, o adjuntando copia de su DNI, no siendo necesaria en este caso más acreditación por parte de la persona solicitante.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline-sm text-on-background text-xl mb-4">Autoridad de control</h2>
              <p>
                Si el usuario considera que sus derechos han sido ignorados o vulnerados, ha de saber que puede presentar su reclamación ante la autoridad de control competente, que en este caso es la Agencia Española de Protección de Datos. Si el interesado así lo considera oportuno, también puede acudir a cualquier autoridad de control competente dentro de la Unión Europea.
              </p>
            </div>

          </Reveal>
        </div>
      </section>
    </main>
  );
}
