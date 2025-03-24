
import React from 'react';
import { cn } from '@/lib/utils';
import { BellIcon, Search, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface TopNavProps {
  className?: string;
}

const TopNav = ({ className }: TopNavProps) => {
  return (
    <header
      className={cn(
        "h-16 px-4 md:px-6 border-b bg-white border-slate-200 sticky top-0 z-30 flex items-center",
        className
      )}
    >
      <div className="flex-1 flex">
        {/* Search - visible on larger screens */}
        <div className="relative hidden md:flex max-w-sm items-center">
          <Search className="absolute left-2.5 h-4 w-4 text-slate-400" />
          <Input
            type="search"
            placeholder="Search transactions..."
            className="pl-8 rounded-full border-slate-200 w-[280px] bg-slate-50 focus-visible:ring-payment-green-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Search button for mobile */}
        <Button size="icon" variant="ghost" className="md:hidden">
          <Search className="h-5 w-5" />
        </Button>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost" className="relative">
              <BellIcon className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-payment-green-500 rounded-full text-[10px] text-white flex items-center justify-center">
                3
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[280px]">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[300px] overflow-y-auto">
              <DropdownMenuItem className="flex flex-col items-start py-2">
                <span className="font-medium">Payment Received</span>
                <span className="text-xs text-slate-500">Invoice #1234 has been paid</span>
                <span className="text-xs text-slate-400 mt-1">2 minutes ago</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start py-2">
                <span className="font-medium">New Invoice</span>
                <span className="text-xs text-slate-500">Invoice #1235 has been generated</span>
                <span className="text-xs text-slate-400 mt-1">1 hour ago</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start py-2">
                <span className="font-medium">Payment Method Updated</span>
                <span className="text-xs text-slate-500">Your bank account has been updated</span>
                <span className="text-xs text-slate-400 mt-1">Yesterday</span>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center text-payment-green-600 font-medium">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <UserCircle className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopNav;
