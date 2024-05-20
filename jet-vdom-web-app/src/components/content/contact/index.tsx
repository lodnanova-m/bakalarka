/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { h } from "preact";
import "ojs/ojbutton";
import "ojs/ojcheckboxset";
import "ojs/ojformlayout";
import "ojs/ojinputtext";
import "ojs/ojdatetimepicker";
import "ojs/ojselectsingle";
import "ojs/ojdialog";

const Contact = () => {
  return (
    <div class="oj-hybrid-padding">
      <h1>Contact</h1>
      <div class="oj-panel oj-flex oj-panel-shadow-sm oj-sm-margin-4x oj-sm-padding-12x oj-sm-justify-content-center oj-sm-align-items-center oj-bg-neutral-20">
        <oj-form-layout direction="row" max-columns="2">
          <div>
            <img
              src="/styles/images/dress.jpg"
              alt="dress"
              width="400"
              height="600"
              class="homeImage"
            />
          </div>
          <div class="oj-sm-margin-5x-bottom">
            <oj-input-text
              id="text-input"
              label-hint="Name"
              label-edge="inside"
            ></oj-input-text>
            <oj-input-text
              id="text-input"
              label-hint="Surname"
              label-edge="inside"
            ></oj-input-text>
            <oj-input-text label-hint="Email">
              <oj-button slot="end" display="icons" chroming="borderless">
                <span slot="endIcon" class="oj-ux-ico-email"></span>
              </oj-button>
            </oj-input-text>
            <oj-text-area
              id="vertical"
              resize-behavior="vertical"
              label-hint="Message"
            ></oj-text-area>
            <oj-button
              class="demo-button-purple oj-sm-margin-3x-vertical"
              chroming="solid"
            >
              Send
            </oj-button>
          </div>
        </oj-form-layout>
      </div>
    </div>
  );
};
export default Contact;
