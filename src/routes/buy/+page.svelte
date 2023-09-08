<script lang="ts">
	import { buyPrice } from '$lib/core/buy';
	import SellerCard from '$lib/componenets/SellerCard.svelte';
</script>

<svelte:head>
	<title>Buy | ToF Market</title>
</svelte:head>

<div class="flex flex-row flex-wrap mx-auto mb-4 box-border">
	{#each buyPrice as item, idx}
		<SellerCard seller={item.seller} id={idx} />
	{/each}
</div>
