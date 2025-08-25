"use client";

import Header from "@/components/Header";
import SearchModal from "@/components/SearchModal";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type React from "react";

import { useState } from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};
const AppLayout = ({ children }: AppLayoutProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onSearchClick={() => setIsSearchOpen(true)} />
      <div className="flex h-[92vh]">
        <SidebarProvider
          style={
            {
              "--sidebar-width": "300px",
              "--sidebar-width-icon": "70px",
              width: "auto",
              position: "relative",
              maxHeight: "100%",
              minHeight: "100%",
            } as React.CSSProperties
          }
        >
          <AppSidebar />
        </SidebarProvider>

        {/* Main content area */}
        <main className="flex-1 p-5">{children}</main>
      </div>
      <SearchModal open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </div>
  );
};

export default AppLayout;
