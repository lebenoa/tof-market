<script lang="ts">
    export let data;
    export let form;

    import Login from "./Login.svelte";

    import { buyPrice } from "$lib/core/buy";
    import { sellPrice } from "$lib/core/sell";
    import { getTierSortValue, type Pricing, type Seller } from "$lib/core/core";
    import { TabGroup, Tab } from "@skeletonlabs/skeleton";
    import Card from "./Card.svelte";
    import { fly } from "svelte/transition";

    const total: Seller[] = sellPrice.concat(buyPrice);
    const items = total.map((item) => item.items).flat();

    let searchTerm = "";
    let sortBy = "";
    let tabSet = 0;

    let displayData: Pricing[];
    $: displayData = total[tabSet].items;

    $: if (searchTerm && sortBy) {
        displayData = filter(total[tabSet].items);
        displayData = sort(displayData);
    } else if (searchTerm) {
        displayData = filter(total[tabSet].items);
    } else if (sortBy) {
        displayData = sort([...total[tabSet].items]);
    } else {
        displayData = total[tabSet].items;
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
    <TabGroup flex="flex-1" justify="justify-center">
        {#each total as item, idx}
            <Tab bind:group={tabSet} name={item.seller.name} value={idx}>{item.seller.name}</Tab>
        {/each}

        <svelte:fragment slot="panel">
            <div class="flex flex-row m-2">
                <input
                    class="input variant-form-material"
                    type="search"
                    placeholder="Search (name)..."
                    bind:value={searchTerm}
                />
                <select class="select w-[70%] md:w-[50%] lg:w-[40%]" bind:value={sortBy}>
                    <option value="">Sort By</option>
                    <option value="Highest Tier">Highest Tier</option>
                    <option value="Lowest Tier">Lowest Tier</option>
                    <option value="Name">Name</option>
                </select>
            </div>
            <div
                class="flex flex-row flex-wrap"
                in:fly={{ y: 100, duration: 200, delay: 200 }}
                out:fly={{ y: 100, duration: 200 }}
            >
                {#each displayData as item}
                    <Card bind:item />
                {/each}
            </div>
        </svelte:fragment>
    </TabGroup>
{/if}
