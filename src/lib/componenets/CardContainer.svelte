<script lang="ts">
    import { getTierSortValue, type Pricing } from "$lib/core/core";
    export let items: Pricing[];
    export let prioritizeLowest: boolean = false;

    import ItemCard from "./ItemCard.svelte";

    let searchTerm = "";
    let sortBy = "";
    let displayData = items;

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

<div class="flex flex-row m-2">
    <input
        class="input variant-form-material"
        type="search"
        placeholder="Search (name)..."
        bind:value={searchTerm}
    />
    <select class="select w-[50%] md:w-[30%] lg:w-[20%]" bind:value={sortBy}>
        <option value="">Sort By</option>
        <option value="Highest Tier">Highest Tier</option>
        <option value="Lowest Tier">Lowest Tier</option>
        <option value="Name">Name</option>
    </select>
</div>
<div class="flex flex-row flex-wrap mx-auto mb-4 box-border">
    {#each displayData as item}
        <ItemCard {item} {prioritizeLowest} />
    {/each}
</div>
