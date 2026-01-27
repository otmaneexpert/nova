// import { useEffect, useState, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { ScrollAnimation } from "./animations/ScrollAnimation";

// const stats = [
//   { value: 2238, suffix: "+", label: "Diagnostics faits" },
//   { value: 83, suffix: "%", label: "Clients satisfaits" },
//   { value: 0, suffix: "h+", label: "Rapport express" }
// ];

// const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (isInView) {
//       const duration = 2000;
//       const steps = 60;
//       const increment = value / steps;
//       let current = 0;
//       const timer = setInterval(() => {
//         current += increment;
//         if (current >= value) {
//           current = value;
//           clearInterval(timer);
//         }
//         setCount(Math.floor(current));
//       }, duration / steps);
//       return () => clearInterval(timer);
//     }
//   }, [isInView, value]);

//   return (
//     <motion.div 
//       ref={ref}
//       className="stat-number"
//       initial={{ scale: 0.5, opacity: 0 }}
//       whileInView={{ scale: 1, opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, type: "spring" }}
//     >
//       {count.toLocaleString()}
//       <span className="text-3xl">{suffix}</span>
//     </motion.div>
//   );
// };

// const StatsSection = () => {
//   return (
//     <section className="py-16 md:py-24 bg-background">
//       <div className="container mx-auto px-4">
//         <ScrollAnimation className="text-center mb-12">
//           <h2 className="section-title">
//             Pourquoi choisir <span>Nova ?</span>
//           </h2>
//           <div className="section-divider">
//             <div className="w-3 h-3 bg-secondary rotate-45" />
//           </div>
//           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//             Des chiffres qui prouvent notre engagement à vous offrir un service rapide, fiable et professionnel pour chaque diagnostic.
//           </p>
//         </ScrollAnimation>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//           {stats.map((stat, index) => (
//             <motion.div 
//               key={index} 
//               className="stat-card"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <AnimatedCounter value={stat.value} suffix={stat.suffix} />
//               <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Banner */}
//         <ScrollAnimation delay={0.4} className="mt-16">
//           <motion.div 
//             className="bg-secondary rounded-2xl p-8 text-secondary-foreground text-center"
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-xl md:text-2xl font-bold mb-4">
//               Découvrez l'histoire de n'importe quel véhicule
//             </h3>
//             <motion.a
//               href="tel:+212640051774"
//               className="inline-block bg-background text-secondary font-semibold px-8 py-3 rounded-full hover:bg-muted transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               Appeler Maintenant
//             </motion.a>
//           </motion.div>
//         </ScrollAnimation>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollAnimation } from "./animations/ScrollAnimation";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          current = value;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div 
      ref={ref}
      className="stat-number"
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {count.toLocaleString()}
      <span className="text-3xl">{suffix}</span>
    </motion.div>
  );
};

const StatsSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useDirection();

  const stats = t("stats.items", { returnObjects: true }) as Array<{
    value: number;
    suffix: string;
    label: string;
  }>;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-12">
          <h2 className="section-title" style={{ direction: isRTL ? "rtl" : "ltr" }}>
            {t("stats.title")}
          </h2>
          <div className="section-divider">
            <div className="w-3 h-3 bg-secondary rotate-45" />
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" style={{ direction: isRTL ? "rtl" : "ltr" }}>
            {t("stats.subtitle")}
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2 font-medium" style={{ textAlign: isRTL ? "center" : "center" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <ScrollAnimation delay={0.4} className="mt-16">
          <motion.div 
            className="bg-secondary rounded-2xl p-8 text-secondary-foreground text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ direction: isRTL ? "rtl" : "ltr" }}>
              {t("stats.cta.title")}
            </h3>
            <motion.a
              href="tel:+212665611376"
              className="inline-block bg-background text-secondary font-semibold px-8 py-3 rounded-full hover:bg-muted transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{ direction: isRTL ? "rtl" : "ltr" }}
            >
              {t("stats.cta.button")}
            </motion.a>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default StatsSection;