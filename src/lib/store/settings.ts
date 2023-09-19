import { localStorageStore } from "@skeletonlabs/skeleton";

export const settings = localStorageStore('settings', {
    enableAnimation: true
})