import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { applySeo } from '@/lib/seo';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    className="mb-10"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-lg font-serif font-bold text-primary mb-4 pb-2 border-b border-border">{title}</h2>
    <div className="text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </motion.div>
);

export default function AvisoPrivacidad() {
  useEffect(() => {
    const cleanSeo = applySeo({
      title: 'Aviso de Privacidad | Neuropsicóloga Karen Trujillo | Cancún',
      description:
        'Aviso de Privacidad de Karen Trujillo, Neuropsicóloga en Cancún. Conoce cómo se recopilan, usan y protegen tus datos personales conforme a la LFPDPPP.',
      canonical: 'https://psicologakarentrujillo.com.mx/aviso-de-privacidad',
      ogTitle: 'Aviso de Privacidad | Karen Trujillo Neuropsicóloga',
      ogDescription:
        'Consulta el aviso de privacidad de la Neuropsicóloga Karen Trujillo. Protección de datos personales y sensibles conforme a la ley mexicana.',
    });
    return () => { cleanSeo(); };
  }, []);

  return (
    <div className="antialiased selection:bg-accent-blue selection:text-primary">
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative pt-40 pb-16 px-6 bg-soft-gradient overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
                <li>/</li>
                <li className="text-primary font-medium">Aviso de Privacidad</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm mb-6">
              <Shield className="w-3 h-3 text-success" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Protección de datos · LFPDPPP</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Aviso de <span className="italic text-primary-light">Privacidad</span>
            </h1>
            <p className="text-muted-foreground font-light max-w-2xl">
              De conformidad con la <strong className="text-primary">Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong>,
              su Reglamento y los Lineamientos del Aviso de Privacidad, Karen Trujillo pone a su disposición el presente aviso de privacidad.
            </p>
            <p className="text-[10px] text-muted-foreground mt-4 uppercase tracking-widest">Última actualización: Enero 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6 bg-card">
          <div className="max-w-4xl mx-auto">

            {/* Identity of Responsible */}
            <Section title="I. Identidad y Domicilio del Responsable">
              <p>
                <strong className="text-primary">Karen Trujillo</strong>, Neuropsicóloga con Cédula Federal <strong className="text-primary">11009616</strong>,
                con domicilio en SM200 M49 L2, Hacienda de Chinconcuac, Circuito casa 1587B, C.P. 77539, Cancún, Quintana Roo, México,
                es responsable del uso y protección de sus datos personales.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-4">
                <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <Mail className="w-4 h-4 text-accent-blue shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email</p>
                    <a href="mailto:karentrujillopsic@gmail.com" className="text-xs font-medium text-primary hover:underline">karentrujillopsic@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <Phone className="w-4 h-4 text-accent-blue shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Teléfono</p>
                    <a href="tel:529983211547" className="text-xs font-medium text-primary hover:underline">+52 998 321 1547</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <MapPin className="w-4 h-4 text-accent-blue shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Ubicación</p>
                    <p className="text-xs font-medium text-primary">Cancún, Q. Roo</p>
                  </div>
                </div>
              </div>
            </Section>

            <Section title="II. Datos Personales que se Recaban">
              <p>Para llevar a cabo las finalidades descritas en este aviso de privacidad, se podrán recabar las siguientes categorías de datos personales:</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 bg-secondary rounded-lg border border-border">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Datos de Identificación</p>
                  <ul className="space-y-1 text-xs list-disc list-inside text-muted-foreground">
                    <li>Nombre completo</li>
                    <li>Fecha de nacimiento</li>
                    <li>Género</li>
                    <li>Nacionalidad</li>
                    <li>Domicilio</li>
                  </ul>
                </div>
                <div className="p-4 bg-secondary rounded-lg border border-border">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Datos de Contacto</p>
                  <ul className="space-y-1 text-xs list-disc list-inside text-muted-foreground">
                    <li>Número de teléfono / WhatsApp</li>
                    <li>Correo electrónico</li>
                    <li>Nombre y datos del tutor (menores de edad)</li>
                  </ul>
                </div>
                <div className="p-4 bg-accent-pink/10 rounded-lg border border-accent-pink/20 sm:col-span-2">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">⚠ Datos Personales Sensibles</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    En el ejercicio de la actividad clínica neuropsicológica, se recopilan datos considerados <strong className="text-primary">sensibles</strong> conforme al artículo 3, fracción VI de la LFPDPPP:
                  </p>
                  <ul className="space-y-1 text-xs list-disc list-inside text-muted-foreground">
                    <li>Historial clínico y médico</li>
                    <li>Diagnósticos psicológicos y neuropsicológicos</li>
                    <li>Resultados de pruebas estandarizadas</li>
                    <li>Información sobre desarrollo psicomotor (en menores)</li>
                    <li>Información sobre desempeño escolar y laboral</li>
                    <li>Datos familiares relacionados con la anamnesis clínica</li>
                  </ul>
                  <p className="text-[11px] text-muted-foreground mt-3 italic">
                    El tratamiento de datos sensibles requiere su consentimiento expreso, el cual se recabará mediante firma de consentimiento informado al inicio del proceso clínico.
                  </p>
                </div>
              </div>
            </Section>

            <Section title="III. Finalidades del Tratamiento de Datos">
              <p><strong className="text-primary">Finalidades primarias</strong> (necesarias para la relación clínica):</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>Realizar la valoración neuropsicológica solicitada (TDAH, Autismo/TEA u otras)</li>
                <li>Integrar el expediente clínico y elaborar el informe diagnóstico</li>
                <li>Comunicarse con el paciente y/o sus tutores durante el proceso</li>
                <li>Dar seguimiento a recomendaciones terapéuticas post-evaluación</li>
                <li>Cumplir con obligaciones legales derivadas del ejercicio profesional</li>
              </ul>
              <p className="mt-4"><strong className="text-primary">Finalidades secundarias</strong> (no esenciales; puede oponerse a ellas):</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>Envío de información sobre nuevos servicios o recursos clínicos relacionados</li>
                <li>Invitación a participar en encuestas de satisfacción (anónimas)</li>
              </ul>
              <p className="mt-3 text-xs italic">
                Si no desea que sus datos sean tratados para las finalidades secundarias, puede comunicarlo en cualquier momento a través de los medios indicados en la sección I.
              </p>
            </Section>

            <Section title="IV. Transferencia de Datos Personales">
              <p>
                Los datos personales <strong className="text-primary">no serán transferidos</strong> a terceros sin su consentimiento expreso, salvo en los casos previstos en el artículo 37 de la LFPDPPP, incluyendo:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Cuando sea necesario por mandato de autoridad competente (judicial, administrativa o de salud)</li>
                <li>Cuando sea requerido para la atención de una emergencia médica que ponga en riesgo su vida</li>
                <li>Cuando sea necesario para el cumplimiento de una obligación legal</li>
              </ul>
              <p className="mt-3">
                Eventualmente, con fines exclusivamente de apoyo técnico (ej. plataformas de videollamada para sesiones en línea), se podrán compartir datos mínimos de contacto con proveedores de servicios que actúan como <em>encargados</em> bajo estrictas medidas de confidencialidad y sin facultad para darles uso propio.
              </p>
            </Section>

            <Section title="V. Derechos ARCO">
              <p>
                Tiene derecho a <strong className="text-primary">Acceder, Rectificar, Cancelar u Oponerse (ARCO)</strong> al tratamiento de sus datos personales,
                así como a revocar el consentimiento otorgado y ejercer el derecho a la portabilidad de datos.
              </p>
              <p className="mt-3">Para ejercer estos derechos, deberá presentar una solicitud escrita dirigida a:</p>
              <div className="mt-3 p-4 bg-secondary rounded-lg border border-border text-xs">
                <p><strong>Karen Trujillo — Responsable de Datos Personales</strong></p>
                <p>Correo: <a href="mailto:karentrujillopsic@gmail.com" className="text-primary hover:underline">karentrujillopsic@gmail.com</a></p>
                <p>Asunto: Ejercicio de Derechos ARCO</p>
              </div>
              <p className="mt-3">La solicitud deberá contener:</p>
              <ul className="list-disc list-inside space-y-1 mt-1 text-xs">
                <li>Nombre completo y datos de contacto del titular</li>
                <li>Descripción clara del derecho que desea ejercer</li>
                <li>Documento que acredite su identidad (identificación oficial)</li>
              </ul>
              <p className="mt-3">
                La respuesta se emitirá en un plazo máximo de <strong className="text-primary">20 días hábiles</strong> contados a partir de la recepción de la solicitud completa.
              </p>
            </Section>

            <Section title="VI. Uso de Cookies y Tecnologías de Rastreo">
              <p>
                Este sitio web puede utilizar cookies y tecnologías similares para fines técnicos (funcionamiento del sitio) y analíticos (medición de tráfico a través de herramientas como Google Analytics).
              </p>
              <p>
                Las cookies analíticas recopilan información de forma <strong className="text-primary">anónima y agregada</strong> sobre el uso del sitio, y no se vinculan con datos de identificación personal. Puede deshabilitar el uso de cookies a través de la configuración de su navegador, aunque esto puede afectar el funcionamiento del sitio.
              </p>
            </Section>

            <Section title="VII. Medidas de Seguridad">
              <p>
                Se implementan medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción, uso, acceso o divulgación no autorizados, conforme a lo establecido en el Reglamento de la LFPDPPP.
              </p>
              <p>
                El expediente clínico se maneja con estricta confidencialidad, de acuerdo con las normas éticas del ejercicio profesional psicológico en México (<strong className="text-primary">Código Ético del Psicólogo</strong>, Sociedad Mexicana de Psicología).
              </p>
            </Section>

            <Section title="VIII. Cambios al Aviso de Privacidad">
              <p>
                Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para atender reformas legislativas, políticas internas o nuevos requerimientos.
              </p>
              <p>
                Cualquier cambio será notificado a través del sitio web <strong className="text-primary">psicologakarentrujillo.com.mx</strong> con al menos 30 días de anticipación a su entrada en vigor. La fecha de la última actualización aparece en la parte superior de este aviso.
              </p>
            </Section>

            <Section title="IX. Instancia de Reclamación">
              <p>
                Si considera que sus derechos han sido vulnerados o que el tratamiento de sus datos no ha sido adecuado, tiene derecho a acudir al <strong className="text-primary">Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)</strong>:
              </p>
              <a
                href="https://home.inai.org.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-xs font-bold text-accent-blue hover:underline"
              >
                www.inai.org.mx →
              </a>
            </Section>

            {/* CTA */}
            <div className="mt-12 p-8 bg-secondary rounded-2xl border border-border flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
              <div>
                <p className="font-bold text-primary text-sm mb-1">¿Tienes preguntas sobre este aviso?</p>
                <p className="text-xs text-muted-foreground">Contáctame directamente y con gusto resolveré tus dudas.</p>
              </div>
              <a
                href="mailto:karentrujillopsic@gmail.com"
                className="shrink-0 bg-gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-lg hover:opacity-90 transition-all inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Enviar consulta
              </a>
            </div>

            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-3 h-3" /> Volver al inicio
              </Link>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
