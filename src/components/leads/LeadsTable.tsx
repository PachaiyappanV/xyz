import { leads } from "@/constants";
import { LeadsTableControls, LeadsTableHeader, LeadsTableRow } from ".";
import { TablePagination } from "../global";

const LeadsTable = () => {
  return (
    <div>
      <LeadsTableControls />
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto max-h-[450px]">
          <table className="w-full">
            <LeadsTableHeader />
            <tbody className="bg-white divide-y divide-gray-200">
              {leads.map((lead, index) => (
                <LeadsTableRow key={lead.email} lead={lead} index={index} />
              ))}
            </tbody>
          </table>
        </div>
        <TablePagination />
      </div>
    </div>
  );
};

export default LeadsTable;
