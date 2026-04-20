import { motion } from "framer-motion";
import { MapPin, Clock, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/message/OHVB7IHZLCOSJ1";

const PricingSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Course Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6">
            
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Course <span className="text-gradient-gold">Details</span>
            </h2>

            <div className="bg-secondary rounded-2xl p-6 border border-border space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-body font-semibold text-foreground">Location</p>
                  <p className="font-body text-sm text-muted-foreground">
                    KCR Complex, Mangalam Road<br />Palladam, Tirupur
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-body font-semibold text-foreground">Course Timing</p>
                  <p className="font-body text-sm text-muted-foreground">
                    11:00 AM – 5:00 PM<br />Sunday Holiday
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-hero rounded-2xl p-8 border-2 border-gold/30 shadow-burgundy relative overflow-hidden">
            
            <div className="absolute top-0 right-0 bg-gradient-gold text-burgundy-dark text-xs font-body font-bold px-4 py-1.5 rounded-bl-xl">
              LIMITED SEATS
            </div>
            <h3 className="font-display text-xl font-bold text-cream mb-1">
              Professional Makeup & Hairstyle Course
            </h3>
            <p className="text-cream/60 font-body text-sm mb-4">25-Day Complete Training</p>

            <div className="mb-6">
              <p className="text-gold text-3xl lg:text-4xl font-bold font-sans">
                🔥 25% Offer on Course Fees
              </p>
              <p className="text-cream/70 text-sm font-body mt-2 text-center">
                Limited Time Offer
              </p>
            </div>

            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-gradient-gold text-burgundy-dark font-bold font-body px-6 py-3.5 rounded-xl text-base shadow-gold animate-pulse-slow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}>
              
              <MessageCircle className="w-5 h-5" />
              Book Your Seat on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default PricingSection;