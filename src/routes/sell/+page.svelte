<script>
    import { sellPrice } from "$lib/core/sell";
    import CardContainer from "$lib/componenets/CardContainer.svelte";
</script>

<svelte:head>
    <title>Sell | ToF Market</title>
</svelte:head>

<CardContainer items={sellPrice} />
