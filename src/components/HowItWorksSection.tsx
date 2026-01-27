// import { Calendar, Phone, MapPin, Settings, FileText } from "lucide-react";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { ScrollAnimation } from "./animations/ScrollAnimation";

// const steps = [
//   {
//     icon: Calendar,
//     number: "1",
//     title: "Prise de rendez-vous",
//     description: "Vous pouvez prendre rendez-vous en toute simplicité :",
//     items: [
//       "En remplissant notre formulaire en ligne",
//       "Ou en nous contactant directement par téléphone"
//     ]
//   },
//   {
//     icon: Phone,
//     number: "2",
//     title: "Confirmation par notre expert",
//     description: "L'un de nos experts vous appellera pour :",
//     items: [
//       "Confirmer le rendez-vous",
//       "Recueillir les informations nécessaires sur le véhicule à inspecter"
//     ]
//   },
//   {
//     icon: MapPin,
//     number: "3",
//     title: "Déplacement de l'expert",
//     description: "Nous nous déplaçons jusqu'à vous, où que vous soyez :",
//     items: [
//       "À votre domicile",
//       "Chez un vendeur",
//       "Dans un garage ou tout autre lieu"
//     ]
//   },
//   {
//     icon: Settings,
//     number: "4",
//     title: "Réalisation de l'expertise",
//     description: "Notre expert procède à une inspection complète de votre véhicule, couvrant plus de 150 points :",
//     items: [
//       "Diagnostic électronique",
//       "Vérification mécanique",
//       "Contrôle de la carrosserie et de la peinture",
//       "Test de conduite, etc."
//     ]
//   },
//   {
//     icon: FileText,
//     number: "5",
//     title: "Remise du rapport sur place",
//     description: "À la fin de l'expertise, vous recevez immédiatement un rapport détaillé, clair et fiable pour vous aider dans votre décision d'achat.",
//     items: []
//   }
// ];

// const HowItWorksSection = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(containerRef, { once: true, margin: "-100px" });

//   return (
//     <section id="comment-ca-marche" className="py-20 md:py-28 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <ScrollAnimation className="text-center mb-16">
//           <h2 className="section-title">
//             Comment ça <span>marche ?</span>
//           </h2>
//           <div className="section-divider">
//             <div className="w-3 h-3 bg-secondary rotate-45" />
//           </div>
//           <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-base md:text-lg">
//             Chez <strong className="text-foreground">Nova</strong>, nous facilitons le diagnostic de votre voiture avant l'achat. Notre processus est simple, rapide et fiable.
//           </p>
//         </ScrollAnimation>

//         {/* Timeline Container */}
//         <div ref={containerRef} className="relative max-w-5xl mx-auto">
//           {/* Vertical Line - Desktop */}
//           <motion.div 
//             className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-secondary via-secondary to-secondary/50 rounded-full"
//             style={{ top: "40px", bottom: "40px" }}
//             initial={{ scaleY: 0, originY: 0 }}
//             animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//           />

//           {steps.map((step, index) => {
//             const isEven = index % 2 === 0;
            
//             return (
//               <div
//                 key={index}
//                 className={`relative flex flex-col md:flex-row items-center mb-12 last:mb-0 ${
//                   isEven ? "md:flex-row" : "md:flex-row-reverse"
//                 }`}
//               >
//                 {/* Content Card */}
//                 <ScrollAnimation 
//                   direction={isEven ? "right" : "left"}
//                   delay={index * 0.1}
//                   className={`w-full md:w-[calc(50%-40px)] ${isEven ? "md:pr-4" : "md:pl-4"}`}
//                 >
//                   <motion.div 
//                     className={`bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border/50 ${
//                       isEven ? "md:text-right" : "md:text-left"
//                     }`}
//                     whileHover={{ 
//                       scale: 1.02, 
//                       boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
//                       borderColor: "hsl(var(--secondary))"
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {/* Step Number Badge - Mobile */}
//                     <div className="md:hidden flex items-center gap-3 mb-4">
//                       <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-lg">
//                         {step.number}
//                       </div>
//                       <h3 className="text-lg font-bold text-primary">{step.title}</h3>
//                     </div>
                    
//                     {/* Title - Desktop */}
//                     <h3 className="hidden md:block text-xl font-bold text-primary mb-3">
//                       {step.number}. {step.title}
//                     </h3>
                    
//                     <p className="text-muted-foreground text-sm md:text-base mb-3 leading-relaxed">
//                       {step.description}
//                     </p>
                    
//                     {step.items.length > 0 && (
//                       <ul className={`text-sm md:text-base text-muted-foreground space-y-2 ${
//                         isEven ? "md:text-right" : "md:text-left"
//                       }`}>
//                         {step.items.map((item, i) => (
//                           <motion.li 
//                             key={i}
//                             className={`flex items-start gap-2 ${isEven ? "md:justify-end" : ""}`}
//                             initial={{ opacity: 0, x: isEven ? 20 : -20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: 0.3 + i * 0.1 }}
//                           >
//                             {!isEven && <span className="text-secondary font-bold">•</span>}
//                             <span>{item}</span>
//                             {isEven && <span className="text-secondary font-bold">•</span>}
//                           </motion.li>
//                         ))}
//                       </ul>
//                     )}
//                   </motion.div>
//                 </ScrollAnimation>

//                 {/* Center Icon - Desktop */}
//                 <motion.div 
//                   className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-secondary items-center justify-center text-white shadow-lg z-10 border-4 border-background"
//                   initial={{ scale: 0, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ 
//                     duration: 0.5, 
//                     delay: index * 0.15,
//                     type: "spring",
//                     stiffness: 200
//                   }}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <step.icon className="w-7 h-7" />
//                 </motion.div>

//                 {/* Empty space for alignment - Desktop */}
//                 <div className="hidden md:block w-[calc(50%-40px)]" />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorksSection;
import { Calendar, Phone, MapPin, Settings, FileText } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollAnimation } from "./animations/ScrollAnimation";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";
import React from "react";

const stepIcons = [Calendar, Phone, MapPin, Settings, FileText];

const HowItWorksSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useDirection();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "1",
      title: t("howItWorks.steps.1.title"),
      description: t("howItWorks.steps.1.description"),
      items: t("howItWorks.steps.1.items", { returnObjects: true })
    },
    {
      number: "2",
      title: t("howItWorks.steps.2.title"),
      description: t("howItWorks.steps.2.description"),
      items: t("howItWorks.steps.2.items", { returnObjects: true })
    },
    {
      number: "3",
      title: t("howItWorks.steps.3.title"),
      description: t("howItWorks.steps.3.description"),
      items: t("howItWorks.steps.3.items", { returnObjects: true })
    },
    {
      number: "4",
      title: t("howItWorks.steps.4.title"),
      description: t("howItWorks.steps.4.description"),
      items: t("howItWorks.steps.4.items", { returnObjects: true })
    },
    {
      number: "5",
      title: t("howItWorks.steps.5.title"),
      description: t("howItWorks.steps.5.description"),
      items: t("howItWorks.steps.5.items", { returnObjects: true })
    }
  ];

  return (
    <section id="comment-ca-marche" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="section-title">
            {t("howItWorks.title").split(" ").map((word, index, array) => {
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
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-base md:text-lg">
            {t("howItWorks.subtitle", { strong: (chunks) => <strong className="text-foreground">{chunks}</strong> })}
          </p>
        </ScrollAnimation>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Desktop */}
          <motion.div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-secondary via-secondary to-secondary/50 rounded-full"
            style={{ top: "40px", bottom: "40px" }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const Icon = stepIcons[index];
            
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center mb-12 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <ScrollAnimation 
                  direction={isEven ? "right" : "left"}
                  delay={index * 0.1}
                  className={`w-full md:w-[calc(50%-40px)] ${isEven ? "md:pr-4" : "md:pl-4"}`}
                >
                  <motion.div 
                    className={`bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border/50 ${
                      isEven && !isRTL ? "md:text-right" : 
                      !isEven && isRTL ? "md:text-right" : "md:text-left"
                    }`}
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                      borderColor: "hsl(var(--secondary))"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step Number Badge - Mobile */}
                    <div className="md:hidden flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-lg">
                        {step.number}
                      </div>
                      <h3 className="text-lg font-bold text-primary" style={{ textAlign: isRTL ? "right" : "left" }}>
                        {step.title}
                      </h3>
                    </div>
                    
                    {/* Title - Desktop */}
                    <h3 className="hidden md:block text-xl font-bold text-primary mb-3" style={{ textAlign: isRTL ? "right" : "left" }}>
                      {step.number}. {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm md:text-base mb-3 leading-relaxed" style={{ textAlign: isRTL ? "right" : "left" }}>
                      {step.description}
                    </p>
                    
                    {Array.isArray(step.items) && step.items.length > 0 && (
                      <ul className={`text-sm md:text-base text-muted-foreground space-y-2 ${
                        isEven && !isRTL ? "md:text-right" : 
                        !isEven && isRTL ? "md:text-right" : "md:text-left"
                      }`}>
                        {Array.isArray(step.items) &&
  step.items.map((item: string, i: number) => (
                          <motion.li 
                            key={i}
                            className={`flex items-start gap-2 ${
                              isEven && !isRTL ? "md:justify-end" : 
                              !isEven && isRTL ? "md:justify-end" : ""
                            }`}
                            initial={{ opacity: 0, x: (isEven && !isRTL) || (!isEven && isRTL) ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            dir={isRTL ? "rtl" : "ltr"}
                          >
                            {((!isEven && !isRTL) || (isEven && isRTL)) && (
                              <span className="text-secondary font-bold">•</span>
                            )}
                            <span>{item}</span>
                            {((isEven && !isRTL) || (!isEven && isRTL)) && (
                              <span className="text-secondary font-bold">•</span>
                            )}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </ScrollAnimation>

                {/* Center Icon - Desktop */}
                <motion.div 
                  className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-secondary items-center justify-center text-white shadow-lg z-10 border-4 border-background"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-7 h-7" />
                </motion.div>

                {/* Empty space for alignment - Desktop */}
                <div className="hidden md:block w-[calc(50%-40px)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;