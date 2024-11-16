import BottomNav from "@/components/custom/BottomNav";
import DashboardGrid from "@/components/custom/DashboardGrid";
import Navbar from "@/components/custom/TopBar";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <DashboardGrid />
      <BottomNav />
    </div>
  );
}