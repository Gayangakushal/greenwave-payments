
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ArrowDownIcon, ArrowUpIcon, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const transactions = [
  {
    id: 1,
    name: 'Invoice #1234',
    date: 'Aug 24, 2023',
    amount: '$1,250.00',
    status: 'completed',
    type: 'income',
    icon: '📄'
  },
  {
    id: 2,
    name: 'Office Supplies',
    date: 'Aug 23, 2023',
    amount: '$120.50',
    status: 'completed',
    type: 'expense',
    icon: '🛒'
  },
  {
    id: 3,
    name: 'Freelance Payment',
    date: 'Aug 21, 2023',
    amount: '$850.00',
    status: 'pending',
    type: 'income',
    icon: '💼'
  },
  {
    id: 4,
    name: 'Software Subscription',
    date: 'Aug 20, 2023',
    amount: '$49.99',
    status: 'completed',
    type: 'expense',
    icon: '💻'
  },
  {
    id: 5,
    name: 'Client Retainer',
    date: 'Aug 19, 2023',
    amount: '$2,000.00',
    status: 'completed',
    type: 'income',
    icon: '🤝'
  }
];

const RecentTransactions = () => {
  return (
    <Card className="animate-slide-up col-span-full lg:col-span-2">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest financial activities</CardDescription>
          </div>
          <button className="text-sm flex items-center text-payment-green-600 hover:text-payment-green-700 transition-colors">
            View all <ExternalLink className="h-3 w-3 ml-1" />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between hover:bg-slate-50 p-2 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9 bg-payment-green-100 text-payment-green-700">
                  <span>{transaction.icon}</span>
                </Avatar>
                <div>
                  <div className="font-medium text-sm">{transaction.name}</div>
                  <div className="text-slate-500 text-xs">{transaction.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className={cn(
                  "font-medium text-sm",
                  transaction.type === 'income' ? 'text-payment-green-600' : 'text-slate-600'
                )}>
                  <div className="flex items-center">
                    {transaction.type === 'income' 
                      ? <ArrowUpIcon className="h-3 w-3 mr-1 text-payment-green-600" />
                      : <ArrowDownIcon className="h-3 w-3 mr-1 text-slate-600" />
                    }
                    {transaction.amount}
                  </div>
                </div>
                <Badge 
                  variant="outline" 
                  className={cn(
                    "capitalize rounded-full",
                    transaction.status === 'completed' && "border-green-200 bg-green-50 text-green-700",
                    transaction.status === 'pending' && "border-yellow-200 bg-yellow-50 text-yellow-700",
                    transaction.status === 'failed' && "border-red-200 bg-red-50 text-red-700"
                  )}
                >
                  {transaction.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
