<script lang="ts">
	import Hero from '../components/Hero.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Card from '../components/Card.svelte';
	import CheckboxForm from '../components/CheckboxForm.svelte';
	import SearchText from '../components/SearchText.svelte';
	import SelectForm from '../components/SelectForm.svelte';
	import CardsSkeleton from '../components/CardsSkeleton.svelte';
	import { type Company } from '../lib/company.d.ts';
	
	import { onMount } from 'svelte';
  
	let companies: Array<Company>;
  
	onMount(async () => {
	  const res = await fetch('/public/db.json');
	  const data = await res.json();
  
	  // Update the items prop with the fetched data
	  companies = data;
	});
</script>

<svelte:head>
<title>French Game Industry</title>
<meta name="description" content="A website to discover french game studios and publishers." />
</svelte:head>

<Navbar />

<div class="flex flex-col w-full border-opacity-50 pl-40 pr-40">
	<div class="divider"></div>
</div>
<!-- <Hero /> -->
<div class="lg:flex lg:flex-row">
	<div class="basis-full lg:basis-1/6 p-4">
		<div class="bg-base-100 p-4">
			<SearchText />
			<div class="flex flex-row">
				<CheckboxForm parameter_name="Studios" />
				<CheckboxForm parameter_name="Publishers" />
			</div>
			<div class="flex flex-row lg:block">
				<SelectForm filter_name="Platforms"/>
				<SelectForm filter_name="Tags"/>
			</div>
		</div>
	</div>

	<div class="w-full">
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4">
			{#if companies}
				{#each companies as company, i}
					<Card company="{company}"/>
				{/each}
			{:else}
				<CardsSkeleton />
			{/if}
		</div>
	</div>
</div>
<!-- <div class="grid grid-cols-4 gap-4">
	
</div> -->
<Footer />