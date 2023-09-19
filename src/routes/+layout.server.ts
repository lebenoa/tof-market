import { authSession } from "$lib/server/auth";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies }) => {
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

    return {
        authed: authSession[id] ?? false
    };
};
