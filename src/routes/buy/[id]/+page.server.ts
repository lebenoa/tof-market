export const prerender = false;

import { buyPrice } from "$lib/server/core/buy";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const id = Number(params.id);

    if (!Number.isInteger(id))
        throw error(400, {
            code: "Invalid ID",
            message: `ID: "${params.id}" is not a number`
        });

    if (id > buyPrice.length - 1) {
        throw error(400, {
            code: "Invalid ID",
            message: `ID: ${id} is out of range`
        });
    }

    return {
        data: buyPrice[id]
    };
};
