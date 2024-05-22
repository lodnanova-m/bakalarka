import { env } from "$env/dynamic/private";
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export async function load({ params }) {
  const response = (await fetch(`${env.URL}/products`).then((d) =>
    d.json(),
  )) as {
    items: Product[];
  };
  const products = response.items.map((product) => ({
    ...product,
    image: `${env.URL}/${product.image}`,
  }));
  return products.find((product) => product.id.toString() === params.slug);
}
