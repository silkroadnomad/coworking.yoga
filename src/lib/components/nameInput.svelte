<script>
    import { getConnectionStatus } from "../doichain/connectElectrum.js";
    import { checkName } from "$lib/doichain/nameValidation.js";
    import { electrumClient, connectedServer } from "../doichain/doichain-store.js";

    export let name = '';
    export let totalUtxoValue = 0;
    export let totalAmount = 0;

    let isConnected = false;
    let isNameValid = true;
    let nameErrorMessage = '';
    let doichainAddress =  localStorage.getItem('doichainAddress') || '';

    $: ({ isConnected, serverName } = getConnectionStatus($connectedServer));
    $: console.log("isConnected",isConnected)
    async function nameCheckCallback(result) {
        doichainAddress = result.currentNameAddress || doichainAddress;
        isNameValid = result.isNameValid;
        nameErrorMessage = result.nameErrorMessage;
    }

    $: name ? checkName($electrumClient, name, totalUtxoValue, totalAmount, nameCheckCallback) : null;
</script>

<div>
    <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Check your Doichain Name</label>
    <div class="relative mt-2 rounded-md shadow-sm">
        <input bind:value={name} name="name" id="name"
               type="text"
               class="{isNameValid ? 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6' : 'block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6'}"
               placeholder="name"
               aria-invalid="{!isNameValid}"
               aria-describedby="name-error"/>

        {#if !isNameValid}
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
            </div>
        {:else if name}
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
            </div>
        {/if}
    </div>
    {#if !isNameValid}
        <p class="mt-2 text-sm text-red-600" id="name-error">{nameErrorMessage}</p>
    {:else if name}
        <p class="mt-2 text-sm text-green-600" id="name-success">Address: {doichainAddress}</p>
    {/if}
    <p class="mt-2 text-sm font-semibold tracking-tight fade-red-to-green {isConnected ? 'connected' : 'blinking'}">{serverName}</p>
</div>

<style>
    .fade-red-to-green {
        transition: color 1s;
        color: red;
    }
    .fade-red-to-green.connected {
        color: green;
    }
    .blinking {
        animation: blinkingText 1.5s infinite;
    }
    @keyframes blinkingText {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
    }
</style>