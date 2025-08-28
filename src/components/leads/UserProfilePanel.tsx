"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Pencil,
  Trash2,
  ArrowLeft,
  ChevronsRight,
  CirclePlus,
} from "lucide-react";
import NoteInput from "./NoteInput";
import { LeadsFormModal } from ".";

type ViewType = "main" | "tags" | "agents" | "comments";

type Props = {
  lead: {
    name: string;
    email: string;
    phone: string;
    source: string;
    assigned: string;
  };
  setOpen: (open: boolean) => void;
};
export default function UserProfilePanel({ lead, setOpen }: Props) {
  const [currentView, setCurrentView] = useState<ViewType>("main");
  const [openModal, setOpenModal] = useState(false);

  const [tags] = useState(["tag1", "tag2"]);
  const [agents] = useState(["user1", "user2", "user3"]);
  const [comments] = useState([
    { id: 1, text: "Hello", date: "28-08-2025", time: "01:30 PM" },
    { id: 2, text: "Hello", date: "28-08-2025", time: "01:30 PM" },
    { id: 3, text: "Hello", date: "28-08-2025", time: "01:30 PM" },
  ]);

  return (
    <>
      <aside className="w-[350px] max-h-[560px] border p-[2px] rounded-lg  flex flex-col shadow">
        {currentView === "main" && (
          <div className="flex-1 pl-4 pr-2 py-2 overflow-y-auto space-y-9">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center  border-b pb-2">
                <h2 className="text-lg font-medium flex items-center gap-1">
                  <ArrowLeft
                    onClick={() => setOpen(false)}
                    className="text-blue-600 cursor-pointer"
                  />
                  User Details
                </h2>
                <div className="flex gap-4 text-sm font-medium">
                  <button className="text-red-500 cursor-pointer">
                    Delete
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenModal(true);
                    }}
                    className="text-blue-600 cursor-pointer"
                  >
                    Edit
                  </button>
                </div>
              </div>

              {/* User Info */}
              <div className="space-y-2 text-sm py-2 border-b border-gray-200">
                <div>
                  <span className="font-medium text-gray-600">Name :</span>{" "}
                  {lead.name}
                </div>
                <div>
                  <span className="font-medium text-gray-600">Email :</span>{" "}
                  {lead.email}
                </div>
                <div>
                  <span className="font-medium text-gray-600">
                    Phone Number :
                  </span>{" "}
                  {lead.phone}
                </div>
              </div>
              <button className="text-blue-600 font-medium cursor-pointer text-xs">
                show more
              </button>
            </div>

            {/* Tags */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Tags</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs flex items-center cursor-pointer"
                >
                  <CirclePlus className="text-blue-600" />
                  Add Tags
                </Button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {tags.map((tag, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="rounded px-2 py-1 text-xs"
                  >
                    {tag} ✕
                  </Badge>
                ))}
              </div>
              <p
                className="text-gray-600 flex items-center justify-between text-xs font-medium cursor-pointer [&>svg]:w-[18px] [&>svg]:h-[18px]"
                onClick={() => setCurrentView("tags")}
              >
                Show More
                <ChevronsRight />
              </p>
            </div>

            {/* Assigned To */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Assigned To</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs flex items-center cursor-pointer"
                >
                  <CirclePlus className="text-blue-600" />
                  Assign Agent
                </Button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {agents.slice(0, 2).map((a, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="rounded px-2 py-1 text-xs"
                  >
                    {a} ✕
                  </Badge>
                ))}
              </div>
              <p
                className="text-gray-600 flex items-center justify-between text-xs font-medium cursor-pointer [&>svg]:w-[18px] [&>svg]:h-[18px]"
                onClick={() => setCurrentView("agents")}
              >
                Show More
                <ChevronsRight />
              </p>
            </div>

            {/* Comments */}
            <div className="space-y-4">
              <p className="font-semibold">Comments</p>
              <NoteInput />
              <div>
                {comments.slice(0, 1).map((c) => (
                  <div
                    key={c.id}
                    className="flex justify-between items-center bg-yellow-100 rounded p-2 text-sm mb-2"
                  >
                    <div>
                      <p>{c.text}</p>
                      <span className="text-xs text-gray-500">
                        {c.date} {c.time}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Pencil className="h-4 w-4 cursor-pointer" />
                      <Trash2 className="h-4 w-4 cursor-pointer" />
                    </div>
                  </div>
                ))}
              </div>
              <p
                className="text-gray-600 flex items-center justify-between text-xs font-medium cursor-pointer [&>svg]:w-[18px] [&>svg]:h-[18px]"
                onClick={() => setCurrentView("comments")}
              >
                Show More
                <ChevronsRight />
              </p>
            </div>
          </div>
        )}

        {/* Tags View */}
        {currentView === "tags" && (
          <div className="flex-1 px-4 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setCurrentView("main")}
              >
                <ArrowLeft className="h-5 w-5 text-blue-600" />{" "}
                <span>Tags</span>
              </div>
              <button className="text-blue-600 text-sm font-medium">Add</button>
            </div>
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="rounded px-2 py-1 text-xs"
                >
                  {tag} ✕
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Agents View */}
        {currentView === "agents" && (
          <div className="flex-1 px-4 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setCurrentView("main")}
              >
                <ArrowLeft className="h-5 w-5 text-blue-600" />
                <span>Agents</span>
              </div>
              <button className="text-blue-600 text-sm font-medium">Add</button>
            </div>
            <div className="flex gap-2 flex-wrap">
              {agents.map((a, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="rounded px-2 py-1 text-xs"
                >
                  {a} ✕
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Comments View */}
        {currentView === "comments" && (
          <div className="flex-1 px-4 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setCurrentView("main")}
              >
                <ArrowLeft className="h-5 w-5 text-blue-600" />
                <span>Comments</span>
              </div>
              <button className="text-blue-600 text-sm font-medium">Add</button>
            </div>
            <div className="space-y-2">
              {comments.map((c) => (
                <div
                  key={c.id}
                  className="flex justify-between items-center bg-yellow-100 rounded p-3 text-sm"
                >
                  <div>
                    <p>{c.text}</p>
                    <span className="text-xs text-gray-500">
                      {c.date} {c.time}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Pencil className="h-4 w-4 cursor-pointer" />
                    <Trash2 className="h-4 w-4 cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </aside>
      <LeadsFormModal
        isEdit={true}
        open={openModal}
        onOpenChange={setOpenModal}
      />
    </>
  );
}
