import ToolCard from "../tools/ToolCard";

const MOCK_TOOLS = [
  {
    id: "1",
    name: "ChatGPT",
    description: "Advanced language model for natural conversations and content generation",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "2",
    name: "Midjourney",
    description: "AI-powered image generation tool for creating stunning artwork",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "3",
    name: "Copy.ai",
    description: "AI copywriting assistant for marketing and content creation",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=300&q=80",
  },
];

const ToolGrid = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Popular AI Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_TOOLS.map((tool) => (
          <ToolCard key={tool.id} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default ToolGrid;