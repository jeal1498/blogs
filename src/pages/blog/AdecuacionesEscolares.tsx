import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, FileText, ArrowRight, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import BlogLayout from '@/components/BlogLayout';
import { applySeo, injectSchema } from '@/lib/seo';

const pasos = [
  { n: '01', titulo: 'Obtener el diagnóstico oficial', desc: 'El primer paso es contar con un informe neuropsicológico emitido por un profesional con cédula federal. Sin este documento, la escuela no está obligada a otorgar las adecuaciones.' },
  { n: '02', titulo: 'Solicitar una reunión con dirección y orientación', desc: 'Pide una cita formal con la directora o el orientador escolar. Lleva copias del informe y una carta de solicitud por escrito. Que quede registro.' },
  { n: '03', titulo: 'Presentar el informe y las recomendaciones', desc: 'El informe neuropsicológico ya incluye las adecuaciones curriculares específicas recomendadas (tiempo extra, asiento preferencial, exámenes orales, entre otras). Esto facilita que la escuela sepa exactamente qué implementar.' },
  { n: '04', titulo: 'Solicitar el Plan de Intervención Individualizado (PII)', desc: 'En escuelas públicas bajo el sistema SEP, puedes solicitar formalmente un PII o adecuación curricular documentada. Guarda copias de todo lo que firmes.' },
  { n: '05', titulo: 'Dar seguimiento por escrito', desc: 'Documenta cada avance o negativa. Si la escuela se niega sin justificación, puedes acudir a la Unidad de Educación Especial y Educativa (USAER) de tu zona o presentar una queja ante la SEP local.' },
];

const adecuaciones = [
  { tipo: 'Tiempo de examen', desc: 'Tiempo adicional (25-50% más) para completar evaluaciones escritas.' },
  { tipo: 'Entorno', desc: 'Asiento preferencial al frente, lejos de ventanas o pasillos de alto tráfico.' },
  { tipo: 'Instrucciones', desc: 'Indicaciones divididas en pasos cortos, preferiblemente escritas y visuales.' },
  { tipo: 'Evaluaciones alternativas', desc: 'Posibilidad de presentar exámenes de forma oral o en sesiones más cortas.' },
  { tipo: 'Descansos estructurados', desc: 'Pausas breves durante actividades largas para regular la atención.' },
  { tipo: 'Tareas adaptadas', desc: 'Reducción de cantidad (no de nivel) en tareas cuando sea pertinente.' },
];

const faqItems = [
  {
    q: '¿Qué son las adecuaciones escolares para niños con TDAH?',
    a: 'Las adecuaciones escolares son ajustes en el entorno, metodología o evaluación que permiten al niño con TDAH acceder al aprendizaje en igualdad de condiciones. No reducen el nivel académico — adaptan la forma en que se enseña y evalúa. Las más comunes son: tiempo extra en exámenes, instrucciones divididas, asiento preferencial y pausas estructuradas.',
  },
  {
    q: '¿Las escuelas en México están obligadas a otorgar adecuaciones por TDAH?',
    a: 'La Ley General de Educación y la normativa de la SEP establecen el derecho a una educación inclusiva. Sin embargo, en la práctica, las escuelas privadas tienen mayor discrecionalidad. En ambos casos, contar con un diagnóstico neuropsicológico formal con cédula federal fortalece considerablemente la solicitud y dificulta que la escuela la rechace sin fundamento.',
  },
  {
    q: '¿Qué documento necesito para pedir adecuaciones escolares por TDAH?',
    a: 'El documento clave es un informe neuropsicológico emitido por un profesional con cédula federal, que incluya el diagnóstico de TDAH y las recomendaciones de adecuaciones curriculares específicas. El informe de la Neuropsicóloga Karen Trujillo (cédula 11009616) cumple estos requisitos y tiene validez ante cualquier institución educativa en México.',
  },
  {
    q: '¿Qué pasa si la escuela se niega a dar las adecuaciones?',
    a: 'Si la escuela pública se niega sin justificación, puedes acudir a la USAER (Unidad de Servicios de Apoyo a la Educación Regular) de tu zona o presentar una queja ante la Dirección General de Educación Especial de la SEP. En el caso de escuelas privadas, la negativa puede fundamentarse en sus propios reglamentos, pero el diagnóstico formal sigue siendo el punto de partida necesario para cualquier gestión.',
  },
];

export default function AdecuacionesEscolares() {
  useEffect(() => {
    const cleanSeo = applySeo({
      title: '¿Cómo pedir adecuaciones escolares por TDAH en México? | Guía 2025 | Neuropsicóloga Karen Trujillo',
      description: 'Guía paso a paso para solicitar adecuaciones escolares por TDAH en México. Qué documentos necesitas, qué adecuaciones puedes pedir y qué hacer si la escuela se niega. Informe con cédula 11009616.',
      canonical: 'https://psicologakarentrujillo.com.mx/blog/adecuaciones-escolares-tdah-mexico',
      ogTitle: '¿Cómo pedir adecuaciones escolares por TDAH en México? Guía completa 2025',
      ogDescription: 'Pasos concretos para conseguir adecuaciones escolares para tu hijo con TDAH. Qué documento necesitas, cómo presentarlo y qué dice la ley.',
    });
    const cleanSchema = injectSchema('schema-adecuaciones', {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: '¿Cómo pedir adecuaciones escolares por TDAH en México?',
          datePublished: '2025-06-01',
          dateModified: '2025-06-01',
          author: { '@type': 'Person', name: 'Karen Trujillo', jobTitle: 'Neuropsicóloga', identifier: '11009616', address: { '@type': 'PostalAddress', addressLocality: 'Cancún', addressRegion: 'Quintana Roo', addressCountry: 'MX' } },
          publisher: { '@type': 'Organization', name: 'Psicóloga Karen Trujillo', url: 'https://psicologakarentrujillo.com.mx' },
          mainEntityOfPage: 'https://psicologakarentrujillo.com.mx/blog/adecuaciones-escolares-tdah-mexico',
          about: [{ '@type': 'MedicalCondition', name: 'TDAH' }, { '@type': 'Thing', name: 'Educación inclusiva México' }],
          mentions: [{ '@type': 'Organization', name: 'SEP', alternateName: 'Secretaría de Educación Pública' }, { '@type': 'City', name: 'Cancún' }],
        },
        {
          '@type': 'HowTo',
          name: 'Cómo solicitar adecuaciones escolares por TDAH en México',
          description: 'Proceso paso a paso para obtener adecuaciones curriculares en escuelas mexicanas para niños con TDAH.',
          step: pasos.map((p, i) => ({ '@type': 'HowToStep', position: i + 1, name: p.titulo, text: p.desc })),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://psicologakarentrujillo.com.mx' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://psicologakarentrujillo.com.mx/blog' },
            { '@type': 'ListItem', position: 3, name: 'Adecuaciones escolares TDAH México', item: 'https://psicologakarentrujillo.com.mx/blog/adecuaciones-escolares-tdah-mexico' },
          ],
        },
        { '@type': 'FAQPage', mainEntity: faqItems.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
      ],
    });
    return () => { cleanSeo(); cleanSchema(); };
  }, []);

  return (
    <BlogLayout
      breadcrumb="Adecuaciones escolares por TDAH en México"
      category="TDAH · Escuela y apoyos"
      categoryColor="bg-accent-sand/40 border-accent-sand text-primary"
      title="¿Cómo pedir adecuaciones escolares por TDAH en México?"
      subtitle="Qué documentos necesitas, qué adecuaciones puedes solicitar y qué hacer si la escuela se niega."
      readTime="6 min"
      publishDate="Junio 2025"
      accentColor="sand"
      ctaText="Obtener mi informe para la escuela"
      ctaMessage="Hola%20Karen,%20le%C3%AD%20el%20art%C3%ADculo%20sobre%20adecuaciones%20escolares%20y%20necesito%20un%20informe%20para%20la%20escuela%20de%20mi%20hijo"
      relatedArticles={[
        { to: '/blog/costo-valoracion-tdah-cancun', label: '¿Cuánto cuesta una valoración de TDAH en Cancún?', description: 'Precio real, qué incluye y cómo funciona el pago en parcialidades.' },
        { to: '/blog/tdah-ninas-sintomas', label: 'TDAH en niñas: los síntomas que casi nadie detecta', description: 'Por qué el TDAH femenino se diagnostica tarde y cómo reconocerlo.' },
      ]}
    >
      {/* Respuesta directa — AEO / featured snippet */}
      <div className="answer-box">
        <p className="text-primary-foreground font-bold text-sm uppercase tracking-widest mb-2">Respuesta directa</p>
        <p className="text-primary-foreground text-base leading-relaxed mb-0">
          Para pedir adecuaciones escolares por TDAH en México necesitas un <strong>informe neuropsicológico con cédula federal</strong> que incluya el diagnóstico y las recomendaciones de adecuaciones específicas. Con ese documento, presentas una solicitud formal a la dirección y orientación de la escuela. La Ley General de Educación ampara el derecho a una educación inclusiva.
        </p>
      </div>

      <p>
        Uno de los principales motivos por los que las familias buscan una valoración neuropsicológica es justamente este: la escuela lo está pasando mal, las calificaciones no reflejan la capacidad real del niño, y necesitan un documento que respalde los apoyos que solicitan a los maestros. Esta guía te explica exactamente cómo funciona el proceso.
      </p>

      <h2>¿Qué son las adecuaciones escolares?</h2>

      <p>
        Las adecuaciones curriculares son <strong>ajustes en el entorno, la metodología o la evaluación</strong> que permiten a un niño con TDAH acceder al aprendizaje en igualdad de condiciones. No reducen el nivel académico — adaptan la <em>forma</em> en que se enseña y se evalúa, no el contenido.
      </p>
      <p>
        Un niño con TDAH no necesita aprender menos. Necesita condiciones que compensen las diferencias en sus circuitos de atención y autorregulación mientras los apoya la intervención clínica.
      </p>

      <h2>¿Qué adecuaciones puedes solicitar?</h2>

      <motion.div className="grid sm:grid-cols-2 gap-3 my-8" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        {adecuaciones.map((a) => (
          <div key={a.tipo} className="bg-secondary border border-border rounded-xl p-4">
            <div className="flex items-start gap-2 mb-1">
              <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-sm font-bold text-primary">{a.tipo}</span>
            </div>
            <p className="text-xs text-muted-foreground font-light leading-relaxed pl-6">{a.desc}</p>
          </div>
        ))}
      </motion.div>

      <p>
        El informe neuropsicológico de la Neuropsicóloga Karen Trujillo ya incluye las recomendaciones específicas de adecuaciones según el perfil del niño, lo que facilita enormemente la conversación con la escuela.
      </p>

      <h2>El documento clave: el informe neuropsicológico</h2>

      <p>
        Antes de hablar con la escuela, necesitas el documento correcto. No cualquier "certificado" sirve. El informe debe:
      </p>

      <div className="space-y-2 my-6">
        {[
          'Estar emitido por un profesional con cédula profesional federal (no estatal)',
          'Incluir el diagnóstico formal con criterios DSM-5 o CIE-10',
          'Especificar el tipo y presentación del TDAH',
          'Incluir recomendaciones de adecuaciones curriculares concretas',
          'Tener firma, sello y número de cédula del evaluador',
        ].map((item) => (
          <div key={item} className="flex items-start gap-3">
            <FileText className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" aria-hidden="true" />
            <span className="text-sm text-muted-foreground font-light">{item}</span>
          </div>
        ))}
      </div>

      <blockquote>
        Un diagnóstico verbal, un certificado sin cédula o una nota de consulta sin pruebas estandarizadas no tienen el mismo peso legal ante una institución educativa. El informe correcto es el que abre puertas.
      </blockquote>

      <h2>Paso a paso: cómo solicitar las adecuaciones</h2>

      <ol className="space-y-4 my-8">
        {pasos.map((paso) => (
          <li key={paso.n} className="flex gap-5 p-5 bg-secondary rounded-xl border border-border">
            <span className="text-3xl font-serif font-bold text-primary/20 shrink-0 leading-none">{paso.n}</span>
            <div>
              <h3 className="font-bold text-primary text-base mb-1">{paso.titulo}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-0">{paso.desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2>¿Qué pasa si la escuela se niega?</h2>

      <p>
        En escuelas públicas, la negativa sin justificación es contestable. Puedes acudir a la <strong>USAER (Unidad de Servicios de Apoyo a la Educación Regular)</strong> de tu zona — son los especialistas de la SEP asignados a apoyar casos de necesidades educativas especiales en escuelas regulares. También puedes presentar una queja formal ante la Dirección de Educación Especial de la SEP de Quintana Roo.
      </p>
      <p>
        En escuelas privadas el proceso es más complejo y depende del reglamento interno, pero el informe con cédula federal siempre fortalece tu posición y dificulta un rechazo arbitrario.
      </p>

      <div className="highlight-box">
        <p className="text-sm font-bold text-primary mb-2">Consejo práctico</p>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-0">
          Documenta todo por escrito. Cada solicitud, cada reunión, cada respuesta de la escuela. Si llega el momento de escalar a la SEP o a la USAER, el expediente escrito es tu herramienta principal. Una solicitud verbal no deja huella.
        </p>
      </div>

      <h2>¿Cuánto tiempo tarda obtener el informe?</h2>

      <p>
        La valoración completa de TDAH con la Neuropsicóloga Karen Trujillo en Cancún toma entre 2 y 3 semanas. Al finalizar recibes el informe en la sesión de devolución, listo para presentar en la escuela. Si el inicio del año escolar se acerca, es conveniente iniciar el proceso con anticipación.
      </p>

      <motion.a
        href="https://wa.me/529983211547?text=Hola%20Karen,%20le%C3%AD%20el%20art%C3%ADculo%20sobre%20adecuaciones%20escolares%20y%20necesito%20el%20informe%20para%20la%20escuela%20de%20mi%20hijo"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-4 bg-gradient-primary text-primary-foreground p-6 rounded-xl my-8 group hover:opacity-95 transition-all"
        whileHover={{ scale: 1.01 }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div>
          <p className="font-bold text-sm">Obtén el informe que la escuela acepta</p>
          <p className="text-primary-foreground/70 text-xs font-light mt-1">Neuropsicóloga Karen Trujillo · Cancún · Cédula Federal 11009616</p>
        </div>
        <span className="shrink-0 bg-primary-foreground/20 p-3 rounded-lg group-hover:bg-primary-foreground/30 transition-colors">
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </span>
      </motion.a>

      <hr />

      <h2>Preguntas frecuentes sobre adecuaciones escolares por TDAH</h2>
      <div className="space-y-4 mt-6">
        {faqItems.map((faq, i) => (
          <details key={i} className="group bg-secondary border-2 border-border hover:border-accent-blue rounded-xl transition-all open:border-primary open:shadow-md">
            <summary className="p-5 font-bold text-primary text-sm cursor-pointer list-none flex justify-between items-center gap-4">
              <span>{faq.q}</span>
              <span className="text-muted-foreground shrink-0 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
            </summary>
            <p className="px-5 pb-5 text-muted-foreground text-sm font-light leading-relaxed">{faq.a}</p>
          </details>
        ))}
      </div>

      <div className="warning-box mt-8">
        <div className="flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
          <p className="mb-0">
            <strong>Importante:</strong> Este artículo es orientativo y refleja el marco general de la SEP en México. Las políticas específicas pueden variar según el estado y el tipo de escuela. Para asesoría jurídica sobre derechos educativos, consulta con un especialista.
          </p>
        </div>
      </div>

      <p className="text-xs text-muted-foreground/60 mt-8 pt-6 border-t border-border">
        Escrito por <strong>Neuropsicóloga Karen Trujillo</strong> — Neuropsicóloga en Cancún, Quintana Roo. Cédula Federal 11009616.{' '}
        <Link to="/evaluacion-tdah-ninos" className="text-primary hover:underline">Valoración TDAH infantil</Link> ·{' '}
        <Link to="/evaluacion-tdah-adultos" className="text-primary hover:underline">Valoración TDAH adultos</Link>
      </p>
    </BlogLayout>
  );
}
