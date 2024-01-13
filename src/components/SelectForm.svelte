<script lang="ts">
    export let filter_name: string;
    export let selectedOptions: string[] = [];
    export let options: string[] = [];
</script>


<label class="p-2 form-control w-full max-w">
    <div class="label">
        <span class="label-text-">{filter_name}</span>
    </div>
    <select class="select select-bordered" multiple bind:value={selectedOptions}>
        {#each options as option}
            <option value={option}>{option}</option>
        {/each}
    </select>
    <div class="label">
        <span class="label-text-alt">Hold <kbd class="kbd kbd-xs">Ctrl</kbd> to multiple select</span>
    </div>
</label>