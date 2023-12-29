<script lang="ts">
    export let data;

    import { TabGroup, Tab, CodeBlock } from "@skeletonlabs/skeleton";

    let tabSet = 0;

    async function toJSON(value: any): Promise<string> {
        return JSON.stringify(value, null, 4);
    }

    const sellOutput = toJSON(data.sellPrice);
    const buyOutput = toJSON(data.buyPrice);
</script>

<svelte:head>
    <title>Data | ToF Market</title>
</svelte:head>

<TabGroup justify="justify-center">
    <Tab bind:group={tabSet} name="sell" value={0}>Sell</Tab>
    <Tab bind:group={tabSet} name="buy" value={1}>Buy</Tab>

    <svelte:fragment slot="panel">
        {#if tabSet === 0}
            {#await sellOutput}
                <h3 class="h3">Loading Sell Price Data...</h3>
            {:then output}
                <CodeBlock language="json" code={output} />
            {/await}
        {:else if tabSet === 1}
            {#await buyOutput}
                <h3 class="h3">Loading Buy Price Data...</h3>
            {:then output}
                <CodeBlock language="json" code={output} />
            {/await}
        {/if}
    </svelte:fragment>
</TabGroup>
