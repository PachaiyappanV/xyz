import { leadsTableHeaders } from "@/constants";
import { LeadsFieldsDropdown } from ".";
import { ArrowDownUp } from "lucide-react";

const LeadsTableHeader = () => {
  return (
    <thead className="bg-blue-10 border-b border-gray-200">
      <tr>
        {leadsTableHeaders.map((header, id) => (
          <th
            key={id}
            className=" px-6 py-3 text-left text-xs font-medium  text-gray-500 uppercase tracking-wider whitespace-nowrap"
          >
            {id === 0 ? (
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 flex self-center"
                />
                <span className="flex cursor-pointer hover:text-black items-center gap-1 [&>svg]:w-[15px] [&>svg]:h-[15px]">
                  {header} <ArrowDownUp />
                </span>
              </div>
            ) : id === 5 ? (
              <span className="flex items-center gap-1">
                <LeadsFieldsDropdown />
              </span>
            ) : (
              <span className="flex cursor-pointer hover:text-black items-center gap-1 [&>svg]:w-[15px] [&>svg]:h-[15px]">
                {header} <ArrowDownUp />
              </span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};
export default LeadsTableHeader;
