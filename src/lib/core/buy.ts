import { Tier, type Pricing } from './core';

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
				lowest_quantity: 27,
				highest_quantity: 27
			},
			{
				name: 'Beast Bone',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1149729186999705640/image.png',
				tier: Tier.Common,
				lowest_price: 26,
				highest_price: 47,
				lowest_quantity: 17,
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
				highest_quantity: 23
			},
			{
				name: 'Fortress Belt',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1149771859294957669/image.png',
				tier: Tier.Legendary,
				lowest_price: 499,
				highest_price: 1179,
				lowest_quantity: 1,
				highest_quantity: 1
			},
			{
				name: 'Fortress Handguards',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150825312049963150/image.png',
				tier: Tier.Legendary,
				lowest_price: 574,
				highest_price: 1180,
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
				highest_price: 180,
				lowest_quantity: 1,
				highest_quantity: 1
			},
			{
				name: 'Elite Armbands',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150825448067055717/image.png',
				tier: Tier.Epic,
				lowest_price: 57,
				highest_price: 195,
				lowest_quantity: 1,
				highest_quantity: 1
			},
			{
				name: 'Elite Combat Belt',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150825511493316678/image.png',
				tier: Tier.Epic,
				lowest_price: 53,
				highest_price: 199,
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
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150074523534753982/image.png',
				tier: Tier.Rare,
				lowest_price: 51,
				highest_price: 97,
				lowest_quantity: 20,
				highest_quantity: 24
			},
			{
				name: 'Jadestone',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150074570448056340/image.png',
				tier: Tier.Common,
				lowest_price: 29,
				highest_price: 46,
				lowest_quantity: 13,
				highest_quantity: 13
			},
			{
				name: 'Raw Crystal',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150074611413827714/image.png',
				tier: Tier.Common,
				lowest_price: 27,
				highest_price: 49,
				lowest_quantity: 26,
				highest_quantity: 29
			},
			{
				name: 'Heart of Summit',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150074986879516722/image.png',
				tier: Tier.Rare,
				lowest_price: 3,
				highest_price: 18,
				lowest_quantity: 3,
				highest_quantity: 3
			},
			{
				name: 'Snowsource',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150074922115285052/image.png',
				tier: Tier.Epic,
				lowest_price: 6,
				highest_price: 38,
				lowest_quantity: 1,
				highest_quantity: 2
			},
			{
				name: 'Heart of Lava',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150075039614521404/image.png',
				tier: Tier.Rare,
				lowest_price: 2,
				highest_price: 18,
				lowest_quantity: 3,
				highest_quantity: 3
			},
			{
				name: 'Crystal Chunk',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150825903870464011/image.png',
				tier: Tier.Common,
				lowest_price: 3,
				highest_price: 19,
				lowest_quantity: 12,
				highest_quantity: 12
			}
		]
	},
	{
		seller: {
			name: '[Sky Workshop] Master Tang',
			image:
				'https://cdn.discordapp.com/attachments/1149567307023122443/1150077488379211796/image.png',
			location:
				'https://cdn.discordapp.com/attachments/1149567307023122443/1150078026508419102/image.png',
			highlights: [
				{
					name: 'Augment Stats Fortification Chip',
					tier: Tier.Legendary
				},
				{
					name: 'Colorful Scale',
					tier: Tier.Rare
				}
			]
		},
		items: [
			{
				name: 'Shellstone',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150078746011914370/image.png',
				tier: Tier.Rare,
				lowest_price: 54,
				highest_price: 97,
				lowest_quantity: 16,
				highest_quantity: 16
			},
			{
				name: 'Colorful Scale',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150078694602313889/image.png',
				tier: Tier.Rare,
				lowest_price: 60,
				highest_price: 97,
				lowest_quantity: 20,
				highest_quantity: 26
			},
			{
				name: 'Nanofiber Frame II',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150078836982161441/image.png',
				tier: Tier.Legendary,
				lowest_price: 22,
				highest_price: 59,
				lowest_quantity: 2,
				highest_quantity: 2
			},
			{
				name: 'Acidproof Glaze III',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150079012790599720/image.png',
				tier: Tier.Legendary,
				lowest_price: 28,
				highest_price: 141,
				lowest_quantity: 1,
				highest_quantity: 2
			},
			{
				name: 'Nano Coating I',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150824937267925146/image.png',
				tier: Tier.Rare,
				lowest_price: 2,
				highest_price: 19,
				lowest_quantity: 5,
				highest_quantity: 5
			},
			{
				name: 'Augment Stats Fortification Chip',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150078582622785627/image.png',
				tier: Tier.Legendary,
				lowest_price: 232,
				highest_price: 799,
				lowest_quantity: 1,
				highest_quantity: 1
			},
			{
				name: 'Information Processing Module',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150824742346043442/image.png',
				tier: Tier.Legendary,
				lowest_price: 123,
				highest_price: 396,
				lowest_quantity: 4,
				highest_quantity: 4
			}
		]
	},
	{
		seller: {
			name: '[Golden Elixer Pavilion] Jing Dan',
			image:
				'https://cdn.discordapp.com/attachments/1149567307023122443/1150082542205149225/image.png',
			location:
				'https://cdn.discordapp.com/attachments/1149567307023122443/1150082068047478855/image.png',
			highlights: [
				{
					name: 'Medicinal Herbs',
					tier: Tier.Rare
				},
				{
					name: 'Enhancement Shot',
					tier: Tier.Epic
				},
				{
					name: 'Rejuvenation Shot',
					tier: Tier.Epic
				}
			]
		},
		items: [
			{
				name: 'Medicinal Herbs',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150081767571718144/image.png',
				tier: Tier.Rare,
				lowest_price: 26,
				highest_price: 49,
				lowest_quantity: 27,
				highest_quantity: 27
			},
			{
				name: 'Ginseng',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150083089494724688/image.png',
				tier: Tier.Rare,
				lowest_price: 53,
				highest_price: 93,
				lowest_quantity: 13,
				highest_quantity: 18
			},
			{
				name: 'Lingzhi',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150083253852721222/image.png',
				tier: Tier.Rare,
				lowest_price: 52,
				highest_price: 96,
				lowest_quantity: 24,
				highest_quantity: 24
			},
			{
				name: 'Rejuvenation Shot',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150083123804111029/image.png',
				tier: Tier.Epic,
				lowest_price: 307,
				highest_price: 599,
				lowest_quantity: 1,
				highest_quantity: 1
			},
			{
				name: 'Enhancement Shot',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150083167655559168/image.png',
				tier: Tier.Epic,
				lowest_price: 205,
				highest_price: 392,
				lowest_quantity: 1,
				highest_quantity: 1
			},
			{
				name: 'Enhanced Blade Shot',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150826290941804550/image.png',
				tier: Tier.Epic,
				lowest_price: 405,
				highest_price: 785,
				lowest_quantity: 1,
				highest_quantity: 1
			}
		]
	},
	{
		seller: {
			name: '[Jade Dew Corner] Jing Tian',
			image:
				'https://cdn.discordapp.com/attachments/1149567307023122443/1150083715456831539/image.png',
			location:
				'https://cdn.discordapp.com/attachments/1149567307023122443/1150084183843160165/image.png',
			highlights: [
				{
					name: 'Salt',
					tier: Tier.Rare
				},
				{
					name: 'Brocade Rice',
					tier: Tier.Rare
				}
			]
		},
		items: [
			{
				name: 'Salt',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150085815838453780/image.png',
				tier: Tier.Rare,
				lowest_price: 25,
				highest_price: 47,
				lowest_quantity: 15,
				highest_quantity: 16
			},
			{
				name: 'Brocade Rice',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150085881584156782/image.png',
				tier: Tier.Rare,
				lowest_price: 25,
				highest_price: 49,
				lowest_quantity: 16,
				highest_quantity: 21
			},
			{
				name: 'Sorghum',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150085963842867220/image.png',
				tier: Tier.Common,
				lowest_price: 10,
				highest_price: 19,
				lowest_quantity: 12,
				highest_quantity: 16
			},
			{
				name: 'Green Plum',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150086018461085696/image.png',
				tier: Tier.Common,
				lowest_price: 10,
				highest_price: 19,
				lowest_quantity: 17,
				highest_quantity: 22
			},
			{
				name: 'Begonia',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150087190307680326/image.png',
				tier: Tier.Rare,
				lowest_price: 2,
				highest_price: 19,
				lowest_quantity: 16,
				highest_quantity: 21
			},
			{
				name: 'Bamboo Shoots',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150087457430315069/image.png',
				tier: Tier.Epic,
				lowest_price: 3,
				highest_price: 18,
				lowest_quantity: 11,
				highest_quantity: 20
			},
			{
				name: 'Green Jade',
				image:
					'https://cdn.discordapp.com/attachments/1149567307023122443/1150087561897840752/image.png',
				tier: Tier.Epic,
				lowest_price: 3,
				highest_price: 19,
				lowest_quantity: 12,
				highest_quantity: 19
			}
		]
	}
];
