import { sellPrice } from "$lib/server/core/sell";
import { buyPrice } from "$lib/server/core/buy";
import { text, redirect, type RequestHandler } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import { authSession } from "$lib/server/auth";

export const POST: RequestHandler = async ({ request, cookies }) => {
    if (!env.ADMIN_USERNAME || !env.ADMIN_PASSWORD) throw redirect(302, "/");

    const id = cookies.get("id");
    if (!id || !authSession[id]) {
        return text("Not found", { status: 404 });
    }

    const textData = await request.text();
    const data = JSON.parse(textData);

    for (let i = 0; i < sellPrice.length; i++) {
        for (let j = 0; j < sellPrice[i].items.length; j++) {
            if (sellPrice[i].items[j].name != data.name) continue;

            sellPrice[i].items[j] = data;
            return text(textData);
        }
    }

    for (let i = 0; i < buyPrice.length; i++) {
        for (let j = 0; j < buyPrice[i].items.length; j++) {
            if (buyPrice[i].items[j].name != data.name) continue;

            buyPrice[i].items[j] = data;
            return text(textData);
        }
    }

    return new Response("Not found", { status: 404 });
};
