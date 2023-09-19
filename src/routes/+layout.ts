export const prerender = true;

import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ url, data }) => {
    return {
        ...data,
        url: url.pathname
    };
};
