
'use client'
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WalletHeader from './WalletHeader';
import WalletBalances from './WalletBalances';
import TransactionList from './TransactionsList';
import SendForm from './SendForm';
import StorageTab from './StorageTab';
import KeysTab from './KeysTab';
import TokensTab from './TokensTab';
import SphericalWaveBigger from '../SphericalWaveBigger';

const Dashboard: React.FC = () => {
  const { wallet } = useAuth();
 
  if (!wallet) return null;

  return (
    <div className='bg-[#2e2e2e] w-full h-min-[100%]'>
      <SphericalWaveBigger/>
      <div className="container mx-auto p-4 max-w-5xl ">
        <WalletHeader />
        
        <Tabs defaultValue="balances" className="mt-6">
          <TabsList className="grid grid-cols-6 w-full bg-[#414244] border-[#535456] border-solid border-[1px] text-[#a6abb5]">
            <TabsTrigger value="balances">Balances</TabsTrigger>
            <TabsTrigger value="send">Send</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="storage">Storage</TabsTrigger>
            <TabsTrigger value="tokens">Web Token</TabsTrigger>
            <TabsTrigger value="keys">Keys</TabsTrigger>
          </TabsList>
          
          <TabsContent value="balances" className="mt-6">
            <WalletBalances />
          </TabsContent>
          
          <TabsContent value="send" className="mt-6">
            <SendForm />
          </TabsContent>
          
          <TabsContent value="transactions" className="mt-6">
            <TransactionList />
          </TabsContent>
          
          <TabsContent value="storage" className="mt-6">
            <StorageTab />
          </TabsContent>
          
          <TabsContent value="tokens" className="mt-6">
            <TokensTab />
          </TabsContent>
          
          <TabsContent value="keys" className="mt-6">
            <KeysTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
