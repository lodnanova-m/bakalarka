import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './[slug]/$types';

export interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	image: string;
}

export const load: PageServerLoad = async ({ params }) => {
	const response = (await fetch(`${env.URL}/products`).then((d) => d.json())) as {
		items: Product[];
	};
	const products = response.items.map((product) => ({
		...product,
		image: `${env.URL}/${product.image}`
	}));
	return { products };
};
