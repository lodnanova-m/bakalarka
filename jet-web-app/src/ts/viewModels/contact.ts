/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import "ojs/ojknockout";
import "oj-c/input-text";
import "ojs/ojbutton";
import "ojs/ojlabel";
import "ojs/ojradioset";
import "ojs/ojcheckboxset";
import "ojs/ojformlayout";
import "oj-c/text-area";

class ContactViewModel {
  formState: ko.Observable<string>;
  hideButton: ko.Computed<"oj-sm-hide" | "">;
  labelEdge: ko.Observable<string>;
  showValue: ko.Computed<boolean>;
  valueEnabled: ko.Observable<string>;
  constructor() {
    this.formState = ko.observable("enabled");
    this.valueEnabled = ko.observable("yes");
    this.showValue = ko.computed(() => {
      if (this.valueEnabled() === "no") {
        return false;
      }
      return true;
    });
    this.hideButton = ko.computed(() => {
      if (this.formState() === "readonly") {
        return "oj-sm-hide";
      }
      return "";
    });

    this.labelEdge = ko.observable("inside");
  }
  connected(): void {
    AccUtils.announce("Contact page loaded.");
    document.title = "Contact";
    // implement further logic if needed
  }

  /**
   * Optional ViewModel method invoked after the View is disconnected from the DOM.
   */
  disconnected(): void {
    // implement if needed
  }

  /**
   * Optional ViewModel method invoked after transition to the new View is complete.
   * That includes any possible animation between the old and the new View.
   */
  transitionCompleted(): void {
    // implement if needed
  }
}

export = ContactViewModel;
