export const prerender = false;

import { env } from "$env/dynamic/private";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { authSession } from "$lib/server/auth";
import { buyPrice } from "$lib/server/core/buy";
import { sellPrice } from "$lib/server/core/sell";

export const load: PageServerLoad = async ({ cookies }) => {
    if (!env.ADMIN_USERNAME || !env.ADMIN_PASSWORD) throw redirect(302, "/");

    const id = cookies.get("id");
    if (!id || typeof authSession[id] == "undefined") {
        const newId = crypto.randomUUID();
        cookies.set("id", newId, {
            // Expire in 1 hour
            expires: new Date(Date.now() + 1000 * 60 * 60),
            path: "/"
        });
        authSession[newId] = false;
        throw redirect(302, "/");
    }
    
    if (!authSession[id]) {
        throw redirect(302, "/");
    }
    
    return {
        buyPrice,
        sellPrice
    };
};
