// import { motion } from "framer-motion";
// import heroImage from "@/assets/hero-bg.jpg";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-[500px] md:min-h-[550px] flex items-center justify-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       />
//       <div className="absolute inset-0 gradient-overlay" />

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 text-center text-white py-16">
//         <motion.h1 
//           className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           L'expertise automobile n°1 au Maroc
//           <br />
//           100% mobile, 100% fiable.
//         </motion.h1>
//         <motion.p 
//           className="text-lg md:text-xl mb-8 opacity-90"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//         >
//           96% de précision dans nos diagnostics | 98% de taux de satisfaction client
//         </motion.p>

//         <motion.div 
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//         >
//           <motion.a 
//             href="#contact" 
//             className="btn-primary"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             Réserver Votre Expert
//           </motion.a>
//           <motion.a 
//             href="#packs" 
//             className="btn-outline"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             Voir Nos Prix
//           </motion.a>
//           <motion.a 
//             href="#villes" 
//             className="btn-outline"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             Voir les villes disponibles
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bg.jpg";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[calc(100svh-104px)] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 gradient-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white py-16">
        <motion.h1 
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t("hero.title1")}
          <br />
          {t("hero.title2")}
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-8 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {t("hero.stats")}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.a 
            href="#contact" 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("hero.reserve")}
          </motion.a>
          <motion.a 
            href="#packs" 
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("hero.prices")}
          </motion.a>
          <motion.a 
            href="#villes" 
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("hero.cities")}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;