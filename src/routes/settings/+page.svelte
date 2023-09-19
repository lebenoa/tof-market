<script lang="ts">
    import { settings } from "$lib/store/settings";
</script>

<div class="flex flex-col w-full h-full mt-2 items-center">
    <h1 class="h1">Settings</h1>
    <hr class="w-full h-px my-2" />
    
    <label class="flex items-center space-x-2">
		<input class="checkbox" type="checkbox" bind:checked={$settings.enableAnimation} />
		<p>Page Animation</p>
	</label>
</div>