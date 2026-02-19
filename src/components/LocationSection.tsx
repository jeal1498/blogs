import { MapPin, Clock, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-32 bg-secondary px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">Ubicación</span>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Encuentra mi Consultorio</h2>
              <p className="text-muted-foreground font-light mb-8">
                Ubicado en el corazón de Cancún, en un espacio privado, cómodo y diseñado específicamente para tu bienestar físico y emocional. Atención presencial y sesiones en línea disponibles.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border hover:border-primary/40 hover:shadow-md transition-all group cursor-pointer">
                <div className="bg-primary p-3 rounded-lg text-primary-foreground shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary mb-1">Dirección</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Psicóloga+Karen+Trujillo+Neuropsicología+TDAH+Autismo+Cancún+SM200+M49+L2+Hacienda+de+Chinconcuac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground leading-relaxed hover:text-primary transition-colors"
                  >
                    SM200 M49 L2, Hacienda de Chinconcuac,<br />
                    Circuito casa 1587B, C.P. 77539<br />
                    Cancún, Quintana Roo, México.
                    <span className="block mt-2 text-[10px] font-bold uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors">
                      📍 Abrir en Google Maps →
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border">
                <div className="bg-primary p-3 rounded-lg text-primary-foreground shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary mb-1">Horarios de Atención</p>
                  <p className="text-xs text-muted-foreground"><strong>Lunes a Viernes:</strong> 9:00 AM - 8:00 PM</p>
                  <p className="text-xs text-muted-foreground"><strong>Sábados:</strong> 9:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border">
                <div className="bg-primary p-3 rounded-lg text-primary-foreground shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary mb-1">Sesiones Virtuales</p>
                  <p className="text-xs text-muted-foreground">También ofrezco sesiones en línea a través de plataformas seguras y confidenciales para pacientes foráneos o por comodidad. Misma calidad que presencial.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg border border-border relative group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <iframe
              title="Psicóloga Karen Trujillo | Neuropsicología: TDAH y Autismo"
              className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://maps.google.com/maps?q=Psicóloga Karen Trujillo | Neuropsicología: TDAH y Autismo&t=&z=16&ie=UTF8&iwloc=&output=embed"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
