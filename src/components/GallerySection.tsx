import { motion } from "framer-motion";
import bridal1 from "@/assets/bridal-1.jpg";
import bridal2 from "@/assets/bridal-2.jpg";
import bridal3 from "@/assets/bridal-3.jpg";
import bridal4 from "@/assets/bridal-4.jpg";
import bridal5 from "@/assets/bridal-5.jpg";
import hair1 from "@/assets/hair-1.jpg";
import hair2 from "@/assets/hair-2.jpg";
import hair3 from "@/assets/hair-3.jpg";
import hair4 from "@/assets/hair-4.jpg";

const portfolioImages = [
  { src: bridal1, alt: "Bridal makeup - Red saree look" },
  { src: bridal2, alt: "Bridal makeup - Pink saree look" },
  { src: bridal3, alt: "Bridal makeup - Blue & gold look" },
  { src: bridal4, alt: "Bridal makeup - Purple elegant look" },
  { src: bridal5, alt: "Bridal makeup - Traditional look" },
  { src: hair1, alt: "Professional bridal hairstyle - Fishtail braid" },
  { src: hair2, alt: "Professional bridal hairstyle - Elegant braid" },
  { src: hair3, alt: "Professional bridal hairstyle - Elegant bun" },
  { src: hair4, alt: "Professional hairstyle - Open curls" },
];

const GallerySection = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Our <span className="text-gradient-gold">Portfolio</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-body text-muted-foreground">
            <span>✨ 14+ Years Experience</span>
            <span>✨ 4000+ Students Trained</span>
            <span>✨ Hundreds of Successful Makeup Artists</span>
          </div>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {portfolioImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid group relative overflow-hidden rounded-xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full rounded-xl transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-burgundy-dark/0 group-hover:bg-burgundy-dark/30 transition-colors duration-300 rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
