<script lang="ts">
    export let form: any;

    import { enhance } from "$app/forms";

    let showPassword = false;
</script>

<form
    class="flex w-full h-full flex-col justify-center items-center lg:w-1/2 lg:m-auto"
    method="POST"
    use:enhance
>
    <h2 class="h2 mb-2">Do you know who you are?</h2>
    {#if form && !form.success}
        <h3 class="h3 text-red-500">{form.message}</h3>
    {/if}
    <input class="input" type="text" name="username" placeholder="Username" required />

    <div class="input-group input-group-divider grid-cols-[1fr_auto]">
        <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" />
        <button
            type="button"
            class="variant-soft-secondary"
            on:click={() => (showPassword = !showPassword)}
        >
            {showPassword ? "Hide" : "Show"}
        </button>
    </div>

    <button class="btn variant-filled-primary mt-2" type="submit">Login</button>
</form>
