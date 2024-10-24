import BottomNav from "@/components/custom/BottomNav";
import Navbar from "@/components/custom/TopBar";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BottomNav />
    </div>
  );
}
