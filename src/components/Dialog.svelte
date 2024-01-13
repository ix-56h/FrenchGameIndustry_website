<script lang="ts">
    import { type Company } from '../lib/company.d.ts';
    import Icon from '@iconify/svelte';

    export let current_company: Company;
</script>

<dialog id="display_info" class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
        {#if current_company}
        <div class="flex card card-compact bg-base-100 p-4 w-full">
            <figure><img class="object-cover" src="{current_company.logo || "/logos/no_logo.jpg" }" alt="{current_company.name} logo" /></figure>
            <div class="card-body">
                <div class="card-actions justify-center">
                    {#if current_company.is_developer}
                        <div class="badge badge-primary">Studio</div>
                    {/if}
                    {#if current_company.is_publisher}
                        <div class="badge badge-secondary">Publisher</div>
                    {/if}
                </div>
                
                <h2 class="card-title justify-center">
                    {current_company.name}
                </h2>
        
                <div class="card-actions justify-center">
                    {#if current_company.website}
                        <a href="{current_company.website}" target="_blank" class="badge badge-outline">
                            <Icon icon="bi:link" style="font-size: 16px;"/>
                        </a>
                    {/if}
                    {#if current_company.linkedin}
                        <a href="{current_company.linkedin}" target="_blank" class="badge badge-outline">
                            <Icon icon="bi:linkedin" style="font-size: 16px;"/>
                        </a>
                    {/if}
                    {#if current_company.facebook}
                        <a href="{current_company.facebook}" target="_blank" class="badge badge-outline">
                            <Icon icon="bi:facebook" style="font-size: 16px;"/>
                        </a>
                    {/if}
                    {#if current_company.youtube}
                        <a href="{current_company.youtube}" target="_blank" class="badge badge-outline">
                            <Icon icon="bi:youtube" style="font-size: 16px;"/>
                        </a>
                    {/if}
                    {#if current_company.twitter}
                        <a href="{current_company.twitter}" target="_blank" class="badge badge-outline">
                            <Icon icon="bi:twitter" style="font-size: 16px;"/>
                        </a>
                    {/if}
                    {#if current_company.instagram}
                        <a href="{current_company.instagram}" target="_blank" class="badge badge-outline">
                            <Icon icon="bi:instagram" style="font-size: 16px;"/>
                        </a>
                    {/if}
                </div>
        
                <p>
                    {#if current_company.description !== null}
                        {current_company.description}
                    {/if}
                </p>
        
                <div class="flex">
                    <div class="flex-1 card-actions justify-center">
                        <span class="w-full text-center">Platforms</span>
                        {#if current_company.platforms.length == 0}
                            <div class="badge badge-outline">-</div> 
                        {/if}
                        {#each current_company.platforms as platform, i}
                            <div class="badge badge-outline">{platform}</div> 
                        {/each}
                    </div>
        
                    <div class="divider divider-horizontal"></div>
        
                    <div class="flex-1 card-actions justify-center">
                        <span class="w-full text-center">Tags</span>
                        {#if current_company.tags.length == 0}
                            <div class="badge badge-outline">-</div> 
                        {/if}
                        {#each current_company.tags as tag, i}
                            <div class="badge badge-outline">{tag}</div> 
                        {/each}
                    </div>
                </div>
            </div>
        </div>
        {/if}
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
</dialog>