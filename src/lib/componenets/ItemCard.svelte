<script lang="ts">
    import { TierColor, type Pricing } from "$lib/core/core";
    import { itemInfo } from "$lib/core/itemInfo";
    import { fly } from "svelte/transition";
    import { getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";

    export let item: Pricing;
    export let prioritizeLowest: boolean = false;

    const modalStore = getModalStore();
    const textGreen = "text-green-400";
    const textRed = "text-red-600";
    const lowestColor = prioritizeLowest ? textGreen : textRed;
    const highestColor = prioritizeLowest ? textRed : textGreen;

    $: popupImage = itemInfo[item.name];

    let modal: ModalSettings;
    $: if (popupImage) {
        modal = {
            type: "component",
            component: "image",
            image: popupImage,
            meta: {
                alt: item.name,
                source: "Item info"
            }
        };
    }

    $: nameColor = TierColor(item.tier);
</script>

<div
    class="card mt-4 mx-auto w-[350px] flex flex-col justify-between"
    in:fly={{ y: 200 }}
    out:fly={{ x: 200 }}
>
    {#if popupImage}
        <button
            class="relative pt-2 transition-all duration-200 active:variant-ghost-primary lg:hover:variant-ghost-primary"
            on:click={() => {
                if (modal) modalStore.trigger(modal);
            }}
        >
            <img
                class="mx-auto max-w-full max-h-full"
                src={item.image
                    ? item.image
                    : "https://cdn.discordapp.com/attachments/1149567307023122443/1149780152906162247/image.png"}
                alt={item.name}
            />
            <h3 class="h3 text-center {nameColor}">{item.name}</h3>
            <div class="absolute top-0 right-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M8 8h8v8" />
                    <path d="m8 16 8-8" />
                </svg>
            </div>
        </button>

        <div class="card shadow-xl variant-filled-primary z-[999]" data-popup="{item.name} Popup">
            <img src={popupImage} alt="{item.name} info" />
            <div class="arrow bg-surface-100-800-token" />
        </div>
    {:else}
        <img
            class="mx-auto min-w-[96px] min-h-[96px] max-w-full max-h-full pt-2"
            src={item.image
                ? item.image
                : "https://cdn.discordapp.com/attachments/1149567307023122443/1149780152906162247/image.png"}
            alt={item.name}
        />
        <h3 class="h3 text-center {nameColor}">{item.name}</h3>
    {/if}

    <hr class="mb-2" />
    <p class="text-center">
        <span class="text-secondary-500">Quantity:</span>
        {item.lowestQuantity} - {item.highestQuantity}
    </p>
    <hr class="my-2" />

    <div class="flex justify-evenly pb-2">
        <h4 class="h4 text-center mt-auto {lowestColor}">
            Lowest Price <br />
            <strong class="text-3xl">{item.lowestPrice}</strong>
        </h4>
        <div class="h-full w-px bg-surface-600" />
        <h4 class="h4 text-center {highestColor}">
            Highest Price <br />
            <strong class="text-3xl">{item.highestPrice}</strong>
        </h4>
    </div>
</div>
