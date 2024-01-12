<script lang="ts">
    export let parameter_name: string;
</script>

<div class="p-2 form-control">
    <label class="label cursor-pointer">
        <span class="label-text pr-4">{ parameter_name }</span>
        <input type="checkbox" checked="checked" class="checkbox" />
    </label>
</div>