import React from "react";

export interface ISphericalWaveProps {
    isSlideBarOpen: boolean;
}
export interface ICardInfoService {
    id: number;
    groupItems: {
        id: number;
        iconService: string;
        typeService: string;
        descriptionService: string;
    }[];
}
export interface ICardTitleService {
    id: number;
    title: string; 
    icon: React.ReactNode,
    iconClassName: string;
    onClose?: () => void;
}
export interface IInforCardServiceProps {
    serviceID: number | null;
}
export interface IChatAI {
    onCLose: () => void 
}

export interface User {
    id: string;
    username: string;
    email: string;
    publicKey: string;
    privateKey: string;
  }
  
  export interface Wallet {
    ethereum: {
      address: string;
      balance: string;
    };
    bitcoin: {
      address: string;
      balance: string;
    };
    tron: {
      address: string;
      balance: string;
    };
    binance: {
      address: string;
      balance: string;
    };
    lookai?: {
      balance: string;
      staked: string;
      agentActive: boolean;
      contractStartDate?: number;
    };
  }
  
  export interface Transaction {
    id: string;
    type: 'send' | 'receive';
    amount: string;
    currency: 'ETH' | 'BTC' | 'TRX' | 'BNB' | 'LOOKAI';
    address: string;
    timestamp: number;
    status: 'pending' | 'completed' | 'failed';
  }
  
  export interface StoredFile {
    id: string;
    name: string;
    type: string;
    size: number;
    content: string; // Base64 encoded content
    uploadDate: number;
  }
  
  export interface TokenPurchase {
    id: string;
    amount: string; // in USD
    tokens: string; // number of Lookai tokens
    timestamp: number;
    status: 'pending' | 'completed' | 'failed';
  }
  
  export interface StakingContract {
    id: string;
    amount: string; // number of Lookai tokens staked
    startDate: number;
    endDate?: number;
    active: boolean;
  }
  