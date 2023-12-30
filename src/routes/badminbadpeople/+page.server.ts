export let prerender = false;

import { redirect, fail } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import { authSession } from "$lib/server/auth";
import { buyPrice } from "$lib/server/core/buy";
import { sellPrice } from "$lib/server/core/sell";
import type { PageServerLoad, Actions } from "./$types";

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
        return {
            authed: false
        };
    }

    if (!authSession[id]) {
        return {
            authed: false
        };
    } else {
        return {
            authed: true,
            buyPrice,
            sellPrice
        };
    }
};

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        if (!env.ADMIN_USERNAME || !env.ADMIN_PASSWORD) throw redirect(302, "/");

        const data = await request.formData();

        const username = data.get("username");
        const password = data.get("password");

        if (!username || !password) {
            return fail(400, {
                success: false,
                message: "Missing username or password"
            });
        }

        let id = cookies.get("id");
        if (!id) {
            id = crypto.randomUUID();
            cookies.set("id", id, {
                // Expire in 1 hour
                expires: new Date(Date.now() + 1000 * 60 * 60),
                path: "/"
            });
        } else if (authSession[id]) {
            return fail(400, {
                success: false,
                message: "Already logged in"
            });
        }

        if (username != env.ADMIN_USERNAME || password != env.ADMIN_PASSWORD) {
            return fail(400, {
                success: false,
                message: "Invalid username or password"
            });
        }

        authSession[id] = true;

        return {
            success: true
        };
    }
};
