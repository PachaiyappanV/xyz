"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FilterCondition =
  | "is"
  | "is not"
  | "contain"
  | "does not contain"
  | "starts with"
  | "ends with"
  | "is empty"
  | "is not empty";

type FieldFilter = {
  id: string; // e.g. "name", "phone", "company"
  label: string; // what to show in UI
  condition?: FilterCondition;
  value?: string;
  checked: boolean;
};

type Props = {
  setAppliedFilters: React.Dispatch<React.SetStateAction<number>>;
  followUp?: boolean;
};

export default function LeadsFilter({ setAppliedFilters, followUp }: Props) {
  const [systemFilters, setSystemFilters] = useState({
    leadSource: false,
    assignedTo: false,
  });

  // 👉 placeholder fields (replace later with TanStack Query result)
  const [fieldFilters, setFieldFilters] = useState<FieldFilter[]>([]);

  useEffect(() => {
    // 🔹 Pretend this comes from server
    const placeholderFields = [
      { id: "name", label: "Name" },
      { id: "phone", label: "Phone" },
      { id: "email", label: "Email" },
      { id: "tags", label: "Tags" },
      { id: "company", label: "Company" }, // custom example
    ];

    setFieldFilters(
      placeholderFields.map((f) => ({
        ...f,
        checked: false,
        condition: undefined,
        value: "",
      }))
    );
  }, []);

  const conditions: FilterCondition[] = [
    "is",
    "is not",
    "contain",
    "does not contain",
    "starts with",
    "ends with",
    "is empty",
    "is not empty",
  ];

  const handleFieldCheck = (id: string, checked: boolean) => {
    setFieldFilters((prev) =>
      prev.map((f) => (f.id === id ? { ...f, checked } : f))
    );
  };

  const handleConditionChange = (id: string, condition: FilterCondition) => {
    setFieldFilters((prev) =>
      prev.map((f) => (f.id === id ? { ...f, condition } : f))
    );
  };

  const handleValueChange = (id: string, value: string) => {
    setFieldFilters((prev) =>
      prev.map((f) => (f.id === id ? { ...f, value } : f))
    );
  };

  const applyFilter = () => {
    const systemCount = Object.values(systemFilters).filter(Boolean).length;
    const fieldCount = fieldFilters.filter((f) => f.checked).length;

    setAppliedFilters(systemCount + fieldCount);

    console.log("System Filters:", systemFilters);
    console.log("Field Filters:", fieldFilters);
  };

  const clearFilter = () => {
    setAppliedFilters(0);
    setSystemFilters({ leadSource: false, assignedTo: false });
    setFieldFilters((prev) =>
      prev.map((f) => ({
        ...f,
        checked: false,
        condition: undefined,
        value: "",
      }))
    );
  };

  return (
    <div
      className={`w-[350px] ${
        followUp ? "max-h-[505px]" : "max-h-[565px]"
      } shadow overflow-y-auto border rounded-lg bg-white p-4 space-y-4`}
    >
      <h2 className="font-medium text-gray-800">Filter Contacts By</h2>

      {/* System Defined Filters */}
      <Accordion type="single" collapsible defaultValue="system">
        <AccordionItem value="system">
          <AccordionTrigger>System Defined Filters</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={systemFilters.leadSource}
                onCheckedChange={(checked) =>
                  setSystemFilters((prev) => ({
                    ...prev,
                    leadSource: checked as boolean,
                  }))
                }
              />
              <span>Lead Source</span>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={systemFilters.assignedTo}
                onCheckedChange={(checked) =>
                  setSystemFilters((prev) => ({
                    ...prev,
                    assignedTo: checked as boolean,
                  }))
                }
              />
              <span>Assigned To</span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Field Based Filters */}
      <Accordion type="single" collapsible defaultValue="fields">
        <AccordionItem value="fields">
          <AccordionTrigger className="cursor-pointer">
            Filter By Fields
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pr-1">
            {fieldFilters.map((f) => (
              <div key={f.id} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={f.checked}
                    onCheckedChange={(checked) =>
                      handleFieldCheck(f.id, checked as boolean)
                    }
                  />
                  <span className="capitalize">{f.label}</span>
                </div>

                {f.checked && (
                  <div className="ml-6 space-y-2">
                    <Select
                      value={f.condition}
                      onValueChange={(val: FilterCondition) =>
                        handleConditionChange(f.id, val)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Condition" />
                      </SelectTrigger>
                      <SelectContent>
                        {conditions.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {f.condition &&
                      !["is empty", "is not empty"].includes(f.condition) && (
                        <Input
                          placeholder="Enter value"
                          value={f.value || ""}
                          onChange={(e) =>
                            handleValueChange(f.id, e.target.value)
                          }
                        />
                      )}
                  </div>
                )}
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Buttons */}
      <div className="flex justify-between pt-2">
        <Button
          className="cursor-pointer"
          variant="outline"
          onClick={clearFilter}
        >
          Clear Filter
        </Button>
        <Button
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
          onClick={applyFilter}
        >
          Apply Filter
        </Button>
      </div>
    </div>
  );
}
