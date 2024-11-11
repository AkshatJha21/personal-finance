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

// Wallet app => user creates account and adds money to the wallet from their account
// then user reallocates the funds from the wallet to various ventures
// Payment modal
// All goals + individual goal + set new goal + save for existing goal
// All investments page + individual fund + invest in new fund
// Complete Spending analytics
// All transactions page
// Transfer modal
// More dropdown => subscriptions (payments), recurring deposits (investments)
// all account details => total earnings, total expense, total savings, all investments