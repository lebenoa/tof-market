<script lang="ts">
	import type { Pricing } from '$lib/core/core';
	export let items: Pricing[];
	export let prioritizeLowest: boolean = false;

	import ItemCard from './ItemCard.svelte';

	let searchTerm = '';
	let sortBy = '';
	let displayData = items;

	$: if (searchTerm && sortBy) {
		displayData = items
			.filter((item) => {
				return item.name.toLowerCase().includes(searchTerm.toLowerCase());
			})
			.sort((a, b) => {
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
	} else if (searchTerm) {
		displayData = items.filter((item) => {
			return item.name.toLowerCase().includes(searchTerm.toLowerCase());
		});
	} else if (sortBy) {
		displayData = [...items].sort((a, b) => {
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
		displayData = items;
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
