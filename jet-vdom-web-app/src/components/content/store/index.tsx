/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Product, environment, getAllProducts } from "../../../api";
import StoreItem from "./storeItem/index";
const Store = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div class="oj-hybrid-padding">
      <h1>Store</h1>
      <div class="oj-flex oj-sm-justify-content-center">
        {products.map((item) => (
          <StoreItem item={item} />
        ))}
      </div>
    </div>
  );
};
export default Store;
