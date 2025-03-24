
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDown, ArrowUp, CreditCard, DollarSign, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

const StatCard = ({ 
  title, 
  value, 
  icon, 
  change, 
  changeType 
}: { 
  title: string; 
  value: string; 
  icon: React.ReactNode; 
  change: string; 
  changeType: 'positive' | 'negative' | 'neutral'; 
}) => {
  return (
    <Card className="hover-card-effect">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-500">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-payment-green-100 flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center mt-1">
          <div 
            className={cn(
              "text-xs font-medium flex items-center",
              changeType === 'positive' && "text-green-600",
              changeType === 'negative' && "text-red-600",
              changeType === 'neutral' && "text-slate-600"
            )}
          >
            {changeType === 'positive' && <ArrowUp className="h-3 w-3 mr-1" />}
            {changeType === 'negative' && <ArrowDown className="h-3 w-3 mr-1" />}
            {change}
          </div>
          <span className="text-xs text-slate-400 ml-1">vs last month</span>
        </div>
      </CardContent>
    </Card>
  );
};

const DashboardStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="animate-slide-up [animation-delay:100ms]">
        <StatCard
          title="Total Balance"
          value="$24,562.00"
          icon={<DollarSign className="h-4 w-4 text-payment-green-600" />}
          change="+12.5%"
          changeType="positive"
        />
      </div>
      <div className="animate-slide-up [animation-delay:200ms]">
        <StatCard
          title="Income"
          value="$8,350.00"
          icon={<ArrowUp className="h-4 w-4 text-payment-green-600" />}
          change="+18.2%"
          changeType="positive"
        />
      </div>
      <div className="animate-slide-up [animation-delay:300ms]">
        <StatCard
          title="Expenses"
          value="$5,120.00"
          icon={<ArrowDown className="h-4 w-4 text-payment-green-600" />}
          change="-3.5%"
          changeType="negative"
        />
      </div>
      <div className="animate-slide-up [animation-delay:400ms]">
        <StatCard
          title="Pending"
          value="$1,250.00"
          icon={<CreditCard className="h-4 w-4 text-payment-green-600" />}
          change="0%"
          changeType="neutral"
        />
      </div>
    </div>
  );
};

export default DashboardStats;
