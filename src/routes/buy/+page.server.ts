import { buyPrice } from "$lib/server/core/buy";

export const load /*: PageServerLoad */ = async () => {
    return {
        buyPrice
    };
};
