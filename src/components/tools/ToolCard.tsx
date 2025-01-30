import { Star } from "lucide-react";
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
    <div className="glass-card rounded-lg p-6 transition-all duration-300 hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-lg mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          <span className="ml-2">{rating.toFixed(1)}</span>
        </div>
        <Link to={`/tool/${id}`}>
          <Button variant="secondary">Learn More</Button>
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;