
'use client'
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { shortenAddress } from '@/lib/crypto';
import { Button } from '@/components/ui/button';
import { LogOut, Copy, Coins } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import WebToken from '../WebToken';
import RobotAutomate from '../RobotAutomate';
import Link from 'next/link';

const WalletHeader: React.FC = () => {
  const { user, wallet, logout } = useAuth();
  const { toast } = useToast();

  if (!user || !wallet) return null;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${type} copied`,
      description: "Copied to clipboard",
    });
  };

  // Format Lookai balance if available
  const lookaiBalance = wallet.lookai 
    ? parseInt(wallet.lookai.balance).toLocaleString() 
    : "0";

  return (
    <div className="rounded-lg shadow-md p-6 wallet-shadow bg-[#414244] border-[#535456] border-solid border-[1px]">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-2xl font-bold text-agent-primary text-white">Wallet Lookai</h1>
          <p className="text-[#a6abb5]">Welcome to wallet, {user.username}</p>
        </div>
        
        <div className="flex items-center space-x-3 text-[#a6abb5]">
          {wallet.lookai && (
            <div className="flex items-center bg-agent-light bg-opacity-20 px-3 py-1 rounded-md mr-2">
              <WebToken className='h-5 w-5 mr-2'/>
              <span className="font-medium">{lookaiBalance} Web Tokens</span>
            </div>
          )}
          <Button className='bg-transparent hover:bg-transparent hover:border-lokai-blue-light border-lokai-blue border-solid border-[1px] text-lokai-blue-dark hover:text-lokai-blue' onClick={logout}>
            <LogOut className="h-4 w-4 mr-2 text-lokai-blue" />
            Logout
          </Button>
        </div>
      </div>
      
      <div className="mt-4 bg-agent-light bg-opacity-30 p-3 rounded-md">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="text-[#a6abb5]">Public Key: </span>
            <span className="font-mono text-lokai-blue ml-2">{shortenAddress(user.publicKey)}</span>
          </div>
          <Button
            className='hover:border-lokai-blue hover:border-solid hover:border-[1px] bg-transparent hover:bg-transparent transition-all ease-in-out duration-300'
            size="sm"
            onClick={() => copyToClipboard(user.publicKey, 'Public key')}
          >
            <Copy className="h-4 w-4 text-lokai-blue-dark hover:text-lokai-blue" />
          </Button>
        </div>
        <div className='flex flex-row items-center mt-4'>
          <Link
          className='text-lokai-blue-dark hover:text-lokai-blue mr-3 text-[0.9rem]'
          href='/'
          >
            Go to agent lookai
          </Link>
          <RobotAutomate className='cursor-pointer w-5 h-5 text-lokai-blue-dark hover:text-lokai-blue ml-auto mr-2'/>
        </div>
      </div>
    </div>
  );
};

export default WalletHeader;
