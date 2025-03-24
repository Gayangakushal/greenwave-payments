
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  CreditCard, 
  Receipt, 
  History, 
  BarChart, 
  Settings, 
  Menu, 
  X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  end?: boolean;
}

const NavItem = ({ icon, label, to, end = false }: NavItemProps) => {
  return (
    <NavLink 
      to={to} 
      end={end}
      className={({ isActive }) => cn(
        "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all",
        "hover:bg-payment-green-100 hover:text-payment-green-700",
        isActive 
          ? "bg-payment-green-100 text-payment-green-700" 
          : "text-slate-700"
      )}
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4">
            <div className="flex items-center gap-2 px-2">
              <div className="h-8 w-8 rounded-full bg-payment-green-500 flex items-center justify-center">
                <CreditCard className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-xl">PayFlow</span>
            </div>
          </div>

          <Separator />

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <NavItem 
              icon={<LayoutDashboard className="h-5 w-5" />} 
              label="Dashboard" 
              to="/" 
              end 
            />
            <NavItem 
              icon={<CreditCard className="h-5 w-5" />} 
              label="Payment Methods" 
              to="/payment-methods" 
            />
            <NavItem 
              icon={<Receipt className="h-5 w-5" />} 
              label="Invoices" 
              to="/invoices" 
            />
            <NavItem 
              icon={<History className="h-5 w-5" />} 
              label="Payment History" 
              to="/payment-history" 
            />
            <NavItem 
              icon={<BarChart className="h-5 w-5" />} 
              label="Reports" 
              to="/reports" 
            />
          </nav>

          <Separator />

          {/* Bottom section */}
          <div className="p-4">
            <NavItem 
              icon={<Settings className="h-5 w-5" />} 
              label="Settings" 
              to="/settings" 
            />
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
