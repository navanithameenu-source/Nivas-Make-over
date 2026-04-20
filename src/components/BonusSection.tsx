import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const bonuses = [
  { emoji: "🎁", text: "Free Flower Making Course" },
  { emoji: "🎁", text: "Free Brush Kit" },
  { emoji: "🎁", text: "Free Portfolio Creation" },
  { emoji: "🎁", text: "Real Bridal Assisting Opportunity" },
  { emoji: "🎁", text: "Internship for Best Students" },
  { emoji: "🎁", text: "Lifetime Support" },
  { emoji: "🎁", text: "Bridal Team Opportunity" },
];

const BonusSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-gold blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-gold/20 px-4 py-1.5 rounded-full mb-3 border border-gold/30">
            <Gift className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-body font-medium">Exclusive Bonuses</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cream">
            Bonus <span className="text-gradient-gold">Benefits</span> for Students
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {bonuses.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-burgundy-dark/50 backdrop-blur-sm rounded-xl p-4 border border-gold/20 flex items-center gap-3 hover:border-gold/50 transition-colors"
            >
              <span className="text-2xl">{b.emoji}</span>
              <span className="font-body text-cream text-sm">{b.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
