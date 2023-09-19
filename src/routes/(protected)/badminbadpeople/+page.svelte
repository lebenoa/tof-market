<script lang="ts">
    export let data;
    export let form;

    import Login from "./Login.svelte";

    import { buyPrice } from "$lib/core/buy";
    import { sellPrice } from "$lib/core/sell";
    import { getTierSortValue, type Pricing } from "$lib/core/core";

    import ItemCard from "$lib/componenets/ItemCard.svelte";

    const items = sellPrice.concat(buyPrice.map((i) => i.items).flat());

    let searchTerm = "";
    let sortBy = "";
    let displayData: any;

    $: if (searchTerm && sortBy) {
        displayData = filter(items);
        displayData = sort(displayData);
    } else if (searchTerm) {
        displayData = filter(items);
    } else if (sortBy) {
        displayData = sort([...items]);
    } else {
        displayData = items;
    }

    function filter(items: Pricing[]): Pricing[] {
        return items.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }

    function sort(items: Pricing[]): Pricing[] {
        switch (sortBy) {
            case "Highest Tier":
                items.sort((a, b) => getTierSortValue(a.tier) - getTierSortValue(b.tier));
                break;
            case "Lowest Tier":
                items.sort((a, b) => getTierSortValue(b.tier) - getTierSortValue(a.tier));
                break;
            case "Name":
                items.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        return items;
    }
</script>

{#if !data.authed}
    <Login {form} />
{:else}
    <div class="flex flex-row">
        <input class="input" type="search" placeholder="Search..." bind:value={searchTerm} />
        <select class="select text-center lg:w-1/5" bind:value={sortBy}>
            <option value="">Sort By</option>
            <option value="Highest Tier">Highest Tier</option>
            <option value="Lowest Tier">Lowest Tier</option>
            <option value="Name">Name</option>
        </select>
    </div>

    <div class="flex flex-row flex-wrap">
        {#each displayData as item}
            <ItemCard {item} prioritizeLowest={false} />
        {/each}
    </div>
{/if}
