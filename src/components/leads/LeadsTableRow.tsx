"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  lead: {
    name: string;
    email: string;
    phone: string;
    source: string;
    assigned: string;
  };
  onClick: (leadId: {
    name: string;
    email: string;
    phone: string;
    source: string;
    assigned: string;
  }) => void;
  index: number;
};

const LeadsTableRow = ({ lead, onClick }: Props) => {
  return (
    <>
      <tr>
        <td className="px-6 py-4">
          <div
            onClick={() => onClick(lead)}
            className="text-sm flex items-center gap-2 font-medium whitespace-nowrap text-blue-600 cursor-pointer "
          >
            <input type="checkbox" className="rounded border-gray-300" />{" "}
            {lead.name}
          </div>
        </td>
        <td className="px-6 py-4 text-sm whitespace-nowrap ">{lead.phone}</td>
        <td className="px-6 py-4 text-sm whitespace-nowrap ">{lead.email}</td>

        <td className="px-6 py-4 text-sm whitespace-nowrap ">{lead.source}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <Avatar className="w-8 h-8">
            <AvatarImage src={lead.assigned} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </td>
        {/* <td className="px-6 py-4 text-sm flex items-center gap-1 whitespace-nowrap text-gray-900">
          <Button
            onClick={(e) => {
              e.preventDefault();
              setOpenModal(true);
            }}
            variant="outline"
            size={"sm"}
            className="cursor-pointer"
          >
            <Pencil />
          </Button>
          <Button variant="outline" size={"sm"} className="cursor-pointer">
            <Trash2 />
          </Button>
          <Button variant="outline" size={"sm"} className="cursor-pointer">
            <MessageSquareText />
          </Button>
          <Button variant="outline" size={"sm"} className="cursor-pointer">
            <Eye />
          </Button>
        </td> */}
        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900"></td>
      </tr>
    </>
  );
};

export default LeadsTableRow;
