import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-32 bg-gradient-to-br from-primary/10 to-white dark:from-primary/20 dark:to-gray-900 h-screen flex items-center">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 text-primary"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m Akshit
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Front‑End Developer | BCA 2ᵗʰ | Year @ Dronacharya pg college of eduction,RAit <br />
          Crafting responsive, performance‑first UI with HTML, CSS, JavaScript & React.
        </motion.p>

        <ScrollLink
          to="projects"
          smooth
          duration={500}
          offset={-70}
          className="inline-block bg-primary hover:bg-primary/80 text-white font-medium py-3 px-6 rounded-full transition-colors cursor-pointer"
        >
          See My Work
        </ScrollLink>
      </div>
    </section>
  );
}
