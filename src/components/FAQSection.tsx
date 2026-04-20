import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Is this course suitable for beginners?", a: "Yes, it is designed from beginner to professional level." },
  { q: "Will I get a certificate?", a: "Yes, Professional + Central Government Certificate provided." },
  { q: "Will I get practical training?", a: "Yes, daily hands-on training with real bridal assisting." },
  { q: "Are products provided?", a: "Yes, all products are provided for practice." },
  { q: "Is installment option available?", a: "Yes, flexible payment options available." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-10"
        >
          Frequently Asked <span className="text-gradient-gold">Questions</span>
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left font-body font-medium text-foreground hover:bg-secondary/50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 ml-2 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="px-4 pb-4 text-sm font-body text-muted-foreground">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
