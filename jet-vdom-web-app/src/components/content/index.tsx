import "preact";
import Home from "./home/index";
import About from "./about/index";
import Contact from "./contact/index";
import Store from "./store/index";
import ProductDetail from "./productDetail/index";
type Props = {
  page: string;
  params: Object;
};

const Content = (props: Props) => {
  let pageContent = (page: string) => {
    switch (page) {
      case "":
        return <Home />;
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "store":
        if ("id" in props.params) {
          return <ProductDetail id={props.params.id}></ProductDetail>;
        }
        return <Store />;
    }
  };

  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      {pageContent(props.page as string)}
    </div>
  );
};
export default Content;
