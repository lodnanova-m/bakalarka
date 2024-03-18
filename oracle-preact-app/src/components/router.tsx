import CoreRouter = require("ojs/ojcorerouter");
import KnockoutRouterAdapter = require("ojs/ojknockoutrouteradapter");
import UrlParamAdapter = require("ojs/ojurlparamadapter");
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import * as ko from "knockout";
import { whenDocumentReady } from "ojs/ojbootstrap";
import "ojs/ojknockout";
import "ojs/ojnavigationlist";

class ViewModel {
    // Define the routes
    private readonly routes = [
        { path: "", detail: { label: "Home" } }, // Default route redirects to 'dashboard'
        { path: "about", detail: { label: "About" } },
        { path: "store", detail: { label: "Store" } },
        { path: "contact", detail: { label: "Contact" } },
    ];

    // Create ADP with partial array, excluding first redirect route
    readonly dataProvider = new ArrayDataProvider(this.routes.slice(1), {
        keyAttributes: "path",
    });

    // Create the router with the routes
    private readonly router = new CoreRouter(this.routes, {
        urlAdapter: new UrlParamAdapter(),
    });

    // Create an observable to react to the current router state path
    readonly selection = new KnockoutRouterAdapter(this.router);

    constructor() {
        // Synchronize the router, causing it to go to its default route
        this.router.sync();
    }
}

whenDocumentReady().then(() => {
    ko.applyBindings(
        new ViewModel(),
        document.getElementById("routing-container")
    );
});