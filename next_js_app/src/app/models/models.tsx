export type Link = {
  title: string;
  path: string;
};
export const Links: Link[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Store",
    path: "/store",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export const Products: Product[] = [
  {
    id: 1,
    name: "Coat",
    price: 20,
    description: "A very nice coat",
    image: "/home_image.jpg",
  },
  {
    id: 2,
    name: "Dress",
    price: 40,
    description: "A very nice dress",
    image: "/dress.jpg",
  },
  {
    id: 3,
    name: "Blazer",
    price: 30,
    description: "A very nice blazer",
    image: "/blazer.jpg",
  },
  {
    id: 4,
    name: "Pants",
    price: 20,
    description: "A very nice pants",
    image: "/pants.jpg",
  },
];
