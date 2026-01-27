// import { Star } from "lucide-react";
// import { motion } from "framer-motion";
// import { ScrollAnimation, StaggerContainer, StaggerItem } from "./animations/ScrollAnimation";

// const testimonials = [
//   {
//     name: "Mohammed A.",
//     rating: 5,
//     text: "Service excellent ! L'expert était très professionnel et le rapport très détaillé. Je recommande vivement Nova"
//   },
//   {
//     name: "Fatima Z.",
//     rating: 5,
//     text: "Grâce à leur diagnostic, j'ai évité d'acheter une voiture avec des problèmes cachés. Merci beaucoup !"
//   },
//   {
//     name: "Ahmed B.",
//     rating: 5,
//     text: "Très satisfait du service. L'expert s'est déplacé chez le vendeur et m'a fourni un rapport complet en moins d'une heure."
//   }
// ];

// const TestimonialsSection = () => {
//   return (
//     <section className="py-16 md:py-24 bg-background">
//       <div className="container mx-auto px-4">
//         <ScrollAnimation className="text-center mb-12">
//           <h2 className="section-title">
//             Ce que disent <span>nos clients</span>
//           </h2>
//           <div className="section-divider">
//             <div className="w-3 h-3 bg-secondary rotate-45" />
//           </div>
//           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//             La satisfaction de nos clients est notre plus grande fierté. Découvrez leurs retours d'expérience après avoir utilisé notre service d'inspection.
//           </p>
//         </ScrollAnimation>

//         <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.15}>
//           {testimonials.map((testimonial, index) => (
//             <StaggerItem key={index}>
//               <motion.div
//                 className="bg-card border border-border rounded-xl p-6 shadow-sm h-full"
//                 whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="flex gap-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, scale: 0 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.3, delay: i * 0.1 }}
//                     >
//                       <Star className="w-5 h-5 text-secondary fill-secondary" />
//                     </motion.div>
//                   ))}
//                 </div>
//                 <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
//                 <p className="font-semibold text-foreground">{testimonial.name}</p>
//               </motion.div>
//             </StaggerItem>
//           ))}
//         </StaggerContainer>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./animations/ScrollAnimation";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useDirection();

  const testimonials = t("testimonials.items", { returnObjects: true }) as Array<{
    name: string;
    rating: number;
    text: string;
  }>;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-12">
          <h2 className="section-title" style={{ direction: isRTL ? "rtl" : "ltr" }}>
            {t("testimonials.title")}
          </h2>
          <div className="section-divider">
            <div className="w-3 h-3 bg-secondary rotate-45" />
          </div>
          <p 
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            style={{ direction: isRTL ? "rtl" : "ltr" }}
          >
            {t("testimonials.subtitle")}
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.15}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-card border border-border rounded-xl p-6 shadow-sm h-full"
                style={{ direction: isRTL ? "rtl" : "ltr" }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-secondary fill-secondary" />
                    </motion.div>
                  ))}
                </div>
                <p 
                  className="text-muted-foreground mb-4"
                  style={{ textAlign: isRTL ? "right" : "left" }}
                >
                  "{testimonial.text}"
                </p>
                <p 
                  className="font-semibold text-foreground"
                  style={{ textAlign: isRTL ? "right" : "left" }}
                >
                  {testimonial.name}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialsSection;