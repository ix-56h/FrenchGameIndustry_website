<script lang="ts">
	import Hero from '../components/Hero.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Card from '../components/Card.svelte';
	import CheckboxForm from '../components/CheckboxForm.svelte';
	import SearchText from '../components/SearchText.svelte';
	import SelectForm from '../components/SelectForm.svelte';
	import CardsSkeleton from '../components/CardsSkeleton.svelte';
	import type { Company } from '../lib/company.d.ts';
	import { tags, platforms } from '../lib/company.d.ts';
	
	import { onMount } from 'svelte';
	
	let companies: Array<Company> = [];
	let results: Array<Company>;
			
	let studiosFilter = false;
	let publishersFilter = false;
	let platformsSelected: Array<string> = [];
	let tagsSelected: Array<string> = [];
	let searchText = '';
	let loading: boolean = true;


	onMount(async () => {
		loading = true;

		const res = await fetch('/db.json');
		const data = await res.json();
		
		// Update the items prop with the fetched data
		companies = data;
		results = companies;
		loading = false;
	});
	
	const update_results = () => {
		loading = true;
		
		results = companies
		if (searchText != '') {
			results = companies.filter(company => company.name.toLowerCase().includes(searchText.toLowerCase()));
		} else {
			results = companies
		}
		if (studiosFilter) {
			results = results.filter(company => company.is_developer);
		}
		if (publishersFilter) {
			results = results.filter(company => company.is_publisher);
		}
		if (platformsSelected.length > 0) {
			results = results.filter(company => {
				return platformsSelected.every(platform => company.platforms.includes(platform));
			});
		}
		if (tagsSelected.length > 0) {
			results = results.filter(company => {
				return tagsSelected.every(tag => company.tags.includes(tag));
			});
		}
		loading = false;
	}
	
	$: studiosFilter, update_results();
	$: publishersFilter, update_results();
	$: platformsSelected, update_results();
	$: tagsSelected, update_results();

</script>
		
<svelte:head>
	<title>French Game Industry</title>
	<meta name="description" content="A website to discover french game studios and publishers." />
</svelte:head>
	
<Navbar />
	
<div class="flex flex-col w-full border-opacity-50 pl-40 pr-40">
	<div class="divider"></div>
</div>
<div class="lg:flex lg:flex-row">
	<div class="basis-full lg:basis-1/6 p-4">
		<div class="bg-base-100 p-4">
			<SearchText bind:searchText={searchText} on:input={update_results} />
			<div class="flex flex-row">
				<CheckboxForm parameter_name="Studios" bind:isChecked={studiosFilter} />
				<CheckboxForm parameter_name="Publishers" bind:isChecked={publishersFilter} />
			</div>
			<div class="flex flex-row lg:block">
				<SelectForm filter_name="Platforms" options="{platforms}" bind:selectedOptions={platformsSelected}/>
				<SelectForm filter_name="Tags" options="{tags}" bind:selectedOptions={tagsSelected}/>
			</div>
		</div>
	</div>
	
	<div class="w-full">
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4">
			{#if results && loading == false}
				{#if results.length > 0}
					{#each results as company, i}
						<Card company="{company}"/>
					{/each}
				{:else}
					<span>No results</span>
				{/if}
			{:else}
				<CardsSkeleton />
			{/if}
		</div>
	</div>
</div>
<Footer />