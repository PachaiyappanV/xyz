import { fieldsTableHeaders } from "@/constants";

const FieldsTableHeader = () => {
  return (
    <thead className="bg-blue-10 border-b border-gray-200 sticky top-0 z-50">
      <tr>
        {fieldsTableHeaders.map((header, id) => (
          <th
            key={id}
            className=" px-6 py-3 text-left text-xs font-medium font-semibold uppercase tracking-wider whitespace-nowrap"
          >
            {id === 0 ? (
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 flex self-center"
                />
              </div>
            ) : (
              header
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};
export default FieldsTableHeader;
