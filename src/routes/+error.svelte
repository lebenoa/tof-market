<script>
	import { page } from '$app/stores';
</script>

<div class="w-full h-full flex flex-col justify-center items-center">
	<h1 class="h1">{$page.status}</h1>
	<h3 class="h3 text-red-500">{$page.error?.message}</h3>
	<pre class="pre">{JSON.stringify($page, null, 4)}</pre>
</div>
