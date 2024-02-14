<svelte:options runes={false} />

<script lang="ts">
	import { browser } from "$app/environment";

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
	$: {
		if (browser) {
			let targetElement = document.getElementById(`nav-${titleInFocus}`);
			let rect = targetElement?.getBoundingClientRect();
			if (rect) {
				xScrollMobile?.scrollTo({
					left: xScrollMobile?.scrollLeft + rect?.left - 10,
					behavior: "smooth",
				});
			}
		}
	}
</script>

<nav
	class="max-w-full m-auto sticky left-0 top-0 inset-x-0 mx-auto bg-base-200 flex overflow-x-scroll px-2 py-3 md:hidden"
	bind:this={xScrollMobile}
>
	{#each categories as cat}
		<button
			id={`nav-${cat}`}
			on:click={() => {
				document?.getElementById(cat)?.scrollIntoView();
			}}
			class="btn rounded-full px-3 py-2 mx-1"
			class:btn-primary={titleInFocus === cat}
		>
			{cat}
		</button>
	{/each}
</nav>

<div class="container max-w-8xl mx-auto">
	<div class="flex bg-base-200 min-w-full m-auto">
		<div class="max-w-sm hidden md:block flex-1 sticky top-0">
			<!-- nav -->
			<ul>
				{#each categories as cat}
					<li>
						<a href={`#${cat}`} class="hover:underline">
							{cat}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="max-w-md flex-1">
			<h1 class="m-1 font-bold text-3xl">menu</h1>
			{#each categories as cat}
				<h2
					class="m-1 text-2xl font-bold scroll-my-32 mt-5"
					use:enterViewPort
					id={cat}
				>
					{cat}
				</h2>
				{#each dishes as dish}
					<div
						class="flex justify-between bg-[#F6F6F6] hover:bg-[#ececec] p-3 m-1 rounded"
					>
						<p>{dish}</p>
						<p class=" italic">$7.50</p>
					</div>
				{/each}
			{/each}
		</div>
	</div>
</div>

<!-- 
<div class="container max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
	<div class="flex bg-base-200 min-w-full">
		<div class="flex-none hidden lg:block max-w-xl min-h-screen sticky top-0">
			Categories
		</div>
		<div class="flex-1 px-2 mx-2">
			<h1>Menu</h1>
		</div>
		<div class="flex-none hidden md:block">right</div>
	</div>
</div> -->
