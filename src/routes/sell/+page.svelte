<script lang="ts">
    import { sellPrice } from "$lib/core/sell";
    import SellerCard from "$lib/componenets/SellerCard.svelte";
</script>

<svelte:head>
    <title>Sell | ToF Market</title>
</svelte:head>

<div class="flex flex-row flex-wrap mx-auto mb-4 box-border">
    {#each sellPrice as item, idx}
        <SellerCard seller={item.seller} id={idx} action={"sell"} />
    {/each}
</div>
