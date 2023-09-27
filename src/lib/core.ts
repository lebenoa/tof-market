export type Tier = "Legendary" | "Epic" | "Rare" | "Common";

export interface Pricing {
    name: string;
    image: string;
    tier: Tier;
    lowestPrice: number;
    highestPrice: number;
    lowestQuantity: number;
    highestQuantity: number;
}

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

export function getTierSortValue(tier: Tier): number {
    switch (tier) {
        case "Legendary":
            return 1;
        case "Epic":
            return 2;
        case "Rare":
            return 3;
        case "Common":
            return 4;
        default:
            return 5;
    }
}

export function getTierColor(tier: Tier): string {
    switch (tier) {
        case "Legendary":
            return "text-yellow-500";
        case "Epic":
            return "text-purple-500";
        case "Rare":
            return "text-blue-300";
        case "Common":
            return "text-gray-500";
        default:
            return "text-white-500";
    }
}
