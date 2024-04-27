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
import "ojs/ojactioncard";
import { ActionCardElement } from "ojs/ojactioncard";
import "ojs/ojlabel";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

class StoreViewModel {
  keyAttributes = "id";
  restServerURLProducts: string = "http://localhost:3000/products";
  products = ko.observableArray([]);
  readonly logMsg = ko.observable("none");

  readonly actionHandler = (event: ActionCardElement.ojAction) => {
    this.logMsg(
      "Action handler invoked - " + (event.currentTarget as HTMLElement).id
    );
  };

  constructor() {
    this.fetchProducts();
  }

  async fetchProducts() {
    try {
      let response = await fetch(this.restServerURLProducts);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      this.products(data.items || []); // Adjust depending on the actual data structure
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  /**
   * Optional ViewModel method invoked after the View is inserted into the
   * document DOM.  The application can put logic that requires the DOM being
   * attached here.
   * This method might be called multiple times - after the View is created
   * and inserted into the DOM and after the View is reconnected
   * after being disconnected.
   */
  connected(): void {
    AccUtils.announce("Store page loaded.");
    document.title = "Store";
  }
  navigateToItem(itemId: any) {
    // Implement navigation logic using oj.Router
    // e.g., oj.Router.rootInstance.go('/store/' + itemId);
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

export = StoreViewModel;
