<div class="about">
	<h1>About Fashion Beast</h1>
	<div class="card">
		<p>
			Welcome to our fashion store! We offer a wide range of trendy clothing, shoes, and accessories
			for men and women. Our mission is to provide high-quality products that make you look and feel
			confident.
		</p>
		<div>
			<p>
				At Fashion Store, we believe that fashion is a form of self-expression. Whether you're
				looking for casual everyday wear or a statement piece for a special occasion, we've got you
				covered. Our collection includes the latest fashion trends, timeless classics, and
				everything in between.
			</p>
			<p>
				With our user-friendly website and secure checkout process, shopping with us is convenient
				and hassle-free. We also offer fast shipping and excellent customer service to ensure your
				satisfaction.
			</p>
		</div>
		<p>Visit our store today and discover your unique style with Fashion Store!</p>
	</div>
</div>
<svelte:head>
	<title>About | Fashion Beast</title>
	<meta name="description" content="About Fashion Beast company" />
	<meta property="og:title" content="About | Fashion Beast" />
	<meta
		property="og:description"
		content="The ultimate destination where style meets comfort and fashion
	becomes accessible to everyone."
	/>
	<meta property="og:image" content="https://main.dg0s3ls9ozvcf.amplifyapp.com/about-page.png" />
	<meta property="og:url" content="https://main.dg0s3ls9ozvcf.amplifyapp.com/" />
	<meta name="twitter:title" content="About | Fashion Beast" />
	<meta
		name="twitter:description"
		content="The ultimate destination where style meets comfort and fashion
	becomes accessible to everyone.e"
	/>
	<meta name="twitter:url" content="https://main.dg0s3ls9ozvcf.amplifyapp.com/" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<style>
	.about {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		padding-top: 4rem;
		height: 60rem;
	}
	.card {
		background-color: var(--bgSoft);
		padding: 2rem 3rem;
		border-radius: 1rem;
		max-width: 40rem;
	}
	@media (max-width: 60rem) {
		.about {
			flex-direction: column;
		}
		.card {
			max-width: 100%;
		}
	}
</style>
