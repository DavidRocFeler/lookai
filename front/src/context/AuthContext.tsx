'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { User, Wallet } from '@/interfaces/types';
import { generateKeys, generateWallet } from '@/lib/crypto';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  wallet: Wallet | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateWallet: (newWallet: Wallet) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const router = useRouter()

  useEffect(() => {
    const savedUser = localStorage.getItem('agent_user');
    const savedWallet = localStorage.getItem('agent_wallet');
    
    if (savedUser && savedWallet) {
      setUser(JSON.parse(savedUser));
      setWallet(JSON.parse(savedWallet));
    }
    setIsLoading(false);
  }, []);

  const register = async (username: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const { publicKey, privateKey } = generateKeys();
      
      const newUser: User = {
        id: uuidv4(),
        username,
        email,
        publicKey,
        privateKey
      };
      
      const newWallet = generateWallet(privateKey);
      
      localStorage.setItem('agent_user', JSON.stringify(newUser));
      localStorage.setItem('agent_wallet', JSON.stringify(newWallet));
      localStorage.setItem(`agent_password_${email}`, password);
      
      setUser(newUser);
      setWallet(newWallet);
      
      toast({
        title: "Account created",
        description: "Your wallet is ready to use",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: "Please try again later",
      });
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const savedPassword = localStorage.getItem(`agent_password_${email}`);
      
      if (!savedPassword || savedPassword !== password) {
        throw new Error("Invalid credentials");
      }
      
      const savedUser = localStorage.getItem('agent_user');
      const savedWallet = localStorage.getItem('agent_wallet');
      
      if (!savedUser || !savedWallet) {
        throw new Error("User not found");
      }
      
      const parsedUser = JSON.parse(savedUser);
      
      if (parsedUser.email !== email) {
        throw new Error("User not found");
      }
      
      setUser(parsedUser);
      setWallet(JSON.parse(savedWallet));
      
      toast({
        title: "Login successful",
        description: "Welcome back to your wallet",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: error instanceof Error ? error.message : "Please try again",
      });
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithPrivateKey = async (privateKey: string) => {
    try {
      setIsLoading(true);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!privateKey.startsWith('0x') || privateKey.length !== 66) {
        throw new Error("Invalid private key format");
      }
      
      const { publicKey } = generateKeys();
      
      const newUser: User = {
        id: uuidv4(),
        username: "Wallet User",
        email: "via-private-key@example.com",
        publicKey,
        privateKey
      };
      
      const newWallet = generateWallet(privateKey);
      
      setUser(newUser);
      setWallet(newWallet);
      
      localStorage.setItem('agent_user', JSON.stringify(newUser));
      localStorage.setItem('agent_wallet', JSON.stringify(newWallet));
      
      toast({
        title: "Wallet restored",
        description: "Your wallet has been restored with your private key",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Wallet restoration failed",
        description: error instanceof Error ? error.message : "Please check your private key",
      });
      console.error("Private key login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    // Elimina todos los items de localStorage relacionados con la autenticación
    localStorage.removeItem('agent_user');
    localStorage.removeItem('agent_wallet');
    
    // Elimina todos los passwords almacenados (usando el prefijo)
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('agent_password_')) {
        localStorage.removeItem(key);
      }
    });
  
    // Elimina cualquier otro dato relacionado (opcional)
    localStorage.removeItem('agent_transactions');
    localStorage.removeItem('agent_settings');
  
    // Limpia el estado
    setUser(null);
    setWallet(null);
  
    // Muestra notificación
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    router.push('/auth');
  };
  
  const updateWallet = (newWallet: Wallet) => {
    setWallet(newWallet);
    if (user) {
      localStorage.setItem(`agent_wallet_${user.id}`, JSON.stringify(newWallet));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        wallet,
        isLoading,
        login,
        register,
        logout,
        updateWallet
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
