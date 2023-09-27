<script lang="ts">
    import { getModalStore } from "@skeletonlabs/skeleton";
    import { getTierColor, type Pricing } from "$lib/core";
    import { onDestroy } from "svelte";

    export let parent: any;
    export let item: Pricing;

    const modalStore = getModalStore();
    let response = $modalStore[0]?.response;

    onDestroy(async () => {
        const resp = await fetch("/api/save", {
            method: "POST",
            body: JSON.stringify(item)
        });

        if (!resp.ok) {
            alert("Error saving item");
            return;
        }

        const data = await resp.json();
        if (response) {
            response(data);
        }
    });
</script>

{#if $modalStore[0]}
    <button
        class="rounded-none btn variant-filled-primary fixed top-4 right-4 z-50 font-bold shadow-xl"
        on:click={parent.onClose}
    >
        ×
    </button>
    <div class="flex flex-col items-center variant-filled-surface p-4">
        <div class="text-center w-1/2">
            <img
                class="mx-auto w-1/3"
                src={item.image
                    ? item.image
                    : "https://cdn.discordapp.com/attachments/1149567307023122443/1149780152906162247/image.png"}
                alt={item.name}
            />
            <h3 class="h3 {getTierColor(item.tier)}">{item.name}</h3>
        </div>

        <hr class="w-full h-px my-2" />

        <label class="label">
            <span>Image</span>
            <input class="input" type="text" placeholder="Image" bind:value={item.image} />
        </label>

        <hr class="w-full h-px my-2" />

        <div class="grid grid-cols-2 gap-1">
            <label class="label">
                <span>Lowest Price</span>
                <input
                    class="input"
                    type="number"
                    placeholder="Lowest Price"
                    bind:value={item.lowestPrice}
                />
            </label>

            <label class="label">
                <span>Highest Price</span>
                <input
                    class="input"
                    type="number"
                    placeholder="Highest Price"
                    bind:value={item.highestPrice}
                />
            </label>

            <label class="label">
                <span>Lowest Quantity</span>
                <input
                    class="input"
                    type="number"
                    placeholder="Lowest Quantity"
                    bind:value={item.lowestQuantity}
                />
            </label>

            <label class="label">
                <span>Highest Quantity</span>
                <input
                    class="input"
                    type="number"
                    placeholder="Highest Quantity"
                    bind:value={item.highestQuantity}
                />
            </label>
        </div>
        <button class="btn variant-ghost-warning" on:click={parent.onClose}>Close</button>
    </div>
{/if}

<style lang="postcss">
    label {
        @apply w-full my-1;
    }
</style>
