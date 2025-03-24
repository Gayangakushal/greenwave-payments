
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Download, 
  Eye, 
  FilePlus, 
  Search, 
  Filter, 
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// Mock data for invoices
const invoices = [
  {
    id: '1001',
    date: 'Aug 28, 2023',
    client: 'Acme Corporation',
    amount: '$2,500.00',
    status: 'paid',
    dueDate: 'Sep 12, 2023'
  },
  {
    id: '1002',
    date: 'Aug 25, 2023',
    client: 'TechStart Inc.',
    amount: '$1,800.00',
    status: 'pending',
    dueDate: 'Sep 10, 2023'
  },
  {
    id: '1003',
    date: 'Aug 20, 2023',
    client: 'Global Innovators',
    amount: '$3,200.00',
    status: 'paid',
    dueDate: 'Sep 05, 2023'
  },
  {
    id: '1004',
    date: 'Aug 18, 2023',
    client: 'Bright Future LLC',
    amount: '$950.00',
    status: 'pending',
    dueDate: 'Sep 02, 2023'
  },
  {
    id: '1005',
    date: 'Aug 15, 2023',
    client: 'Digital Solutions Co.',
    amount: '$1,250.00',
    status: 'overdue',
    dueDate: 'Aug 30, 2023'
  },
  {
    id: '1006',
    date: 'Aug 12, 2023',
    client: 'NextGen Systems',
    amount: '$4,500.00',
    status: 'paid',
    dueDate: 'Aug 27, 2023'
  },
];

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  switch (status) {
    case 'paid':
      return (
        <Badge className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
          <CheckCircle className="h-3 w-3" /> Paid
        </Badge>
      );
    case 'pending':
      return (
        <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200 flex items-center gap-1">
          <Clock className="h-3 w-3" /> Pending
        </Badge>
      );
    case 'overdue':
      return (
        <Badge className="bg-red-50 text-red-700 border-red-200 flex items-center gap-1">
          <AlertCircle className="h-3 w-3" /> Overdue
        </Badge>
      );
    default:
      return null;
  }
};

const InvoicesList = () => {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl font-bold">Invoices</h2>
        
        <div className="flex flex-wrap gap-2">
          <div className="relative flex-grow max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              type="search"
              placeholder="Search invoices..."
              className="pl-8 rounded-md border-slate-200 w-full"
            />
          </div>
          
          <Button variant="outline" size="icon">
            <Calendar className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          
          <Button className="bg-payment-green-600 hover:bg-payment-green-700">
            <FilePlus className="h-4 w-4 mr-2" /> New Invoice
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>All Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">ID</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id} className="hover:bg-slate-50">
                  <TableCell className="font-medium">#{invoice.id}</TableCell>
                  <TableCell>{invoice.client}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.dueDate}</TableCell>
                  <TableCell className="font-medium">{invoice.amount}</TableCell>
                  <TableCell>
                    <StatusBadge status={invoice.status} />
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
        </CardContent>
        <CardFooter className="flex items-center justify-between pt-0">
          <div className="text-sm text-slate-500">
            Showing <strong>1-6</strong> of <strong>24</strong> invoices
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
        </CardFooter>
      </Card>
    </div>
  );
};

export default InvoicesList;
