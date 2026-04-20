import { motion } from "framer-motion";
import studioImg from "@/assets/studio-work.jpg";

const problems = [
  "No proper training",
  "No real client experience",
  "Lack of confidence",
  "No guidance to start a business",
];

const solutions = [
  "Master makeup artistry",
  "Learn bridal hairstyling",
  "Build your portfolio",
  "Start your own makeup business",
];

const ProblemSolutionSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-12 max-w-3xl mx-auto"
        >
          Dreaming of Becoming a Professional Makeup Artist but{" "}
          <span className="text-gradient-gold">Don't Know Where to Start?</span>
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blush rounded-2xl p-6 lg:p-8"
          >
            <h3 className="font-display text-xl font-bold text-primary mb-4">The Struggle is Real</h3>
            <p className="font-body text-muted-foreground text-sm mb-4">
              Many women want to enter the beauty industry but struggle because:
            </p>
            <div className="space-y-3">
              {problems.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 font-body text-foreground"
                >
                  <span className="text-destructive">❌</span>
                  <span>{p}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <img
              src={studioImg}
              alt="Hands-on makeup training at Navis Makeover Academy"
              className="rounded-2xl shadow-lg w-full h-80 object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-2xl p-6 lg:p-8 border border-gold/20"
          >
            <h3 className="font-display text-xl font-bold text-primary mb-4">Our Solution</h3>
            <p className="font-body text-muted-foreground text-sm mb-4">
              At Navis Makeup Studio & Academy, we provide step-by-step professional training that helps you:
            </p>
            <div className="space-y-3">
              {solutions.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 font-body text-foreground"
                >
                  <span className="text-gold">✨</span>
                  <span>{s}</span>
                </motion.div>
              ))}
            </div>
            <p className="font-body text-sm text-accent mt-4 font-semibold">
              Even if you are a complete beginner.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
