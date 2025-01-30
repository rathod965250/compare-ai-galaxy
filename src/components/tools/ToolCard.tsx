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
    <div className="glass-card rounded-lg p-6 transition-all duration-300 hover:scale-105 group">
      <div className="flex items-start justify-between mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-lg object-cover ring-2 ring-white/10"
        />
        <div className="flex items-center bg-white/5 rounded-full px-3 py-1">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
          <span className="text-sm">{rating.toFixed(1)}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
        {name}
      </h3>
      
      <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
      
      <Link to={`/tool/${id}`} className="block">
        <Button 
          variant="ghost" 
          className="w-full group-hover:bg-primary/20 transition-colors"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  );
};

export default ToolCard;