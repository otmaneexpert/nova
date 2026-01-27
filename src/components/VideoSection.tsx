import { Play } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "./animations/ScrollAnimation";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-12">
          <h2 className="section-title">
            Découvrez <span>notre service</span>
          </h2>
          <div className="section-divider">
            <div className="w-3 h-3 bg-secondary rotate-45" />
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprenez comment nous inspectons votre voiture d'occasion avec précision et professionnalisme.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2} className="max-w-3xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
            {!isPlaying ? (
              <>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center relative">
                    <motion.div 
                      className="absolute inset-0 bg-primary/30 rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.button
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center z-10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </motion.button>
                  </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                  <img 
                    src="https://5abir.ma/wp-content/uploads/2025/04/Green-and-Blue-Car-Flat-Illustrative-Car-Trade-Logo.png"
                    alt="5abir.ma"
                    className="h-24 object-contain"
                  />
                </div>
              </>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/NuPBzJUYj2A?autoplay=1"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default VideoSection;
