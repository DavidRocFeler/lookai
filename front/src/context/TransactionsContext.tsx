
'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Transaction } from '@/interfaces/types';
import { useAuth } from './AuthContext';
import { createTransaction } from '@/lib/crypto';
import { useToast } from '@/components/ui/use-toast';

interface TransactionContextType {
  transactions: Transaction[];
  sendTransaction: (amount: string, currency: 'ETH' | 'BTC' | 'TRX' | 'BNB', address: string) => Promise<void>;
  completeTransaction: (id: string, status: 'completed' | 'failed') => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const TransactionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const { user, wallet } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      const savedTransactions = localStorage.getItem(`agent_transactions_${user.id}`);
      if (savedTransactions) {
        setTransactions(JSON.parse(savedTransactions));
      } else {
        setTransactions([]);
      }
    } else {
      setTransactions([]);
    }
  }, [user]);

  const saveTransactions = (newTransactions: Transaction[]) => {
    if (user) {
      localStorage.setItem(`agent_transactions_${user.id}`, JSON.stringify(newTransactions));
      setTransactions(newTransactions);
    }
  };

  const sendTransaction = async (amount: string, currency: 'ETH' | 'BTC' | 'TRX' | 'BNB', address: string): Promise<void> => {
    try {
      if (!user || !wallet) throw new Error("You must be logged in to send transactions");
      
      // Validate amount
      const numAmount = parseFloat(amount);
      if (isNaN(numAmount) || numAmount <= 0) {
        throw new Error("Please enter a valid amount");
      }
      
      // Validate address format
      if (!address || address.length < 10) {
        throw new Error("Please enter a valid recipient address");
      }
      
      // Create transaction
      const transaction = createTransaction('send', amount, currency, address);
      
      // Add to transactions
      const newTransactions = [transaction, ...transactions];
      saveTransactions(newTransactions);
      
      toast({
        title: "Transaction sent",
        description: `${amount} ${currency} transaction is being processed`,
      });
      
      // Simulate transaction processing
      setTimeout(() => {
        completeTransaction(
          transaction.id, 
          Math.random() > 0.1 ? 'completed' : 'failed'
        );
      }, 5000);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Transaction failed",
        description: error instanceof Error ? error.message : "Failed to send transaction",
      });
      console.error("Transaction error:", error);
    }
  };

  const completeTransaction = (id: string, status: 'completed' | 'failed'): void => {
    const updatedTransactions = transactions.map(tx => 
      tx.id === id ? { ...tx, status } : tx
    );
    
    saveTransactions(updatedTransactions);
    
    const transaction = updatedTransactions.find(tx => tx.id === id);
    if (transaction) {
      toast({
        title: `Transaction ${status}`,
        description: `${transaction.amount} ${transaction.currency} ${status === 'completed' ? 'sent successfully' : 'failed to send'}`,
        variant: status === 'completed' ? 'default' : 'destructive',
      });
    }
  };

  return (
    <TransactionContext.Provider value={{ transactions, sendTransaction, completeTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (context === undefined) {
    throw new Error('useTransaction must be used within a TransactionProvider');
  }
  return context;
};
