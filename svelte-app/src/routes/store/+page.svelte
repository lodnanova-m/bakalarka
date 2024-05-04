<script lang="ts">
	import type { Product } from './+page.server';
	interface Data {
		products: Product[];
	}
	export let data: Data;
</script>

<div class="storeContainer">
	{#each data.products as product (product.id)}
		<div class="productCard">
			<h2>{product.name}</h2>
			<div class="imgContainer">
				<img src={product.image} alt={product.name} class="itemPhoto" />
			</div>
			<div class="buttons">
				<a href="store/{product.id}">
					<button>Read more..</button>
				</a>
				<button>Add to cart for {product.price}€</button>
			</div>
		</div>
	{/each}
</div>

<svelte:head>
	<title>Store | Fashion Beast</title>
	<meta name="description" content="Store including all products" />
	<meta property="og:title" content="Store | Fashion Beast" />
	<meta
		property="og:description"
		content="The ultimate destination where style meets comfort and fashion
	becomes accessible to everyone."
	/>
	<meta property="og:image" content="https://main.dg0s3ls9ozvcf.amplifyapp.com/store-page.png" />
	<meta property="og:url" content="https://main.dg0s3ls9ozvcf.amplifyapp.com/" />
	<meta name="twitter:title" content="Store | Fashion Beast" />
	<meta
		name="twitter:description"
		content="The ultimate destination where style meets comfort and fashion
	becomes accessible to everyone.e"
	/>
	<meta name="twitter:url" content="https://main.dg0s3ls9ozvcf.amplifyapp.com/" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<style>
	.storeContainer {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		padding: 2rem 0;
	}
	.productCard {
		background-color: var(--bgSoft);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin: 1rem;
		border-radius: 1rem;
		padding: 1.5rem;
		min-height: 50rem;
		max-width: 50%;
	}
	.imgContainer {
		min-height: 40rem;
	}
	.itemPhoto {
		object-fit: cover;
		border-radius: 1rem;
		width: 400px;
		height: auto;
	}
	.buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}
	@media (max-width: 60rem) {
		.buttons {
			display: flex;
			justify-content: center;
			gap: 1rem;
			flex-direction: column;
		}
	}
</style>
