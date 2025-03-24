
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TopNav from '@/components/layout/TopNav';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardStats from '@/components/dashboard/DashboardStats';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Tooltip, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// Sample data for the chart
const chartData = [
  { name: 'Jan', income: 1800, expenses: 1200 },
  { name: 'Feb', income: 2200, expenses: 1300 },
  { name: 'Mar', income: 2800, expenses: 1400 },
  { name: 'Apr', income: 2400, expenses: 1500 },
  { name: 'May', income: 2900, expenses: 1700 },
  { name: 'Jun', income: 3300, expenses: 1800 },
  { name: 'Jul', income: 3200, expenses: 1600 },
  { name: 'Aug', income: 3500, expenses: 1900 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 md:ml-64">
          <TopNav />
          <main className="p-4 md:p-6 max-w-7xl mx-auto">
            <div className="space-y-6">
              <DashboardHeader />
              
              <DashboardStats />
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="lg:col-span-2 animate-slide-up [animation-delay:500ms]">
                  <CardHeader>
                    <CardTitle>Financial Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <CartesianGrid strokeDasharray="3 3" />
                          <Tooltip />
                          <Area type="monotone" dataKey="income" stroke="#22c55e" fillOpacity={1} fill="url(#colorIncome)" />
                          <Area type="monotone" dataKey="expenses" stroke="#94a3b8" fillOpacity={1} fill="url(#colorExpenses)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="animate-slide-up [animation-delay:600ms]">
                  <CardHeader>
                    <CardTitle>Upcoming Payments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: 'Office Rent', amount: '$1,200.00', due: 'Sep 1, 2023' },
                        { name: 'Insurance Premium', amount: '$350.00', due: 'Sep 5, 2023' },
                        { name: 'Software Subscription', amount: '$49.99', due: 'Sep 10, 2023' },
                        { name: 'Marketing Services', amount: '$500.00', due: 'Sep 15, 2023' },
                      ].map((payment, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                          <div>
                            <div className="font-medium">{payment.name}</div>
                            <div className="text-sm text-slate-500">Due: {payment.due}</div>
                          </div>
                          <div className="font-semibold">{payment.amount}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <RecentTransactions />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
