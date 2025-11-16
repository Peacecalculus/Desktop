import { FaBox, FaPlus, FaMinus } from "react-icons/fa";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold text-foreground flex items-center gap-2">
        <FaBox className="text-primary" />
        StoreKeeper
      </h1>
      <div className="flex gap-2 mt-4">
        <Button>
          <FaPlus className="mr-2" />
          Add Item
        </Button>
        <Button variant="destructive">
          <FaMinus className="mr-2" />
          Remove Item
        </Button>
      </div>
    </div>
  );
}

export default App;
