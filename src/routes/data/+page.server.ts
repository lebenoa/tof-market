export const prerender = false;

import { buyPrice } from "$lib/server/core/buy";
import { sellPrice } from "$lib/server/core/sell";

export const load = async () => {
    return {
        buyPrice,
        sellPrice
    };
};
