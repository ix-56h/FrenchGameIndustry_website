<script lang="ts">
    import { type Company } from '../lib/company.d.ts';
    export let company: Company;
	import { onMount } from 'svelte';

    function truncate(text: string) {
        if (text.length > 200) {
            text =  text.slice(0, 200) + "...";
        }
        return text;
    }
</script>

<div class="card card-compact bg-base-100 shadow-lg">
    <figure><img class="h-56 w-full object-cover" src="{company.logo || "/logos/no_logo.jpg" }" alt="{company.name} logo" /></figure>
    <div class="card-body">
        <div class="card-actions justify-center">
            {#if company.is_developer}
                <div class="badge badge-primary">Studio</div>
            {/if}
            {#if company.is_publisher}
                <div class="badge badge-secondary">Publisher</div>
            {/if}
        </div>
        <h2 class="card-title justify-center">
            {company.name}
        </h2>
        <div class="card-actions justify-center">
            {#each company.platforms as platform, i}
                <div class="badge badge-outline">{platform}</div> 
            {/each}
        </div>
        <p>
            {#if company.description !== null}
                {truncate(company.description)}
            {/if}
        </p>
        <div class="card-actions justify-end">
            {#each company.tags as tag, i}
                <div class="badge badge-outline">{tag}</div> 
            {/each}
        </div>
    </div>
</div>