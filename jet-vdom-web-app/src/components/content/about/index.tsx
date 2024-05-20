/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { h } from "preact";
const About = () => {
  return (
    <div class="oj-hybrid-padding">
      <h1>About us</h1>
      <div class="oj-flex oj-sm-justify-content-center">
        <div class="oj-panel oj-flex oj-panel-shadow-sm oj-sm-only-width-4/5 oj-sm-margin-4x oj-sm-padding-12x oj-sm-justify-content-center oj-sm-align-items-center oj-sm-width-3/5">
          <p class="oj-typography-heading-md">Welcome to our fashion store!</p>
          <div>
            <p class="oj-typography-body-xl">
              We offer a wide range of trendy clothing, shoes, and accessories
              for men and women. Our mission is to provide high-quality products
              that make you look and feel confident.
            </p>
            <p class="oj-typography-body-xl">
              At Fashion Store, we believe that fashion is a form of
              self-expression. Whether you're looking for casual everyday wear
              or a statement piece for a special occasion, we've got you
              covered. Our collection includes the latest fashion trends,
              timeless classics, and everything in between.
            </p>
            <p class="oj-typography-body-xl">
              With our user-friendly website and secure checkout process,
              shopping with us is convenient and hassle-free. We also offer fast
              shipping and excellent customer service to ensure your
              satisfaction.
            </p>
          </div>
          <p class="oj-typography-heading-md">
            Visit our store today and discover your unique style with Fashion
            Store!
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
