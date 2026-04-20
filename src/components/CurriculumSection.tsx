import { motion } from "framer-motion";
import { Sparkles, Eye, Scissors, Heart } from "lucide-react";

const categories = [
  {
    icon: Sparkles,
    title: "Professional Makeup Training",
    items: [
      "Skin Theory & Makeup Theory",
      "Color Wheel & Product Knowledge",
      "Foundation Matching & Mixing Techniques",
      "Highlighting & Contouring Techniques",
      "Sweat Proof & Waterproof Makeup",
      "HD Makeup & Airbrush Makeup",
      "Long Lasting Bridal Makeup Techniques",
    ],
  },
  {
    icon: Sparkles,
    title: "Trending Makeup Looks",
    items: [
      "Glass Skin Makeup",
      "Nude / Natural Makeup",
      "Bridesmaid Makeup",
      "Goddess Makeup",
      "Groom Makeup",
      "HD & Airbrush Makeup",
    ],
  },
  {
    icon: Eye,
    title: "Eye Makeup Mastery",
    items: [
      "Smokey Eye Makeup",
      "Glitter / Pigment Makeup",
      "Cut Crease Techniques",
      "Lash Application",
      "Lens Application",
      "Trending Bridal Eye Looks",
    ],
  },
  {
    icon: Scissors,
    title: "Hairstyling Masterclass",
    subtitle: "Learn 25+ Professional Hairstyles",
    items: [
      "Hollywood Waves",
      "Open Curls",
      "Reception Hairstyles",
      "Bridal Bun Hairstyles",
      "Messy Bun & Braids",
      "Flower Fixing Techniques",
      "Hair Extensions Techniques",
    ],
  },
  {
    icon: Heart,
    title: "Saree Draping Mastery",
    items: [
      "7 Types of Saree Draping",
      "Bridal Saree Draping",
      "Cancan Saree Draping",
      "Lehenga Styling",
      "Professional Draping Techniques",
    ],
  },
];

const CurriculumSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-body font-medium mb-3">
            High-Value Curriculum
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            What You Will <span className="text-gradient-gold">Learn</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-2xl p-6 border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center mb-4">
                <cat.icon className="w-5 h-5 text-burgundy-dark" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1">{cat.title}</h3>
              {cat.subtitle && (
                <p className="text-sm text-accent font-body font-medium mb-3">{cat.subtitle}</p>
              )}
              <div className="space-y-2 mt-3">
                {cat.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                    <span className="text-gold mt-0.5 shrink-0">✔</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
