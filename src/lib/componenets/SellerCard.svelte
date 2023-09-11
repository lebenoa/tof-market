<script lang="ts">
	import type { SellerInfo } from '$lib/core/buy';
	import { TierColor } from '$lib/core/core';

	export let seller: SellerInfo;
	export let id: number;

	import { fly } from 'svelte/transition';
</script>

<a
	href="/buy/{id}"
	class="card mt-4 w-[350px] mx-auto flex flex-col text-center"
	in:fly={{ y: 200 }}
	out:fly={{ x: 200 }}
>
	<div>
		<img src={seller.image} alt="{seller.name} npc" />
		<img src={seller.location} alt="{seller.name} location" />
	</div>
	<h3 class="h3 text-primary-400">{seller.name}</h3>
	<hr class="w-full my-2" />
	<div class="w-full h-full flex flex-col pb-2">
		<h4 class="h4 text-orange-500 underline">Highlight Items</h4>

		{#each seller.highlights as item}
			<p class={TierColor(item.tier)}>• {item.name}</p>
		{/each}
	</div>
</a>
