import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import BlogLayout from '@/components/BlogLayout';
import { applySeo, injectSchema } from '@/lib/seo';

const faqItems = [
  {
    q: '¿Cuánto cuesta una valoración de TDAH en Cancún?',
    a: 'La valoración neuropsicológica de TDAH con la Neuropsicóloga Karen Trujillo en Cancún tiene un costo de $7,000 pesos MXN. Este monto cubre el proceso completo: entrevista inicial, aplicación de pruebas estandarizadas (CONNERS-3, WISC-V o CAARS según el caso), análisis clínico, elaboración del informe y sesión de devolución.',
  },
  {
    q: '¿Se puede pagar en parcialidades?',
    a: 'Sí. El pago se puede distribuir a lo largo de las 4 sesiones que conforman el proceso de valoración. Esto permite que el costo no impacte de golpe y que el proceso avance con compromiso de ambas partes.',
  },
  {
    q: '¿Qué incluye el precio de la valoración de TDAH?',
    a: 'El precio incluye: entrevista clínica inicial, aplicación de instrumentos estandarizados internacionales, cuestionarios a maestros (en el caso de niños), análisis e integración clínica, elaboración del informe neuropsicológico completo y sesión de devolución con recomendaciones.',
  },
  {
    q: '¿El informe tiene costo adicional?',
    a: 'No. El informe clínico con cédula federal 11009616 está incluido en el precio de la valoración. Tiene validez oficial ante la SEP, el IMSS y cualquier institución educativa o gubernamental.',
  },
  {
    q: '¿Por qué cuesta más que una consulta psicológica regular?',
    a: 'Porque no es una consulta. Es un proceso diagnóstico que implica aplicar, calificar e interpretar múltiples instrumentos estandarizados internacionales, dedicar varias horas de análisis clínico y producir un informe técnico con validez institucional.',
  },
];

export default function CostoValoracionTDAH() {
  useEffect(() => {
    const cleanSeo = applySeo({
      title: '¿Cuánto cuesta una valoración de TDAH en Cancún? | Precios 2025 | Neuropsicóloga Karen Trujillo',
      description: 'La valoración de TDAH en Cancún con la Neuropsicóloga Karen Trujillo cuesta $7,000 MXN. Incluye pruebas estandarizadas, informe con cédula 11009616 y sesión de devolución. Pago en parcialidades disponible.',
      canonical: 'https://psicologakarentrujillo.com.mx/blog/costo-valoracion-tdah-cancun',
      ogTitle: '¿Cuánto cuesta una valoración de TDAH en Cancún? Precio real 2025',
      ogDescription: '$7,000 MXN por valoración completa de TDAH en Cancún. Informe oficial con cédula 11009616. Pago en parcialidades. Neuropsicóloga Karen Trujillo.',
    });
    const cleanSchema = injectSchema('schema-costo-tdah', {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: '¿Cuánto cuesta una valoración de TDAH en Cancún?',
          datePublished: '2025-06-01',
          dateModified: '2025-06-01',
          author: { '@type': 'Person', name: 'Karen Trujillo', jobTitle: 'Neuropsicóloga', identifier: '11009616', address: { '@type': 'PostalAddress', addressLocality: 'Cancún', addressRegion: 'Quintana Roo', addressCountry: 'MX' } },
          publisher: { '@type': 'Organization', name: 'Psicóloga Karen Trujillo', url: 'https://psicologakarentrujillo.com.mx' },
          mainEntityOfPage: 'https://psicologakarentrujillo.com.mx/blog/costo-valoracion-tdah-cancun',
          about: { '@type': 'MedicalCondition', name: 'TDAH', alternateName: 'Trastorno por Déficit de Atención e Hiperactividad' },
        },
        {
          '@type': 'MedicalWebPage',
          name: 'Costo de valoración de TDAH en Cancún',
          url: 'https://psicologakarentrujillo.com.mx/blog/costo-valoracion-tdah-cancun',
          offers: { '@type': 'Offer', name: 'Valoración neuropsicológica de TDAH', price: '7000', priceCurrency: 'MXN', areaServed: { '@type': 'City', name: 'Cancún' }, seller: { '@type': 'Person', name: 'Karen Trujillo', hasCredential: { '@type': 'EducationalOccupationalCredential', credentialId: '11009616' } } },
          breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://psicologakarentrujillo.com.mx' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://psicologakarentrujillo.com.mx/blog' }, { '@type': 'ListItem', position: 3, name: '¿Cuánto cuesta una valoración de TDAH?', item: 'https://psicologakarentrujillo.com.mx/blog/costo-valoracion-tdah-cancun' }] },
        },
        { '@type': 'FAQPage', mainEntity: faqItems.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
      ],
    });
    return () => { cleanSeo(); cleanSchema(); };
  }, []);

  return (
    <BlogLayout
      breadcrumb="¿Cuánto cuesta una valoración de TDAH?"
      category="TDAH · Precios y proceso"
      title="¿Cuánto cuesta una valoración de TDAH en Cancún?"
      subtitle="Precio real, qué incluye y cómo funciona el pago — sin rodeos."
      readTime="5 min"
      publishDate="Junio 2025"
      accentColor="blue"
      ctaMessage="Hola%20Karen,%20le%C3%AD%20el%20art%C3%ADculo%20sobre%20el%20costo%20de%20la%20valoraci%C3%B3n%20y%20me%20gustar%C3%ADa%20agendar"
      relatedArticles={[
        { to: '/blog/adecuaciones-escolares-tdah-mexico', label: '¿Cómo pedir adecuaciones escolares por TDAH en México?', description: 'Qué documentos necesitas y cómo presentarlos en la escuela.' },
        { to: '/blog/tdah-ninas-sintomas', label: 'TDAH en niñas: los síntomas que casi nadie detecta', description: 'Por qué el TDAH femenino se diagnostica tarde y cómo identificar las señales.' },
      ]}
    >
      {/* Respuesta directa — AEO / featured snippet */}
      <div className="answer-box">
        <p className="text-primary-foreground font-bold text-sm uppercase tracking-widest mb-2">Respuesta directa</p>
        <p className="text-primary-foreground text-base leading-relaxed mb-0">
          La valoración neuropsicológica de TDAH con la <strong>Neuropsicóloga Karen Trujillo en Cancún</strong> tiene un costo de <strong>$7,000 pesos MXN</strong>. Incluye el proceso completo: entrevista, pruebas estandarizadas, informe clínico con cédula federal 11009616 y sesión de devolución. El pago puede distribuirse en las 4 sesiones del proceso.
        </p>
      </div>

      <p>
        Si llegaste aquí buscando un número concreto, ya lo tienes. Pero detrás del precio hay contexto importante que vale la pena entender — especialmente si estás comparando opciones en Cancún o evaluando si es el momento adecuado.
      </p>

      <h2>¿Qué incluye la valoración de TDAH por $7,000 MXN?</h2>

      <p>
        La valoración no es una consulta de una hora. Es un proceso diagnóstico completo de <strong>4 a 5 sesiones</strong> repartidas en 2 a 3 semanas. Esto es lo que cubre el precio:
      </p>

      <motion.div className="bg-secondary rounded-2xl border border-border p-6 my-8" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-5">Todo esto incluido en los $7,000 MXN</p>
        <div className="space-y-3">
          {[
            { item: 'Entrevista clínica inicial', desc: 'Anamnesis completa, historial de desarrollo y contexto familiar o laboral.' },
            { item: 'Aplicación de instrumentos estandarizados', desc: 'CONNERS-3, WISC-V, BRIEF-2 (infantil) o CAARS, DIVA 2.0, CPT-3 (adultos).' },
            { item: 'Cuestionarios a maestros', desc: 'En caso de niños, escalas de conducta completadas por los docentes.' },
            { item: 'Análisis clínico integrado', desc: 'Interpretación de todos los datos con diagnóstico diferencial.' },
            { item: 'Informe neuropsicológico completo', desc: 'Documento oficial con cédula 11009616, válido ante SEP, IMSS e instituciones.' },
            { item: 'Sesión de devolución', desc: 'Explicación del diagnóstico, recomendaciones y plan de acción.' },
          ].map(({ item, desc }) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="text-sm font-bold text-primary">{item}: </span>
                <span className="text-sm text-muted-foreground font-light">{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <h2>¿Por qué cuesta lo que cuesta?</h2>

      <p>
        Es una pregunta legítima. En Cancún puedes encontrar evaluaciones a precios muy distintos, y vale la pena saber qué estás comparando. Una valoración neuropsicológica formal implica tres costos que no siempre son visibles: los instrumentos de evaluación (el WISC-V, el ADOS-2 y otros tienen licencias de uso clínico que representan una inversión importante), las horas de análisis que van más allá de la sesión con el paciente, y la producción de un informe técnico con validez institucional.
      </p>

      <blockquote>
        Un diagnóstico que no tiene validez ante la escuela de tu hijo, o que no incluye los instrumentos correctos, no es un diagnóstico — es una opinión.
      </blockquote>

      <h2>¿Se puede pagar en parcialidades?</h2>

      <p>
        Sí. El proceso de valoración se divide en 4 sesiones y el pago puede distribuirse a lo largo de ellas. Esto significa que no necesitas tener los $7,000 MXN desde el primer día.
      </p>

      <div className="highlight-box">
        <p className="text-sm font-bold text-primary mb-3">Un punto importante sobre el compromiso</p>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-0">
          El informe clínico solo puede emitirse una vez concluidas todas las fases del proceso. Una valoración incompleta no permite establecer un diagnóstico confiable ni producir el documento que necesitas para la escuela o el IMSS. Por eso, al iniciar es fundamental tener claridad sobre el compromiso de completar las 4 sesiones.
        </p>
      </div>

      <h2>¿Cuánto cuesta no diagnosticar a tiempo?</h2>

      <p>
        Un niño con TDAH sin diagnosticar puede repetir años escolares, necesitar tutorías durante años, o llegar a la adolescencia con una narrativa de "flojo" que afecta su autoestima profundamente. Un adulto sin diagnóstico puede llevar décadas creyendo que el problema es su carácter, cambiando de trabajo, o invirtiendo en terapias que no atacan la causa real.
      </p>
      <p>
        El costo real no es la valoración — es el tiempo perdido sin el diagnóstico correcto.
      </p>

      <h2>¿Cómo agendar con la Neuropsicóloga Karen Trujillo en Cancún?</h2>

      <p>
        El primer paso es contactar directamente por WhatsApp. La Neuropsicóloga Karen Trujillo evalúa el caso, confirma si la valoración es el siguiente paso adecuado y resuelve cualquier duda sobre el proceso antes de comenzar.
      </p>

      <motion.a
        href="https://wa.me/529983211547?text=Hola%20Karen,%20le%C3%AD%20el%20art%C3%ADculo%20sobre%20el%20costo%20y%20me%20gustar%C3%ADa%20agendar"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-4 bg-gradient-primary text-primary-foreground p-6 rounded-xl my-8 group hover:opacity-95 transition-all"
        whileHover={{ scale: 1.01 }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div>
          <p className="font-bold text-sm">Neuropsicóloga Karen Trujillo · Cancún, Quintana Roo</p>
          <p className="text-primary-foreground/70 text-xs font-light mt-1">Cédula Federal: 11009616 · Lun-Vie 9-8 PM · Sáb 9-2 PM</p>
        </div>
        <span className="shrink-0 bg-primary-foreground/20 p-3 rounded-lg group-hover:bg-primary-foreground/30 transition-colors">
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </span>
      </motion.a>

      <hr />

      <h2>Preguntas frecuentes sobre el costo de la valoración de TDAH</h2>
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
            <strong>Nota:</strong> Los precios pueden variar. Este artículo refleja las tarifas vigentes de la Neuropsicóloga Karen Trujillo al momento de su publicación. Confirma el costo actual directamente antes de iniciar el proceso.
          </p>
        </div>
      </div>

      <p className="text-xs text-muted-foreground/60 mt-8 pt-6 border-t border-border">
        Escrito por <strong>Neuropsicóloga Karen Trujillo</strong> — Neuropsicóloga en Cancún, Quintana Roo. Cédula Federal 11009616. Especialista en valoración de TDAH y Autismo.{' '}
        <Link to="/evaluacion-tdah-ninos" className="text-primary hover:underline">TDAH infantil</Link> ·{' '}
        <Link to="/evaluacion-tdah-adultos" className="text-primary hover:underline">TDAH adultos</Link> ·{' '}
        <Link to="/evaluacion-autismo-cancun" className="text-primary hover:underline">Autismo TEA</Link>
      </p>
    </BlogLayout>
  );
}
