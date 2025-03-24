
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Download, Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between animate-slide-up">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-slate-500">
          Welcome back, manage your payments and transactions
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex gap-2">
          <Select defaultValue="thisMonth">
            <SelectTrigger className="w-[150px] bg-white border-slate-200">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="yesterday">Yesterday</SelectItem>
              <SelectItem value="thisWeek">This Week</SelectItem>
              <SelectItem value="thisMonth">This Month</SelectItem>
              <SelectItem value="lastMonth">Last Month</SelectItem>
              <SelectItem value="thisYear">This Year</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
        <Button className="bg-payment-green-600 hover:bg-payment-green-700">
          <Plus className="h-4 w-4 mr-2" /> Add Payment
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
