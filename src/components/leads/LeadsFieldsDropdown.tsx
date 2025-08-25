"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SlidersVertical } from "lucide-react";

const fieldOptions = [
  "phoneNo",
  "name",
  "email",
  "fqf",
  "allowBroadcast",
  "tags",
];

const LeadsFieldsDropdown = () => {
  const [selectedFields, setSelectedFields] = React.useState<string[]>([
    "phoneNo",
    "name",
    "email",
  ]);

  const maxSelection = 5;

  const toggleField = (field: string) => {
    setSelectedFields((prev) =>
      prev.includes(field)
        ? prev.filter((f) => f !== field)
        : prev.length < maxSelection
        ? [...prev, field]
        : prev
    );
  };

  const handleUpdate = () => {
    console.log("Updated fields:", selectedFields);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <SlidersVertical />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48 p-3 space-y-2">
        {fieldOptions.map((field) => {
          const isChecked = selectedFields.includes(field);
          const isDisabled =
            !isChecked && selectedFields.length >= maxSelection;

          return (
            <div key={field} className="flex items-center space-x-2">
              <Checkbox
                id={field}
                checked={isChecked}
                onCheckedChange={() => toggleField(field)}
                disabled={isDisabled}
                className={`data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 ${
                  isDisabled ? "cursor-not-allowed" : ""
                }`}
              />
              <Label
                htmlFor={field}
                className={`capitalize font-normal cursor-pointer ${
                  isDisabled ? "cursor-not-allowed text-gray-700" : ""
                }`}
              >
                {field}
              </Label>
            </div>
          );
        })}

        <div className="pt-2">
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleUpdate}
          >
            Update
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LeadsFieldsDropdown;
