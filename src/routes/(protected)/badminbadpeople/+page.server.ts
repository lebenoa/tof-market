import { redirect } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export const load = async () => {
    if (!env.ADMIN_USERNAME) throw redirect(302, "/");

    if (!env.ADMIN_PASSWORD) throw redirect(302, "/");

    return {
        username: env.ADMIN_USERNAME,
        password: env.ADMIN_PASSWORD
    }
}