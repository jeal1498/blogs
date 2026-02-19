import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, AlertCircle, CheckCircle2, Heart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { applySeo, injectSchema } from '@/lib/seo';

const diferencias = [
  {
    aspecto: 'Presentación predominante',
    ninos: 'Hiperactivo-impulsivo: se mueve, interrumpe, no puede esperar',
    ninas: 'Inatento: "está en las nubes", dispersa, se distrae en silencio',
  },
  {
    aspecto: 'Visibilidad en el aula',
    ninos: 'Alta — el maestro lo nota porque genera disrupción',
    ninas: 'Baja — es "tranquila pero despistada", no molesta',
  },
  {
    aspecto: 'Mecanismo de compensación',
    ninos: 'Raramente compensa; las dificultades son visibles',
    ninas: 'Compensa con esfuerzo extra, perfeccionismo o ayuda de otros',
  },
  {
    aspecto: 'Impacto emocional',
    ninos: 'Más externalizado: frustración, impulsividad, enojo',
    ninas: 'Más internalizado: ansiedad, baja autoestima, culpa crónica',
  },
  {
    aspecto: 'Edad promedio de diagnóstico',
    ninos: '7-8 años',
    ninas: '12-16 años (o nunca, si no se diagnostica en infancia)',
  },
  {
    aspecto: 'Señales de alerta frecuentes',
    ninos: 'Hiperactividad motora, impulsividad verbal, problemas de conducta',
    ninas: 'Desorganización, olvidos, llanto fácil, hipersensibilidad emocional',
  },
];

const senalesNinas = [
  {
    categoria: 'En el ámbito escolar',
    color: 'bg-accent-blue/10 border-accent-blue/30',
    dot: 'bg-accent-blue',
    items: [
      'Sus calificaciones son irregulares — buenas en materias que le gustan, bajas en las que no',
      'Tarda el doble que sus compañeras en terminar tareas o exámenes',
      'Olvida entregar trabajos que sí hizo; pierde materiales o cuadernos',
      'Tiene dificultad para organizar su mochila, agenda o espacio de trabajo',
      'Lee pero no retiene lo que acaba de leer — tiene que releerlo varias veces',
      'Le cuesta seguir instrucciones de varios pasos sin que alguien se las repita',
    ],
  },
  {
    categoria: 'En el ámbito emocional y social',
    color: 'bg-accent-pink/10 border-accent-pink/30',
    dot: 'bg-accent-pink',
    items: [
      'Es hipersensible a la crítica — una corrección menor puede hacerla llorar desproporcionadamente',
      'Se siente "tonta" aunque los adultos le digan que es inteligente',
      'Le cuesta regular emociones: pasa del entusiasmo al desánimo muy rápido',
      'Tiene pocas amigas cercanas — las relaciones sociales le resultan agotadoras',
      'En conversaciones grupales "pierde el hilo" y no sabe qué decir cuando le toca',
      'Se esfuerza mucho para encajar; imita a otras niñas para saber cómo comportarse',
    ],
  },
  {
    categoria: 'En casa y en la vida cotidiana',
    color: 'bg-accent-sand/30 border-accent-sand',
    dot: 'bg-warning',
    items: [
      'Su cuarto o escritorio siempre están desorganizados a pesar de que "lo ordenó"',
      'Empieza muchas actividades y no termina ninguna (proyectos, hobbies, libros)',
      'Se le olvidan compromisos, tareas del hogar o recados aunque los anotó',
      'Se distrae viendo su propia mente — "se va" a mitad de una conversación',
      'Retrasa sistemáticamente lo que no le gusta (procrastinación crónica)',
      'Al llegar a casa de la escuela está agotada — más de lo que parecería normal',
    ],
  },
];

const consecuencias = [
  {
    icon: Brain,
    titulo: 'Diagnóstico incorrecto',
    desc: 'Muchas niñas con TDAH son diagnosticadas primero con ansiedad, depresión o "problemas emocionales". Reciben tratamiento para el síntoma, no para la causa.',
  },
  {
    icon: Heart,
    titulo: 'Daño a la autoestima',
    desc: 'Años de esforzarse el doble sin entender por qué les cuesta más construyen una narrativa de "soy menos capaz". Esto puede persistir décadas en la adultez.',
  },
  {
    icon: Eye,
    titulo: 'Agotamiento crónico',
    desc: 'La compensación constante — disimular, esforzarse extra, enmascarar — consume una cantidad enorme de energía cognitiva y emocional todos los días.',
  },
  {
    icon: AlertCircle,
    titulo: 'Dificultades en la adultez',
    desc: 'Las niñas no diagnosticadas se convierten en mujeres adultas con TDAH sin diagnosticar: problemas de pareja, laborales, académicos y de salud mental acumulados.',
  },
];

const faqItems = [
  {
    q: '¿Las niñas también tienen TDAH?',
    a: 'Sí. El TDAH en niñas es igual de frecuente que en niños, pero se detecta mucho menos porque los síntomas son distintos. Mientras los niños tienden a ser hiperactivos e impulsivos, las niñas suelen presentar inatención sin hiperactividad visible, lo que hace que pasen desapercibidas en el aula y en casa durante años.',
  },
  {
    q: '¿Por qué se diagnostica tan tarde el TDAH en niñas?',
    a: 'Porque la presentación predominante en niñas — inatención sin hiperactividad motora — no genera disrupción en el aula. Los sistemas de detección se diseñaron observando niños, no niñas. Además, las niñas tienden a compensar mejor con esfuerzo, perfeccionismo o imitación social, lo que enmascara el trastorno ante maestros y padres.',
  },
  {
    q: '¿Qué diferencia hay entre TDAH en niñas y TDAH en niños?',
    a: 'La diferencia principal está en la presentación. Los niños tienden al tipo hiperactivo-impulsivo (visible, disruptivo). Las niñas tienden al tipo inatento (dispersa, despistada, "en las nubes"). El impacto emocional también difiere: las niñas internalizan más, desarrollan ansiedad, baja autoestima y agotamiento por compensación constante.',
  },
  {
    q: '¿A partir de qué edad se puede diagnosticar TDAH en una niña?',
    a: 'El diagnóstico formal de TDAH puede hacerse a partir de los 5 años, aunque muchos casos femeninos se detectan más tarde porque las señales son más sutiles. Cuanto antes se diagnostica, antes puede comenzar la intervención. No hay límite de edad superior — también se diagnostica TDAH en adolescentes y adultas.',
  },
  {
    q: '¿El TDAH en niñas se cura con el tiempo?',
    a: 'El TDAH no "se cura", pero sí cambia su expresión con la edad y puede gestionarse muy bien con el tratamiento adecuado. Un diagnóstico temprano con intervención (apoyo escolar, estrategias cognitivas y, cuando aplica, tratamiento farmacológico) cambia significativamente la trayectoria de vida de una niña con TDAH.',
  },
  {
    q: '¿Cómo se evalúa el TDAH en niñas en Cancún?',
    a: 'La evaluación neuropsicológica de TDAH en niñas en Cancún con la Neuropsicóloga Karen Trujillo utiliza instrumentos estandarizados específicos: CONNERS-3 (con formas para padres y maestros), WISC-V (perfil cognitivo) y BRIEF-2 (funciones ejecutivas). El proceso incluye información de múltiples fuentes — la niña, los padres y los docentes — para capturar la presentación completa.',
  },
];

export default function TDAHNinas() {
  useEffect(() => {
    const cleanSeo = applySeo({
      title: 'TDAH en Niñas: Síntomas que Casi Nadie Detecta | Neuropsicóloga Karen Trujillo Cancún',
      description: 'El TDAH en niñas se diagnostica años más tarde que en niños porque los síntomas son distintos. Inatención sin hiperactividad, hipersensibilidad emocional, agotamiento por compensación. Valoración en Cancún.',
      canonical: 'https://psicologakarentrujillo.com.mx/blog/tdah-en-ninas-sintomas',
      ogTitle: 'TDAH en Niñas: Por Qué Se Detecta Tan Tarde y Cómo Identificarlo',
      ogDescription: 'Las niñas con TDAH rara vez son hiperactivas. Son dispersas, hipersensibles, perfeccionistas agotadas. Aprende a identificar el TDAH femenino. Valoración en Cancún.',
    });

    const cleanSchema = injectSchema('schema-blog-tdah-ninas', {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: 'TDAH en Niñas: Los Síntomas que Casi Nadie Detecta',
          description: 'Guía clínica sobre cómo se presenta el TDAH en niñas, por qué se diagnostica tarde y cuáles son las señales que padres y maestros deben conocer.',
          url: 'https://psicologakarentrujillo.com.mx/blog/tdah-en-ninas-sintomas',
          datePublished: '2025-02-01',
          dateModified: '2025-02-01',
          author: {
            '@type': 'Person',
            name: 'Karen Trujillo',
            jobTitle: 'Neuropsicóloga',
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              credentialId: '11009616',
            },
            worksFor: {
              '@type': 'MedicalBusiness',
              name: 'Neuropsicóloga Karen Trujillo',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Cancún',
                addressRegion: 'Quintana Roo',
                addressCountry: 'MX',
              },
            },
          },
          publisher: {
            '@type': 'Organization',
            name: 'Neuropsicóloga Karen Trujillo — TDAH y Autismo en Cancún',
            url: 'https://psicologakarentrujillo.com.mx',
          },
          about: {
            '@type': 'MedicalCondition',
            name: 'TDAH en niñas',
            code: { '@type': 'MedicalCode', code: 'F90', codingSystem: 'ICD-10' },
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://psicologakarentrujillo.com.mx' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://psicologakarentrujillo.com.mx/blog' },
              { '@type': 'ListItem', position: 3, name: 'TDAH en Niñas: Síntomas que Casi Nadie Detecta', item: 'https://psicologakarentrujillo.com.mx/blog/tdah-en-ninas-sintomas' },
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
          name: 'Neuropsicóloga Karen Trujillo — TDAH y Autismo en Cancún',
          url: 'https://psicologakarentrujillo.com.mx',
          telephone: '+529983211547',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Cancún',
            addressRegion: 'Quintana Roo',
            addressCountry: 'MX',
          },
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
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-pink/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-accent-blue/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center gap-2 text-xs text-muted-foreground flex-wrap">
                <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
                <li>/</li>
                <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li>/</li>
                <li className="text-primary font-medium">TDAH en niñas</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-pink" aria-hidden="true" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">TDAH Femenino · Cancún, Quintana Roo</span>
            </div>

            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-primary leading-[1.15] mb-6">
                TDAH en niñas:<br />
                <span className="gradient-text font-normal italic">los síntomas que casi nadie detecta</span>
              </h1>

              {/* Respuesta directa — AEO snippet */}
              <div className="max-w-2xl mx-auto bg-card border-2 border-primary/10 rounded-2xl p-6 shadow-lg mb-8 text-left">
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-2">En resumen</p>
                <p className="text-foreground leading-relaxed">
                  El TDAH en niñas se diagnostica en promedio <strong className="text-primary">5 a 8 años más tarde</strong> que en niños
                  porque su presentación es diferente: no son hiperactivas ni disruptivas. Son dispersas, hipersensibles,
                  perfeccionistas agotadas que compensan con esfuerzo extra. Y esa compensación enmascara el diagnóstico durante años.
                </p>
              </div>

              <a
                href="https://wa.me/529983211547?text=Hola%20Karen,%20leí%20sobre%20TDAH%20en%20niñas%20y%20quiero%20información%20sobre%20la%20valoración"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-primary hover:opacity-90 text-primary-foreground py-4 px-10 rounded-lg font-bold text-xs shadow-xl shadow-primary/25 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-widest"
              >
                Consultar valoración <ArrowRight className="w-4 h-4" />
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
            >
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Cuando pensamos en un niño con TDAH, la imagen típica es la de un niño que no puede quedarse sentado,
                interrumpe constantemente y actúa antes de pensar. Esa imagen es real — pero solo describe a una parte
                de las personas con TDAH.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Las niñas con TDAH rara vez encajan en esa descripción. No son hiperactivas. No interrumpen al maestro.
                No generan problemas de conducta. Son la niña que "<em>podría rendir más si se esforzara</em>", que siempre
                pierde algo, que llora cuando la corrigen, que se queda mirando la ventana en clase. La niña que nadie señala
                como candidata a una valoración neuropsicológica.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Y eso tiene consecuencias. <strong className="text-primary">El TDAH en niñas se diagnostica, en promedio,
                entre 5 y 8 años más tarde que en niños.</strong> Muchas no reciben diagnóstico en la infancia. Se convierten
                en adolescentes con ansiedad inexplicable, en adultas que llevan décadas sintiéndose menos capaces que los demás
                sin saber por qué.
              </p>
              <div className="bg-accent-pink/10 border-l-4 border-accent-pink rounded-r-xl px-6 py-5 my-8">
                <p className="text-foreground leading-relaxed">
                  <strong>Lo que este artículo explica:</strong> por qué el TDAH femenino pasa tan desapercibido, cuáles son
                  las señales concretas que padres y maestros deben conocer, y qué ocurre cuando no se diagnostica a tiempo.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Por qué pasa desapercibido ── */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                ¿Por qué el TDAH en niñas pasa tanto tiempo sin detectarse?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La respuesta tiene tres partes que se refuerzan entre sí.
              </p>

              <div className="space-y-6">
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-bold text-primary text-lg mb-3">1. Los criterios diagnósticos se construyeron observando niños</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Los primeros estudios de TDAH se realizaron principalmente con poblaciones masculinas. Los criterios del
                    DSM describen síntomas que se manifiestan con más frecuencia en el tipo hiperactivo-impulsivo —
                    predominante en niños. El tipo inatento, más común en niñas, tardó décadas en recibir igual atención clínica.
                  </p>
                </div>

                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-bold text-primary text-lg mb-3">2. Las niñas compensan mejor — y eso las perjudica</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Las niñas con TDAH desarrollan mecanismos de compensación muy efectivos: se esfuerzan más que sus compañeras,
                    piden ayuda, copian estrategias de otras, o simplemente se quedan más tiempo estudiando. El resultado es que
                    sus calificaciones son aceptables y los adultos no ven el problema.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Lo que no se ve es el costo: llegan agotadas a casa, tienen ansiedad anticipatoria antes de los exámenes,
                    y se sienten permanentemente en deuda con su propio potencial.
                  </p>
                </div>

                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-bold text-primary text-lg mb-3">3. Los síntomas se confunden con rasgos de personalidad</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "Es muy sensible", "es despistada por naturaleza", "es perfeccionista como su mamá". Estos son rasgos de
                    personalidad, no un trastorno. Esa interpretación retrasa la búsqueda de evaluación durante años. Cuando
                    las dificultades son síntomas de un TDAH no tratado, etiquetarlas como personalidad cierra la puerta
                    al diagnóstico correcto.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Señales concretas ── */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Señales concretas de TDAH en niñas
              </h2>
              <p className="text-muted-foreground mb-12 max-w-3xl leading-relaxed">
                Estas no son señales genéricas de "niña difícil". Son patrones consistentes que aparecen en múltiples
                contextos — en casa, en la escuela y en las relaciones sociales — y que persisten en el tiempo.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {senalesNinas.map((grupo) => (
                  <article
                    key={grupo.categoria}
                    className={`rounded-xl border-2 p-6 ${grupo.color}`}
                  >
                    <div className="flex items-center gap-2 mb-5">
                      <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${grupo.dot}`} aria-hidden="true" />
                      <h3 className="font-bold text-primary text-sm uppercase tracking-widest">{grupo.categoria}</h3>
                    </div>
                    <ul className="space-y-3">
                      {grupo.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-primary/40 shrink-0 mt-0.5" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="mt-8 p-5 bg-secondary border border-border rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-warning shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>Importante:</strong> La presencia de algunas de estas señales no confirma el diagnóstico de TDAH.
                    Muchas pueden tener otras explicaciones. Lo que sí justifica una valoración formal es cuando varias de estas
                    conductas aparecen de forma <strong>consistente en múltiples contextos</strong> (casa y escuela) y durante
                    más de 6 meses, afectando el rendimiento o el bienestar de la niña.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Diferencias niños vs niñas ── */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                TDAH en niñas vs. niños: las diferencias clave
              </h2>
              <p className="text-muted-foreground mb-10 max-w-3xl leading-relaxed">
                No es que el TDAH sea distinto en niñas — es que se expresa de forma diferente. Esta tabla resume
                las diferencias que todo padre, madre y docente debería conocer:
              </p>

              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="text-left p-4 font-bold text-xs uppercase tracking-widest">Aspecto</th>
                      <th className="text-left p-4 font-bold text-xs uppercase tracking-widest">Niños (típico)</th>
                      <th className="text-left p-4 font-bold text-xs uppercase tracking-widest">Niñas (típico)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {diferencias.map((row, i) => (
                      <tr
                        key={row.aspecto}
                        className={`border-b border-border last:border-0 ${i % 2 === 0 ? 'bg-card' : 'bg-secondary/60'}`}
                      >
                        <td className="p-4 font-bold text-primary text-xs">{row.aspecto}</td>
                        <td className="p-4 text-muted-foreground">{row.ninos}</td>
                        <td className="p-4 text-foreground font-medium">{row.ninas}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Consecuencias de no diagnosticar ── */}
        <section className="py-24 px-6 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                ¿Qué ocurre cuando el TDAH en niñas no se diagnostica?
              </h2>
              <p className="text-muted-foreground mb-10 max-w-3xl leading-relaxed">
                El TDAH no tratado en niñas no "se resuelve solo". Con la adolescencia, las demandas académicas y
                sociales aumentan, los mecanismos de compensación dejan de ser suficientes, y lo que antes era
                manejable se convierte en crisis.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {consecuencias.map((c) => (
                  <article
                    key={c.titulo}
                    className="flex gap-5 p-6 bg-secondary rounded-xl border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">{c.titulo}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-10 bg-accent-pink/10 border border-accent-pink/30 rounded-xl p-6">
                <p className="text-foreground leading-relaxed">
                  <strong>Un dato clínico relevante:</strong> un porcentaje significativo de mujeres adultas diagnosticadas
                  con ansiedad crónica o depresión resistente al tratamiento tienen un TDAH subyacente no identificado.
                  El tratamiento de los síntomas sin atender la causa genera mejoras parciales que nunca se consolidan.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Cómo se evalúa ── */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                ¿Cómo se evalúa el TDAH en niñas en Cancún?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La valoración neuropsicológica de TDAH en niñas requiere un enfoque específico: no basta con aplicar
                los mismos instrumentos que se usan con niños hiperactivos. Es necesario capturar la presentación
                inatenta, el perfil cognitivo completo y el impacto emocional.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                La <strong className="text-primary">Neuropsicóloga Karen Trujillo</strong> en Cancún evalúa el TDAH femenino utilizando:
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { nombre: 'CONNERS-3', uso: 'Escalas estandarizadas de síntomas TDAH con formas específicas para padres, maestros y la niña. Captura la presentación en múltiples contextos.' },
                  { nombre: 'WISC-V', uso: 'Perfil cognitivo completo: inteligencia, memoria de trabajo, velocidad de procesamiento y atención sostenida. Identifica brechas entre potencial y rendimiento.' },
                  { nombre: 'BRIEF-2', uso: 'Inventario de funciones ejecutivas en contexto cotidiano (casa y escuela): organización, planificación, control inhibitorio y regulación emocional.' },
                  { nombre: 'CPT-3', uso: 'Prueba objetiva de atención sostenida e impulsividad con datos cuantificables — complementa las escalas de conducta con medidas directas del desempeño atencional.' },
                ].map((inst) => (
                  <div
                    key={inst.nombre}
                    className="flex gap-4 p-5 bg-card rounded-xl border border-border hover:border-accent-blue transition-colors"
                  >
                    <Brain className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-primary text-sm mb-1">{inst.nombre}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{inst.uso}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                El proceso incluye además <strong className="text-primary">cuestionarios a docentes</strong> — un paso
                fundamental para capturar el comportamiento escolar que los padres no ven directamente — y una entrevista
                clínica profunda con la familia sobre el historial de desarrollo de la niña.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-6 bg-gradient-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold italic mb-6">
                Tu hija no es "muy sensible".<br />Puede ser TDAH.
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
                Años de creer que el problema es el carácter, la crianza o la sensibilidad tienen un costo enorme
                en la autoestima de una niña. Un diagnóstico correcto cambia esa narrativa — y abre la puerta
                al tratamiento correcto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/529983211547?text=Hola%20Karen,%20me%20interesa%20la%20valoración%20de%20TDAH%20para%20mi%20hija"
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
                Preguntas frecuentes sobre TDAH en niñas
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Las dudas más comunes de padres y madres que sospechan que su hija puede tener TDAH.
              </p>
              <div className="space-y-4">
                {faqItems.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-card border-2 border-border hover:border-accent-pink rounded-xl transition-all open:border-primary open:shadow-lg"
                  >
                    <summary className="p-6 font-bold text-primary cursor-pointer list-none flex justify-between items-center gap-4">
                      <span>{faq.q}</span>
                      <span className="text-muted-foreground shrink-0 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                    </summary>
                    <p className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Sobre Karen ── */}
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
                  <div className="md:w-56 shrink-0">
                    <div className="w-full h-64 md:h-full relative overflow-hidden">
                      <img
                        src="/images/psicologa-karen-trujillo.webp"
                        alt="Neuropsicóloga Karen Trujillo, especialista en TDAH y Autismo en Cancún"
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent md:bg-gradient-to-r" />
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center gap-5">
                    <div>
                      <h3 className="font-serif font-bold text-2xl text-primary mb-1">Karen Trujillo</h3>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Neuropsicóloga · Cancún, Quintana Roo</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Especialista en evaluación neuropsicológica de TDAH y Autismo, egresada de la
                      <strong className="text-primary"> Universidad Modelo de Quintana Roo</strong>. Con más de
                      <strong className="text-primary"> 7 años de experiencia clínica</strong> en Cancún y miembro activa del
                      <strong className="text-primary"> Colegio de Psicólogos de Quintana Roo</strong>. Sus diagnósticos
                      combinan rigor científico con instrumentos estandarizados internacionales.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { label: 'Cédula Federal', value: '11009616' },
                        { label: 'Experiencia', value: '7+ años' },
                        { label: 'Especialidad', value: 'TDAH · Autismo' },
                        { label: 'Colegio', value: 'Psic. Q. Roo' },
                        { label: 'Atención', value: 'Cancún & Online' },
                        { label: 'Reseñas', value: '18 ⭐ 5/5' },
                      ].map((c) => (
                        <div key={c.label} className="bg-card rounded-lg p-3 border border-border">
                          <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mb-0.5">{c.label}</p>
                          <p className="text-xs font-bold text-primary">{c.value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 pt-1">
                      <a
                        href="https://wa.me/529983211547?text=Hola%20Karen,%20leí%20tu%20artículo%20sobre%20TDAH%20en%20niñas%20y%20quiero%20información"
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

        {/* ── Artículos relacionados ── */}
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
                <span className="block text-xs text-muted-foreground mt-1">Niños y niñas de 5 a 17 años</span>
              </Link>
              <Link
                to="/blog/cuanto-cuesta-valoracion-tdah-cancun"
                className="p-5 bg-card border border-border rounded-xl hover:border-primary hover:shadow-md transition-all group"
              >
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold block mb-2">Blog</span>
                <span className="font-bold text-primary text-sm group-hover:underline">¿Cuánto cuesta una valoración de TDAH en Cancún?</span>
                <span className="block text-xs text-muted-foreground mt-1">Precios y qué incluye</span>
              </Link>
              <Link
                to="/evaluacion-tdah-adultos"
                className="p-5 bg-card border border-border rounded-xl hover:border-primary hover:shadow-md transition-all group"
              >
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold block mb-2">Servicio</span>
                <span className="font-bold text-primary text-sm group-hover:underline">Valoración TDAH Adultos en Cancún</span>
                <span className="block text-xs text-muted-foreground mt-1">Desde 18 años</span>
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
