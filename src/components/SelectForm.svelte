<script lang="ts">
    export let filter_name: string;
</script>

<label class="p-2 form-control w-full max-w">
    <select class="select select-bordered" multiple>
        <option disabled selected>{filter_name}</option>
        <option>Star Wars</option>
        <option>Harry Potter</option>
        <option>Lord of the Rings</option>
        <option>Planet of the Apes</option>
        <option>Star Trek</option>
    </select>
    <div class="label">
        <span class="label-text-alt">Hold <kbd class="kbd kbd-xs">Ctrl</kbd> to multiple select</span>
    </div>
</label>