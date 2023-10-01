import { persisted } from 'svelte-local-storage-store'
import { get } from 'svelte/store'

const tempIDsave = persisted('tempID')

export default tempIDsave