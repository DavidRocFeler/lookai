
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, Mail, Lock, Key } from 'lucide-react';

const LoginForm: React.FC<{ onToggleRegister: () => void }> = ({ onToggleRegister }) => {
  const { login, loginWithPrivateKey, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  const handlePrivateKeySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginWithPrivateKey(privateKey);
  };

  return (
    <div className="space-y-6 p-6 w-full max-w-md">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Login to Your Wallet</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Access your blockchain wallet and secure storage
        </p>
      </div>

      <Tabs defaultValue="credentials" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="credentials">Credentials</TabsTrigger>
          <TabsTrigger value="privateKey">Private Key</TabsTrigger>
        </TabsList>

        <TabsContent value="credentials">
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-[#2BAFD9] hover:bg-lokai-blue-dark" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="privateKey">
          <form onSubmit={handlePrivateKeySubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="privateKey">Private Key</Label>
              <div className="relative">
                <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="privateKey"
                  type="password"
                  placeholder="0x..."
                  className="pl-10 font-mono"
                  value={privateKey}
                  onChange={(e) => setPrivateKey(e.target.value)}
                  required
                />
              </div>
              <p className="text-xs text-muted-foreground text-lokai-blue ">
                Enter your wallet private key to restore access
              </p>
            </div>
            
            <Button type="submit" className="w-full bg-[#2BAFD9] hover:bg-lokai-blue-dark" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Accessing wallet...
                </>
              ) : (
                'Access Wallet'
              )}
            </Button>
          </form>
        </TabsContent>
      </Tabs>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Don't have a wallet?{' '}
          <button
            type="button"
            onClick={onToggleRegister}
            className="hover:underline font-medium text-lokai-blue "
          >
            Create one now
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
