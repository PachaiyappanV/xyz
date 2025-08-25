import { leads } from "@/constants";
import { LeadsTableHeader, LeadsTableRow } from ".";

const LeadsTable = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <LeadsTableHeader />
          <tbody className="bg-white divide-y divide-gray-200">
            {leads.map((lead, index) => (
              <LeadsTableRow key={lead.email} lead={lead} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsTable;
