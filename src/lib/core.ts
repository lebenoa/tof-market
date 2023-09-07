export enum Tier {
	Legendary = 1,
	Epic = 2,
	Rare = 3,
	Common = 4
}

export interface Params {
	name: string;
	image: string;
	tier: Tier;
	lowest_price: number;
	highest_price: number;
	lowest_quantity: number;
	highest_quantity: number;
}

export class Pricing {
	name: string;
	image: string;
	tier: Tier;
	lowest_price: number;
	highest_price: number;
	lowest_quantity: number;
	highest_quantity: number;

	constructor(obj: Params) {
		this.name = obj.name;
		this.image = obj.image;
		this.tier = obj.tier;
		this.lowest_price = obj.lowest_price;
		this.highest_price = obj.highest_price;
		this.lowest_quantity = obj.lowest_quantity;
		this.highest_quantity = obj.highest_quantity;
	}
}

export const sellPrice: Pricing[] = [
	new Pricing({
		name: 'Moon Glow Satin',
		image: 'https://cdn.discordapp.com/attachments/1149358091180195940/1149358839334973522/Moon_Glow_Satin.png',
		tier: Tier.Legendary,
		lowest_price: 85,
		highest_price: 154,
		lowest_quantity: 5,
		highest_quantity: 5
	}),
	new Pricing({
		name: 'Forging Hammer',
		image: 'https://cdn.discordapp.com/attachments/1149358091180195940/1149365422156677200/Forging_Hammer.png',
		tier: Tier.Rare,
		lowest_price: 47,
		highest_price: 95,
		lowest_quantity: 5,
		highest_quantity: 5
	}),
	new Pricing({
		name: 'Shengwen Carved Dracojade Box',
		image: 'https://cdn.discordapp.com/attachments/1149358091180195940/1149365449461596190/Shengwen_Carved_Dracojade_Box.png',
		tier: Tier.Legendary,
		lowest_price: 85,
		highest_price: 154,
		lowest_quantity: 5,
		highest_quantity: 5
	}),
	new Pricing({
		name: 'White Jade Dew',
		image: 'https://cdn.discordapp.com/attachments/1149358091180195940/1149365449235116124/White_Jade_Dew.png',
		tier: Tier.Rare,
		lowest_price: 43,
		highest_price: 96,
		lowest_quantity: 5,
		highest_quantity: 5
	}),
	new Pricing({
		name: 'Two-Sided Jade Pendant',
		image: 'https://cdn.discordapp.com/attachments/1149358091180195940/1149365449885233202/Two-Sided_Jade_Pendant.png',
		tier: Tier.Epic,
		lowest_price: 63,
		highest_price: 133,
		lowest_quantity: 5,
		highest_quantity: 5
	}),
	new Pricing({
		name: 'Fruit Rice Punch',
		image: 'https://cdn.discordapp.com/attachments/1149358091180195940/1149365422370598912/Fruity_Rice_Punch.png',
		tier: Tier.Rare,
		lowest_price: 43,
		highest_price: 91,
		lowest_quantity: 5,
		highest_quantity: 5
	}),
	new Pricing({
		name: 'Mercerized Cotton',
		image: 'https://cdn.discordapp.com/attachments/1149358091180195940/1149365421087141928/Mercerized_Cotton.png',
		tier: Tier.Rare,
		lowest_price: 43,
		highest_price: 94,
		lowest_quantity: 6,
		highest_quantity: 6
	}),
	new Pricing({
		name: 'Crystal Bangle',
		image: 'https://cdn.discordapp.com/attachments/1149358091180195940/1149365421372342322/Crystal_Bangle.png',
		tier: Tier.Rare,
		lowest_price: 59,
		highest_price: 106,
		lowest_quantity: 5,
		highest_quantity: 5
	}),
	new Pricing({
		name: 'Exquisite Rock Carving',
		image: 'https://cdn.discordapp.com/attachments/1149358091180195940/1149365421649178654/Exquisite_Rock_Carving.png',
		tier: Tier.Rare,
		lowest_price: 44,
		highest_price: 96,
		lowest_quantity: 5,
		highest_quantity: 5
	}),
	new Pricing({
		name: 'Golden Vein Ointment',
		image: 'https://cdn.discordapp.com/attachments/1149358091180195940/1149365422584504370/Golden_Vein_Ointment.png',
		tier: Tier.Rare,
		lowest_price: 50,
		highest_price: 95,
		lowest_quantity: 5,
		highest_quantity: 5
	}),
	new Pricing({
		name: 'Fast-Acting Heart Capsule',
		image: 'https://cdn.discordapp.com/attachments/1149358091180195940/1149365421909221476/Fast-Acting_Heart_Capsule.png',
		tier: Tier.Rare,
		lowest_price: 50,
		highest_price: 103,
		lowest_quantity: 5,
		highest_quantity: 5
	}),
	new Pricing({
		name: 'Herbal Longevity Tonic',
		image: 'https://cdn.discordapp.com/attachments/1149358091180195940/1149365422823571497/Herbal_Longevity_Tonic.png',
		tier: Tier.Epic,
		lowest_price: 52,
		highest_price: 107,
		lowest_quantity: 3,
		highest_quantity: 3
	}),
	new Pricing({
		name: 'Sorghum',
		image: 'https://cdn.discordapp.com/attachments/1149358091180195940/1149365449662939216/Sorghum.png',
		tier: Tier.Common,
		lowest_price: 12,
		highest_price: 29,
		lowest_quantity: 13,
		highest_quantity: 13
	})
];

export const buyPrice: Pricing[] = [];
