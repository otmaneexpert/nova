import { Phone } from "lucide-react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <a href="tel:+212606141818" className="text-sm hover:underline" dir="ltr">
            +212 6 65 61 13 76   
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/5abir.ma/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <FaFacebookF size={14} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <FaYoutube size={16} />
          </a>
          <a href="https://www.instagram.com/5abir.ma/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <FaInstagram size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
