import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminToolsGrid from "@/components/admin/AdminToolsGrid";

const Admin = () => {
  const navigate = useNavigate();
  const isAdmin = true; // TODO: Replace with actual auth check when backend is ready

  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, [isAdmin, navigate]);

  if (!isAdmin) return null;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <AdminToolsGrid />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Admin;