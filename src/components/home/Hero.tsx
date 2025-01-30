import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0" />
      
      <div className="container mx-auto px-4 text-center z-10 animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Discover the Best AI Tools
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Find, compare, and choose the perfect AI tools for your needs. Explore our curated directory of cutting-edge artificial intelligence solutions.
        </p>
        
        <div className="max-w-xl mx-auto flex gap-2">
          <div className="relative flex-1">
            <Input
              placeholder="Search AI tools..."
              className="w-full h-12 pl-12 glass-card"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          <Button size="lg">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;