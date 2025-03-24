
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Calendar, 
  Download, 
  Eye, 
  Filter, 
  Search, 
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  CheckCircle2,
  Clock,
  XCircle
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// Mock data for payment history
const payments = [
  {
    id: '1234',
    date: 'Aug 25, 2023',
    recipient: 'Netflix Subscription',
    amount: '$14.99',
    status: 'completed',
    type: 'expense',
    method: 'Credit Card',
  },
  {
    id: '1233',
    date: 'Aug 24, 2023',
    recipient: 'Client Project Payment',
    amount: '$1,500.00',
    status: 'completed',
    type: 'income',
    method: 'Bank Transfer',
  },
  {
    id: '1232',
    date: 'Aug 23, 2023',
    recipient: 'Office Supplies',
    amount: '$89.50',
    status: 'completed',
    type: 'expense',
    method: 'Credit Card',
  },
  {
    id: '1231',
    date: 'Aug 21, 2023',
    recipient: 'Client Retainer',
    amount: '$800.00',
    status: 'pending',
    type: 'income',
    method: 'Bank Transfer',
  },
  {
    id: '1230',
    date: 'Aug 20, 2023',
    recipient: 'Software License',
    amount: '$49.99',
    status: 'failed',
    type: 'expense',
    method: 'Digital Wallet',
  },
  {
    id: '1229',
    date: 'Aug 19, 2023',
    recipient: 'Freelance Work',
    amount: '$650.00',
    status: 'completed',
    type: 'income',
    method: 'Digital Wallet',
  },
  {
    id: '1228',
    date: 'Aug 15, 2023',
    recipient: 'Web Hosting',
    amount: '$29.99',
    status: 'completed',
    type: 'expense',
    method: 'Credit Card',
  },
];

// Status icon component
const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case 'completed':
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    case 'pending':
      return <Clock className="h-4 w-4 text-yellow-500" />;
    case 'failed':
      return <XCircle className="h-4 w-4 text-red-500" />;
    default:
      return null;
  }
};

const PaymentHistoryList = () => {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl font-bold">Payment History</h2>
        
        <div className="flex flex-wrap gap-2">
          <div className="relative flex-grow max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              type="search"
              placeholder="Search payments..."
              className="pl-8 rounded-md border-slate-200 w-full"
            />
          </div>
          
          <Button variant="outline" size="icon">
            <Calendar className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-1">
          <CardTitle>All Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>
                  <div className="flex items-center">
                    Amount
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id} className="hover:bg-slate-50">
                  <TableCell className="font-medium">#{payment.id}</TableCell>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>{payment.recipient}</TableCell>
                  <TableCell>{payment.method}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {payment.type === 'income' ? (
                        <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                      ) : (
                        <ArrowDown className="mr-1 h-3 w-3 text-slate-500" />
                      )}
                      <span
                        className={cn(
                          payment.type === 'income' ? 'text-green-600' : 'text-slate-600'
                        )}
                      >
                        {payment.amount}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <StatusIcon status={payment.status} />
                      <Badge 
                        variant="outline" 
                        className={cn(
                          "capitalize text-xs",
                          payment.status === 'completed' && "border-green-200 bg-green-50 text-green-700",
                          payment.status === 'pending' && "border-yellow-200 bg-yellow-50 text-yellow-700",
                          payment.status === 'failed' && "border-red-200 bg-red-50 text-red-700"
                        )}
                      >
                        {payment.status}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-slate-500">
              Showing <strong>1-7</strong> of <strong>42</strong> transactions
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-payment-green-50">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentHistoryList;
