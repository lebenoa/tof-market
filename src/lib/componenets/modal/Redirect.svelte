<script lang="ts">
    export let parent: any;

	import { goto } from '$app/navigation';
</script>

<div class="text-center">
	<h1 class="h1 text-red-500">Not ready yet!</h1>
	<h3 class="h3">The content you're trying to access is not ready yet! Please stay tune!</h3>
	<button class="btn variant-ghost-success" on:click={() => {
        goto('/sell');
        parent.onClose();
    }}>Take me back</button>
</div>
