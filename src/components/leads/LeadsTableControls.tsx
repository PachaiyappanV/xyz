import { Filter, RefreshCw, Layers } from "lucide-react";
import { Button } from "../ui/button";
import { SearchBar } from "@/components/global";
import { AddLeadsDropdown, LeadsSettingsDropdown } from ".";

type Props = {
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
  appliedFilters: number;
};
const LeadsTableControls = ({ setOpenFilter, appliedFilters }: Props) => {
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
        <Button
          variant="outline"
          className="cursor-pointer flex items-center gap-2 relative"
          onClick={() => setOpenFilter((openFilter) => !openFilter)}
        >
          <Filter className="w-4 h-4" />
          <span>Filters</span>

          {appliedFilters > 0 && (
            <span
              className="inline-flex items-center justify-center 
                     rounded-full bg-blue-600 text-white text-xs font-medium 
                     w-5 h-5"
            >
              {appliedFilters}
            </span>
          )}
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
