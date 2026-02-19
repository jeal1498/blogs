import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import AboutMini from '@/components/AboutMini';
import { applySeo } from '@/lib/seo';

const articles = [
  {
    slug: '/blog/cuanto-cuesta-valoracion-tdah-cancun',
    title: '¿Cuánto cuesta una valoración de TDAH en Cancún?',
    excerpt:
      'El costo de una valoración neuropsicológica de TDAH en Cancún cubre múltiples sesiones, instrumentos estandarizados internacionales y un informe clínico con validez oficial. Te explicamos qué incluye y por qué vale la pena.',
    category: 'TDAH · Costos',
    readTime: '7 min',
    date: 'Enero 2025',
    tag: 'TDAH',
    tagColor: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
  },
  {
    slug: '/blog/tdah-en-ninas-sintomas',
    title: 'TDAH en niñas: síntomas que casi nadie detecta',
    excerpt:
      'El TDAH en niñas se presenta de forma diferente que en niños: menos hiperactividad visible, más inatención silenciosa, ansiedad y perfeccionismo. Aprende a reconocer las señales antes de que lleguen a la adolescencia sin diagnóstico.',
    category: 'TDAH · Género',
    readTime: '9 min',
    date: 'Diciembre 2024',
    tag: 'TDAH',
    tagColor: 'bg-accent-pink/10 text-primary border-accent-pink/30',
  },
];

export default function Blog() {
  useEffect(() => {
    const cleanSeo = applySeo({
      title: 'Blog de Neuropsicología | TDAH y Autismo en Cancún | Karen Trujillo',
      description:
        'Artículos sobre TDAH, Autismo y neuropsicología infantil y adulta. Información clínica rigurosa de la Neuropsicóloga Karen Trujillo en Cancún.',
      canonical: 'https://psicologakarentrujillo.com.mx/blog',
      ogTitle: 'Blog | Neuropsicología TDAH y Autismo Cancún',
      ogDescription:
        'Artículos de neuropsicología sobre TDAH y Autismo escritos por la Neuropsicóloga Karen Trujillo en Cancún.',
    });
    return () => { cleanSeo(); };
  }, []);

  return (
    <div className="antialiased selection:bg-accent-blue selection:text-primary pb-24 lg:pb-0">
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative min-h-[45vh] flex items-center justify-center pt-40 pb-16 px-6 overflow-hidden bg-soft-gradient">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-pink/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
                <li>/</li>
                <li className="text-primary font-medium">Blog</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm mb-6">
              <BookOpen className="w-3 h-3 text-accent-pink" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Neuropsicología · Evidencia clínica</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-[1.1] mb-6">
              Blog de<br />
              <span className="italic text-primary-light">Neuropsicología</span>
            </h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Información clínica rigurosa sobre TDAH, Autismo y salud mental.
              Escrita por la Neuropsicóloga Karen Trujillo para familias, adultos y profesionales en Cancún.
            </p>
          </div>
        </section>

        {/* Articles grid */}
        <section className="py-20 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-10">
              {articles.length} artículos publicados
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article, i) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Card header accent */}
                  <div className="h-1.5 w-full bg-gradient-primary" />

                  <div className="p-8 flex flex-col flex-1">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${article.tagColor}`}>
                        {article.tag}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                      <span className="text-[10px] text-muted-foreground ml-auto">{article.date}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-serif font-bold text-primary mb-4 leading-snug group-hover:text-primary-light transition-colors">
                      <Link to={article.slug}>{article.title}</Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground font-light leading-relaxed flex-1 mb-6">
                      {article.excerpt}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        <Tag className="w-3 h-3" /> {article.category}
                      </span>
                      <Link
                        to={article.slug}
                        className="flex items-center gap-2 text-xs font-bold text-primary hover:gap-3 transition-all"
                      >
                        Leer artículo <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Coming soon teaser */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-12 p-8 rounded-2xl bg-gradient-primary text-primary-foreground text-center"
            >
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-70 mb-2">Próximamente</p>
              <h3 className="text-xl font-serif font-bold mb-2">Más artículos en camino</h3>
              <p className="text-sm opacity-80 mb-6 max-w-lg mx-auto">
                Sígueme en redes sociales para no perderte nuevos contenidos sobre TDAH, Autismo y neuropsicología infantil y adulta en Cancún.
              </p>
              <a
                href="https://wa.me/529983211547?text=Hola%20Karen,%20visité%20el%20blog%20y%20me%20gustaría%20recibir%20novedades"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-lg hover:opacity-90 transition-all"
              >
                Quiero recibir novedades <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <AboutMini />
      <Footer />
      <FloatingButtons waMessage="Hola%20Karen,%20vi%20tu%20blog%20y%20me%20gustaría%20recibir%20más%20información%20sobre%20las%20valoraciones" />
    </div>
  );
}
