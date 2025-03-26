import { ICardInfoService } from "@/interfaces/types";

export const cardInfoService: ICardInfoService[] = [
    // Grupo 1
    {
        id: 1, // ID de grupo
        groupItems: [
            {
                id: 1,
                iconService: '/Hospitals.svg',
                typeService: 'Clinics and Hospitals',
                descriptionService: 'Focused on health services such as dentistry and physiotherapy',
            },
            {
                id: 2,
                iconService: '/BarberShop.svg',
                typeService: 'Spas and Beauty Centers',
                descriptionService: 'Includes hair salons and beauty treatments',
            },
            {
                id: 3,
                iconService: '/Gym.svg',
                typeService: 'Gyms and Trainers',
                descriptionService: 'Covers class and training session bookings',
            },
            {
                id: 4,
                iconService: '/Restaurants.svg',
                typeService: 'Restaurants and Events',
                descriptionService: 'Involves table reservations and event planning',
            },
            {
                id: 5,
                iconService: '/Mechanical.svg',
                typeService: 'Mechanical Workshops',
                descriptionService: 'Focuses on vehicle maintenance and repair services',
            },
            {
                id: 6,
                iconService: '/law.svg',
                typeService: 'Legal and Tax Consultancies',
                descriptionService: 'Involves appointments with legal and tax professionals',
            }
        ]
    },
    // Grupo 2
    {
        id: 2, // ID de grupo
        groupItems: [
            {
                id: 1,
                iconService: '/Ecommerce.svg',
                typeService: 'E-Commerce and On-Shops',
                descriptionService: 'AI Agents to manage orders and online support',
            },
            {
                id: 2,
                iconService: '/InsuranceHouse.svg',
                typeService: 'Insurance',
                descriptionService: 'AI Agents for policy inquiries and claims management',
            },
            {
                id: 3,
                iconService: '/Comunications.svg',
                typeService: 'Telecommunications',
                descriptionService: 'AI Agents for plans and technical support',
            },
            {
                id: 4,
                iconService: '/School.svg',
                typeService: 'Education',
                descriptionService: 'AI Agents for enrollments and course inquiries',
            },
            {
                id: 5,
                iconService: '/Rooms.svg',
                typeService: 'Hospitality',
                descriptionService: 'AI Agents for room bookings and vacation packages',
            }
        ]
    },
    // Grupo 3
    {
        id: 3, // ID de grupo
        groupItems: [
            {
                id: 1,
                iconService: '/Car.svg',
                typeService: 'Automotive',
                descriptionService: 'Virtual assistants for vehicle purchasing',
            },
            {
                id: 2,
                iconService: '/ForSale.svg',
                typeService: 'Real state',
                descriptionService: 'Virtual agents for lead generation',
            },
            {
                id: 3,
                iconService: '/Company.svg',
                typeService: 'B2B Companies',
                descriptionService: 'Sales prospecting and closing automation',
            },
            {
                id: 4,
                iconService: '/Courses.svg',
                typeService: 'Course Sales',
                descriptionService: 'Lead tracking and conversion',
            },
            {
                id: 5,
                iconService: '/Gym.svg',
                typeService: 'Gyms',
                descriptionService: 'Customer acquisition and retention',
            }
        ]
    },
    // Grupo 4
    {
        id: 4, // ID de grupo
        groupItems: [
            {
                id: 1,
                iconService: '/marketinPublish.svg',
                typeService: 'Advertising Agencies',
                descriptionService: 'Campaign automation and ad generation',
            },
            {
                id: 2,
                iconService: '/Famous.svg',
                typeService: 'Influencers',
                descriptionService: 'Idea generation and content publishing',
            },
            {
                id: 3,
                iconService: '/Startups.svg',
                typeService: 'Sturtups',
                descriptionService: 'Funnel automation and email marketing',
            },
            {
                id: 4,
                iconService: '/Editorials.svg',
                typeService: 'Editorials',
                descriptionService: 'Content curation and summaries',
            },
            {
                id: 5,
                iconService: '/Consult.svg',
                typeService: 'Consultants',
                descriptionService: 'Engagement automation and educational content',
            }
        ]
    }
]