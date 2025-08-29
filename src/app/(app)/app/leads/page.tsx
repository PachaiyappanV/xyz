import { ContactRound } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeadsTable } from "@/components/leads";

const LeadsPage = () => {
  return (
    <div className="flex flex-col h-full overflow-y-auto gap-5">
      <div className="flex  gap-3 [&>svg]:w-7 [&>svg]:h-7">
        <ContactRound className="text-gray-500" />
        <h1 className="text-2xl">Leads</h1>
      </div>
      <div className="flex-1 px-1">
        <Tabs defaultValue="all" className="h-full">
          <TabsList className="h-fit">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="follow-up">Follow Up</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-2 h-full">
            <LeadsTable />
          </TabsContent>
          <TabsContent value="follow-up" className=" h-full">
            <Tabs defaultValue="today" className="h-full">
              <TabsList className="h-fit flex justify-center items-center ">
                <TabsTrigger value="today">Todays Followups</TabsTrigger>
                <TabsTrigger value="pending">Pending Followups</TabsTrigger>
              </TabsList>
              <TabsContent value="today" className="mt-2 h-full">
                <LeadsTable followUp={true} />
              </TabsContent>
              <TabsContent value="pending" className="mt-2 h-full">
                <LeadsTable followUp={true} />
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LeadsPage;
