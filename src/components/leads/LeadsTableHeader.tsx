import { leadsTableHeaders } from "@/constants";
import LeadsFieldsDropdown from "./LeadsFieldsDropdown";
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
                />{" "}
                {header}
              </div>
            ) : id === 6 ? (
              <span className="flex items-center gap-1">
                <LeadsFieldsDropdown />
              </span>
            ) : (
              header
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};
export default LeadsTableHeader;
