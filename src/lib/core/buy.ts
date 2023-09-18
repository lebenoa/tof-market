import { Tier, type Pricing } from "./core";

export interface Highlight {
    name: string;
    tier: Tier;
}

export interface SellerInfo {
    name: string;
    image: string | undefined;
    location: string;
    highlights: Highlight[];
}

export interface Seller {
    seller: SellerInfo;
    items: Pricing[];
}

export const buyPrice: Seller[] = [
    {
        seller: {
            name: "[Brocade House] Aunt Yun",
            image: "https://cdn.discordapp.com/attachments/1149570080154333274/1149570080393396274/bh_auth_yun.png",
            location:
                "https://cdn.discordapp.com/attachments/1149567307023122443/1149734094981316669/image.png",
            highlights: [
                {
                    name: "Silk Cocoon",
                    tier: Tier.Rare
                }
            ]
        },
        items: [
            {
                name: "Silk Cocoon",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1149728020366635028/Silk_Cocoon.png",
                tier: Tier.Rare,
                lowestPrice: 51,
                highestPrice: 97,
                lowestQuantity: 17,
                highestQuantity: 27
            },
            {
                name: "Beast Bone",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1149729186999705640/image.png",
                tier: Tier.Common,
                lowestPrice: 25,
                highestPrice: 47,
                lowestQuantity: 17,
                highestQuantity: 26
            },
            {
                name: "Beast Hide",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1149729220562518047/image.png",
                tier: Tier.Common,
                lowestPrice: 26,
                highestPrice: 48,
                lowestQuantity: 14,
                highestQuantity: 23
            },
            {
                name: "Fortress Helm",
                image: "",
                tier: Tier.Legendary,
                lowestPrice: 368,
                highestPrice: 1169,
                lowestQuantity: 1,
                highestQuantity: 1
            },
            {
                name: "Fortress Handguards",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150825312049963150/image.png",
                tier: Tier.Legendary,
                lowestPrice: 368,
                highestPrice: 1180,
                lowestQuantity: 1,
                highestQuantity: 1
            },
            {
                name: "Fortress Belt",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1149771859294957669/image.png",
                tier: Tier.Legendary,
                lowestPrice: 499,
                highestPrice: 1179,
                lowestQuantity: 1,
                highestQuantity: 1
            },
            {
                name: "Fortress Legguards",
                image: "",
                tier: Tier.Legendary,
                lowestPrice: 337,
                highestPrice: 1073,
                lowestQuantity: 1,
                highestQuantity: 1
            },
            {
                name: "Elite Combat Leggings",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1149779757781750050/image.png",
                tier: Tier.Epic,
                lowestPrice: 68,
                highestPrice: 193,
                lowestQuantity: 1,
                highestQuantity: 1
            },
            {
                name: "Elite Combat Helmet",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1149779866103857214/image.png",
                tier: Tier.Epic,
                lowestPrice: 57,
                highestPrice: 180,
                lowestQuantity: 1,
                highestQuantity: 1
            },
            {
                name: "Elite Armbands",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150825448067055717/image.png",
                tier: Tier.Epic,
                lowestPrice: 57,
                highestPrice: 195,
                lowestQuantity: 1,
                highestQuantity: 1
            },
            {
                name: "Elite Combat Belt",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150825511493316678/image.png",
                tier: Tier.Epic,
                lowestPrice: 53,
                highestPrice: 199,
                lowestQuantity: 1,
                highestQuantity: 1
            }
        ]
    },
    {
        seller: {
            name: "[Lusterium Trade Center] Owner Xu",
            image: "https://cdn.discordapp.com/attachments/1149567307023122443/1149757805486682225/image.png",
            location:
                "https://cdn.discordapp.com/attachments/1149567307023122443/1149760008356110336/image.png",
            highlights: [
                {
                    name: "Roughstone",
                    tier: Tier.Rare
                },
                {
                    name: "Jadestone",
                    tier: Tier.Common
                }
            ]
        },
        items: [
            {
                name: "Roughstone",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150074523534753982/image.png",
                tier: Tier.Rare,
                lowestPrice: 50,
                highestPrice: 97,
                lowestQuantity: 20,
                highestQuantity: 29
            },
            {
                name: "Jadestone",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150074570448056340/image.png",
                tier: Tier.Common,
                lowestPrice: 29,
                highestPrice: 47,
                lowestQuantity: 13,
                highestQuantity: 21
            },
            {
                name: "Raw Crystal",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150074611413827714/image.png",
                tier: Tier.Common,
                lowestPrice: 26,
                highestPrice: 49,
                lowestQuantity: 12,
                highestQuantity: 29
            },
            {
                name: "Heart of Summit",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150074986879516722/image.png",
                tier: Tier.Rare,
                lowestPrice: 3,
                highestPrice: 18,
                lowestQuantity: 3,
                highestQuantity: 3
            },
            {
                name: "Snowsource",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150074922115285052/image.png",
                tier: Tier.Epic,
                lowestPrice: 4,
                highestPrice: 38,
                lowestQuantity: 1,
                highestQuantity: 2
            },
            {
                name: "Heart of Lava",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150075039614521404/image.png",
                tier: Tier.Rare,
                lowestPrice: 2,
                highestPrice: 18,
                lowestQuantity: 3,
                highestQuantity: 3
            },
            {
                name: "Cluster",
                image: "",
                tier: Tier.Rare,
                lowestPrice: 4,
                highestPrice: 38,
                lowestQuantity: 3,
                highestQuantity: 8
            },
            {
                name: "Crystal Chunk",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150825903870464011/image.png",
                tier: Tier.Common,
                lowestPrice: 3,
                highestPrice: 19,
                lowestQuantity: 12,
                highestQuantity: 12
            }
        ]
    },
    {
        seller: {
            name: "[Sky Workshop] Master Tang",
            image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150077488379211796/image.png",
            location:
                "https://cdn.discordapp.com/attachments/1149567307023122443/1150078026508419102/image.png",
            highlights: [
                {
                    name: "Augment Stats Fortification Chip",
                    tier: Tier.Legendary
                },
                {
                    name: "Information Processing Module",
                    tier: Tier.Legendary
                },
                {
                    name: "Colorful Scale",
                    tier: Tier.Rare
                }
            ]
        },
        items: [
            {
                name: "Shellstone",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150078746011914370/image.png",
                tier: Tier.Rare,
                lowestPrice: 54,
                highestPrice: 98,
                lowestQuantity: 15,
                highestQuantity: 16
            },
            {
                name: "Colorful Scale",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150078694602313889/image.png",
                tier: Tier.Rare,
                lowestPrice: 55,
                highestPrice: 97,
                lowestQuantity: 20,
                highestQuantity: 26
            },
            {
                name: "Nanofiber Frame II",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150078836982161441/image.png",
                tier: Tier.Legendary,
                lowestPrice: 22,
                highestPrice: 59,
                lowestQuantity: 2,
                highestQuantity: 2
            },
            {
                name: "Acidproof Glaze II",
                image: "",
                tier: Tier.Legendary,
                lowestPrice: 6,
                highestPrice: 53,
                lowestQuantity: 5,
                highestQuantity: 5
            },
            {
                name: "Acidproof Glaze III",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150079012790599720/image.png",
                tier: Tier.Legendary,
                lowestPrice: 25,
                highestPrice: 141,
                lowestQuantity: 1,
                highestQuantity: 2
            },
            {
                name: "Nano Coating I",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150824937267925146/image.png",
                tier: Tier.Rare,
                lowestPrice: 2,
                highestPrice: 19,
                lowestQuantity: 5,
                highestQuantity: 5
            },
            {
                name: "Information Processing Module",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150824742346043442/image.png",
                tier: Tier.Legendary,
                lowestPrice: 123,
                highestPrice: 396,
                lowestQuantity: 4,
                highestQuantity: 4
            },
            {
                name: "Sense Enhancement Module",
                image: "",
                tier: Tier.Legendary,
                lowestPrice: 140,
                highestPrice: 370,
                lowestQuantity: 4,
                highestQuantity: 4
            },
            {
                name: "Augment Stats Fortification Chip",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150078582622785627/image.png",
                tier: Tier.Legendary,
                lowestPrice: 232,
                highestPrice: 799,
                lowestQuantity: 1,
                highestQuantity: 1
            }
        ]
    },
    {
        seller: {
            name: "[Golden Elixer Pavilion] Jing Dan",
            image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150082542205149225/image.png",
            location:
                "https://cdn.discordapp.com/attachments/1149567307023122443/1150082068047478855/image.png",
            highlights: [
                {
                    name: "Medicinal Herbs",
                    tier: Tier.Rare
                },
                {
                    name: "Enhanced Blade Shot",
                    tier: Tier.Epic
                },
                {
                    name: "Enhancement Shot",
                    tier: Tier.Epic
                },
                {
                    name: "Rejuvenation Shot",
                    tier: Tier.Epic
                }
            ]
        },
        items: [
            {
                name: "Medicinal Herbs",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150081767571718144/image.png",
                tier: Tier.Rare,
                lowestPrice: 26,
                highestPrice: 49,
                lowestQuantity: 26,
                highestQuantity: 27
            },
            {
                name: "Ginseng",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150083089494724688/image.png",
                tier: Tier.Rare,
                lowestPrice: 53,
                highestPrice: 97,
                lowestQuantity: 13,
                highestQuantity: 26
            },
            {
                name: "Lingzhi",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150083253852721222/image.png",
                tier: Tier.Rare,
                lowestPrice: 52,
                highestPrice: 96,
                lowestQuantity: 24,
                highestQuantity: 24
            },
            {
                name: "Rejuvenation Shot",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150083123804111029/image.png",
                tier: Tier.Epic,
                lowestPrice: 307,
                highestPrice: 599,
                lowestQuantity: 1,
                highestQuantity: 1
            },
            {
                name: "Enhancement Shot",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150083167655559168/image.png",
                tier: Tier.Epic,
                lowestPrice: 205,
                highestPrice: 399,
                lowestQuantity: 1,
                highestQuantity: 1
            },
            {
                name: "Enhanced Blade Shot",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150826290941804550/image.png",
                tier: Tier.Epic,
                lowestPrice: 405,
                highestPrice: 792,
                lowestQuantity: 1,
                highestQuantity: 1
            }
        ]
    },
    {
        seller: {
            name: "[Jade Dew Corner] Jing Tian",
            image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150083715456831539/image.png",
            location:
                "https://cdn.discordapp.com/attachments/1149567307023122443/1150084183843160165/image.png",
            highlights: [
                {
                    name: "Salt",
                    tier: Tier.Rare
                },
                {
                    name: "Brocade Rice",
                    tier: Tier.Rare
                }
            ]
        },
        items: [
            {
                name: "Salt",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150085815838453780/image.png",
                tier: Tier.Rare,
                lowestPrice: 25,
                highestPrice: 47,
                lowestQuantity: 10,
                highestQuantity: 16
            },
            {
                name: "Brocade Rice",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150085881584156782/image.png",
                tier: Tier.Rare,
                lowestPrice: 25,
                highestPrice: 49,
                lowestQuantity: 16,
                highestQuantity: 21
            },
            {
                name: "Sorghum",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150085963842867220/image.png",
                tier: Tier.Common,
                lowestPrice: 10,
                highestPrice: 19,
                lowestQuantity: 12,
                highestQuantity: 16
            },
            {
                name: "Green Plum",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150086018461085696/image.png",
                tier: Tier.Common,
                lowestPrice: 10,
                highestPrice: 19,
                lowestQuantity: 17,
                highestQuantity: 29
            },
            {
                name: "Begonia",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150087190307680326/image.png",
                tier: Tier.Rare,
                lowestPrice: 2,
                highestPrice: 19,
                lowestQuantity: 16,
                highestQuantity: 24
            },
            {
                name: "Bamboo Shoots",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150087457430315069/image.png",
                tier: Tier.Epic,
                lowestPrice: 3,
                highestPrice: 19,
                lowestQuantity: 11,
                highestQuantity: 20
            },
            {
                name: "Green Jade",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1150087561897840752/image.png",
                tier: Tier.Epic,
                lowestPrice: 2,
                highestPrice: 19,
                lowestQuantity: 12,
                highestQuantity: 28
            }
        ]
    },
    {
        seller: {
            name: "[Beast Adoption Shelter] Xue Yan",
            image: "https://cdn.discordapp.com/attachments/1149567307023122443/1151571543499997285/image.png",
            location:
                "https://cdn.discordapp.com/attachments/1149567307023122443/1151572741309349979/image.png",
            highlights: []
        },
        items: [
            {
                name: "G-Coyote (Tamed)",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1151574143565824000/image.png",
                tier: Tier.Common,
                lowestPrice: 41,
                highestPrice: 152,
                lowestQuantity: 1,
                highestQuantity: 1
            },
            {
                name: "Gray Sand Otter (Tamed)",
                image: "",
                tier: Tier.Common,
                lowestPrice: 40,
                highestPrice: 149,
                lowestQuantity: 1,
                highestQuantity: 1
            },
            {
                name: "Folium Tiger (Tamed)",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1151574575444926516/image.png",
                tier: Tier.Common,
                lowestPrice: 96,
                highestPrice: 246,
                lowestQuantity: 1,
                highestQuantity: 1
            },
            {
                name: "G-Thorn Wolf (Tamed)",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1151574220539707453/image.png",
                tier: Tier.Common,
                lowestPrice: 23,
                highestPrice: 87,
                lowestQuantity: 1,
                highestQuantity: 1
            },
            {
                name: "Bunnydart (Tamed)",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1151574397015040010/image.png",
                tier: Tier.Common,
                lowestPrice: 18,
                highestPrice: 79,
                lowestQuantity: 2,
                highestQuantity: 2
            },
            {
                name: "G-Crawler (Tamed)",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1151574300944502864/image.png",
                tier: Tier.Common,
                lowestPrice: 17,
                highestPrice: 85,
                lowestQuantity: 2,
                highestQuantity: 2
            },
            {
                name: "G-Arachnas (Tamed)",
                image: "",
                tier: Tier.Common,
                lowestPrice: 50,
                highestPrice: 241,
                lowestQuantity: 2,
                highestQuantity: 2
            },
            {
                name: "Stone Spider (Tamed)",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1151574475310125066/image.png",
                tier: Tier.Common,
                lowestPrice: 38,
                highestPrice: 155,
                lowestQuantity: 2,
                highestQuantity: 2
            },
            {
                name: "Desert Predator (Tamed)",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1151574665282723881/image.png",
                tier: Tier.Common,
                lowestPrice: 48,
                highestPrice: 245,
                lowestQuantity: 1,
                highestQuantity: 1
            },
            {
                name: "Gooseneck Beast (Tamed)",
                image: "",
                tier: Tier.Common,
                lowestPrice: 15,
                highestPrice: 44,
                lowestQuantity: 4,
                highestQuantity: 4
            },
            {
                name: "Saber-Toothed Wolf (Tamed)",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1151577557259538492/image.png",
                tier: Tier.Common,
                lowestPrice: 40,
                highestPrice: 158,
                lowestQuantity: 4,
                highestQuantity: 4
            },
            {
                name: "Infernal Steel Lizard (Tamed)",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1151576105959051264/image.png",
                tier: Tier.Common,
                lowestPrice: 13,
                highestPrice: 42,
                lowestQuantity: 4,
                highestQuantity: 4
            },
            {
                name: "Forest Spider (Tamed)",
                image: "https://cdn.discordapp.com/attachments/1149567307023122443/1151574432645652611/image.png",
                tier: Tier.Common,
                lowestPrice: 18,
                highestPrice: 81,
                lowestQuantity: 4,
                highestQuantity: 4
            }
        ]
    }
];
