import { buyPrice } from '$lib/core/buy';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const idStr = params.id;

	let id: number;
	try {
		id = parseInt(idStr);
	} catch (e) {
		throw error(400, 'Invalid ID');
	}

	return {
		data: buyPrice[id]
	};
};
