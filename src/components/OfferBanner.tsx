import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/message/OHVB7IHZLCOSJ1";

const OfferBanner = () => {
  return (
    <section className="py-10 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gold text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-2">
            🔥 Get 25% Offer on Course Fees
          </p>
          <p className="text-cream/70 font-body mb-4">Limited Time Offer</p>
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-burgundy-dark font-bold font-body px-6 py-3 rounded-xl text-base shadow-gold"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-5 h-5" />
            Book Your Seat Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferBanner;
