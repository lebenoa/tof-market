<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';

	export let parent: any;
	console.log(parent);

	const modalStore = getModalStore();
</script>

{#if $modalStore[0]}
	<button
		class="btn-icon variant-filled fixed top-4 right-4 z-50 font-bold shadow-xl"
		on:click={parent.onClose}>×</button
	>
	<img
		src={$modalStore[0]?.image}
		class="lg:max-w-[90%] lg:max-h-[90%] rounded-container-token overflow-hidden shadow-xl"
		alt="Example"
		title="Source: {$modalStore[0]?.meta.source}"
	/>
{/if}
