/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import "ojs/ojselectsingle";
import "ojs/ojlabel";
import "ojs/ojchart";
import "ojs/ojlistview";
import "ojs/ojknockout";
import "ojs/ojcomponentcore";
import "ojs/ojbutton";
import { ojButton } from "ojs/ojbutton";
import * as ko from "knockout";

class HomeViewModel {
  button1Text: string;
  button2Text: string;
  constructor() {
    this.button1Text = "Shop now";
    this.button2Text = "Learn more about us";
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
    AccUtils.announce("Home page loaded.");
    document.title = "Home";
    // implement further logic if needed
  }
  public buttonClick = (event: ojButton.ojAction) => {
    return true;
  };

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

export = HomeViewModel;
