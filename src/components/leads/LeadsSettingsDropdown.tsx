"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings, History, Tag, Link2Off } from "lucide-react";
import { useRouter } from "next/navigation";

const LeadsSettingsDropdown = () => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          <Settings />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem className="cursor-pointer">
          <History />
          <span>History</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => router.push("./leads/tags")}
          className="cursor-pointer"
        >
          <Tag />
          <span>Tags</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer">
          <Link2Off />
          <span>Field Collection</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LeadsSettingsDropdown;
