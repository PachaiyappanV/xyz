import { tags } from "@/constants";
import { TagsTableControls, TagsTableRow } from ".";
import { TablePagination } from "@/components/global";
import { TagsTableHeader } from "@/components/tags";

const TagsTable = () => {
  return (
    <div>
      <TagsTableControls />
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto max-h-[450px]">
          <table className="w-full">
            <TagsTableHeader />
            <tbody className="bg-white divide-y divide-gray-200">
              {tags.map((tag) => (
                <TagsTableRow key={tag.createdAt} tag={tag} />
              ))}
            </tbody>
          </table>
        </div>
        <TablePagination />
      </div>
    </div>
  );
};

export default TagsTable;
