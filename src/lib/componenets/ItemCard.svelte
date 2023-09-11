<script lang="ts">
	import { TierColor, type Pricing } from '$lib/core/core';
	import { fly } from 'svelte/transition';

	export let item: Pricing;
	export let prioritizeLowest: boolean = false;

	const textGreen = 'text-green-400';
	const textRed = 'text-red-600';
	const lowestColor = prioritizeLowest ? textGreen : textRed;
	const highestColor = prioritizeLowest ? textRed : textGreen;

	$: nameColor = TierColor(item.tier);
</script>

<div
	class="card mt-4 py-4 mx-auto w-[350px] flex flex-col justify-between"
	in:fly={{ y: 200 }}
	out:fly={{ x: 200 }}
>
	<img class="mx-auto" src={item.image ? item.image : 'https://cdn.discordapp.com/attachments/1149567307023122443/1149780152906162247/image.png'} alt={item.name} width="96" height="96" />
	<h3 class="h3 text-center {nameColor}">{item.name}</h3>
	<hr class="my-2" />
	<p class="text-center">Quantity: {item.lowest_quantity} - {item.highest_quantity}</p>
	<hr class="my-2" />

	<div class="flex justify-evenly">
		<h4 class="h4 text-center mt-auto {lowestColor}">
			Lowest Price <br /> <strong>{item.lowest_price}</strong>
		</h4>
		<div class="h-full w-px bg-surface-600" />
		<h4 class="h4 text-center {highestColor}">
			Highest Price <br /> <strong>{item.highest_price}</strong>
		</h4>
	</div>
</div>
