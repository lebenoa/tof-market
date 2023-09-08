<script lang="ts">
	import { Tier, TierColor, type Pricing } from '$lib/core/core';
	import { fly } from 'svelte/transition';

	export let item: Pricing;
	export let prioritizeLowest: boolean = false;

	$: name_color = TierColor(item.tier);
</script>

<div class="card mt-4 py-4 mx-auto w-[350px] flex flex-col justify-between" in:fly={{ y: 200 }} out:fly={{ x: 200 }}>
	<img class="mx-auto" src={item.image} alt={item.name} width="96" height="96" />
	<h3 class="h3 text-center {name_color}">{item.name}</h3>
	<hr class="my-2" />
	<p class="text-center">Quantity: {item.lowest_quantity} - {item.highest_quantity}</p>
	<hr class="my-2" />

	<div class="flex justify-evenly">
		<h4 class="h4 text-center mt-auto">
			Lowest Price <br /> <strong class="text-{prioritizeLowest ? 'green' : 'red'}-500">{item.lowest_price}</strong>
		</h4>
		<div class="h-full w-px bg-surface-600" />
		<h4 class="h4 text-center">
			Highest Price <br /> <strong class="text-{prioritizeLowest ? 'red' : 'green'}-500">{item.highest_price}</strong>
		</h4>
	</div>
</div>