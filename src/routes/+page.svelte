<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Card from '../components/Card.svelte';
	import CheckboxForm from '../components/CheckboxForm.svelte';
	import SearchText from '../components/SearchText.svelte';
	import SelectForm from '../components/SelectForm.svelte';
	import CardsSkeleton from '../components/CardsSkeleton.svelte';
	import Dialog from '../components/Dialog.svelte';
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
	
	// For modal fiche
	let current_company: Company;

	let toTopButton: HTMLElement | null;

	// When the user clicks on the button, smoothy scroll to the top of the document
	function goToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onMount(async () => {
		loading = true;

		toTopButton = document.getElementById("to-top-button");

		// When the user scrolls down 200px from the top of the document, show the button
		window.onscroll = function () {
			if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
				if (toTopButton !== null){
					toTopButton.classList.remove("hidden");
				}
			} else {
				if (toTopButton !== null){
					toTopButton.classList.add("hidden");
				}
			}
		}

		const res = await fetch('/db.json');
		const data = await res.json();
		
		// Update the items prop with the fetched data
		companies = data;
		results = companies;
		loading = false;
	});
	
	const update_results = () => {
		
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
	}
	
	$: studiosFilter, update_results();
	$: publishersFilter, update_results();
	$: platformsSelected, update_results();
	$: tagsSelected, update_results();

</script>
		
<svelte:head>
	<title>French Game Industry</title>
	<meta name="description" content="A website to discover french game studios and publishers." />
	
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">
</svelte:head>
	
<Navbar />
	
<div class="flex flex-col w-full border-opacity-50 px-40 bg-base-200">
	<div class="divider"></div>
</div>

<div class="lg:flex lg:flex-row bg-base-200">
	<div class="basis-full lg:basis-1/6 p-4">
		<div class="bg-base-100 rounded-xl p-4">
			<SearchText bind:searchText={searchText} on:input={update_results} />
			<div class="sm:flex sm:flex-row">
				<CheckboxForm parameter_name="Studios" bind:isChecked={studiosFilter} />
				<CheckboxForm parameter_name="Publishers" bind:isChecked={publishersFilter} />
			</div>
			<div class="sm:flex sm:flex-row lg:block">
				<SelectForm filter_name="Platforms" options="{platforms}" bind:selectedOptions={platformsSelected}/>
				<SelectForm filter_name="Tags" options="{tags}" bind:selectedOptions={tagsSelected}/>
			</div>
		</div>
	</div>
	
	<div class="w-full">
		<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
			{#if loading == false}
				{#if results.length > 0}
					{#each results as company, i}
						<Card company="{company}" bind:current_company={current_company} />
					{/each}
				{:else}
					<span>No results</span>
				{/if}
			{:else}
				<CardsSkeleton />
			{/if}
		</div>
	</div>
	
	<button id="to-top-button" on:click={goToTop} title="Go To Top" class="hidden fixed z-90 bottom-16 right-8 border-0 btn rounded-full drop-shadow-md text-3xl font-bold bg-base-200">
		&uarr;
	</button>
</div>

<Dialog current_company="{current_company}"/>
<Footer />