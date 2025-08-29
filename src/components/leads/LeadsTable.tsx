"use client";
import { leads } from "@/constants";
import {
  LeadsFilter,
  LeadsTableControls,
  LeadsTableHeader,
  LeadsTableRow,
  UserProfilePanel,
} from ".";
import { TablePagination } from "../global";
import { useState } from "react";

type Props = {
  followUp?: boolean;
};
const LeadsTable = ({ followUp }: Props) => {
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState(0);
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
    <div className="flex gap-3 h-full">
      {openFilter && !open && (
        <LeadsFilter
          setAppliedFilters={setAppliedFilters}
          followUp={followUp}
        />
      )}
      <div className="flex-1">
        <LeadsTableControls
          setOpenFilter={setOpenFilter}
          appliedFilters={appliedFilters}
        />
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div
            className={`overflow-x-auto ${
              followUp ? "max-h-[390px]" : "max-h-[450px]"
            } `}
          >
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
      {open && lead && (
        <UserProfilePanel lead={lead} setOpen={setOpen} followUp={followUp} />
      )}
    </div>
  );
};

export default LeadsTable;
