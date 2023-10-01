<script>
    import { onMount } from 'svelte'
    import { get } from 'svelte/store'
    import { persisted } from 'svelte-local-storage-store'
    import tempIDsave from './store'

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    
    let i = 3
    let x = 0

    
    let tempID

    onMount(() => {
        tempID = makeid(45)
        tempIDsave.set(tempID)

        setInterval(() => {
            if (i !== 0) {
                i--
            }
        }, 1000)
    })


</script>
<main>
    {#if i !== 0}
        <p class="m-4">{i} seconds to skip</p>
        {:else}
        <p class="m-4 bg-red-800 text-white rounded-sm hover:bg-red-900 p-3 w-fit cursor-pointer"><a href="/{tempID}">skip now</a></p>
    {/if}
</main>