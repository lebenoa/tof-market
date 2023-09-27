import { sellPrice } from "$lib/server/core/sell";
import { buyPrice } from "$lib/server/core/buy";
import { text, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
    const textData = await request.text();
    const data = JSON.parse(textData);

    for (const seller of sellPrice) {
        for (let j = 0; j < seller.items.length; j++) {
            if (seller.items[j].name != data.name) continue;

            seller.items[j] = data;
            return text(textData);
        }
    }

    for (const seller of buyPrice) {
        for (let j = 0; j < seller.items.length; j++) {
            if (seller.items[j].name != data.name) continue;

            seller.items[j] = data;
            return text(textData);
        }
    }

    return new Response("Not found", { status: 404 });
};
