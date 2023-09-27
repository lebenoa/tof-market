<script lang="ts">
    import { getTierColor, type SellerInfo } from "$lib/core";

    export let seller: SellerInfo;
    export let id: number;

    import { fly } from "svelte/transition";
    import { page } from "$app/stores";
</script>

<a
    href="{$page.url.pathname}/{id}"
    class="card mt-4 w-[350px] flex flex-col text-center"
    in:fly={{ y: 200 }}
    out:fly={{ x: 200 }}
>
    <div>
        <img src={seller.image} alt="{seller.name} npc" />
        <img
            src={seller.location
                ? seller.location
                : "https://cdn.discordapp.com/attachments/1149567307023122443/1149780152906162247/image.png"}
            alt="{seller.name} location"
        />
    </div>
    <h3 class="h3 text-primary-400">{seller.name}</h3>
    {#if seller.highlights.length > 0}
        <hr class="w-full my-2" />
        <div class="w-full h-full flex flex-col pb-2">
            <h4 class="h4 text-orange-500 underline">Highlight Items</h4>

            {#each seller.highlights as item}
                <p class={getTierColor(item.tier)}>• {item.name}</p>
            {/each}
        </div>
    {/if}
</a>
