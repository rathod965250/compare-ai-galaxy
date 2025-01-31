import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import AdminToolCard from "./AdminToolCard";
import { MOCK_TOOLS } from "@/data/mockTools";

const AdminToolsGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button className="gradient-border">
          <Plus className="h-4 w-4 mr-2" />
          Add New Tool
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_TOOLS.map((tool) => (
          <AdminToolCard key={tool.id} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default AdminToolsGrid;