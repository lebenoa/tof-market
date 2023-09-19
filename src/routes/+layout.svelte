<script lang="ts">
    export let data;

    import "../app.postcss";
    import {
        AppShell,
        AppBar,
        TabGroup,
        TabAnchor,
        storePopup,
        initializeStores,
        Modal,
        storeHighlightJs,
        type ModalComponent
    } from "@skeletonlabs/skeleton";
    import hljs from "highlight.js";
    import "highlight.js/styles/vs2015.css";
    storeHighlightJs.set(hljs);

    import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
    initializeStores();

    import { page } from "$app/stores";
    import { fly, scale } from "svelte/transition";
    import { browser } from "$app/environment";
    import ImageModal from "$lib/componenets/modal/ImageModal.svelte";
    import { settings } from "$lib/store/settings";

    const animationDelay = 210;
    const registry: Record<string, ModalComponent> = {
        image: {
            ref: ImageModal
        }
    };

    let showBackToTopButton = false;

    async function shouldShowBackToTopButton(_url: string) {
        showBackToTopButton = false;
        if (!browser) return;
        if (!document) return;

        await new Promise((resolve) => setTimeout(resolve, animationDelay + 50));

        const page = document.querySelector("#page");
        if (!page) return;

        if (page.scrollHeight > page.clientHeight) {
            showBackToTopButton = true;
        } else {
            showBackToTopButton = false;
        }
    }

    $: shouldShowBackToTopButton(data.url);
</script>

<Modal
    components={registry}
    transitionIn={scale}
    transitionOut={scale}
    padding="p-96"
    buttonPositive="variant-filled-success"
/>

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
                <TabAnchor href="/sell" selected={$page.url.pathname.startsWith("/sell")}>
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
                <TabAnchor href="/buy" selected={$page.url.pathname.startsWith("/buy")}>
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
                <TabAnchor href="/about" selected={$page.url.pathname === "/about"}>
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
                <TabAnchor href="/settings" selected={$page.url.pathname === "/settings"}>
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
                                d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                            />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    </svelte:fragment>
                    <span>Settings</span>
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

    {#if $settings.enableAnimation}
        {#key data.url}
            <div
                class="w-full h-full"
                in:fly={{ x: -300, duration: animationDelay, delay: animationDelay }}
                out:fly={{ x: -300, duration: animationDelay }}
            >
                <slot />
            </div>
        {/key}
    {:else}
        <slot />
    {/if}

    {#if showBackToTopButton}
        <button
            class="btn variant-soft-primary w-full mb-5 lg:mb-0"
            on:click={() => {
                document.querySelector("#page")?.scrollTo({
                    behavior: "smooth",
                    top: 0
                });
            }}
        >
            Back To Top
        </button>
    {/if}
</AppShell>
