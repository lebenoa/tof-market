<script lang="ts">
    export let data;
    export let form;

    import Login from "./Login.svelte";

    import { buyPrice } from "$lib/core/buy";
    import { sellPrice } from "$lib/core/sell";
    import ItemCard from "$lib/componenets/ItemCard.svelte";

    const items = sellPrice.concat(buyPrice.map((i) => i.items).flat());

    let searchTerm = "";
    let sortBy = "";
    let displayData: any;

    $: if (searchTerm && sortBy) {
        displayData = items
            .filter((item) => {
                return item.name.toLowerCase().includes(searchTerm.toLowerCase());
            })
            .sort((a, b) => {
                switch (sortBy) {
                    case "Highest Tier":
                        return a.tier - b.tier;
                    case "Lowest Tier":
                        return b.tier - a.tier;
                    case "Name":
                        return a.name.localeCompare(b.name);
                    default:
                        return 0;
                }
            });
    } else if (searchTerm) {
        displayData = items.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    } else if (sortBy) {
        displayData = [...items].sort((a, b) => {
            switch (sortBy) {
                case "Highest Tier":
                    return a.tier - b.tier;
                case "Lowest Tier":
                    return b.tier - a.tier;
                case "Name":
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });
    } else {
        displayData = items;
    }
</script>

{#if !data.authed}
    <Login {form} />
{:else}
    <div class="grid grid-cols-2">
        <input type="search" placeholder="Search..." bind:value={searchTerm} />
        <select class="select text-center" bind:value={sortBy}>
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
