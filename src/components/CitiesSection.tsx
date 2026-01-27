// import { motion } from "framer-motion";
// import { ScrollAnimation } from "./animations/ScrollAnimation";

// const CitiesSection = () => {
//   return (
//     <section id="villes" className="py-16 md:py-24 bg-background">
//       <div className="container mx-auto px-4">
//         <ScrollAnimation className="text-center mb-12">
//           <h2 className="section-title">
//             Où nous <span>opérons</span>
//           </h2>
//           <div className="section-divider">
//             <div className="w-3 h-3 bg-secondary rotate-45" />
//           </div>
//           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//             Oubliez les déplacements : c'est notre expert qui vient à vous, dans toutes les villes couvertes.
//           </p>
//         </ScrollAnimation>

//         <ScrollAnimation delay={0.2} className="max-w-4xl mx-auto">
//           <motion.div 
//             className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 flex items-center justify-center"
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.3 }}
//           >
//             <motion.img 
//               src="https://5abir.ma/wp-content/uploads/2025/11/Green-and-Blue-Car-Flat-Illustrative-Car-Trade-Logo-1.png"
//               alt="Carte des villes"
//               className="max-w-full h-auto"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             />
//           </motion.div>
//         </ScrollAnimation>
//       </div>
//     </section>
//   );
// };

// export default CitiesSection;
import { motion } from "framer-motion";
import { ScrollAnimation } from "./animations/ScrollAnimation";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";

const CitiesSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useDirection();

  return (
    <section id="villes" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-12">
          <h2 className="section-title" style={{ direction: isRTL ? "rtl" : "ltr" }}>
            {t("cities.title").split(" ").map((word, index) => (
              word === (isRTL ? "نعمل" : "opérons") ? (
                <span key={index}> {word}</span>
              ) : (
                <span key={index}> {word} </span>
              )
            ))}
          </h2>
          <div className="section-divider">
            <div className="w-3 h-3 bg-secondary rotate-45" />
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" style={{ direction: isRTL ? "rtl" : "ltr" }}>
            {t("cities.subtitle")}
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2} className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{ direction: isRTL ? "rtl" : "ltr" }}
          >
            <motion.img 
              src="https://5abir.ma/wp-content/uploads/2025/11/Green-and-Blue-Car-Flat-Illustrative-Car-Trade-Logo-1.png"
              alt={t("cities.mapAlt")}
              className="max-w-full h-auto"
              style={{ 
                transform: isRTL ? "scaleX(-1)" : "none" 
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CitiesSection;