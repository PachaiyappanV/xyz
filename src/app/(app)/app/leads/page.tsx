import { ContactRound } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LeadsPagination,
  LeadsTable,
  LeadsTableControls,
} from "@/components/leads";

const LeadsPage = () => {
  return (
    <div className="flex flex-col h-full gap-5">
      <div className="flex  gap-3 [&>svg]:w-7 [&>svg]:h-7">
        <ContactRound className="text-gray-500" />
        <h1 className="text-2xl">Leads</h1>
      </div>
      <div className="flex-1">
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="follow-up">Follow Up</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-2">
            <LeadsTableControls />
            <LeadsTable />
            <LeadsPagination />
          </TabsContent>
          <TabsContent value="follow-up">Follow up</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LeadsPage;
