<script>
    import { onMount } from 'svelte';
    import { persisted } from 'svelte-local-storage-store'
    import { get } from 'svelte/store'
    export let data
    console.log(data)
    let tempID
    onMount(() => {
        tempID = localStorage.getItem('tempID').replaceAll('"', '')
        if (tempID === data.params.accessID) {
            console.log('success')
            
        } else {
            console.log('no perms')
        }
    })
</script>

<main>
    {#if tempID === data.params.accessID}
        <h1 class="m-4">success</h1>
        {:else}
            {#if data.params.accessID.length === 45}
                <h1>access denied</h1>
                {:else}
                <h1>404, NOT FOUND</h1>
            {/if}
    {/if}
</main>