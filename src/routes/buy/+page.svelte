<script lang="ts">
    import { buyPrice } from "$lib/core/buy";
    import SellerCard from "$lib/componenets/SellerCard.svelte";
</script>

<svelte:head>
    <title>Buy | ToF Market</title>
</svelte:head>

<div class="flex flex-row flex-wrap justify-evenly">
    {#each buyPrice as item, idx}
        <SellerCard seller={item.seller} id={idx} />
    {/each}
</div>
