<script lang="ts">
	import { Tier, type Pricing } from '$lib/core';
	import { fly } from 'svelte/transition';

	export let item: Pricing;

	let name_color = '';

	$: switch (item.tier) {
		case Tier.Legendary:
			name_color = 'text-yellow-500';
			break;
		case Tier.Epic:
			name_color = 'text-purple-500';
			break;
		case Tier.Rare:
			name_color = 'text-blue-300';
			break;
		case Tier.Common:
			name_color = 'text-gray-500';
			break;
	}
</script>

<div class="card mt-4 py-4 mx-auto w-[350px] flex flex-col justify-between" in:fly={{ y: 200 }} out:fly={{ x: 200 }}>
	<img class="mx-auto" src={item.image} alt={item.name} width="96" height="96" />
	<h3 class="h3 text-center {name_color}">{item.name}</h3>
	<hr class="my-2" />
	<p class="text-center">Quantity: {item.lowest_quantity} - {item.highest_quantity}</p>
	<hr class="my-2" />

	<div class="flex justify-evenly">
		<h4 class="h4 text-center mt-auto">
			Lowest Price <br /> <strong class="text-red-500">{item.lowest_price}</strong>
		</h4>
		<div class="h-full w-px bg-surface-600" />
		<h4 class="h4 text-center">
			Highest Price <br /> <strong class="text-green-500">{item.highest_price}</strong>
		</h4>
	</div>
</div>