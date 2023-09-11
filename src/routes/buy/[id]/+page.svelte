<script lang="ts">
	export let data;

	const seller = data.data.seller;
	const items = data.data.items;

	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import CardContainer from '$lib/componenets/CardContainer.svelte';

	const modalStore = getModalStore();

	function imageModal(url?: string): ModalSettings {
		return {
			type: 'component',
			component: 'image',
			image: url,
			meta: {
				source: 'NPC info',
				alt: seller.name
			}
		};
	}

	const npcImageModal = imageModal(seller.image);
	const locationImageModal = imageModal(seller.location);
</script>

<svelte:head>
	<title>{seller.name} | ToF Market</title>
</svelte:head>

<div class="flex flex-row justify-between items-center border-b border-primary-900">
	<a href="/buy" class="btn variant-filled-error text-start pl-2 lg:w-[10%] h-full">&lt;- Back</a>
	<h2 class="h4 lg:h2 text-center">{seller.name}</h2>
	<div class="flex flex-col justify-center lg:flex-row lg:justify-end">
		<button
			class="btn variant-filled-secondary rounded-none hidden md:block"
			on:click={() => modalStore.trigger(npcImageModal)}
		>
			NPC Image
		</button>
		<div class="w-full h-px lg:h-full lg:w-px bg-slate-500 hidden md:block" />
		<button
			class="btn variant-filled-secondary rounded-none hidden md:block"
			on:click={() => modalStore.trigger(locationImageModal)}
		>
			Location
		</button>
	</div>
</div>
<div class="flex flex-row md:hidden">
	<button
		class="btn variant-filled-secondary w-full rounded-none"
		on:click={() => modalStore.trigger(npcImageModal)}
	>
		NPC Image
	</button>
	<div class="w-1 h-full bg-slate-500" />
	<button
		class="btn variant-filled-secondary w-full rounded-none"
		on:click={() => modalStore.trigger(locationImageModal)}
	>
		Location
	</button>
</div>
<CardContainer {items} prioritizeLowest={true} />
