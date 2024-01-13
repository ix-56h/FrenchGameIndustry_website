<script lang="ts">
    import { type Company } from '../lib/company.d.ts';
    export let company: Company;
    
    
    function truncate(text: string) {
        if (text.length > 200) {
            text =  text.slice(0, 200) + "...";
        }
        return text;
    }
    let logo: string = ""
    if (company.logo !== null){
        logo = company.logo;
    }
</script>

<div class="card card-compact bg-base-100 shadow-lg">
    <figure><img class="h-56 w-full object-cover" src="{logo}" alt="{company.name} logo" /></figure>
    <div class="card-body">
        <span>
            {#if company.is_developer}
                <div class="badge badge-primary">Studio</div>
            {/if}
            {#if company.is_publisher}
                <div class="badge badge-secondary">Publisher</div>
            {/if}
        </span>
        <h2 class="card-title">
            {company.name}
        </h2>
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