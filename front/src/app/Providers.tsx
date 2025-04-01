"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/context/AuthContext";
import { StorageProvider } from "@/context/StorageContext";
import { TransactionProvider } from "@/context/TransactionsContext";

// Crea el cliente de React Query
const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <TransactionProvider>
            <StorageProvider>
              <Toaster />
              <Sonner />
              {children}
            </StorageProvider>
          </TransactionProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}