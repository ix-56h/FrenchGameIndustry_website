<script lang="ts">
    import { type Company } from '../lib/company.d.ts';
    export let company: Company;
    import Icon from '@iconify/svelte';
    export let current_company: Company;

    function truncate(text: string) {
        if (text.length > 200) {
            text =  text.slice(0, 200) + "...";
        }
        return text;
    }
    const set_current_company = () => {
        current_company = company
    }
</script>

<a href="" on:click={set_current_company} onclick="display_info.showModal()" class="card card-compact bg-base-100 shadow-lg cursor-pointer">
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
            {#if company.website}
                <div class="badge badge-outline">
                    <Icon icon="bi:link" style="font-size: 16px;"/>
                </div>
            {/if}
            {#if company.linkedin}
                <div class="badge badge-outline">
                    <Icon icon="bi:linkedin" style="font-size: 16px;"/>
                </div>
            {/if}
            {#if company.facebook}
                <div class="badge badge-outline">
                    <Icon icon="bi:facebook" style="font-size: 16px;"/>
                </div>
            {/if}
            {#if company.youtube}
                <div class="badge badge-outline">
                    <Icon icon="bi:youtube" style="font-size: 16px;"/>
                </div>
            {/if}
            {#if company.twitter}
                <div class="badge badge-outline">
                    <Icon icon="bi:twitter" style="font-size: 16px;"/>
                </div>
            {/if}
            {#if company.instagram}
                <div class="badge badge-outline">
                    <Icon icon="bi:instagram" style="font-size: 16px;"/>
                </div>
            {/if}
        </div>

        <p>
            {#if company.description !== null}
                {truncate(company.description)}
            {/if}
        </p>

        <div class="flex">
            <div class="flex-1 card-actions justify-center">
                <span class="w-full text-center">Platforms</span>
                {#if company.platforms.length == 0}
                    <div class="badge badge-outline">-</div> 
                {/if}
                {#each company.platforms as platform, i}
                    <div class="badge badge-outline">{platform}</div> 
                {/each}
            </div>

            <div class="divider divider-horizontal"></div>

            <div class="flex-1 card-actions justify-center">
                <span class="w-full text-center">Tags</span>
                {#if company.tags.length == 0}
                    <div class="badge badge-outline">-</div> 
                {/if}
                {#each company.tags as tag, i}
                    <div class="badge badge-outline">{tag}</div> 
                {/each}
            </div>
        </div>
    </div>
</a>