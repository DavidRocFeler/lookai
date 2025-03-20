import { ICardTitleService } from "@/interfaces/types";
import { Share2, Calendar, MessagesSquare, Users } from "lucide-react";

export const servicesAreasHelpers: ICardTitleService[] = [
    {
        id: 1,
        title: 'Booking Automation',
        icon: <Calendar/>,
        iconClassName: "h-12 w-12 text-lokai-blue mb-4" 
    },
    {
        id: 2,
        title: 'Automated Customer Support',
        icon: <MessagesSquare/>,
        iconClassName: "h-12 w-12 text-lokai-blue mb-4" 
    },
    {
        id: 3,
        title: 'Sales Support',
        icon: <Users/>,
        iconClassName: "h-12 w-12 text-lokai-blue mb-4" 

    },
    {
        id: 4,
        title: 'Marketing and content',
        icon: <Share2/>,
        iconClassName: "h-12 w-12 text-lokai-blue mb-4" 
    }
]