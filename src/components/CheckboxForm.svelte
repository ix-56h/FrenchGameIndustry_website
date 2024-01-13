<script lang="ts">
    export let parameter_name: string;
    export let isChecked: boolean;
</script>

<div class="p-2 form-control">
    <label class="label cursor-pointer">
        <span class="label-text pr-4">{ parameter_name }</span>
        <input type="checkbox" bind:checked={isChecked} class="checkbox" />
    </label>
</div>