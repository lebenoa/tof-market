<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div class="flex flex-col justify-center items-center w-full h-full">
	<h1 class="h1 text-red-500 mb-4">Not ready yet!</h1>
    <div class="w-full h-px bg-primary-500" />
	<h3 class="h3 mt-4">The content you're trying to access is not ready yet! Please stay tune!</h3>
	<button
		class="btn variant-ghost-success mt-2"
		on:click={() => {
			goto('/sell');
		}}
	>
		Take me back
	</button>
</div>
