/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { h } from "preact";
import { Product, environment, getProductById } from "../../../api";

import { router } from "../../../components/app";
import { useEffect, useState } from "preact/hooks";
type Props = {
  id: any;
};
const ProductDetail = ({ id }: Props) => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchProducts = async () => {
      const product = await getProductById(id);
      setProduct(product.item);
    };

    fetchProducts();
  }, []);

  const navigateToStore = () => {
    router.go({ path: "store" });
  };
  if (product) {
    return (
      <div class="oj-hybrid-padding">
        <h1>{product.name}</h1>
        <div class="demo-padding demo-container">
          <div id="componentDemoContent" style="width: 1px; min-width: 100%">
            <div id="panelPage" class="oj-sm-padding-10x-bottom">
              <div class="oj-flex oj-sm-justify-content-center">
                <div class="oj-flex oj-panel oj-panel-shadow-xl oj-sm-margin-4x demo-panel-customizations oj-sm-justify-content-center oj-sm-align-items-center">
                  <img
                    src={`${environment.apiUrl}/${product.image}`}
                    alt={product.name}
                    class="homeImage"
                    height="600"
                  />
                  <div class="oj-flex oj-sm-align-items-center oj-sm-justify-content-center">
                    <p class="oj-sm-margin-6x oj-typography-body-lg oj-text-color-secondary">
                      {product.description}
                    </p>
                    <oj-button
                      class="demo-button-purple oj-sm-margin-3x-horizontal"
                      chroming="solid"
                      onojAction={navigateToStore}
                    >
                      <span
                        slot="startIcon"
                        class="oj-ux-ico-information-s"
                      ></span>
                      Back to store
                    </oj-button>
                    <oj-button
                      class="demo-button-purple oj-sm-margin-3x-horizontal"
                      chroming="solid"
                      onojAction={navigateToStore}
                    >
                      <span
                        slot="startIcon"
                        class="oj-ux-ico-cart-empty"
                      ></span>
                      Buy now
                    </oj-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Not found</h1>;
  }
};
export default ProductDetail;
