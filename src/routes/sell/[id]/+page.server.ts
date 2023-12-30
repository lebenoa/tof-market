export const prerender = false;

import { sellPrice } from "$lib/server/core/sell";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const id = Number(params.id);

    if (!Number.isInteger(id))
        error(400, {
            code: "Invalid ID",
            message: `ID: "${params.id}" is not a number`
        });

    if (id > sellPrice.length - 1) {
        error(400, {
            code: "Invalid ID",
            message: `ID: ${id} is out of range`
        });
    }

    return {
        ...sellPrice[id]
    };
};
