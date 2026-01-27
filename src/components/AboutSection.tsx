// import { ScrollAnimation } from "./animations/ScrollAnimation";

// const AboutSection = () => {
//   return (
//     <section className="py-16 md:py-24 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto">
//           <ScrollAnimation className="text-center mb-8">
//             <h2 className="section-title">
//               À propos de <span>Nova ?</span>
//             </h2>
//             <div className="section-divider">
//               <div className="w-3 h-3 bg-secondary rotate-45" />
//             </div>
//           </ScrollAnimation>

//           <div className="space-y-6 text-muted-foreground text-center">
//             <ScrollAnimation delay={0.1}>
//               <p>
//                 Notre équipe d'experts qualifiés vous accompagne tout au long du processus en vous fournissant des informations précises et détaillées sur chaque véhicule.
//               </p>
//             </ScrollAnimation>
//             <ScrollAnimation delay={0.2}>
//               <p>
//                 Chez Nova, nous comprenons que l'achat d'une voiture d'occasion représente un investissement important. C'est pourquoi nous proposons une inspection professionnelle à des tarifs clairs et accessibles, adaptés à tous les budgets.
//               </p>
//             </ScrollAnimation>
//             <ScrollAnimation delay={0.3}>
//               <p>
//                 Nous inspectons chaque voiture avec la plus grande attention pour garantir son état et sa qualité. Grâce aux technologies les plus avancées et à des méthodes de diagnostic précises, nous vérifions chaque détail.
//               </p>
//             </ScrollAnimation>
//             <ScrollAnimation delay={0.4}>
//               <p className="font-semibold text-foreground">
//                 La confiance et la transparence sont nos priorités.
//               </p>
//             </ScrollAnimation>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
import { ScrollAnimation } from "./animations/ScrollAnimation";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";

const AboutSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useDirection();
  
  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation className="text-center mb-8">
            <h2 className="section-title" style={{ direction: isRTL ? "rtl" : "ltr" }}>
              {t("about.title")}
            </h2>
            <div className="section-divider">
              <div className="w-3 h-3 bg-secondary rotate-45" />
            </div>
          </ScrollAnimation>

          <div className="space-y-6 text-muted-foreground text-center">
            {paragraphs.map((paragraph, index) => (
              <ScrollAnimation key={index} delay={0.1 * (index + 1)}>
                <p 
                  className={index === paragraphs.length - 1 ? "font-semibold text-foreground" : ""}
                  style={{ 
                    direction: isRTL ? "rtl" : "ltr",
                    textAlign: isRTL ? "right" : "center"
                  }}
                >
                  {paragraph}
                </p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;