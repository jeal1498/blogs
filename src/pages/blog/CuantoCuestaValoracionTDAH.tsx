import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertCircle, DollarSign, Calendar, FileText, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { applySeo, injectSchema } from '@/lib/seo';

const faqItems = [
  {
    q: '¿Cuánto cuesta una valoración de TDAH en Cancún?',
    a: 'La valoración neuropsicológica de TDAH en Cancún con la Neuropsicóloga Karen Trujillo tiene un costo de $7,000 pesos mexicanos (MXN). Este precio incluye todas las sesiones del proceso (4 a 5 citas), la aplicación de instrumentos estandarizados internacionales, el análisis clínico y el informe final con cédula federal 11009616.',
  },
  {
    q: '¿Se puede pagar la valoración de TDAH en parcialidades?',
    a: 'Sí. El pago se puede distribuir a lo largo de las sesiones del proceso de valoración, que se extienden entre 2 y 3 semanas. Esto permite que el costo total no se concentre en un solo momento.',
  },
  {
    q: '¿Por qué una valoración de TDAH cuesta $7,000 pesos?',
    a: 'El costo refleja el uso de instrumentos estandarizados internacionales (como CONNERS-3, WISC-V y BRIEF-2 para niños, o CAARS y DIVA 2.0 para adultos), que tienen un costo de aplicación y de actualización clínica. Además incluye 4 a 5 sesiones de trabajo directo con el paciente y la familia, análisis de resultados y elaboración del informe clínico con validez oficial.',
  },
  {
    q: '¿El informe de valoración de TDAH tiene validez ante la escuela o el IMSS?',
    a: 'Sí. El informe emitido por la Neuropsicóloga Karen Trujillo está respaldado por cédula profesional federal 11009616 y tiene validez ante instituciones educativas, SEP, IMSS y dependencias gubernamentales. Puede usarse para solicitar adecuaciones curriculares, apoyos escolares o trámites institucionales.',
  },
  {
    q: '¿Qué pasa si solo quiero una opinión rápida sobre si mi hijo tiene TDAH?',
    a: 'Una valoración neuropsicológica no es una opinión: es un diagnóstico clínico fundamentado en datos objetivos. No existe un atajo confiable al proceso completo. Diagnósticos rápidos sin instrumentos estandarizados no tienen validez oficial y pueden llevar a intervenciones incorrectas.',
  },
  {
    q: '¿La valoración de TDAH en Cancún es presencial o puede ser online?',
    a: 'La valoración de TDAH requiere sesiones presenciales en Cancún, Quintana Roo, ya que implica la aplicación directa de pruebas estandarizadas que no pueden realizarse de forma remota con la misma validez clínica.',
  },
];

const loQueIncluye = [
  { icon: Calendar, label: '4 a 5 sesiones clínicas', desc: 'Entrevista inicial, aplicación de pruebas, cuestionarios y sesión de devolución.' },
  { icon: FileText, label: 'Informe clínico completo', desc: 'Diagnóstico diferencial, perfil neuropsicológico y plan de intervención.' },
  { icon: Shield, label: 'Validez oficial (cédula 11009616)', desc: 'Reconocido ante SEP, IMSS, escuelas e instituciones gubernamentales.' },
  { icon: CheckCircle2, label: 'Instrumentos estandarizados', desc: 'CONNERS-3, WISC-V, BRIEF-2 (niños) / CAARS, DIVA 2.0, CPT-3 (adultos).' },
  { icon: ArrowRight, label: 'Sesión de devolución a padres', desc: 'Explicación detallada del diagnóstico y recomendaciones concretas de acción.' },
  { icon: DollarSign, label: 'Pago distribuido en sesiones', desc: 'El costo total se puede repartir a lo largo del proceso de 2 a 3 semanas.' },
];

const comparativa = [
  {
    aspecto: 'Instrumentos utilizados',
    barato: 'Escalas de síntomas no estandarizadas o entrevista clínica informal',
    karen: 'CONNERS-3, WISC-V, BRIEF-2, CPT-3 — estandarizados internacionalmente',
  },
  {
    aspecto: 'Validez del informe',
    barato: 'Sin cédula federal o con cédula estatal solamente',
    karen: 'Informe con cédula federal 11009616 — válido ante SEP, IMSS e instituciones',
  },
  {
    aspecto: 'Diagnóstico diferencial',
    barato: 'Difícil distinguir TDAH de ansiedad, dificultades de aprendizaje u otros cuadros',
    karen: 'Perfil neuropsicológico completo que descarta o confirma otras condiciones',
  },
  {
    aspecto: 'Recomendaciones escolares',
    barato: 'Genéricas o inexistentes',
    karen: 'Adecuaciones curriculares específicas para solicitar ante la escuela',
  },
];

export default function CuantoCuestaValoracionTDAH() {
  useEffect(() => {
    const cleanSeo = applySeo({
      title: '¿Cuánto cuesta una valoración de TDAH en Cancún? | Neuropsicóloga Karen Trujillo',
      description: 'La valoración neuropsicológica de TDAH en Cancún cuesta $7,000 MXN. Incluye 4-5 sesiones, instrumentos estandarizados (CONNERS-3, WISC-V) e informe con cédula federal 11009616 válido ante SEP e IMSS.',
      canonical: 'https://psicologakarentrujillo.com.mx/blog/cuanto-cuesta-valoracion-tdah-cancun',
      ogTitle: '¿Cuánto cuesta una valoración de TDAH en Cancún? | Karen Trujillo',
      ogDescription: 'Precio de la valoración de TDAH en Cancún: $7,000 MXN. Pago distribuido en sesiones. Informe con cédula 11009616 válido ante SEP e IMSS. Neuropsicóloga Karen Trujillo.',
    });

    const cleanSchema = injectSchema('schema-blog-costo-tdah', {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: '¿Cuánto cuesta una valoración de TDAH en Cancún?',
          description: 'Guía completa sobre el costo de la valoración neuropsicológica de TDAH en Cancún: qué incluye, cómo se paga y qué diferencia a un diagnóstico de calidad.',
          url: 'https://psicologakarentrujillo.com.mx/blog/cuanto-cuesta-valoracion-tdah-cancun',
          datePublished: '2025-01-01',
          dateModified: '2025-01-01',
          author: {
            '@type': 'Person',
            name: 'Karen Trujillo',
            jobTitle: 'Neuropsicóloga',
            hasCredential: { '@type': 'EducationalOccupationalCredential', credentialId: '11009616' },
            worksFor: {
              '@type': 'MedicalBusiness',
              name: 'Neuropsicóloga Karen Trujillo — Neuropsicología',
              address: { '@type': 'PostalAddress', addressLocality: 'Cancún', addressRegion: 'Quintana Roo', addressCountry: 'MX' },
            },
          },
          publisher: {
            '@type': 'Organization',
            name: 'Neuropsicóloga Karen Trujillo — Neuropsicología TDAH y Autismo',
            url: 'https://psicologakarentrujillo.com.mx',
          },
          about: { '@type': 'MedicalCondition', name: 'Trastorno por Déficit de Atención e Hiperactividad (TDAH)' },
          mainEntity: {
            '@type': 'Offer',
            name: 'Valoración Neuropsicológica de TDAH en Cancún',
            price: '7000',
            priceCurrency: 'MXN',
            description: 'Proceso completo de valoración neuropsicológica de TDAH que incluye 4-5 sesiones, instrumentos estandarizados internacionales e informe clínico con cédula federal 11009616.',
            seller: {
              '@type': 'Person',
              name: 'Karen Trujillo',
              hasCredential: { '@type': 'EducationalOccupationalCredential', credentialId: '11009616' },
            },
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://psicologakarentrujillo.com.mx' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://psicologakarentrujillo.com.mx/blog' },
              { '@type': 'ListItem', position: 3, name: '¿Cuánto cuesta una valoración de TDAH en Cancún?', item: 'https://psicologakarentrujillo.com.mx/blog/cuanto-cuesta-valoracion-tdah-cancun' },
            ],
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqItems.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
        {
          '@type': 'MedicalBusiness',
          name: 'Neuropsicóloga Karen Trujillo — Neuropsicología TDAH y Autismo',
          url: 'https://psicologakarentrujillo.com.mx',
          telephone: '+529983211547',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Cancún',
            addressRegion: 'Quintana Roo',
            addressCountry: 'MX',
          },
          priceRange: '$$',
          medicalSpecialty: 'Neuropsicología',
        },
      ],
    });

    return () => { cleanSeo(); cleanSchema(); };
  }, []);

  return (
    <div className="antialiased selection:bg-accent-blue selection:text-primary pb-24 lg:pb-0">
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative min-h-[65vh] flex items-center justify-center pt-40 pb-20 px-6 overflow-hidden bg-soft-gradient">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-sand/40 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center gap-2 text-xs text-muted-foreground flex-wrap">
                <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
                <li>/</li>
                <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li>/</li>
                <li className="text-primary font-medium">Costo valoración TDAH Cancún</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm mb-6">
              <DollarSign className="w-3 h-3 text-primary" aria-hidden="true" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Precios y proceso · Cancún, Quintana Roo</span>
            </div>

            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-primary leading-[1.15] mb-6">
                ¿Cuánto cuesta una valoración<br />
                <span className="gradient-text font-normal italic">de TDAH en Cancún?</span>
              </h1>

              {/* Respuesta directa — AEO: featured snippet bait */}
              <div className="max-w-2xl mx-auto bg-card border-2 border-primary/10 rounded-2xl p-6 shadow-lg mb-8 text-left">
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-2">Respuesta directa</p>
                <p className="text-primary font-bold text-xl mb-1">$7,000 pesos mexicanos (MXN)</p>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  Incluye el proceso completo: 4 a 5 sesiones, aplicación de instrumentos estandarizados internacionales,
                  análisis de resultados e informe clínico con <strong className="text-primary">cédula federal 11009616</strong> — válido ante
                  escuelas, SEP e IMSS. El pago se puede distribuir a lo largo del proceso.
                </p>
              </div>

              <a
                href="https://wa.me/529983211547?text=Hola%20Karen,%20quiero%20información%20sobre%20el%20costo%20de%20la%20valoración%20de%20TDAH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-primary hover:opacity-90 text-primary-foreground py-4 px-10 rounded-lg font-bold text-xs shadow-xl shadow-primary/25 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-widest"
              >
                Preguntar por WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </motion.header>
          </div>
        </section>

        {/* ── Introducción ── */}
        <section className="py-20 px-6 bg-card">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose-custom"
            >
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Una de las preguntas más frecuentes que recibe la <strong>Neuropsicóloga Karen Trujillo</strong> en Cancún es: <em>"¿Cuánto cuesta?"</em>.
                Es una pregunta completamente válida, y que merece una respuesta honesta y directa — no evasiva.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                El precio de una valoración neuropsicológica de TDAH en Cancún varía dependiendo del profesional, los instrumentos
                utilizados y si el proceso incluye informe con validez oficial. En este artículo explicamos exactamente qué cuesta,
                qué incluye ese costo, y por qué la diferencia de precio entre opciones no siempre es ahorro.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light">
                Si lo que buscas es solo el número: <strong className="text-primary">$7,000 MXN</strong>. Si quieres entender qué recibes
                a cambio de ese costo, sigue leyendo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Qué incluye ── */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                ¿Qué incluye la valoración de TDAH por $7,000 MXN?
              </h2>
              <p className="text-muted-foreground font-light mb-10 max-w-3xl leading-relaxed">
                El precio cubre el <strong className="text-primary">proceso completo de diagnóstico</strong>, no una consulta aislada.
                Una valoración neuropsicológica formal requiere múltiples sesiones y el uso de herramientas clínicas que tienen
                un costo de adquisición y actualización. Esto es lo que está incluido:
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {loQueIncluye.map((item) => (
                  <article
                    key={item.label}
                    className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-primary text-sm mb-2">{item.label}</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Pago en parcialidades ── */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                ¿Se puede pagar en parcialidades?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Sí. El proceso de valoración se desarrolla a lo largo de <strong className="text-primary">4 a 5 sesiones repartidas en 2 a 3 semanas</strong>,
                lo que permite distribuir el costo de forma natural durante el proceso. No tienes que pagar el total el primer día.
              </p>

              <div className="bg-accent-blue/10 border border-accent-blue/30 rounded-xl p-6 mb-6">
                <p className="text-sm font-bold text-primary mb-3">¿Cómo funciona el proceso de pago?</p>
                <ol className="space-y-2 text-sm text-muted-foreground font-light">
                  <li className="flex gap-3"><span className="font-bold text-primary shrink-0">01</span> Entrevista inicial con padres — primera aportación</li>
                  <li className="flex gap-3"><span className="font-bold text-primary shrink-0">02</span> Sesiones de aplicación de pruebas — aportaciones intermedias</li>
                  <li className="flex gap-3"><span className="font-bold text-primary shrink-0">03</span> Sesión de devolución e informe — cierre del proceso</li>
                </ol>
              </div>

              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                El esquema de pago exacto se acuerda directamente con la Neuropsicóloga Karen Trujillo al inicio del proceso, según
                las necesidades de cada familia. Puedes consultarlo por WhatsApp antes de agendar.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Por qué cuesta lo que cuesta ── */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                ¿Por qué una valoración de TDAH cuesta $7,000 pesos?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                La pregunta implícita que muchos hacen es: <em>"¿No hay una opción más barata?"</em>. La respuesta corta es sí,
                pero la diferencia no es solo de precio — es de lo que obtienes.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-primary text-sm mb-1">Instrumentos con costo de aplicación real</p>
                    <p className="text-sm text-muted-foreground font-light">Las pruebas estandarizadas como el CONNERS-3, WISC-V o BRIEF-2 tienen un costo de adquisición, actualización y capacitación para el profesional. No son cuestionarios descargados de internet.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-primary text-sm mb-1">Tiempo clínico real: 4 a 5 sesiones de trabajo</p>
                    <p className="text-sm text-muted-foreground font-light">Una valoración de TDAH no es una consulta de 30 minutos. Implica una entrevista clínica profunda, varias sesiones de aplicación de pruebas, análisis de resultados y elaboración del informe. Es un trabajo clínico de semanas.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-primary text-sm mb-1">Informe con valor legal y escolar</p>
                    <p className="text-sm text-muted-foreground font-light">El informe de la Neuropsicóloga Karen Trujillo está respaldado por cédula federal 11009616 y tiene validez ante la SEP, el IMSS y las instituciones educativas de Cancún y todo México. Eso no es accesorio — es el propósito del diagnóstico.</p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-accent-sand/30 border border-accent-sand rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-warning shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>Un diagnóstico barato puede salir caro.</strong> Si el informe no tiene cédula federal, la escuela puede
                    rechazarlo. Si las pruebas no son estandarizadas, el diagnóstico puede ser incorrecto. Un niño o adulto mal
                    diagnosticado recibe el tratamiento equivocado — y eso tiene un costo que ningún descuento compensa.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Comparativa ── */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                ¿Qué diferencia una valoración de calidad de una que no lo es?
              </h2>
              <p className="text-muted-foreground font-light mb-10 max-w-3xl leading-relaxed">
                No todas las valoraciones son iguales. Estas son las diferencias clave entre una evaluación neuropsicológica
                profesional y opciones que pueden parecer más accesibles:
              </p>

              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary border-b border-border">
                      <th className="text-left p-4 font-bold text-primary text-xs uppercase tracking-widest">Aspecto</th>
                      <th className="text-left p-4 font-bold text-muted-foreground text-xs uppercase tracking-widest">Opción de menor precio</th>
                      <th className="text-left p-4 font-bold text-primary text-xs uppercase tracking-widest">Neuropsicóloga Karen Trujillo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparativa.map((row, i) => (
                      <tr key={row.aspecto} className={`border-b border-border last:border-0 ${i % 2 === 0 ? 'bg-card' : 'bg-secondary/40'}`}>
                        <td className="p-4 font-bold text-primary text-xs">{row.aspecto}</td>
                        <td className="p-4 text-muted-foreground font-light">{row.barato}</td>
                        <td className="p-4 text-foreground font-medium">{row.karen}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA central ── */}
        <section className="py-24 px-6 bg-gradient-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FileText className="w-12 h-12 text-accent-blue mx-auto mb-6" aria-hidden="true" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold italic mb-4">
                Un diagnóstico correcto no es un gasto.<br />Es una inversión.
              </h2>
              <p className="text-primary-foreground/80 font-light mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
                Un niño sin diagnóstico puede pasar años siendo etiquetado como "flojo" o "difícil". Un adulto sin diagnóstico
                puede pasar décadas culpándose de algo que tiene nombre y tratamiento. $7,000 MXN es el costo del proceso.
                Lo que viene después — claridad, estrategia, intervención correcta — no tiene precio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/529983211547?text=Hola%20Karen,%20me%20interesa%20agendar%20una%20valoración%20de%20TDAH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-bold text-xs uppercase tracking-widest px-10 py-4 rounded-lg hover:opacity-90 transition-all shadow-lg"
                >
                  Agendar valoración <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/evaluacion-tdah-ninos"
                  className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 font-bold text-xs uppercase tracking-widest px-10 py-4 rounded-lg hover:bg-primary-foreground/20 transition-all"
                >
                  Ver proceso completo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-center">
                Preguntas frecuentes sobre el costo de la valoración de TDAH
              </h2>
              <p className="text-muted-foreground font-light text-center mb-12 max-w-2xl mx-auto">
                Estas son las dudas más comunes que reciben antes de agendar. Si la tuya no está aquí,
                puedes escribir directamente por WhatsApp.
              </p>

              <div className="space-y-4">
                {faqItems.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-card border-2 border-border hover:border-accent-blue rounded-xl transition-all open:border-primary open:shadow-lg"
                  >
                    <summary className="p-6 font-bold text-primary cursor-pointer list-none flex justify-between items-center gap-4">
                      <span>{faq.q}</span>
                      <span className="text-muted-foreground shrink-0 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                    </summary>
                    <p className="px-6 pb-6 text-muted-foreground text-sm font-light leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Sobre Karen (E-E-A-T signal) ── */}
        <section className="py-24 px-6 bg-card border-t border-border">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-8 text-center">Sobre la autora</p>

              <div className="bg-secondary rounded-2xl border border-border overflow-hidden">
                <div className="flex flex-col md:flex-row">

                  {/* Foto */}
                  <div className="md:w-56 shrink-0">
                    <div className="w-full h-64 md:h-full relative overflow-hidden">
                      <img
                        src="/images/psicologa-karen-trujillo.webp"
                        alt="Neuropsicóloga Karen Trujillo, neuropsicóloga especialista en TDAH y Autismo en Cancún"
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent md:bg-gradient-to-r" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-8 flex flex-col justify-center gap-5">
                    <div>
                      <h3 className="font-serif font-bold text-2xl text-primary mb-1">Neuropsicóloga Karen Trujillo</h3>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Neuropsicóloga · Cancún, Quintana Roo</p>
                    </div>

                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Especialista en evaluación neuropsicológica de TDAH y Autismo, egresada de la
                      <strong className="text-primary"> Universidad Modelo de Quintana Roo</strong>. Con más de
                      <strong className="text-primary"> 7 años de experiencia clínica</strong> en Cancún, sus diagnósticos
                      combinan rigor científico con instrumentos estandarizados internacionales como CONNERS-3, WISC-V, ADOS-2 y BRIEF-2.
                    </p>

                    {/* Credenciales */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { label: 'Cédula Federal', value: '11009616' },
                        { label: 'Experiencia', value: '7+ años' },
                        { label: 'Especialidad', value: 'TDAH · Autismo' },
                        { label: 'Colegio', value: 'Neuropsicóloga Q. Roo' },
                        { label: 'Atención', value: 'Cancún & Online' },
                        { label: 'Reseñas', value: '18 ⭐ 5/5' },
                      ].map((c) => (
                        <div key={c.label} className="bg-card rounded-lg p-3 border border-border">
                          <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mb-0.5">{c.label}</p>
                          <p className="text-xs font-bold text-primary">{c.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* CTA autor */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-1">
                      <a
                        href="https://wa.me/529983211547?text=Hola%20Karen,%20leí%20tu%20artículo%20y%20quiero%20información%20sobre%20la%20valoración"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-lg hover:opacity-90 transition-all shadow-md"
                      >
                        Agendar con Karen <ArrowRight className="w-3 h-3" />
                      </a>
                      <Link
                        to="/#sobre-mi"
                        className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline px-2 py-3"
                      >
                        Ver perfil completo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Artículos relacionados / enlaces internos ── */}
        <section className="py-16 px-6 bg-secondary border-t border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-serif font-bold text-primary mb-8 text-center">También puede interesarte</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                to="/evaluacion-tdah-ninos"
                className="p-5 bg-card border border-border rounded-xl hover:border-primary hover:shadow-md transition-all group"
              >
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold block mb-2">Servicio</span>
                <span className="font-bold text-primary text-sm group-hover:underline">Valoración TDAH Infantil en Cancún</span>
                <span className="block text-xs text-muted-foreground mt-1 font-light">Niños de 5 a 17 años</span>
              </Link>
              <Link
                to="/evaluacion-tdah-adultos"
                className="p-5 bg-card border border-border rounded-xl hover:border-primary hover:shadow-md transition-all group"
              >
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold block mb-2">Servicio</span>
                <span className="font-bold text-primary text-sm group-hover:underline">Valoración TDAH Adultos en Cancún</span>
                <span className="block text-xs text-muted-foreground mt-1 font-light">Desde 18 años</span>
              </Link>
              <Link
                to="/evaluacion-autismo-cancun"
                className="p-5 bg-card border border-border rounded-xl hover:border-primary hover:shadow-md transition-all group"
              >
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold block mb-2">Servicio</span>
                <span className="font-bold text-primary text-sm group-hover:underline">Diagnóstico Autismo (TEA) en Cancún</span>
                <span className="block text-xs text-muted-foreground mt-1 font-light">Desde 2 años</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
