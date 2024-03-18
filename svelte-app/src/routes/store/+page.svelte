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
			<h1>{product.name}</h1>
			<img src={product.image} alt={product.name} class="itemPhoto" />

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
	<title>Store</title>
	<meta name="description" content="Store including all products" />
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
		max-width: 50%;
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
