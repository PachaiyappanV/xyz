"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LeadsPagination = () => {
  const [recordsPerPage, setRecordsPerPage] = useState("20");
  const [page, setPage] = useState(1);

  const totalPages = 10;
  const totalRecords = 1;

  return (
    <div className="flex items-center justify-between w-full px-4 py-2 text-sm">
      <div className="text-gray-700">Total Records ({totalRecords})</div>

      <div>
        <Select
          value={recordsPerPage}
          onValueChange={(val) => setRecordsPerPage(val)}
        >
          <SelectTrigger className="bg-blue-50">
            <SelectValue placeholder="Select records per page" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10 records per page</SelectItem>
            <SelectItem value="20">20 records per page</SelectItem>
            <SelectItem value="50">50 records per page</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          &lt;
        </Button>

        <Input
          type="number"
          value={page}
          onChange={(e) => {
            const val = Number(e.target.value);
            if (val >= 1 && val <= totalPages) {
              setPage(val);
            }
          }}
          className=" w-[60px] h-[30px]"
        />

        <span className="text-gray-600 text-md">/ {totalPages}</span>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          &gt;
        </Button>
      </div>
    </div>
  );
};
export default LeadsPagination;
