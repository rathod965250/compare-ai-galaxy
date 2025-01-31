import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ToolCardProps {
  id: string;
  name: string;
  description: string;
  rating: number;
  image: string;
}

const ToolCard = ({ id, name, description, rating, image }: ToolCardProps) => {
  return (
    <div className="relative group">
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Main card content */}
      <div className="relative glass-card rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl">
        <div className="flex items-start justify-between mb-6">
          {/* Image container with gradient overlay */}
          <div className="relative w-16 h-16 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Rating badge with animation */}
          <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10 transform group-hover:scale-105 transition-transform">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1.5" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        {/* Tool name with gradient text effect */}
        <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">
          {name}
        </h3>
        
        {/* Description with improved readability */}
        <p className="text-muted-foreground mb-6 line-clamp-2 flex-grow">
          {description}
        </p>
        
        {/* Action button with hover effect */}
        <Link to={`/tool/${id}`} className="block mt-auto">
          <Button 
            variant="ghost" 
            className="w-full group-hover:bg-primary/20 transition-all duration-300 border border-white/10"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;