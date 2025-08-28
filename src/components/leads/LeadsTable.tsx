"use client";
import { leads } from "@/constants";
import {
  LeadsTableControls,
  LeadsTableHeader,
  LeadsTableRow,
  UserProfilePanel,
} from ".";
import { TablePagination } from "../global";
import { useState } from "react";

const LeadsTable = () => {
  const [open, setOpen] = useState(false);
  const [lead, setLead] = useState<{
    name: string;
    email: string;
    phone: string;
    source: string;
    assigned: string;
  }>();

  const onClick = (lead: {
    name: string;
    email: string;
    phone: string;
    source: string;
    assigned: string;
  }) => {
    setOpen(true);
    setLead(lead);
  };
  return (
    <div className="flex gap-3 h-full ">
      <div className="flex-1 ">
        <LeadsTableControls />
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto max-h-[450px]">
            <table className="w-full">
              <LeadsTableHeader />
              <tbody className="bg-white divide-y divide-gray-200">
                {leads.map((lead, index) => (
                  <LeadsTableRow
                    onClick={onClick}
                    key={index}
                    lead={lead}
                    index={index}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <TablePagination />
        </div>
      </div>
      {open && lead && <UserProfilePanel lead={lead} setOpen={setOpen} />}
    </div>
  );
};

export default LeadsTable;
