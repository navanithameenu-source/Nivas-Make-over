import { motion } from "framer-motion";
import { Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Clock, label: "14+ Years", desc: "Bridal Makeup Experience" },
  { icon: Award, label: "8+ Years", desc: "Teaching Experience" },
  { icon: Users, label: "4000+", desc: "Students Trained" },
];


const MentorSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10">
          
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-body font-medium mb-3">
            👩‍🏫 Meet Your Mentor
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Learn from the <span className="text-gradient-gold">Best</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl p-8 border border-border shadow-sm">
            
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Hi, I'm <span className="text-gradient-gold">Navanitha</span>
            </h3>
            <p className="font-body text-muted-foreground mb-3">
              Founder of Navi's Makeup Studio & Academy.
            </p>
            <p className="font-body text-muted-foreground mb-3">
              With over 14+ years of experience in bridal makeup and 8+ years in teaching, I have trained 4000+ students to become confident and successful makeup artists.
            </p>
            <p className="font-body text-muted-foreground mb-3">
              I specialize in hands-on training with real-time practice, helping even beginners master professional makeup and hairstyling with confidence.
            </p>
            <p className="font-body text-muted-foreground mb-6">
              My goal is to guide and support every student in building a successful career in the beauty industry.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-secondary rounded-xl p-4 border border-border">
                
                  <stat.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="font-display font-bold text-foreground text-lg">{stat.label}</p>
                  <p className="font-body text-muted-foreground text-xs">{stat.desc}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default MentorSection;