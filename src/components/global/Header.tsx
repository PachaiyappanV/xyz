"use client";
import { Search, ChevronDown, User, LogOut, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";

type HeaderProps = {
  onSearchClick: () => void;
};
const Header = ({ onSearchClick }: HeaderProps) => {
  return (
    <header className="bg-blue-10  h-[8vh] ">
      <div className="flex items-center justify-between h-full px-6">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-blue-600">LOGO HERE</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <Button
            onClick={onSearchClick}
            className="w-full flex items-center gap-3 px-4 py-2 bg-blue-20 cursor-pointer hover:bg-blue-30 rounded-md text-left text-gray-500 transition-colors"
          >
            <Search className="h-4 w-4 text-gray-600" />
            <span className="text-gray-400">Search</span>
            <div className="ml-auto text-gray-600 flex items-center gap-1 text-xs  px-2 py-1 ">
              <span>Ctrl</span>
              <span>+</span>
              <span>K</span>
            </div>
          </Button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 hover:bg-gray-100"
              >
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <span className="font-medium">Aby Joseph</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <User className="h-4 w-4 mr-2" />
                My Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={(e) => {
                  e.preventDefault();
                }}
              >
                <span className="text-sm">Set as away</span>
                <div className="ml-auto">
                  <Switch />
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell className="h-4 w-4 mr-2" />
                Notification settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
export default Header;
