"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Eye, MessageSquareText, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { LeadsFormModal } from ".";

type Props = {
  lead: {
    name: string;
    email: string;
    phone: string;
    source: string;
    assigned: string;
  };
  index: number;
};

const LeadsTableRow = ({ lead }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <tr>
        <td className="px-6 py-4">
          <div className="text-sm flex items-center gap-2 font-medium whitespace-nowrap text-blue-600 ">
            <input type="checkbox" className="rounded border-gray-300" />{" "}
            {lead.name}
          </div>
        </td>
        <td className="px-6 py-4 text-sm whitespace-nowrap text-blue-600 ">
          {lead.phone}
        </td>
        <td className="px-6 py-4 text-sm whitespace-nowrap text-blue-600 ">
          {lead.email}
        </td>

        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
          {lead.source}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <Avatar className="w-8 h-8">
            <AvatarImage src={lead.assigned} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </td>
        <td className="px-6 py-4 text-sm flex items-center gap-1 whitespace-nowrap text-gray-900">
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
        </td>
        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900"></td>
      </tr>
      <LeadsFormModal
        isEdit={true}
        open={openModal}
        onOpenChange={setOpenModal}
      />
    </>
  );
};

export default LeadsTableRow;
