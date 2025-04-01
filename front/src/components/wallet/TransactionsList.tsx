
import React from 'react';
import { useTransaction } from '@/context/TransactionsContext';
import { Card } from '@/components/ui/card';
import { shortenAddress } from '@/lib/crypto';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

const TransactionList: React.FC = () => {
  const { transactions } = useTransaction();

  if (transactions.length === 0) {
    return (
      <Card className="p-6 wallet-shadow text-center  bg-[#414244] border-[#535456]">
        <p className=" text-[#a6abb5]">No transactions yet</p>
      </Card>
    );
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <Card className="p-6 wallet-shadow  bg-[#414244] border-[#535456]">
      <h3 className="text-xl font-semibold mb-4 text-[#a6abb5]">Transaction History</h3>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell>
                  <div className="flex items-center">
                    {tx.type === 'send' ? (
                      <span className="flex items-center text-red-500">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        Send
                      </span>
                    ) : (
                      <span className="flex items-center text-green-500">
                        <ArrowDownLeft className="h-4 w-4 mr-1" />
                        Receive
                      </span>
                    )}
                  </div>
                </TableCell>
                
                <TableCell>
                  <span className={tx.type === 'send' ? 'text-red-500' : 'text-green-500'}>
                    {tx.type === 'send' ? '-' : '+'}{tx.amount} {tx.currency}
                  </span>
                </TableCell>
                
                <TableCell>
                  <span className="font-mono">{shortenAddress(tx.address)}</span>
                </TableCell>
                
                <TableCell>
                  {formatDate(tx.timestamp)}
                </TableCell>
                
                <TableCell>
                  <span className={`px-2 py-1 rounded text-xs ${
                    tx.status === 'completed' 
                      ? 'bg-green-100 text-green-800' 
                      : tx.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                  }`}>
                    {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default TransactionList;
