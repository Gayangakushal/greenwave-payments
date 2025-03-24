
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TopNav from '@/components/layout/TopNav';
import InvoicesList from '@/components/invoice/InvoiceList';

const InvoicesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 md:ml-64">
          <TopNav />
          <main className="p-4 md:p-6 max-w-7xl mx-auto">
            <InvoicesList />
          </main>
        </div>
      </div>
    </div>
  );
};

export default InvoicesPage;
