import { Phone, MapPin, Clock, Facebook, Instagram, MessageCircle, ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);

const Footer = () => {
  const valoraciones = [
    { to: '/evaluacion-tdah-ninos',   label: 'Valoración TDAH Infantil',    sub: 'Niños 5–17 años' },
    { to: '/evaluacion-tdah-adultos', label: 'Valoración TDAH Adultos',      sub: 'Desde 18 años' },
    { to: '/evaluacion-autismo-cancun', label: 'Diagnóstico Autismo (TEA)', sub: 'Desde 2 años' },
  ];

  const blogLinks = [
    { to: '/blog/cuanto-cuesta-valoracion-tdah-cancun', label: '¿Cuánto cuesta una valoración de TDAH en Cancún?' },
    { to: '/blog/tdah-en-ninas-sintomas',               label: 'TDAH en niñas: síntomas que casi nadie detecta' },
  ];

  return (
    <footer id="contacto" className="bg-gradient-primary text-primary-foreground overflow-hidden relative">

      {/* ── Decorative blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-accent-blue/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-pink/6 rounded-full blur-[100px]" />
        {/* Subtle dot grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>

      {/* ── Top CTA strip ── */}
      <motion.div
        className="relative z-10 border-b border-primary-foreground/10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary-foreground/50 mb-1">¿Lista para dar el primer paso?</p>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-primary-foreground leading-snug">
              Agenda tu valoración hoy.{' '}
              <span className="italic text-primary-foreground/70">Respondo en menos de 1 hora.</span>
            </h2>
          </div>
          <a
            href="https://wa.me/529983211547?text=Hola%20Karen,%20me%20gustaría%20agendar%20una%20valoración"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-3 bg-[#25D366] hover:bg-[#20c45c] text-white font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-xl transition-all shadow-lg shadow-black/20 hover:shadow-[#25D366]/30 hover:-translate-y-0.5 active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar por WhatsApp
          </a>
        </div>
      </motion.div>

      {/* ── Main grid ── */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 border-b border-primary-foreground/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >

        {/* Col 1 — Brand */}
        <div className="space-y-5">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <div className="w-11 h-11 bg-primary-foreground rounded-xl flex items-center justify-center text-primary font-serif font-bold italic text-xl shadow-md transition-transform group-hover:scale-105 group-hover:rotate-3">
              K
            </div>
            <div>
              <span className="block font-bold text-xs uppercase tracking-[0.2em] text-primary-foreground leading-none">Karen Trujillo</span>
              <span className="block text-[9px] uppercase tracking-[0.15em] text-primary-foreground/50 mt-1">Neuropsicología</span>
            </div>
          </Link>

          <p className="text-xs text-primary-foreground/60 leading-relaxed">
            Neuropsicóloga especialista en diagnóstico de TDAH y TEA en Cancún.
            Cédula Federal: <strong className="text-primary-foreground/80">11009616</strong>.
          </p>

          <Link
            to="/aviso-de-privacidad"
            className="inline-flex items-center gap-1.5 text-[11px] text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors underline underline-offset-2"
          >
            Aviso de Privacidad
          </Link>

          <div className="flex gap-2 pt-1">
            {[
              { href: 'https://www.facebook.com/share/1Bs93MjeKt/', icon: <Facebook className="w-4 h-4" />, label: 'Facebook', hover: 'hover:bg-[#1877f2]' },
              { href: 'https://www.instagram.com/psicologakarentrujillo', icon: <Instagram className="w-4 h-4" />, label: 'Instagram', hover: 'hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888]' },
              { href: 'https://www.tiktok.com/@psic.karentrujillo', icon: <TikTokIcon />, label: 'TikTok', hover: 'hover:bg-[#010101]' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className={`w-9 h-9 bg-primary-foreground/10 ${s.hover} rounded-lg flex items-center justify-center transition-all hover:scale-110`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Valoraciones */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent-blue mb-5 flex items-center gap-2">
            <span className="w-4 h-px bg-accent-blue inline-block" />
            Valoraciones
          </h4>
          <ul className="space-y-4">
            {valoraciones.map((v) => (
              <li key={v.to}>
                <Link
                  to={v.to}
                  className="group flex flex-col gap-0.5 hover:translate-x-1 transition-transform"
                >
                  <span className="text-xs font-semibold text-primary-foreground/85 group-hover:text-primary-foreground transition-colors leading-snug">
                    {v.label}
                  </span>
                  <span className="text-[10px] text-primary-foreground/40">{v.sub}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Blog */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent-pink mb-5 flex items-center gap-2">
            <span className="w-4 h-px bg-accent-pink inline-block" />
            Blog
          </h4>
          <ul className="space-y-4">
            {blogLinks.map((b) => (
              <li key={b.to}>
                <Link
                  to={b.to}
                  className="text-xs text-primary-foreground/65 hover:text-primary-foreground transition-colors leading-relaxed hover:translate-x-1 inline-block"
                >
                  {b.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/blog"
            className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold text-accent-pink hover:text-primary-foreground transition-colors"
          >
            → Ver todos los artículos
          </Link>
        </div>

        {/* Col 4 — Contacto */}
        <div className="space-y-3">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent-blue mb-5 flex items-center gap-2">
            <span className="w-4 h-px bg-accent-blue inline-block" />
            Contacto Directo
          </h4>

          {/* Phone */}
          <a
            href="tel:529983211547"
            className="flex items-center gap-3 p-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent-blue/50 hover:bg-primary-foreground/10 transition-all group"
          >
            <Phone className="w-4 h-4 text-accent-blue shrink-0" />
            <div>
              <span className="block text-[9px] uppercase tracking-widest text-primary-foreground/40">Llamar</span>
              <span className="text-xs font-bold text-primary-foreground">+52 998 321 1547</span>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:karentrujillopsic@gmail.com"
            className="flex items-center gap-3 p-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent-blue/50 hover:bg-primary-foreground/10 transition-all group"
          >
            <Mail className="w-4 h-4 text-accent-blue shrink-0" />
            <div>
              <span className="block text-[9px] uppercase tracking-widest text-primary-foreground/40">Email</span>
              <span className="text-[11px] font-bold text-primary-foreground break-all leading-snug">karentrujillopsic@gmail.com</span>
            </div>
          </a>

          {/* Address — clickable map */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Psicóloga+Karen+Trujillo+Neuropsicología+TDAH+Autismo+Cancún+SM200+M49+L2+Hacienda+de+Chinconcuac"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 p-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent-blue/50 hover:bg-primary-foreground/10 transition-all group"
          >
            <MapPin className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
            <div>
              <span className="block text-[9px] uppercase tracking-widest text-primary-foreground/40 mb-0.5">Consultorio</span>
              <span className="text-[11px] text-primary-foreground/75 leading-relaxed">
                SM200 M49 L2, Hacienda de Chinconcuac,<br />Cancún, Q. Roo
              </span>
              <span className="block text-[10px] font-bold text-accent-blue mt-1 group-hover:underline">Ver en Google Maps →</span>
            </div>
          </a>

          {/* Hours */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
            <Clock className="w-4 h-4 text-primary-foreground/40 shrink-0 mt-0.5" />
            <div className="text-[11px] text-primary-foreground/60 space-y-0.5">
              <p><strong className="text-primary-foreground/80">Lun – Vie:</strong> 9:00 AM – 8:00 PM</p>
              <p><strong className="text-primary-foreground/80">Sábado:</strong> 9:00 AM – 2:00 PM</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Bottom bar ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] text-primary-foreground/35 uppercase tracking-widest font-bold">
        <p>© 2026 Karen Trujillo · Neuropsicología TDAH y Autismo en Cancún</p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <Link to="/aviso-de-privacidad" className="hover:text-primary-foreground/60 transition-colors">
            Aviso de Privacidad
          </Link>
          <span className="opacity-30">·</span>
          <span>Cédula Federal 11009616</span>
          <span className="opacity-30">·</span>
          <span>Cancún, Quintana Roo</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

