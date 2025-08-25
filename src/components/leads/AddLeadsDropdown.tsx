"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Users, UserPlus, Plus } from "lucide-react";
import LeadsFormModal from "./LeadsFormModal";

const AddLeadsDropdown = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Add Leads
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-40">
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
              setOpenModal(true);
            }}
            className="cursor-pointer"
          >
            <Plus />
            <span>New</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <Users />
            <span>Bulk Upload</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <LeadsFormModal open={openModal} onOpenChange={setOpenModal} />
    </>
  );
};

export default AddLeadsDropdown;
