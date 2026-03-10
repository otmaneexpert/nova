// import { Check } from "lucide-react";
// import { motion } from "framer-motion";
// import { ScrollAnimation } from "./animations/ScrollAnimation";

// const features = [
//   "Contrôle de la carrosserie et châssis",
//   "Vérification de la peinture",
//   "Inspection du moteur",
//   "Diagnostic électronique",
//   "Inspection intérieure",
//   "Kilométrage réel",
//   "Test drive"
// ];

// const PricingSection = () => {
//   return (
//     <section id="packs" className="py-16 md:py-24 bg-muted/50">
//       <div className="container mx-auto px-4">
//         <ScrollAnimation className="text-center mb-12">
//           <h2 className="section-title">
//             Nos <span>Tarifs ?</span>
//           </h2>
//           <div className="section-divider">
//             <div className="w-3 h-3 bg-secondary rotate-45" />
//           </div>
//         </ScrollAnimation>

//         <ScrollAnimation delay={0.2} className="max-w-md mx-auto">
//           <motion.div 
//             className="pricing-card text-center"
//             whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="mb-6">
//               <motion.div 
//                 className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4"
//                 whileHover={{ rotate: 360 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <svg className="w-8 h-8 text-secondary" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
//                 </svg>
//               </motion.div>
//               <h3 className="text-2xl font-bold text-foreground">Pack D'expertise</h3>
//             </div>

//             <div className="mb-6">
//               <span className="text-sm text-muted-foreground">A partir de</span>
//               <div className="flex items-baseline justify-center">
//                 <motion.span 
//                   className="text-5xl font-bold text-secondary"
//                   initial={{ opacity: 0, scale: 0.5 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, type: "spring" }}
//                 >
//                   349
//                 </motion.span>
//                 <span className="text-xl text-muted-foreground ml-2">MAD</span>
//               </div>
//             </div>

//             <ul className="space-y-3 mb-8">
//               {features.map((feature, index) => (
//                 <motion.li 
//                   key={index} 
//                   className="flex items-center gap-3 text-muted-foreground"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                 >
//                   <Check className="w-5 h-5 text-secondary flex-shrink-0" />
//                   <span>{feature}</span>
//                 </motion.li>
//               ))}
//             </ul>

//             <motion.a
//               href="#contact"
//               className="inline-block w-full bg-secondary text-white font-semibold py-3 rounded-full hover:bg-secondary/90 transition-colors"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               plus de détails
//             </motion.a>
//           </motion.div>
//         </ScrollAnimation>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;
// import { Check } from "lucide-react";
// import { motion } from "framer-motion";
// import { ScrollAnimation } from "./animations/ScrollAnimation";
// import { useTranslation } from "react-i18next";
// import { useDirection } from "@/hooks/useDirection";
// import React from "react";

// const PricingSection = () => {
//   const { t, i18n } = useTranslation();
//   const { isRTL } = useDirection();

//   const features = t("pricing.pack.features", { returnObjects: true }) as string[];

//   return (
//     <section id="packs" className="py-16 md:py-24 bg-muted/50">
//       <div className="container mx-auto px-4">
//         <ScrollAnimation className="text-center mb-12">
//           <h2 className="section-title" style={{ direction: isRTL ? "rtl" : "ltr" }}>
//             {t("pricing.title").split(" ").map((word, index, array) => {
//               const lastWord = array[array.length - 1];
//               return word === lastWord ? (
//                 <span key={index}> {word}</span>
//               ) : (
//                 <React.Fragment key={index}> {word} </React.Fragment>
//               );
//             })}
//           </h2>
//           <div className="section-divider">
//             <div className="w-3 h-3 bg-secondary rotate-45" />
//           </div>
//         </ScrollAnimation>

//         <ScrollAnimation delay={0.2} className="max-w-md mx-auto">
//           <motion.div 
//             className="pricing-card text-center"
//             style={{ direction: isRTL ? "rtl" : "ltr" }}
//             whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="mb-6">
//               <motion.div 
//                 className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4"
//                 whileHover={{ rotate: 360 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <svg 
//                   className="w-8 h-8 text-secondary" 
//                   viewBox="0 0 24 24" 
//                   fill="currentColor"
//                   style={{ transform: isRTL ? "scaleX(-1)" : "none" }}
//                 >
//                   <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
//                 </svg>
//               </motion.div>
//               <h3 className="text-2xl font-bold text-foreground">{t("pricing.pack.name")}</h3>
//             </div>

//             <div className="mb-6">
//               <span className="text-sm text-muted-foreground">{t("pricing.pack.startingFrom")}</span>
//               <div className={`flex items-baseline justify-center ${isRTL ? "flex-row-reverse" : ""}`}>
//                 <motion.span 
//                   className="text-5xl font-bold text-secondary"
//                   initial={{ opacity: 0, scale: 0.5 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, type: "spring" }}
//                 >
//                   349
//                 </motion.span>
//                 <span className={`text-xl text-muted-foreground ${isRTL ? "mr-2" : "ml-2"}`}>
//                   {t("pricing.pack.currency")}
//                 </span>
//               </div>
//             </div>

//             <ul className="space-y-3 mb-8" style={{ textAlign: isRTL ? "right" : "left" }}>
//               {features.map((feature, index) => (
//                 <motion.li 
//                   key={index} 
//                   className={`flex items-center gap-3 text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}
//                   style={{ direction: isRTL ? "rtl" : "ltr" }}
//                   initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                 >
//                   <Check className="w-5 h-5 text-secondary flex-shrink-0" />
//                   <span>{feature}</span>
//                 </motion.li>
//               ))}
//             </ul>

//             <motion.a
//               href="#contact"
//               className="inline-block w-full bg-secondary text-white font-semibold py-3 rounded-full hover:bg-secondary/90 transition-colors"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               style={{ direction: isRTL ? "rtl" : "ltr" }}
//             >
//               {t("pricing.pack.cta")}
//             </motion.a>
//           </motion.div>
//         </ScrollAnimation>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;
// export default PricingSection;
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "./animations/ScrollAnimation";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";
import React from "react";

const PricingSection = () => {
  const { t, i18n } = useTranslation();
  const { isRTL } = useDirection();

  const packs = [
    {
      id: "basic",
      name: t("pricing.packs.basic.name"),
      price: 350,
      currency: t("pricing.pack.currency"),
      features: t("pricing.packs.basic.features", { returnObjects: true }) as string[],
      cta: t("pricing.packs.basic.cta"),
      highlight: false,
      icon: "car"
    },
    // {
    //   id: "standard",
    //   name: t("pricing.packs.standard.name"),
    //   price: 450,
    //   currency: t("pricing.pack.currency"),
    //   features: t("pricing.packs.standard.features", { returnObjects: true }) as string[],
    //   cta: t("pricing.packs.standard.cta"),
    //   highlight: true,
    //   icon: "car"
    // },
    {
      id: "premium",
      name: t("pricing.packs.premium.name"),
      price: 500,
      currency: t("pricing.pack.currency"),
      features: t("pricing.packs.premium.features", { returnObjects: true }) as string[],
      cta: t("pricing.packs.premium.cta"),
      highlight: false,
      icon: "car"
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'car-check':
        return (
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 14.2l1.95-2.63L8.48 10l-1.48 2.2L5.5 10l-1.03 1.36 1.46 1.92 1.03-1.35zm9.47-2.23l-3.89 3.88-2.48-2.48-1.06 1.06 3.54 3.54 4.95-4.95-1.06-1.05z"/>
        );
      case 'car-plus':
        return (
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5zm8-4h2v2h-2V7zm0 4h2v2h-2v-2z"/>
        );
      default: // car
        return (
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        );
    }
  };

  return (
    <section id="packs" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-12">
          <h2 className="section-title" style={{ direction: isRTL ? "rtl" : "ltr" }}>
            {t("pricing.title").split(" ").map((word, index, array) => {
              const lastWord = array[array.length - 1];
              return word === lastWord ? (
                <span key={index}> {word}</span>
              ) : (
                <React.Fragment key={index}> {word} </React.Fragment>
              );
            })}
          </h2>
          <div className="section-divider">
            <div className="w-3 h-3 bg-secondary rotate-45" />
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center">
          {packs.map((pack, index) => (
            <ScrollAnimation 
              key={pack.id}
              delay={index * 0.1}
              className={`h-full ${pack.highlight ? "md:-mt-4 md:mb-4" : ""}`}
            >
              <motion.div 
                className={`pricing-card text-center h-full flex flex-col ${
                  pack.highlight 
                    ? "border-2 border-secondary relative bg-background shadow-xl" 
                    : "bg-background"
                }`}
                style={{ direction: isRTL ? "rtl" : "ltr" }}
                whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                {pack.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-secondary text-white text-xs font-bold px-4 py-1 rounded-full">
                      {t("pricing.mostPopular")}
                    </div>
                  </div>
                )}

                <div className="mb-6 pt-4">
                  <motion.div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      pack.highlight ? "bg-secondary/20" : "bg-secondary/10"
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg 
                      className={`w-8 h-8 ${pack.highlight ? "text-secondary" : "text-secondary"}`} 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      style={{ transform: isRTL ? "scaleX(-1)" : "none" }}
                    >
                      {getIcon(pack.icon)}
                    </svg>
                  </motion.div>
                  <h3 className={`text-2xl font-bold ${pack.highlight ? "text-secondary" : "text-foreground"}`}>
                    {pack.name}
                  </h3>
                </div>

                <div className="mb-6">
                  <span className="text-sm text-muted-foreground">{t("pricing.pack.startingFrom")}</span>
                  <div className={`flex items-baseline justify-center ${isRTL ? "flex-row-reverse" : ""}`}>
                    <motion.span 
                      className={`text-5xl font-bold ${pack.highlight ? "text-secondary" : "text-foreground"}`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      {pack.price}
                    </motion.span>
                    <span className={`text-xl text-muted-foreground ${isRTL ? "mr-2" : "ml-2"}`}>
                      {pack.currency}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 px-4 flex-grow" style={{ textAlign: isRTL ? "right" : "left" }}>
                  {pack.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className={`flex items-center gap-3 text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}
                      style={{ direction: isRTL ? "ltr" : "ltr" }}
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto px-4 pb-4">
                  <motion.a
                    href="#contact"
                    className={`inline-block w-full font-semibold py-3 rounded-full transition-colors ${
                      pack.highlight 
                        ? "bg-secondary text-white hover:bg-secondary/90" 
                        : "bg-secondary/10 text-secondary hover:bg-secondary/20"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ direction: isRTL ? "rtl" : "ltr" }}
                  >
                    {pack.cta}
                  </motion.a>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;