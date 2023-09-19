import { sellPrice } from "$lib/core/sell";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
    const id = Number(params.id);

    if (!Number.isInteger(id))
        throw error(400, {
            code: "Invalid ID",
            message: `ID: "${params.id}" is not a number`
        });

    if (id > sellPrice.length - 1) {
        throw error(400, {
            code: "Invalid ID",
            message: `ID: ${id} is out of range`
        });
    }

    return {
        data: sellPrice[id]
    };
};
