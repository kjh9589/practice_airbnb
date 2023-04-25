import { createElement } from "../../../../core/react.js";
import HeaderFilter from "./filter/HeaderFilter.js";
import HeaderTitle from "./title/HeaderTitle.js";

const MainHeader = () => {
  return createElement(
    "div",
    { id: "main-header" },
    HeaderTitle(),
    HeaderFilter()
  );
};

export default MainHeader;
