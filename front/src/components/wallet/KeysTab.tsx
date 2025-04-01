
'use client'
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Eye, EyeOff, AlertTriangle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const KeysTab: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [showPrivateKey, setShowPrivateKey] = useState(false);

  if (!user) return null;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${type} copied`,
      description: "Copied to clipboard",
    });
  };

  return (
    <Card className="p-6 wallet-shadow bg-[#414244] border-[#535456] border-solid border-[1px] text-white">
      <h3 className="text-xl font-semibold mb-4">Your Keys</h3>
      
      <div className="bg-[#2e2e2e] p-4 rounded-md mb-6">
        <div className="flex items-start">
          <AlertTriangle className="h-5 w-5 text-[#a6abb5] mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-[#a6abb5] ">Security Warning</h4>
            <p className="text-sm text-[#a6abb5]">
              Never share your private key with anyone. Anyone with your private key has full control over your wallet and funds.
            </p>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Public Key</h4>
          <div className="bg-[#2e2e2e] p-4 rounded-md font-mono text-sm break-all">
            {user.publicKey}
          </div>
          <div className="mt-2 flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(user.publicKey, 'Public key')}
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-medium">Private Key</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPrivateKey(!showPrivateKey)}
            >
              {showPrivateKey ? (
                <>
                  <EyeOff className="h-4 w-4 mr-1" />
                  Hide
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4 mr-1" />
                  Show
                </>
              )}
            </Button>
          </div>
          
          <div className="bg-[#2e2e2e]  p-4 rounded-md font-mono text-sm break-all">
            {showPrivateKey ? user.privateKey : '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••'}
          </div>
          
          <div className="mt-2 flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(user.privateKey, 'Private key')}
              disabled={!showPrivateKey}
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default KeysTab;
