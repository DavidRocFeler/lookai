'use client'
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card } from '@/components/ui/card';
import { shortenAddress } from '@/lib/crypto';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const WalletBalances: React.FC = () => {
  const { wallet } = useAuth();
  const { toast } = useToast();

  if (!wallet) return null;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${type} copied`,
      description: "Copied to clipboard",
    });
  };

  const networks = [
    {
      name: 'Ethereum',
      icon: '🔷',
      symbol: 'ETH',
      address: wallet.ethereum.address,
      balance: wallet.ethereum.balance,
      color: 'bg-blue-500',
    },
    {
      name: 'Bitcoin',
      icon: '₿',
      symbol: 'BTC',
      address: wallet.bitcoin.address,
      balance: wallet.bitcoin.balance,
      color: 'bg-orange-500',
    },
    {
      name: 'Tron',
      icon: '⚡',
      symbol: 'TRX',
      address: wallet.tron.address,
      balance: wallet.tron.balance,
      color: 'bg-red-500',
    },
    {
      name: 'Binance',
      icon: '🟡',
      symbol: 'BNB',
      address: wallet.binance.address,
      balance: wallet.binance.balance,
      color: 'bg-yellow-500',
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {networks.map((network) => (
        <Card key={network.name} className="p-6 wallet-shadow bg-[#414244] border-[#535456]">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full ${network.color} flex items-center justify-center text-white text-xl mr-3`}>
                {network.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{network.name}</h3>
            </div>
            <div className="text-2xl font-bold text-[#a6abb5]">
              {network.balance} <span className="text-sm font-normal">{network.symbol}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center bg-[#2e2e2e] p-2 pl-4 rounded">
            <div className="font-mono text-sm truncate max-w-[70%] text-white">
              {shortenAddress(network.address)}
            </div>
            <Button
              className=' bg-transparent hover:bg-transparent transition-all ease-in-out duration-300'
              size="sm"
              onClick={() => copyToClipboard(network.address, `${network.name} address`)}
            >
              <Copy className="h-4 w-4 text-white" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default WalletBalances;
