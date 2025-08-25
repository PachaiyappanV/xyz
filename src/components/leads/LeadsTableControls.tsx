import { Filter, RefreshCw, Layers, ArrowDownWideNarrow } from "lucide-react";
import { Button } from "../ui/button";
import { SearchBar } from "@/components/global";
import { AddLeadsDropdown, LeadsSettingsDropdown } from ".";

const LeadsTableControls = () => {
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
        <Button variant="outline" className="cursor-pointer">
          <ArrowDownWideNarrow />
          Sort
        </Button>
        <Button variant="outline" className="cursor-pointer">
          <Filter />
          Filters
        </Button>
        <AddLeadsDropdown />
        <LeadsSettingsDropdown />

        <Button variant="outline" className="cursor-pointer">
          <RefreshCw />
        </Button>
      </div>
    </div>
  );
};
export default LeadsTableControls;
