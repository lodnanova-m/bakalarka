import { Header } from "./header";
import { Footer } from "./footer";
import { registerCustomElement } from "ojs/ojvcomponent";
import "preact";
import { useEffect, useState } from "preact/hooks";
import CoreRouter = require("ojs/ojcorerouter");
import UrlParamAdapter = require("ojs/ojurlparamadapter");
import Context = require("ojs/ojcontext");
import Content from "./content/index";

type Props = {
  appName: string;
  userLogin: string;
};

type Route = {
  path: string;
  detail?: object;
  redirect?: string;
};

const routeArray: Array<Route> = [
  { path: "", redirect: "home" },
  {
    path: "home",
    detail: { label: "Home", iconClass: "oj-ux-ico-home" },
  },
  {
    path: "about",
    detail: { label: "About", iconClass: "oj-ux-ico-information-s" },
  },
  {
    path: "contact",
    detail: { label: "Contact", iconClass: "oj-ux-ico-contact-group" },
  },
  {
    path: "store",
    detail: { label: "Store", iconClass: "oj-ux-ico-store" },
  },
  {
    path: "store/{id}",
  },
];

export const router = new CoreRouter<CoreRouter.DetailedRouteConfig>(
  routeArray,
  {
    urlAdapter: new UrlParamAdapter(),
  },
);

const pageChangeHandler = (value: string) => {
  router.go({ path: value });
};

export const App = registerCustomElement("app-root", (props: Props) => {
  props.appName = "Fashion Store";
  props.userLogin = "some.person@oracle.com";
  const [routePath, setRoutePath] = useState<string>("");
  const [pathParams, setPathParams] = useState<Object>({});

  useEffect(() => {
    Context.getPageContext().getBusyContext().applicationBootstrapComplete();
    router.currentState.subscribe(routerUpdated);
    router.sync();
  }, []);

  const routerUpdated = (
    actionable: CoreRouter.ActionableState<CoreRouter.DetailedRouteConfig>,
  ): void => {
    // Update our state based on new router state
    const newPath = actionable.state?.path;
    setPathParams(actionable.state?.params);
    setRoutePath(newPath);
  };

  return (
    <div id="appContainer" class="oj-web-applayout-page">
      <Header
        appName={props.appName}
        page={routePath}
        onPageChanged={pageChangeHandler}
        userLogin={props.userLogin}
        routes={routeArray.slice(0, 5)}
      />
      <Content page={routePath} params={pathParams} />
      <Footer />
    </div>
  );
});
