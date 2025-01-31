import { Link } from "react-router-dom";
import { Search, Menu, Sun, Moon, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 glass-card">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          AI Directory
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/compare" className="hover:text-primary transition-colors">
            Compare
          </Link>
          <Link to="/dashboard" className="hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/admin" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Shield className="h-4 w-4" />
            Admin
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/admin" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Shield className="h-4 w-4" />
            </Link>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <Button className="hidden md:inline-flex gradient-border">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;