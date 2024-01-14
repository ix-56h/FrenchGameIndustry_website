<script lang="ts">
    import type {Game} from '../lib/company';
    export let game: Game;
    import Icon from '@iconify/svelte';

    function truncate(text: string) {
        if (text.length > 30) {
            text = text.replace("http://", "")
            text = text.replace("https://", "")
            text = text.replace("www.", "")
            text =  text.slice(0, 20) + "...";
        }
        return text;
    }
</script>

<div class="card w-full bg-base-100 shadow-xl image-full">
    <figure><img src="{game.logo}" alt="{game.name}" /></figure>
    <div class="card-body">
        <h2 class="card-title">{game.name}</h2>
        <p>
            {#if game.platform}
                <div class="badge badge-outline">{game.platform}</div> 
            {/if}
            {#if game.release_date}
                <div class="badge badge-outline">{game.release_date}</div> 
            {/if}
        </p>
        <div class="card-actions justify-center">
            {#each game.game_links as game_link}
                {#if game_link}
                    <a class="badge badge-outline" href="{game_link}" target="_blank">
                        <Icon icon="bi:link" class="mr-1" style="font-size: 16px;"/>
                        {truncate(game_link)}
                    </a>
                {/if}
            {/each}
        </div>
    </div>
</div>