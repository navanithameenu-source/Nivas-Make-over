import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Instagram } from "lucide-react";

const WA_LINK = "https://wa.me/message/OHVB7IHZLCOSJ1";

const FinalCTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cream mb-4">
            Start Your <span className="text-gradient-gold">Makeup Career</span> Today
          </h2>
          <p className="text-cream/70 font-body mb-8">
            Seats fill fast for this Professional Makeup Course. Call or WhatsApp now to reserve your seat.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-burgundy-dark font-bold font-body px-8 py-4 rounded-xl text-lg shadow-gold animate-pulse-slow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: 9894084012
            </motion.a>
            <motion.a
              href="tel:9894084012"
              className="inline-flex items-center justify-center gap-2 border-2 border-gold/50 text-gold font-bold font-body px-8 py-4 rounded-xl text-lg hover:bg-gold/10 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-5 h-5" />
              Call: 9894084012
            </motion.a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-cream/60 text-sm font-body">
            <a href="mailto:navisbridalmakeover@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" /> navisbridalmakeover@gmail.com
            </a>
            <a href="https://instagram.com/navis_makeover" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Instagram className="w-4 h-4" /> navis_makeover
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-16 border-t border-cream/10 pt-6 text-center">
        <p className="text-cream/40 text-xs font-body">
          © 2024 Navis Makeover Academy, Palladam, Tirupur. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
