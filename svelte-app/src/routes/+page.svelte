<script>
	import home from '../assets/home_image.jpg';
</script>

<svelte:head>
	<title>Fashion Beast</title>
	<meta name="description" content="Landing page of Fashion Beast store" />
</svelte:head>

<div class="home">
	<div class="homeCard">
		<h1>Unleash Your Fashion Beast</h1>
		<h2>Roar with confidence and style</h2>
		<p>
			Welcome to Fashion Beast, the ultimate destination where style meets comfort and fashion
			becomes accessible to everyone. At Fashion Beast, we believe that fashion is not just about
			wearing clothes but expressing your unique identity and feeling confident in your own skin.
			Our carefully curated collections are designed to cater to diverse tastes and occasions,
			ensuring that you find the perfect piece that speaks to you.
		</p>
		<div class="cardButtons">
			<a href="/store">
				<button>Shop now</button>
			</a>
			<a href="/about">
				<button>Learn more about our company</button>
			</a>
		</div>
	</div>
	<img src={home} alt="home page" class="imageHome" />
</div>

<style>
	.home {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		margin: 5rem 5rem 0rem 5rem;
		height: 80vh;
	}
	.homeCard {
		background-color: var(--bgSoft);
		padding: 2rem 3rem;
		border-radius: 1rem;
		max-width: 40rem;
		max-height: 60rem;
	}
	.cardButtons {
		display: flex;
		gap: 3rem;
		padding-top: 1rem;
		justify-content: center;
	}
	.imageHome {
		display: block;
		max-width: 30rem;
		max-height: 60rem;
		width: auto;
		height: auto;
		border-radius: 1rem;
	}

	@media (max-width: 55rem) {
		.homeCard {
			max-width: 30rem;
		}
		.imageHome {
			display: none;
		}
	}
</style>
