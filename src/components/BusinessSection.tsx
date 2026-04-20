import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const skills = [
  "Social Media Marketing for Makeup Artists",
  "Client Handling Skills",
  "Product Knowledge",
  "Lighting & Photography",
  "How to Grow in Bridal Industry",
];

const BusinessSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full mb-3">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-body font-medium">Career Growth</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Business <span className="text-gradient-gold">Training</span>
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              This course doesn't just teach makeup. We also teach you how to build a successful career.
            </p>
          </motion.div>

          <div className="space-y-3">
            {skills.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary rounded-xl p-4 flex items-center gap-3 text-left border border-border hover:border-gold/30 transition-colors"
              >
                <span className="text-gold">✔</span>
                <span className="font-body text-foreground">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
