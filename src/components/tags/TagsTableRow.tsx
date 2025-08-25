import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

type Props = {
  tag: {
    name: string;
    createdBy: string;
    createdAt: string;
  };
};

const TagsTableRow = ({ tag }: Props) => {
  return (
    <tr>
      <td className="px-6 py-4">
        <div className="text-sm flex items-center gap-2 font-medium whitespace-nowrap text-blue-600 ">
          <input type="checkbox" className="rounded border-gray-300" />{" "}
          {tag.name}
        </div>
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowrap text-blue-600 ">
        {tag.createdBy}
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowrap text-blue-600 ">
        {tag.createdAt}
      </td>
      <td className="px-6 py-4 text-sm flex items-center gap-1 whitespace-nowrap text-gray-900">
        <Button variant="outline" size={"sm"} className="cursor-pointer">
          <Pencil />
        </Button>
        <Button variant="outline" size={"sm"} className="cursor-pointer">
          <Trash2 />
        </Button>
      </td>
    </tr>
  );
};

export default TagsTableRow;
