
'use client'
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTransaction } from '@/context/TransactionsContext';
import { Loader2, Send } from 'lucide-react';

const SendForm: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [currency, setCurrency] = useState<'ETH' | 'BTC' | 'TRX' | 'BNB'>('ETH');
  const [isLoading, setIsLoading] = useState(false);
  const { sendTransaction } = useTransaction();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await sendTransaction(amount, currency, address);
      setAmount('');
      setAddress('');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6 wallet-shadow bg-[#414244] border-[#535456]">
      <h3 className="text-xl font-semibold mb-4 text-white">Send Cryptocurrency</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="currency" className='text-[#a6abb5]'>Currency</Label>
          <Select value={currency} onValueChange={(value: 'ETH' | 'BTC' | 'TRX' | 'BNB') => setCurrency(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className='text-[#a6abb5]' value="ETH">Ethereum (ETH)</SelectItem>
              <SelectItem className='text-[#a6abb5]' value="BTC">Bitcoin (BTC)</SelectItem>
              <SelectItem className='text-[#a6abb5]' value="TRX">Tron (TRX)</SelectItem>
              <SelectItem className='text-[#a6abb5]' value="BNB">Binance (BNB)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="amount" className='text-[#a6abb5]'>Amount</Label>
          <Input
            className=' text-[#a6abb5] placeholder:text-[#a6abb5] bg-[#2e2e2e] border-none'
            id="amount"
            type="text"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address" className='text-[#a6abb5]'>Recipient Address</Label>
          <Input
            id="address"
            type="text"
            placeholder="Enter recipient address"
            className="text-[#a6abb5] placeholder:text-[#a6abb5] bg-[#2e2e2e] border-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        
        <Button type="submit" className="w-full  bg-lokai-blue hover:bg-lokai-blue-dark" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send {currency}
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default SendForm;
