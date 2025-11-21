import { InventoryProvider } from "@/contexts/InventoryDataContext";
import DashboardShell from "@/components/dashboard/DashboardShell";

export default function DashboardPage() {
  return (
    <InventoryProvider>
      <DashboardShell />
    </InventoryProvider>
  );
}
