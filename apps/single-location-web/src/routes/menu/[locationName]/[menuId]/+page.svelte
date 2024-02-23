<svelte:options runes={false} />

<script lang="ts">
	import { browser } from "$app/environment";
	import { LINKS } from "$lib/links";
	import type { PageData } from "./$types";

	export let data: PageData;

	const categories = [
		"Dishes",
		"Drinks",
		"Desserts",
		"Snacks",
		"Sauces",
		"Spices",
		"Breads",
		"Salads",
		"Soups",
		"Sides",
		"Appetizers",
		"Entrees",
		"Breakfast",
		"Lunch",
		"Dinner",
		"Brunch",
		"Dessert",
		"Snack",
		"Sauce",
	];

	const dishes = [
		"Pizza",
		"Pasta",
		"Burgers",
		"Sandwiches",
		"Tacos",
		"Burritos",
		"Sushi",
		"Ramen",
		"Pho",
		"Curry",
		"Stir Fry",
		"Fried Rice",
		"Noodles",
		"Salmon",
		"Steak",
		"Chicken",
		"Pork",
	];

	let titleInFocus: string = "";

	export function enterViewPort(e: HTMLElement) {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				titleInFocus = e.id;
			}
		});
		observer.observe(e);
	}

	let xScrollMobile: HTMLElement;
	let xScrollDesktop: HTMLElement;
	$: {
		if (browser) {
			let targetElementMobile = document.getElementById(
				`nav-mobile-${titleInFocus}`
			);
			let rectMobile = targetElementMobile?.getBoundingClientRect();
			if (rectMobile) {
				xScrollMobile?.scrollTo({
					left: xScrollMobile?.scrollLeft + rectMobile?.left - 10,
					behavior: "smooth",
				});
			}
			let targetElementDesktop = document.getElementById(
				`nav-desktop-${titleInFocus}`
			);
			let rectDesktop = targetElementDesktop?.getBoundingClientRect();
			if (rectDesktop) {
				xScrollDesktop?.scrollTo({
					top: xScrollDesktop?.scrollTop + rectDesktop?.top - 10,
					behavior: "smooth",
				});
			}
		}
	}
</script>

<nav
	class="max-w-full m-auto sticky left-0 top-0 inset-x-0 mx-auto flex overflow-x-scroll px-2 py-3 bg-base-100 md:hidden"
	bind:this={xScrollMobile}
>
	{#each categories as cat}
		<button
			id={`nav-mobile-${cat}`}
			on:click={() => {
				document?.getElementById(cat)?.scrollIntoView();
			}}
			class="btn {titleInFocus === cat ? 'btn-primary' : 'btn-outline'}"
		>
			{cat}
		</button>
	{/each}
</nav>

<div class="container max-w-7xl mx-auto">
	<div class="flex min-w-full m-auto">
		<div
			class="max-w-60 hidden md:block flex-1 sticky top-0 left-0 max-h-screen overflow-y-auto overflow-x-hidden border-l-2 border-primary px-0"
			bind:this={xScrollDesktop}
		>
			<!-- nav -->
			<ul>
				{#each categories as cat}
					<li>
						<a
							id={`nav-desktop-${cat}`}
							href={`#${cat}`}
							class="btn rounded-none {titleInFocus === cat
								? 'btn-primary'
								: 'btn-ghost'}"
						>
							{cat}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="max-w-md flex-1 pb-20">
			<h1 class="m-1 font-bold text-3xl">menu</h1>
			<pre>{JSON.stringify(data)}</pre>
			{#each categories as cat}
				<h2
					class="m-1 text-2xl font-bold scroll-my-32 mt-5"
					use:enterViewPort
					id={cat}
				>
					{cat}
				</h2>
				{#each dishes as dish}
					<a
						href={LINKS.MENU_ITEM({
							...data.params,
							itemName: dish,
							itemId: "1234",
						})}
						class="flex justify-between bg-[#F6F6F6] hover:bg-[#ececec] p-3 m-1 rounded"
					>
						<p>{dish}</p>
						<p class=" italic">$7.50</p>
					</a>
				{/each}
			{/each}
		</div>
	</div>
</div>
