/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { h } from "preact";
import { router } from "../../../components/app";
const Home = () => {
  const navigateToStore = () => {
    router.go({ path: "store" });
  };
  const navigateToAbout = () => {
    router.go({ path: "about" });
  };
  return (
    <div class="oj-hybrid-padding">
      <h1>Fashion Beast</h1>
      <div class="demo-padding demo-container">
        <div id="componentDemoContent" style="width: 1px; min-width: 100%">
          <div id="panelPage" class="oj-sm-padding-10x-bottom">
            <div class="oj-flex oj-sm-justify-content-center">
              <div class="oj-flex oj-panel oj-panel-shadow-xl oj-sm-margin-4x demo-panel-customizations oj-sm-justify-content-center oj-sm-align-items-center">
                <img
                  src="/styles/images/home_image.jpg"
                  alt="home"
                  class="homeImage"
                  height="600"
                />
                <div class="oj-flex oj-sm-align-items-center oj-sm-justify-content-center">
                  <p class="oj-sm-margin-6x oj-typography-body-lg oj-text-color-secondary">
                    Welcome to Fashion Beast, the ultimate destination where
                    style meets comfort and fashion becomes accessible to
                    everyone. At Fashion Beast, we believe that fashion is not
                    just about wearing clothes but expressing your unique
                    identity and feeling confident in your own skin. Our
                    carefully curated collections are designed to cater to
                    diverse tastes and occasions, ensuring that you find the
                    perfect piece that speaks to you.
                  </p>
                  <oj-button
                    class="demo-button-purple oj-sm-margin-3x-horizontal"
                    chroming="solid"
                    onojAction={navigateToAbout}
                  >
                    <span
                      slot="startIcon"
                      class="oj-ux-ico-information-s"
                    ></span>
                    Learn more about our company
                  </oj-button>
                  <oj-button
                    class="demo-button-purple oj-sm-margin-3x-horizontal"
                    chroming="solid"
                    onojAction={navigateToStore}
                  >
                    <span slot="startIcon" class="oj-ux-ico-cart-empty"></span>
                    Shop now
                  </oj-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
