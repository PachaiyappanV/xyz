"use client";

import type React from "react";

import { useState } from "react";
import Header from "./Header";
import SearchModal from "./SearchModal";

import { SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./AppSidebar";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onSearchClick={() => setIsSearchOpen(true)} />
      <div className="flex h-[92vh]">
        <SidebarProvider
          style={
            {
              "--sidebar-width": "300px",
              "--sidebar-width-icon": "80px",
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
        <main className="flex-1">{children}</main>
      </div>
      <SearchModal open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </div>
  );
};

export default Layout;
