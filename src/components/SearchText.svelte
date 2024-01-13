<script lang="ts">
    export let searchText = '';
</script>

<input type="text" placeholder="Search" bind:value={searchText} on:input class="p-2 input input-bordered w-full max-w" />