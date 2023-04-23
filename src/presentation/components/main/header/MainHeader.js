import { createElement } from "../../../../core/react.js";
import HeaderTitle from "./title/HeaderTitle.js";

const MainHeader = () => {
  return createElement("div", { class: "main-header" }, HeaderTitle());
};

export default MainHeader;
