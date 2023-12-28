import { localStorageStore } from "@skeletonlabs/skeleton";
import { removeUnused, setMissingValueFromDefault } from "$lib/utils/object";
import { browser } from "$app/environment";

const DEFAULT = {
    enableAnimation: true,
    theme: "gold-nouveau"
};

export const settings = localStorageStore("settings", {
    enableAnimation: true,
    theme: "gold-nouveau"
});

function init() {
    let settings = localStorageStore("settings", DEFAULT);
    if (!browser) return settings;

    settings.update((v) => {
        // @ts-ignore
        v = setMissingValueFromDefault(v, DEFAULT);
        // @ts-ignore
        v = removeUnused(v, DEFAULT);
        return v;
    });

    return settings;
}
