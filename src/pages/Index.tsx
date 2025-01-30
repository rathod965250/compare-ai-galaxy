import Hero from "@/components/home/Hero";
import ToolGrid from "@/components/home/ToolGrid";
import Navbar from "@/components/layout/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ToolGrid />
      </main>
    </div>
  );
};

export default Index;