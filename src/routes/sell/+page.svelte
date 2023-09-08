<script>
	import { sellPrice } from '$lib/core';
	import Card from '$lib/componenets/Card.svelte';

	let searchTerm = '';
	let sortBy = '';
	let displayData = sellPrice;

	$: if (searchTerm) {
		displayData = sellPrice.filter((item) => {
			return item.name.toLowerCase().includes(searchTerm.toLowerCase());
		});
	} else {
		displayData = sellPrice;
	}

	$: if (sortBy) {
		displayData = [...sellPrice].sort((a, b) => {
			switch (sortBy) {
				case 'Highest Tier':
					return a.tier - b.tier;
				case 'Lowest Tier':
					return b.tier - a.tier;
				case 'Name':
					return a.name.localeCompare(b.name);
				default:
					return 0;
			}
		});
	} else {
		displayData = sellPrice;
	}
</script>

<svelte:head>
	<title>Sell | ToF Market</title>
</svelte:head>

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
		<Card {item} />
	{/each}
</div>
<button
	class="btn variant-soft-primary w-full mb-5 lg:mb-0"
	on:click={() => {
		document.querySelector('#page')?.scrollTo({
			behavior: 'smooth',
			top: 0
		});
	}}
>
	Back To Top
</button>
