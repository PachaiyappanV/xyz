"use client";
import { TagsTable } from "@/components/tags";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const TagsPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col h-full gap-5">
      <div className="flex  gap-3 [&>svg]:w-7 [&>svg]:h-7 mb-2">
        <ChevronLeft className="cursor-pointer" onClick={() => router.back()} />
        <h1 className="text-2xl">Tags</h1>
      </div>
      <div className="flex-1">
        <TagsTable />
      </div>
    </div>
  );
};

export default TagsPage;
