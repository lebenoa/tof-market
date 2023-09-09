<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';

	export let parent: any;

	const modalStore = getModalStore();
</script>

{#if $modalStore[0]}
	<button
		class="rounded-none btn variant-filled-primary fixed top-4 right-4 z-50 font-bold shadow-xl"
		on:click={parent.onClose}>×</button
	>
	<img
		src={$modalStore[0]?.image}
		class="lg:max-w-[90%] lg:max-h-[90%] rounded-container-token overflow-hidden shadow-xl"
		alt="{$modalStore[0]?.meta.alt}"
		title="Source: {$modalStore[0]?.meta.source}"
	/>
{/if}
