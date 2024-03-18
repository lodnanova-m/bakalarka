<script>
	import dress from '../../assets/dress.jpg';
</script>

<div class="contact">
	<div class="imageContainer">
		<!-- Adjust the path to your image as necessary -->
		<img src={dress} alt="dress" class="image" />
	</div>
	<div class="formContainer">
		<form class="form">
			<input type="text" placeholder="Name and Surname" />
			<input type="email" placeholder="Email Address" />
			<input type="text" placeholder="Phone Number (Optional)" />
			<textarea cols="30" rows="10" placeholder="Message"></textarea>
			<button type="submit">Send</button>
		</form>
	</div>
</div>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact form" />
</svelte:head>

<style>
	.contact {
		display: flex;
		align-items: center;
		gap: 100px;
		padding: 2rem;
		margin-top: 1rem;
	}

	.imageContainer {
		flex: 1;
		background-color: var(--bgSoft);
		border-radius: 2rem;
		padding: 2rem 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image {
		object-fit: contain;
		height: 500px;
	}

	.formContainer {
		flex: 1;
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.form input,
	.form textarea {
		padding: 0.5rem;
		border-radius: 5px;
		border: 1px solid var(--btn);
		outline: none;
		background-color: var(--bgSoft);
		color: var(--text);
	}

	@media (max-width: 60rem) {
		.contact {
			flex-direction: column;
			padding: 0;
		}
	}
</style>
