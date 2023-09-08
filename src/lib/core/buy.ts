import { Tier, type Pricing } from './core';

const placeholder = 'https://cdn.discordapp.com/attachments/1149567307023122443/1149780152906162247/image.png';

export interface Highlight {
	name: string;
	tier: Tier;
}

export interface SellerInfo {
	name: string;
	image: string;
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
			name: '[Brocade House] Aunt Yun',
			image:
				'https://cdn.discordapp.com/attachments/1149570080154333274/1149570080393396274/bh_auth_yun.png',
			location:
				'https://cdn.discordapp.com/attachments/1149567307023122443/1149734094981316669/image.png',
			highlights: [
				{
					name: 'Silk Cocoon',
					tier: Tier.Rare
				}
			]
		},
		items: [
			{
				name: 'Silk Cocoon',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1149728020366635028/Silk_Cocoon.png',
				tier: Tier.Rare,
				lowest_price: 51,
				highest_price: 97,
				lowest_quantity: 16,
				highest_quantity: 16
			},
			{
				name: 'Beast Bone',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1149729186999705640/image.png',
				tier: Tier.Common,
				lowest_price: 26,
				highest_price: 47,
				lowest_quantity: 26,
				highest_quantity: 26
			},
			{
				name: 'Beast Hide',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1149729220562518047/image.png',
				tier: Tier.Common,
				lowest_price: 29,
				highest_price: 48,
				lowest_quantity: 14,
				highest_quantity: 14
			},
			{
				name: 'Fortress Belt',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1149771859294957669/image.png',
				tier: Tier.Legendary,
				lowest_price: 529,
				highest_price: 1179,
				lowest_quantity: 1,
				highest_quantity: 1
			},
			{
				name: 'Elite Combat Leggings',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1149779757781750050/image.png',
				tier: Tier.Epic,
				lowest_price: 68,
				highest_price: 193,
				lowest_quantity: 1,
				highest_quantity: 1
			},
			{
				name: 'Elite Combat Helmet',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1149779866103857214/image.png',
				tier: Tier.Epic,
				lowest_price: 57,
				highest_price: 172,
				lowest_quantity: 1,
				highest_quantity: 1
			}
		]
	},
	{
		seller: {
			name: '[Lusterium Trade Center] Owner Xu',
			image:
				'https://cdn.discordapp.com/attachments/1149567307023122443/1149757805486682225/image.png',
			location:
				'https://cdn.discordapp.com/attachments/1149567307023122443/1149760008356110336/image.png',
			highlights: [
				{
					name: 'Roughstone',
					tier: Tier.Rare
				},
				{
					name: 'Jadestone',
					tier: Tier.Common
				}
			]
		},
		items: [
			{
				name: 'Roughstone',
				image:
					placeholder,
				tier: Tier.Rare,
				lowest_price: 51,
				highest_price: 95,
				lowest_quantity: 20,
				highest_quantity: 20
			},
			{
				name: 'Jadestone',
				image:
					placeholder,
				tier: Tier.Common,
				lowest_price: 29,
				highest_price: 46,
				lowest_quantity: 13,
				highest_quantity: 13
			},
			{
				name: 'Raw Crystal',
				image:
					placeholder,
				tier: Tier.Common,
				lowest_price: 27,
				highest_price: 49,
				lowest_quantity: 29,
				highest_quantity: 29
			},
			{
				name: 'Heart of Summit',
				image:
					placeholder,
				tier: Tier.Rare,
				lowest_price: 4,
				highest_price: 15,
				lowest_quantity: 3,
				highest_quantity: 3
			},
			{
				name: 'Snowsource',
				image:
					placeholder,
				tier: Tier.Epic,
				lowest_price: 6,
				highest_price: 38,
				lowest_quantity: 1,
				highest_quantity: 1
			},
			{
				name: 'Heart of Lava',
				image:
					placeholder,
				tier: Tier.Rare,
				lowest_price: 2,
				highest_price: 18,
				lowest_quantity: 3,
				highest_quantity: 3
			}
		]
	}
];
