/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { h } from "preact";
import { Product, environment } from "../../../../api";
import "oj-c/action-card";
import "ojs/ojlabel";
import "ojs/ojcorerouter";
import { ojDialog } from "ojs/ojdialog";
import "ojs/ojdialog";
import "ojs/ojbutton";
import "ojs/ojinputtext";
import "ojs/ojlabelvalue";
import { router } from "../../../../components/app";
type Props = {
  item: Product;
};
const StoreItem = (props: Props) => {
  const navigateToItem = () => {
    router.go({ path: "store", params: { id: props.item.id } });
  };
  return (
    <oj-c-action-card
      onojAction={navigateToItem}
      id="click"
      class="oj-sm-margin-2x oj-flex oj-sm-justify-content-center oj-sm-align-items-center oj-sm-width-1/4"
    >
      <div class="oj-flex oj-sm-flex-direction-column oj-sm-justify-content-center oj-sm-align-items-center oj-sm-width-full">
        <h3>{props.item.name}</h3>
        <img src={`${environment.apiUrl}/${props.item.image}`} height="400" />
        <span class="oj-typography-heading-md oj-sm-padding-2x">
          Price: €{props.item.price}
        </span>
      </div>
    </oj-c-action-card>
  );
};
export default StoreItem;
