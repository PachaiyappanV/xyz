"use client";

import * as React from "react";
import { Settings, UsersRound } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navMain, navSecondary } from "@/constants";
import Link from "next/link";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Note: I'm using state to show active item.
  // IRL you should use the url/router.
  const [activeMain, setActiveMain] = useState("Dashboard");
  const [activeSecondary, setActiveSecondary] = useState("");

  const { setOpen, open } = useSidebar();
  useEffect(() => {
    setOpen(false);
  }, []);
  useEffect(() => {
    if (activeMain === "Chat") {
      setActiveSecondary("Inbox");
    } else if (activeMain === "Settings") {
      setActiveSecondary("Account Details");
    } else {
      setActiveSecondary("");
    }
  }, [activeMain]);

  return (
    <Sidebar
      collapsible="icon"
      className="min-h-full max-h-full absolute *:data-[sidebar=sidebar]:flex-row "
      {...props}
    >
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}
      <Sidebar
        collapsible="none"
        className="w-[calc(var(--sidebar-width-icon))]"
      >
        <SidebarContent>
          <SidebarGroup className=" p-0 ">
            <SidebarGroupContent className="w-full">
              <SidebarMenu className="w-full gap-[6px] bg-blue-10 py-1">
                {navMain.map((item) => (
                  <Link href={item.link || "#"} key={item.title}>
                    <div
                      onClick={() => {
                        switch (item.title) {
                          case "Chat":
                            setOpen(true);
                            break;
                          case "Settings":
                            setOpen(true);
                            break;
                          default:
                            setOpen(false);
                            break;
                        }
                        setActiveMain(item.title);
                      }}
                      className={`${
                        activeMain === item.title
                          ? " bg-blue-20  text-blue-700 hover:bg-transparent"
                          : ""
                      } flex hover:bg-blue-100 [&>svg]:w-[20px] [&>svg]:h-[20px] gap-1 pt-[8px] pb-[5px] flex-col items-center  w-[90%] mx-auto cursor-pointer rounded-md`}
                    >
                      <item.icon />

                      <p className="text-[10px] text-center break-words">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* This is the second sidebar */}
      {/* We disable collapsible and let it fill remaining space */}
      <Sidebar collapsible="none" className="bg-blue-20 flex-1">
        {activeMain === "Chat" && (
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-lg pt-1 -ml-2 gap-[6px] [&>svg]:w-5 [&>svg]:h-5 flex items-center  text-gray-800 font-semibold mb-3">
                <UsersRound />
                <p className="text-nowrap">Team Inbox</p>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navSecondary.Chat.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        onClick={() => setActiveSecondary(item.title)}
                        className={cn(
                          "flex gap-2 rounded-md  [&>svg]:w-4 [&>svg]:h-4",
                          activeSecondary === item.title
                            ? "bg-white text-blue-600 font-semibold shadow-sm border border-blue-300"
                            : "hover:bg-blue-200"
                        )}
                      >
                        <item.icon />
                        <p className="text-[14px]">{item.title}</p>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        )}

        {activeMain === "Settings" && (
          <SidebarContent className="flex flex-col">
            {/* Fixed Header */}
            <div className="text-lg pl-4 pt-4 gap-[6px] [&>svg]:w-5 [&>svg]:h-5 flex items-center  text-gray-800 font-semibold">
              <Settings />
              <p>Settings</p>
            </div>

            {/* Scrollable Menu Section */}
            <div className="flex-1 overflow-y-auto px-2">
              {navSecondary.Settings.map((section) => (
                <SidebarGroup key={section.label} className="-mb-2">
                  <SidebarGroupLabel className="text-xs font-bold text-gray-500">
                    {section.label}
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {section.items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            onClick={() => setActiveSecondary(item.title)}
                            className={cn(
                              "flex gap-2 rounded-md [&>svg]:w-4 [&>svg]:h-4",
                              activeSecondary === item.title
                                ? "bg-white text-blue-600 font-semibold shadow-sm border border-blue-300"
                                : "hover:bg-blue-200"
                            )}
                          >
                            <item.icon />
                            <p className="text-[14px]">{item.title}</p>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))}
            </div>
          </SidebarContent>
        )}
      </Sidebar>
    </Sidebar>
  );
}
