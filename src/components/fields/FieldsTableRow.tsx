import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";

type Props = {
  field: {
    label: string;
    type: string;
    status: boolean;
    mandatory: boolean;
    custom: boolean;
  };
};

const FieldsTableRow = ({ field }: Props) => {
  return (
    <tr>
      <td className="px-6 py-4">
        <input type="checkbox" className="rounded border-gray-300" />{" "}
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowra">{field.label}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap ">{field.type}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap ">
        <Switch defaultChecked={field.status} disabled={!field.custom} />
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowrap  ">
        <Switch defaultChecked={field.mandatory} disabled={!field.custom} />
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

export default FieldsTableRow;
