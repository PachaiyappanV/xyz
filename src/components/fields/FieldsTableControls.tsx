import { RefreshCw, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/global";
import { FieldsFormModal } from ".";

const FieldsTableControls = () => {
  return (
    <div className="flex flex-col-reverse items-start gap-3 sm:flex-row sm:justify-between sm:items-center mb-6">
      <div className="flex gap-3 items-center">
        <SearchBar className="bg-white border-gray-300" />

        <Button variant="outline" className="cursor-pointer border-gray-300">
          <Layers />
          Bulk Actions
        </Button>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <FieldsFormModal />
        <Button variant="outline" className="cursor-pointer">
          <RefreshCw />
        </Button>
      </div>
    </div>
  );
};
export default FieldsTableControls;
