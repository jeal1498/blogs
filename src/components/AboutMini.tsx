import { GraduationCap, ShieldCheck, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutMini = () => {
  return (
    <section id="sobre-mi" className="py-20 px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 items-center">

          {/* Text block */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] block">
              Sobre mí
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
              Neuropsicóloga <span className="italic text-primary-light">Karen Trujillo</span>
            </h2>
            <div className="p-5 bg-accent-blue/10 border-l-4 border-accent-blue rounded-lg text-sm leading-relaxed text-foreground font-medium">
              <p>
                Neuropsicóloga especializada en valoración de TDAH y Autismo, egresada de la{' '}
                <strong>Universidad Modelo de Quintana Roo</strong>. Con más de 7 años de experiencia
                en Cancún, mis diagnósticos combinan rigor científico con instrumentos estandarizados internacionales.{' '}
                <strong>Cédula Federal: 11009616.</strong>
              </p>
            </div>
            <p className="text-muted-foreground font-light leading-relaxed text-sm">
              Me especializo exclusivamente en evaluación neuropsicológica porque creo que un diagnóstico preciso cambia trayectorias de vida.
              Todos mis informes tienen validez ante{' '}
              <strong className="text-primary">SEP, IMSS, instituciones educativas y organismos gubernamentales</strong>,
              e incluyen recomendaciones de adecuaciones curriculares y plan terapéutico.
            </p>
          </motion.div>

          {/* Credential cards */}
          <motion.div
            className="grid grid-cols-1 gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="flex items-center gap-4 p-4 rounded-xl bg-success/10 border border-success/20">
              <ShieldCheck className="w-8 h-8 text-success shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-success uppercase tracking-wider">Cédula Federal</p>
                <p className="text-lg font-bold text-primary">11009616</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <GraduationCap className="w-8 h-8 text-primary shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-primary uppercase tracking-wider">Formación</p>
                <p className="text-sm font-bold text-primary">Licenciatura en Psicología</p>
                <p className="text-[10px] text-muted-foreground">Universidad Modelo, QRoo</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-accent-blue/10 border border-accent-blue/20">
              <Brain className="w-8 h-8 text-accent-blue shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-accent-blue uppercase tracking-wider">Experiencia</p>
                <p className="text-sm font-bold text-primary">7+ años en Cancún</p>
                <p className="text-[10px] text-muted-foreground">Neuropsicología Clínica</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMini;
