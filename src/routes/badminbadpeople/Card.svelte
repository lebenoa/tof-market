<script lang="ts">
    import { getTierColor, type Pricing } from "$lib/core";
    import { getModalStore, type ModalSettings, type ModalComponent } from "@skeletonlabs/skeleton";
    import EditModal from "$lib/components/modal/EditModal.svelte";
    import { fly } from "svelte/transition";
    import { MISSING_IMAGE } from "$lib/itemInfo";

    export let item: Pricing;

    $: internal = item;

    let modalComponent: ModalComponent;
    $: modalComponent = {
        ref: EditModal,
        props: {
            item
        }
    };

    let modalSettings: ModalSettings;
    $: modalSettings = {
        type: "component",
        component: modalComponent,
        title: `Edit: ${item.name}`,
        response: (i) => {
            if (i) {
                console.log({ i });
                internal = i;
            }
        }
    };

    const modalStore = getModalStore();
</script>

<button
    class="card mt-4 mx-auto w-[350px] flex flex-col justify-between"
    in:fly={{ y: 100, duration: 200, delay: 200 }}
    out:fly={{ y: 100, duration: 200 }}
    on:click={() => {
        modalStore.trigger(modalSettings);
    }}
>
    <div class="card mx-auto w-[350px] flex flex-col justify-between h-full">
        <img
            class="mx-auto min-w-[96px] min-h-[96px] max-w-full max-h-full pt-2"
            src={internal.image
                ? internal.image
                : MISSING_IMAGE}
            alt={internal.name}
        />
        <h3 class="h3 text-center mx-auto {getTierColor(internal.tier)}">{internal.name}</h3>

        <hr class="w-full h-px my-auto" />

        <p class="text-center">
            <span class="text-secondary-500">Quantity:</span>
            {internal.lowestQuantity} - {internal.highestQuantity}
        </p>

        <hr class="my-2" />

        <div class="flex justify-evenly pb-2">
            <h4 class="h4 text-center mt-auto">
                Lowest Price <br />
                <strong class="text-3xl">{internal.lowestPrice}</strong>
            </h4>
            <div class="h-full w-px bg-surface-600" />
            <h4 class="h4 text-center">
                Highest Price <br />
                <strong class="text-3xl">{internal.highestPrice}</strong>
            </h4>
        </div>
    </div>
</button>
