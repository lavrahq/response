import { writable } from "svelte/store";

export const config = writable({
    app: {
        name: "test"
    }
})