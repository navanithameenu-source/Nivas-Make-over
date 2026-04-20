import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import heroVideo from "@/assets/video 1.mp4";

const WA_LINK = "https://wa.me/message/OHVB7IHZLCOSJ1";

const benefits = [
  "14+ Years of Expert Experience",
  "4000+ Students Successfully Trained",
  "Professional Certificate + Central Government Certificate",
  "Hands-on Practical Training",
  "Real Bridal Assisting Opportunity",
  "Free Brush Kit + Free Flower Making Course",
  "Lifetime Support After Course",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-12 lg:py-0 lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1">

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/30 max-w-md mx-auto lg:max-w-none">
              <video
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[400px] lg:h-[600px] object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-burgundy-dark/80 backdrop-blur-sm rounded-xl p-4 border border-gold/20">
                  <p className="font-display text-cream text-lg">Navis Makeover Academy</p>
                  <p className="text-gold text-sm font-body">Palladam, Tirupur | Est. 2012</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:text-left">

            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block bg-gold/20 text-gold px-4 py-1.5 rounded-full font-medium font-body mb-4 border border-gold/30 text-3xl">

              💄 25-Day Professional Course
            </motion.span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-cream leading-tight mb-4">
              Become a Certified{" "}
              <span className="text-gradient-gold">Professional Makeup Artist</span>{" "}
              in Just 25 Days
            </h1>

            <p className="text-cream/80 text-base lg:text-lg font-body mb-6 max-w-xl mx-auto lg:mx-0">
              Join Navis Makeover Academy – Palladam, Tirupur. Learn Professional Makeup, Bridal Hairstyling, Saree Draping & Business Skills — even if you are a complete beginner.
            </p>

            {/* Benefits */}
            <div className="space-y-2 mb-6">
              {benefits.map((b, i) =>
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-2 text-cream/90 font-body text-sm lg:text-base justify-center lg:justify-start">

                  <span className="text-gold">✔</span>
                  <span>{b}</span>
                </motion.div>
              )}
            </div>

            {/* Offer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="bg-burgundy-dark/50 backdrop-blur-sm rounded-xl p-5 border border-gold/20 mb-6 max-w-md mx-auto lg:mx-0">

              <p className="text-gold text-2xl font-display font-bold lg:text-2xl">
                🔥 Get 25% Offer on Course Fees
              </p>
              <p className="text-cream/70 text-sm font-body mt-1 text-center">
                Limited Time Offer
              </p>
            </motion.div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-burgundy-dark font-bold font-body px-6 py-3.5 rounded-xl text-base shadow-gold animate-pulse-slow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}>

                <MessageCircle className="w-5 h-5" />
                WhatsApp to Book Your Seat
              </motion.a>
              <motion.a
                href="tel:9894084012"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold/50 text-gold font-bold font-body px-6 py-3.5 rounded-xl text-base hover:bg-gold/10 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}>

                <Phone className="w-5 h-5" />
                Call Now for Enquiry
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
