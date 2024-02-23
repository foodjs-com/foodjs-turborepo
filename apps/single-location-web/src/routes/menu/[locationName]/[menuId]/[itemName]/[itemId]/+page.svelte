<script lang="ts">
	import { goto } from "$app/navigation";
	import { LINKS } from "$lib/links";
	export let data;
	// const onAddToCart = (item: typeof data) => {
	// 	console.log("Add to cart", item);
	// 	if (document.referrer.includes(LINKS.MENU(data.params))) {
	// 		history.back();
	// 	} else {
	// 		goto(LINKS.MENU(data.params));
	// 	}
	// };
</script>

<div class="container max-w-7xl mx-auto min-h-screen">
	<!-- <a class="link link-primary" href={LINKS.MENU(data.params)}>
		<i class="fa-solid fa-caret-left"></i>
		{LINKS.MENU(data.params)}
	</a> -->

	<pre>
		data: {JSON.stringify(data)}
	</pre>

	<!-- on:click={() => onAddToCart(data)} -->
	<button class="btn btn-primary">Add to cart</button>
</div>
