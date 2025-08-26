import { fields } from "@/constants";
import { FieldsTableControls, FieldsTableRow, FieldsTableHeader } from ".";
import { TablePagination } from "@/components/global";

const FieldsTable = () => {
  return (
    <div>
      <FieldsTableControls />
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto max-h-[450px]">
          <table className="w-full relative">
            <FieldsTableHeader />
            <tbody className="bg-white divide-y divide-gray-200">
              {fields.map((field) => (
                <FieldsTableRow key={field.label} field={field} />
              ))}
            </tbody>
          </table>
        </div>
        <TablePagination />
      </div>
    </div>
  );
};

export default FieldsTable;
