
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TopNav from '@/components/layout/TopNav';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Download, PieChart, BarChart3, TrendingUp, Calendar, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RePieChart, Pie, Cell } from 'recharts';

// Sample data for the charts
const monthlyData = [
  { name: 'Jan', income: 4000, expenses: 2400 },
  { name: 'Feb', income: 3000, expenses: 1398 },
  { name: 'Mar', income: 2000, expenses: 9800 },
  { name: 'Apr', income: 2780, expenses: 3908 },
  { name: 'May', income: 1890, expenses: 4800 },
  { name: 'Jun', income: 2390, expenses: 3800 },
  { name: 'Jul', income: 3490, expenses: 4300 },
  { name: 'Aug', income: 4000, expenses: 2400 },
];

const categoryData = [
  { name: 'Services', value: 45 },
  { name: 'Products', value: 30 },
  { name: 'Subscriptions', value: 15 },
  { name: 'Others', value: 10 },
];

const COLORS = ['#22c55e', '#16a34a', '#15803d', '#166534'];

const ReportsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 md:ml-64">
          <TopNav />
          <main className="p-4 md:p-6 max-w-7xl mx-auto">
            <div className="space-y-6 animate-slide-up">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold">Financial Reports</h2>
                  <p className="text-slate-500">View and analyze your financial data</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Select defaultValue="thisYear">
                    <SelectTrigger className="w-[150px] bg-white border-slate-200">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="thisMonth">This Month</SelectItem>
                      <SelectItem value="lastMonth">Last Month</SelectItem>
                      <SelectItem value="thisQuarter">This Quarter</SelectItem>
                      <SelectItem value="thisYear">This Year</SelectItem>
                      <SelectItem value="lastYear">Last Year</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline" size="icon">
                    <Calendar className="h-4 w-4" />
                  </Button>
                  
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" /> Export
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <Card className="hover-card-effect">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-500">Total Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$24,500.00</div>
                    <div className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      15.3% from last year
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover-card-effect">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-500">Total Expenses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$12,850.00</div>
                    <div className="text-xs text-red-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      8.2% from last year
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover-card-effect">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-500">Net Profit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$11,650.00</div>
                    <div className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      20.5% from last year
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="income" className="space-y-4">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="income" className="data-[state=active]:bg-payment-green-100 data-[state=active]:text-payment-green-700">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Income
                  </TabsTrigger>
                  <TabsTrigger value="expenses" className="data-[state=active]:bg-payment-green-100 data-[state=active]:text-payment-green-700">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Expenses
                  </TabsTrigger>
                  <TabsTrigger value="categories" className="data-[state=active]:bg-payment-green-100 data-[state=active]:text-payment-green-700">
                    <PieChart className="h-4 w-4 mr-2" />
                    Categories
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="income" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Monthly Income</CardTitle>
                      <CardDescription>
                        View your income trends for the current year
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={monthlyData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="income" fill="#22c55e" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="expenses" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Monthly Expenses</CardTitle>
                      <CardDescription>
                        View your expense trends for the current year
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={monthlyData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="expenses" fill="#94a3b8" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="categories" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Income by Category</CardTitle>
                      <CardDescription>
                        Breakdown of income sources by category
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[400px] flex justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                          <RePieChart>
                            <Pie
                              data={categoryData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={150}
                              fill="#8884d8"
                              dataKey="value"
                              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                              {categoryData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </RePieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
