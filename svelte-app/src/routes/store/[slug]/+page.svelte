<script lang="ts">
	import type { Product } from './+page.server';
	export let data: Product;
</script>

<div class="productContainer">
	<img src={data.image} alt="product.name" class="itemPhoto" />
	<div class="box">
		<div class="info">
			<h1>{data.name}</h1>
			<p>{data.description}</p>
		</div>
		<button class="button">Add to cart for {data.price}€</button>
	</div>
</div>

<svelte:head>
	<title>{data.name} | Fashion Beast</title>
	<meta name="description" content="{data.name} is a name of a current product" />
	<meta property="og:title" content="{data.name} | Fashion Beast" />
	<meta
		property="og:description"
		content="The ultimate destination where style meets comfort and fashion
	becomes accessible to everyone."
	/>
	<meta property="og:image" content="https://main.dg0s3ls9ozvcf.amplifyapp.com/item-page.png" />
	<meta property="og:url" content="https://main.dg0s3ls9ozvcf.amplifyapp.com/" />
</svelte:head>

<style>
	.productContainer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
		height: 100vh;
	}
	.itemPhoto {
		border-radius: 1rem;
		width: 28rem;
		height: 40rem;
	}
	.info {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 20rem;
		background-color: var(--bgSoft);
		border-radius: 1rem;
		padding: 1rem;
	}
	.box {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.button {
		margin: 1rem;
	}
</style>
