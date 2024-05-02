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
import "oj-c/action-card";
import "ojs/ojlabel";
import "ojs/ojcorerouter";
import rootViewModel from "./../appController";
import { ojDialog } from "ojs/ojdialog";
import "ojs/ojdialog";
import "ojs/ojbutton";
import "ojs/ojinputtext";
import "ojs/ojlabelvalue";
type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

class StoreViewModel {
  keyAttributes = "id";
  restServerURLProducts: string =
    "https://master.d3d95ljo92pafp.amplifyapp.com/products";
  products = ko.observableArray<Product>([]);
  handleOKClose: HTMLElement | null;

  constructor() {
    this.fetchProducts();
    this.handleOKClose = document.querySelector("#okButton");
    if (this.handleOKClose != null) {
      this.handleOKClose.addEventListener("click", () => {
        (document.querySelector("#dialog1") as ojDialog).close();
      });
    }
  }

  public cardAction(event: Event) {
    (document.querySelector("#dialog1") as ojDialog).open();
    const id = (event.currentTarget as HTMLElement)
      .getElementsByClassName("fs-identificator")[0]
      ?.textContent?.trim();

    if (!id) {
      console.error("No id");
      return false;
    }

    return true;
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
