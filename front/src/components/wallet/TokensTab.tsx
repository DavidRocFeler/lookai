
'use client'
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CreditCard, Wallet, TrendingUp, ArrowRight, Info } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { formatBalance } from '@/lib/crypto';
import WebToken from '../WebToken';

const TOKEN_PRICE = 0.0001; // Price in USD per Lookai token
const AGENT_PACKAGE_PRICE = 500; // USD
const AGENT_PACKAGE_TOKENS = 5000000; // 5 million tokens

const TokensTab: React.FC = () => {
  const { user, wallet, updateWallet } = useAuth();
  const { toast } = useToast();
  const [purchaseAmount, setPurchaseAmount] = useState(AGENT_PACKAGE_PRICE.toString());
  const [tokensToReceive, setTokensToReceive] = useState(AGENT_PACKAGE_TOKENS.toString());
  const [isStaking, setIsStaking] = useState(wallet?.lookai?.agentActive === false);
  
  // Calculate tokens based on amount
  const calculateTokens = (amount: string) => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) return "0";
    return Math.floor(numAmount / TOKEN_PRICE).toLocaleString();
  };

  // Simulate Stripe payment
  const handlePurchase = () => {
    toast({
      title: "Processing payment",
      description: "Redirecting to Stripe checkout...",
    });
    
    // Simulate successful payment after 2 seconds
    setTimeout(() => {
      if (wallet && wallet.lookai) {
        const currentBalance = parseFloat(wallet.lookai.balance) || 0;
        const newBalance = currentBalance + AGENT_PACKAGE_TOKENS;
        
        const updatedWallet = {
          ...wallet,
          lookai: {
            ...wallet.lookai,
            balance: newBalance.toString()
          }
        };
        
        updateWallet(updatedWallet);
        
        toast({
          title: "Payment successful",
          description: `You've received ${AGENT_PACKAGE_TOKENS.toLocaleString()} Lookai tokens`,
        });
      } else if (wallet) {
        // Initialize lookai wallet if it doesn't exist
        const updatedWallet = {
          ...wallet,
          lookai: {
            balance: AGENT_PACKAGE_TOKENS.toString(),
            staked: "0",
            agentActive: false
          }
        };
        
        updateWallet(updatedWallet);
        
        toast({
          title: "Payment successful",
          description: `You've received ${AGENT_PACKAGE_TOKENS.toLocaleString()} Lookai tokens`,
        });
      }
    }, 2000);
  };

  // Toggle agent activation
  const toggleAgentActivation = () => {
    if (wallet && wallet.lookai) {
      const updatedWallet = {
        ...wallet,
        lookai: {
          ...wallet.lookai,
          agentActive: !wallet.lookai.agentActive,
          contractStartDate: !wallet.lookai.agentActive ? Date.now() : undefined
        }
      };
      
      updateWallet(updatedWallet);
      
      toast({
        title: wallet.lookai.agentActive ? "Agent deactivated" : "Agent activated",
        description: wallet.lookai.agentActive 
          ? "Your Lookai tokens will no longer be spent" 
          : "Your Lookai tokens will now be used to power your agent",
      });
      
      setIsStaking(!wallet.lookai.agentActive);
    }
  };

  // Stake tokens
  const stakeTokens = () => {
    if (wallet && wallet.lookai) {
      const currentBalance = parseFloat(wallet.lookai.balance) || 0;
      const currentStaked = parseFloat(wallet.lookai.staked) || 0;
      
      if (currentBalance >= AGENT_PACKAGE_TOKENS) {
        const updatedWallet = {
          ...wallet,
          lookai: {
            ...wallet.lookai,
            balance: (currentBalance - AGENT_PACKAGE_TOKENS).toString(),
            staked: (currentStaked + AGENT_PACKAGE_TOKENS).toString()
          }
        };
        
        updateWallet(updatedWallet);
        
        toast({
          title: "Tokens staked successfully",
          description: `${AGENT_PACKAGE_TOKENS.toLocaleString()} Lookai tokens have been staked`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Insufficient tokens",
          description: "You need at least 5,000,000 Lookai tokens to stake",
        });
      }
    }
  };

  // Convert to other currencies
  const convertTokens = (currency: 'ETH' | 'BTC' | 'TRX' | 'BNB') => {
    toast({
      title: "Conversion not available",
      description: "Token conversion will be available in a future update",
    });
  };

  // If no wallet or no lookai data in wallet
  const lookai = wallet?.lookai || { balance: "0", staked: "0", agentActive: false };
  const hasLookaiWallet = wallet && wallet.lookai;

  return (
    <div className="space-y-6">
      <Card className="p-6 wallet-shadow bg-[#414244] border-[#535456]">
        <h3 className="text-xl font-semibold mb-4 text-white">Web Token Dashboard</h3>
        <WebToken className='mx-auto'/>
        <div className="flex justify-center items-center mb-[2rem] text-white">
          <div className="p-4 rounded-md 400 text-center">
            <div className="text-sm text-[#a6abb5]">Available Balance</div>
            <div className="text-2xl font-bold mt-1">
              {hasLookaiWallet ? parseInt(lookai.balance).toLocaleString() : "0"} Web Token
            </div>
            <div className="text-sm text-[#a6abb5] mt-1">
              ${hasLookaiWallet ? (parseFloat(lookai.balance) * TOKEN_PRICE).toFixed(2) : "0.00"}
            </div>
          </div>
      
        </div>
        
        <Tabs defaultValue="buy">
          <TabsList className="grid grid-cols-4 mb-4 bg-[#414244] text-[#a6abb5]">
            <TabsTrigger value="buy">Buy Tokens</TabsTrigger>
            <TabsTrigger value="agent">Agent Lookai</TabsTrigger>
            <TabsTrigger value="stake">Sesabai and Staking</TabsTrigger>
            <TabsTrigger value="convert">Convert</TabsTrigger>
          </TabsList>
          
          <TabsContent value="buy" className='text-white'>
            <div className="bg-[#2e2e2e] p-10 rounded-md mb-4">
              <h4 className="font-medium mb-2">Purchase Lookai Tokens</h4>
              <p className="text-sm text-[#a6abb5] mb-10">
                Agent Lookai Wallet tokens power your AI agent and can be held as an investment.
                Initial token price: $0.0001 per LOOKAI.
              </p>
              
              <div className="mb-4">
                <div className="text-sm text-[#a6abb5] font-medium mb-1">Package Price</div>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={purchaseAmount}
                    onChange={(e) => {
                      setPurchaseAmount(e.target.value);
                      setTokensToReceive(calculateTokens(e.target.value));
                    }}
                    className="bg-transparent text-[#a6abb5] border-none rounded-md px-3 py-2 w-full"
                    readOnly
                  />
                  <WebToken className='h-10 w-10'/>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-sm font-medium mb-1 text-[#a6abb5]">Tokens to Receive</div>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={tokensToReceive}
                    className="bg-transparent text-[#a6abb5] border-none rounded-md px-3 py-2 w-full"
                    readOnly
                  />
                   <WebToken className='h-10 w-10'/>
                </div>
              </div>
              
              <Button onClick={handlePurchase} className="w-full bg-lokai-blue hover:bg-lokai-blue-dark mt-10">
                <CreditCard className="h-4 w-4 mr-2" />
                Purchase with Stripe
              </Button>
            </div>
            
            <div className="bg-[#2e2e2e] text-[#a6abb5] p-5 rounded-md text-sm">
              <div className="flex items-start">
                <Info className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">How it works:</p>
                  <p className="mt-1">
                    Your $500 payment provides 5,000,000 Lookai tokens. These tokens power your AI agent
                    or can be staked as an investment. The token value is expected to increase from $0.0001
                    to $0.001 within a year through demand growth.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="agent">
            <div className="bg-[#2e2e2e] p-10 rounded-md mb-4 text-[#a6abb5]">
              <h4 className="font-medium mb-2">AI Agent Activation</h4>
              <p className="text-sm mb-10">
                When your agent is active, Lookai tokens will be consumed based on usage.
                If your agent encounters issues, token consumption pauses automatically.
              </p>
              
              <div className="flex items-center justify-between p-3 bg-[#414244] rounded-md">
                <div>
                  <div className="font-medium">Agent Status</div>
                  <div className="">
                    {hasLookaiWallet && lookai.agentActive 
                      ? "Active - consuming tokens" 
                      : "Inactive - not consuming tokens"}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm">
                    {hasLookaiWallet && lookai.agentActive ? "On" : "Off"}
                  </span>
                  <Switch
                    checked={!!(hasLookaiWallet && lookai.agentActive)}
                    onCheckedChange={toggleAgentActivation}
                    disabled={!hasLookaiWallet || parseFloat(lookai.balance) < 1000000}
                    />
                </div>
              </div>
              
              {hasLookaiWallet && lookai.agentActive && lookai.contractStartDate && (
                <div className="mt-4 p-3 bg-[#414244] rounded-md text-sm">
                  <p className="font-medium">Active Contract</p>
                  <p>Start date: {new Date(lookai.contractStartDate).toLocaleDateString()}</p>
                  <p>Estimated duration: 30 days (5M tokens)</p>
                </div>
              )}
              
              {(!hasLookaiWallet || parseFloat(lookai.balance) < 1000000) && (
                <div className="mt-4 p-3 bg-[#414244] text-[#a6abb5] rounded-md text-sm">
                  <p>Insufficient tokens to activate agent. Purchase tokens to proceed.</p>
                </div>
              )}
            </div>
            
            <div className="bg-[#2e2e2e] text-[#a6abb5] p-5 rounded-md text-sm">
              <div className="flex items-start">
                <Info className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Agent Token Usage:</p>
                  <p className="mt-1">
                    5,000,000 Lookai tokens provide approximately 30 days of agent runtime.
                    Tokens are only consumed when your agent is active. If your agent encounters
                    issues and stops, token consumption pauses until resolved.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="stake">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#2e2e2e] text-white p-4 rounded-md">
                <h4 className="font-medium mb-2">Stake Tokens</h4>
                <p className="text-sm text-[#a6abb5] mb-4">
                  Stake your tokens to earn rewards as token value increases.
                  Minimum stake: 5,000,000 LOOKAI.
                </p>

                <div className="p-4 rounded-md text-white">
                  <div className="text-sm text-[#a6abb5]">Staked Balance Web Token</div>
                  <div className='flex flex-row items-center relative'>
                    <div className="text-2xl font-bold mt-1">
                      {hasLookaiWallet ? parseInt(lookai.staked).toLocaleString() : "0"}
                    </div>    
                    <WebToken className='h-10 w-10] p-0 right-[-3rem] absolute'/>               
                  </div>
                  <div className="text-sm text-[#a6abb5] mt-1">
                    ${hasLookaiWallet ? (parseFloat(lookai.staked) * TOKEN_PRICE).toFixed(2) : "0.00"}
                  </div>
                </div>

                <Button 
                  onClick={stakeTokens}
                  disabled={!hasLookaiWallet || parseFloat(lookai.balance) < AGENT_PACKAGE_TOKENS}
                  className="w-full text-white  bg-lokai-blue hover:bg-lokai-blue-dark"
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Stake 5,000,000 LOOKAI
                </Button>
              </div>
              
              <div className="bg-[#2e2e2e] text-white p-4 rounded-md">
                <h4 className="font-medium mb-2">Sesabai Tokens</h4>
                <p className="text-sm text-[#a6abb5] mb-4">
                  Stake your tokens to earn rewards as token value increases.
                  Minimum stake: 5,000,000 LOOKAI.
                </p>
                
                <Button 
                  onClick={stakeTokens}
                  disabled={!hasLookaiWallet || parseFloat(lookai.balance) < AGENT_PACKAGE_TOKENS}
                  className="w-full text-white  bg-lokai-blue hover:bg-lokai-blue-dark"
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Stake 5,000,000 LOOKAI
                </Button>
              </div>
            </div>
            
            <div className="bg-[#2e2e2e] text-[#a6abb5] p-5 rounded-md text-sm">
              <div className="flex items-start">
                <Info className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Token Value Growth:</p>
                  <p className="mt-1">
                    The Lookai token is designed to increase from $0.0001 to $0.001 within a year
                    through demand growth. Staking tokens contributes to the liquidity pool,
                    which enables users to benefit from value appreciation.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="convert">
            <div className="grid grid-cols-1 gap-4 mb-4">
              
              <div className="bg-[#2e2e2e] text-white p-4 rounded-md">
                <h4 className="font-medium mb-2 text-[#a6abb5]">Convert Tokens</h4>
                <p className="text-sm text-[#a6abb5] mb-4">
                  Convert your Lookai tokens to other cryptocurrencies.
                </p>
                
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-between"
                    onClick={() => convertTokens('ETH')}
                    disabled={!hasLookaiWallet || parseFloat(lookai.balance) < 1000000}
                  >
                    <span>Convert to ETH</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-between"
                    onClick={() => convertTokens('BTC')}
                    disabled={!hasLookaiWallet || parseFloat(lookai.balance) < 1000000}
                  >
                    <span>Convert to BTC</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-between"
                    onClick={() => convertTokens('BNB')}
                    disabled={!hasLookaiWallet || parseFloat(lookai.balance) < 1000000}
                  >
                    <span>Convert to BNB</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-between"
                    onClick={() => convertTokens('TRX')}
                    disabled={!hasLookaiWallet || parseFloat(lookai.balance) < 1000000}
                  >
                    <span>Convert to TRX</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-[#2e2e2e] text-[#a6abb5] p-5 rounded-md text-sm">
              <div className="flex items-start">
                <Info className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Token Value Growth:</p>
                  <p className="mt-1">
                    The Lookai token is designed to increase from $0.0001 to $0.001 within a year
                    through demand growth. Staking tokens contributes to the liquidity pool,
                    which enables users to benefit from value appreciation.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default TokensTab;
