// import { Eye, Clock, MessageCircle, Zap } from "lucide-react";
// import { motion } from "framer-motion";
// import { ScrollAnimation, StaggerContainer, StaggerItem } from "./animations/ScrollAnimation";

// const engagements = [
//   {
//     icon: Eye,
//     title: "Transparence",
//     description: "Nos experts inspectent chaque véhicule sur plus de 150 points de contrôle."
//   },
//   {
//     icon: Clock,
//     title: "Disponibilité",
//     description: "Nos spécialistes sont toujours prêts à répondre à vos demandes 24/7."
//   },
//   {
//     icon: MessageCircle,
//     title: "Conseils personnalisés",
//     description: "Nos experts vous indiquent si l'achat est une bonne option et vous recommandent le prix adapté."
//   },
//   {
//     icon: Zap,
//     title: "Simplicité",
//     description: "L'expert se déplace jusqu'au propriétaire du véhicule, vous n'êtes pas obligé d'être présent."
//   }
// ];

// const EngagementsSection = () => {
//   return (
//     <section className="py-16 md:py-24 bg-background">
//       <div className="container mx-auto px-4">
//         <ScrollAnimation className="text-center mb-12">
//           <h2 className="section-title">
//             Nos <span>engagements</span>
//           </h2>
//           <div className="section-divider">
//             <div className="w-3 h-3 bg-secondary rotate-45" />
//           </div>
//           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//             Chez <strong>Nova</strong>, nos valeurs guident chacune de nos interventions pour vous garantir la meilleure expérience possible.
//           </p>
//         </ScrollAnimation>

//         <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
//           {engagements.map((item, index) => (
//             <StaggerItem key={index}>
//               <motion.div 
//                 className="engagement-card bg-card border border-border h-full"
//                 whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <motion.div 
//                   className="w-20 h-20 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center"
//                   whileHover={{ rotate: 10, scale: 1.1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <item.icon className="w-10 h-10 text-secondary" />
//                 </motion.div>
//                 <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
//                 <p className="text-muted-foreground text-sm">{item.description}</p>
//               </motion.div>
//             </StaggerItem>
//           ))}
//         </StaggerContainer>
//       </div>
//     </section>
//   );
// };

// export default EngagementsSection;
import { Eye, Clock, MessageCircle, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./animations/ScrollAnimation";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";

const engagementIcons = [Eye, Clock, MessageCircle, Zap];

const EngagementsSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useDirection();

  const engagements = t("engagements.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-12">
          <h2 className="section-title" style={{ direction: isRTL ? "rtl" : "ltr" }}>
            {t("engagements.title")}
          </h2>
          <div className="section-divider">
            <div className="w-3 h-3 bg-secondary rotate-45" />
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" style={{ direction: isRTL ? "rtl" : "ltr" }}>
            {t("engagements.subtitle")}
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
          {engagements.map((item, index) => {
            const Icon = engagementIcons[index];
            return (
              <StaggerItem key={index}>
                <motion.div 
                  className="engagement-card bg-card border border-border h-full rounded-xl p-6"
                  style={{ direction: isRTL ? "rtl" : "ltr", textAlign: isRTL ? "right" : "left" }}
                  whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-20 h-20 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-10 h-10 text-secondary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2 text-center">{item.title}</h3>
                  <p className="text-muted-foreground text-sm text-center">{item.description}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default EngagementsSection;