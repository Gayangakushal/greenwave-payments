
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash, Plus, CreditCard, Building, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data for payment methods
const paymentMethods = [
  {
    id: 1,
    name: 'Business Account',
    type: 'bank',
    details: '•••• 4832',
    isDefault: true,
    icon: <Building className="h-5 w-5" />,
  },
  {
    id: 2,
    name: 'Credit Card',
    type: 'card',
    details: 'Visa •••• 6789',
    isDefault: false,
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    id: 3,
    name: 'Digital Wallet',
    type: 'wallet',
    details: 'Balance: $1,234.56',
    isDefault: false,
    icon: <Wallet className="h-5 w-5" />,
  },
];

interface PaymentMethodCardProps {
  method: typeof paymentMethods[0];
}

const PaymentMethodCard = ({ method }: PaymentMethodCardProps) => {
  return (
    <Card className={cn(
      "relative overflow-hidden hover-card-effect",
      method.isDefault && "border-payment-green-200"
    )}>
      {method.isDefault && (
        <div className="absolute top-0 right-0">
          <div className="w-16 h-16 bg-payment-green-500 rotate-45 translate-x-8 -translate-y-8"></div>
          <span className="absolute top-1 right-1 text-[10px] text-white font-medium">DEFAULT</span>
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className={cn(
            "h-10 w-10 rounded-full flex items-center justify-center",
            "bg-payment-green-100 text-payment-green-600"
          )}>
            {method.icon}
          </div>
          <div>
            <CardTitle className="text-base">{method.name}</CardTitle>
            <CardDescription>{method.details}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardFooter className="pt-2 flex justify-end gap-2">
        <Button variant="outline" size="sm" className="h-8 px-3">
          <Edit className="h-3.5 w-3.5 mr-2" />
          Edit
        </Button>
        <Button variant="outline" size="sm" className="h-8 px-3 text-red-500 hover:text-red-600 hover:bg-red-50">
          <Trash className="h-3.5 w-3.5 mr-2" />
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};

const PaymentMethodsList = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Payment Methods</h2>
        <Button className="bg-payment-green-600 hover:bg-payment-green-700">
          <Plus className="h-4 w-4 mr-2" /> Add Method
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {paymentMethods.map((method, index) => (
          <div 
            key={method.id} 
            className={cn("animate-slide-up")}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <PaymentMethodCard method={method} />
          </div>
        ))}

        <Card className="border-dashed flex flex-col items-center justify-center p-6 hover:bg-slate-50 cursor-pointer transition-colors animate-slide-up" style={{ animationDelay: `${paymentMethods.length * 100}ms` }}>
          <div className="h-12 w-12 rounded-full bg-payment-green-100 flex items-center justify-center mb-3">
            <Plus className="h-6 w-6 text-payment-green-600" />
          </div>
          <h3 className="font-medium text-base mb-1">Add Payment Method</h3>
          <p className="text-sm text-slate-500 text-center">Connect a new bank account, card, or wallet</p>
        </Card>
      </div>
    </div>
  );
};

export default PaymentMethodsList;
