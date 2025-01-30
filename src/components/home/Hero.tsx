import { Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-20" />
      <div className="absolute inset-0 bg-grid-white/10" />
      
      <div className="container mx-auto px-4 text-center z-10 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm">Discover 1000+ AI Tools</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Find the Best AI Tools in One Click
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore our curated directory of cutting-edge artificial intelligence solutions. 
          Compare, choose, and elevate your workflow with the perfect AI tools.
        </p>
        
        <div className="max-w-xl mx-auto flex gap-2">
          <div className="relative flex-1">
            <Input
              placeholder="Search AI tools..."
              className="w-full h-12 pl-12 glass-card"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          <Button size="lg" className="gradient-border">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;