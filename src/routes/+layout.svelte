<script lang="ts">
	export let data;

	import '../app.postcss';
	import { AppShell, AppBar, TabGroup, TabAnchor } from '@skeletonlabs/skeleton';

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, initializeStores, Modal } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	initializeStores();

	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
</script>

<Modal buttonPositive="variant-filled-success" />

<AppShell>
	<svelte:fragment slot="pageHeader">
		<AppBar
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
			padding="p-0"
		>
			<svelte:fragment slot="lead">
				<strong class="lg:text-xl ml-2 uppercase">Tianhe Bazaar</strong>
			</svelte:fragment>

			<TabGroup
				justify="justify-center"
				active="variant-filled-primary"
				hover="hover:variant-soft-primary"
				flex="flex-1 lg:flex-none"
				rounded=""
				border=""
				class="bg-surface-100-800-token w-full"
			>
				<TabAnchor href="/sell" selected={$page.url.pathname === '/sell'}>
					<svelte:fragment slot="lead">
						<svg
							class="mx-auto"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<circle cx="12" cy="12" r="10" />
							<path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
							<path d="M12 18V6" />
						</svg>
					</svelte:fragment>
					<span>Sell</span>
				</TabAnchor>
				<TabAnchor href="/buy" selected={$page.url.pathname === '/buy'}>
					<svelte:fragment slot="lead">
						<svg
							class="mx-auto"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"
							/>
						</svg>
					</svelte:fragment>
					<span>Buy</span>
				</TabAnchor>
				<TabAnchor href="/about" selected={$page.url.pathname === '/about'}>
					<svelte:fragment slot="lead">
						<svg
							class="mx-auto"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<circle cx="12" cy="12" r="10" />
							<path d="M12 16v-4" />
							<path d="M12 8h.01" />
						</svg>
					</svelte:fragment>
					<span>About</span>
				</TabAnchor>
			</TabGroup>

			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface mr-2"
					href="https://tof-todo.vercel.app"
					target="_blank"
					rel="noreferrer"
				>
					TODOs
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	{#key data.url}
		<div
			class="w-full h-full"
			in:fly={{ x: -200, duration: 300, delay: 300 }}
			out:fly={{ x: -200, duration: 300 }}
		>
			<slot />
		</div>
	{/key}
</AppShell>
