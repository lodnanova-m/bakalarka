<script lang="ts">
	import '../app.css';
	import logo from '../assets/logo.png';
	import logotype from '../assets/logotype.png';
	import icon from '../assets/images/menu_hamburger.svg';
	import { page } from '$app/stores';
</script>

<nav class="navbarContainer">
	<a href="/" class="header">
		<img src={logo} alt="logo" class="logo" />
		<img src={logotype} alt="logotype" class="logotype" />
	</a>
	<div>
		<div class="links">
			<a href="/" class={$page.url.pathname === '/' ? 'linkButton active' : 'linkButton'}>Home</a>
			<a href="/about" class={$page.url.pathname === '/about' ? 'linkButton active' : 'linkButton'}
				>About</a
			>
			<a href="/store" class={$page.url.pathname === '/store' ? 'linkButton active' : 'linkButton'}
				>Store</a
			>
			<a
				href="/contact"
				class={$page.url.pathname === '/contact' ? 'linkButton active' : 'linkButton'}>Contact</a
			>
		</div>
		<div class="mobileLinks">
			<a href="/" class={$page.url.pathname === '/' ? 'linkButton active' : 'linkButton'}>Home</a>
			<a href="/about" class={$page.url.pathname === '/about' ? 'linkButton active' : 'linkButton'}
				>About</a
			>
			<a href="/store" class={$page.url.pathname === '/store' ? 'linkButton active' : 'linkButton'}
				>Store</a
			>
			<a
				href="/contact"
				class={$page.url.pathname === '/contact' ? 'linkButton active' : 'linkButton'}>Contact</a
			>
		</div>
		<button class="menuButton">
			<img src={icon} alt="hamburger menu icon" width="30" height="30" />
		</button>
	</div>
</nav>
<slot />
<footer class="footer">
	<div>
		<img src={logotype} alt="logotype" class="logotype" />
	</div>
	<div class="initials">
		<h1>Michaela Lodňanová</h1>
		<h2>525221</h2>
		<h3>Bachelor's thesis</h3>
	</div>
</footer>

<style>
	.navbarContainer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 3rem;
		background-color: var(--pico-background-color);
	}
	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
	.logo {
		display: flex;
		flex-direction: row;
		align-items: center;
		max-height: 90px;
	}
	.logotype {
		display: block;
		max-height: 2.5rem;
		margin-left: 1rem;
		width: auto;
		height: auto;
	}
	.links {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 2rem;
	}
	.linkButton {
		min-width: 2rem;
		padding: 0.4rem 1rem;
		border-radius: 20px;
		font-weight: 500;
		text-align: center;
	}
	.active {
		background-color: white;
		color: black;
		text-align: center;
	}
	.mobileLinks {
		display: none;
	}

	.menuButton {
		display: none;
	}
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--bgSoft);
		width: 100%;
		padding: 0.3rem 4rem;
		margin-top: 2rem;
	}
	.initials {
		display: flex;
		flex-direction: column;
		align-items: end;
	}
	.logotype {
		display: block;
		max-height: 3rem;
		width: auto;
		height: auto;
	}

	@media (max-width: 55rem) {
		.container {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}
		.initials {
			display: none;
		}
	}

	@media (max-width: 768px) {
		.menuButton {
			display: block;
			cursor: pointer;
			background-color: transparent;
			border: none;
		}
		.links {
			display: none;
		}
		.mobileLinks {
			position: absolute;
			right: 0;
			width: 50%;
			height: 100vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 2rem;
			overflow: hidden;

			background-color: var(--bg);
		}
	}
	@media (max-width: 60rem) {
		.logotype {
			display: none;
		}
	}
</style>
