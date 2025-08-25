"use client";

import { useEffect, useState } from "react";
import {
  Search,
  ArrowUp,
  ArrowDown,
  CornerDownLeft,
  LayoutDashboard,
  MessageSquare,
  Users,
  Bot,
  Megaphone,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const searchItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "chat-team-inbox", label: "Chat ( Team Inbox )", icon: MessageSquare },
  { id: "contacts", label: "Contacts", icon: Users },
  { id: "chat-bot", label: "Chat Bot", icon: Bot },
  { id: "create-campaign", label: "Create Campaign", icon: Megaphone },
  { id: "campaign", label: "Campaign", icon: Megaphone },
  {
    id: "commerce-dashboard",
    label: "Commerce - Dashboard",
    icon: ShoppingBag,
  },
  { id: "commerce-orders", label: "Commerce - Orders", icon: ShoppingCart },
];

const SearchModal = ({ open, onOpenChange }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredItems = searchItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredItems.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          // Handle navigation here
          onOpenChange(false);
        }
      } else if (e.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, filteredItems, selectedIndex, onOpenChange]);

  // Global Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(true);
      }
    };

    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, [onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle></DialogTitle>
      <DialogContent className="max-w-lg p-0 gap-0 rounded-lg shadow-xl overflow-hidden">
        {/* Search Bar */}
        <div className="flex items-center border-b px-4 py-3 bg-blue-20">
          <Search className="h-4 w-4 text-black mr-2" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
            autoFocus
          />
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto divide-y">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    // Handle navigation here
                    onOpenChange(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors",
                    index === selectedIndex
                      ? "bg-gray-100 text-gray-900"
                      : "hover:bg-gray-50 text-gray-700"
                  )}
                >
                  <Icon className="h-4 w-4 text-black" />
                  <span>{item.label}</span>
                </button>
              );
            })
          ) : (
            <div className="px-4 py-6 text-center text-sm text-gray-900">
              No results found
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="border-t px-4 py-3 flex items-center justify-between text-xs text-gray-500 bg-blue-20">
          <div className="flex items-center gap-1">
            <div className="bg-gray-300 px-1.5 py-1 rounded text-xs flex items-center gap-1">
              <CornerDownLeft className="h-3 w-3 text-gray-800" />
            </div>
            <span className="text-black">to select</span>
          </div>

          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1 bg-gray-300 px-1.5 py-1 rounded">
              <ArrowDown className="h-3 w-3 text-gray-800" />
            </div>
            <div className="flex items-center gap-1 bg-gray-300 px-1.5 py-1 rounded">
              <ArrowUp className="h-3 w-3 text-gray-800" />
            </div>
            <span className="text-black">to navigate</span>
          </div>
          <div className="flex items-center  gap-1">
            <div className="bg-gray-300 px-1.5 py-1 rounded text-xs text-gray-800">
              esc
            </div>
            <span className="text-black">to close</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default SearchModal;
