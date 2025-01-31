import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface AdminToolCardProps {
  id: string;
  name: string;
  description: string;
  rating: number;
  image: string;
}

const AdminToolCard = ({ id, name, description, rating, image }: AdminToolCardProps) => {
  const handleEdit = () => {
    // TODO: Implement edit functionality when backend is ready
    toast.info(`Editing tool: ${name}`);
  };

  const handleDelete = () => {
    // TODO: Implement delete functionality when backend is ready
    toast.success(`Tool deleted: ${name}`);
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="relative glass-card rounded-lg p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="relative w-16 h-16 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={handleEdit} className="h-8 w-8">
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleDelete} className="h-8 w-8 text-destructive">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="mt-auto">
          <div className="text-sm text-muted-foreground">
            Rating: <span className="font-medium text-foreground">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminToolCard;