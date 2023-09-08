export enum Tier {
	Legendary = 1,
	Epic = 2,
	Rare = 3,
	Common = 4
}

export interface Pricing {
	name: string;
	image: string;
	tier: Tier;
	lowest_price: number;
	highest_price: number;
	lowest_quantity: number;
	highest_quantity: number;
}

export function TierColor(tier: Tier): string {
	switch (tier) {
		case Tier.Legendary:
			return 'text-yellow-500';
		case Tier.Epic:
			return 'text-purple-500';
		case Tier.Rare:
			return 'text-blue-300';
		case Tier.Common:
			return 'text-gray-500';
		default:
			return 'text-white-500';
	}
}