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