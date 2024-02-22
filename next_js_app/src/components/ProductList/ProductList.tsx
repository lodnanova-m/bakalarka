import ProductItem from "../productItem/ProductItem";
import { Product } from "@/models/models";
type ProductProps = {
  items: Product[];
};
export default async function ProductList({ items }: ProductProps) {
  return (
    <>
      {items.map((product: Product) => (
        <ProductItem item={product} key={product.name}></ProductItem>
      ))}
    </>
  );
}
