<script lang="ts">
    export let data;
    import SellerCard from "$lib/componenets/SellerCard.svelte";
</script>

<svelte:head>
    <title>Sell | ToF Market</title>
</svelte:head>

<div class="flex flex-row flex-wrap justify-evenly">
    {#each data.sellPrice as item, idx}
        <SellerCard seller={item.seller} id={idx} />
    {/each}
</div>
