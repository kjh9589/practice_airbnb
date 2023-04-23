import MainBody from "../body/MainBody.js";
import { createElement } from "../../../../core/react.js";
import MainFooter from "../footer/MainFooter.js";
import MainHeader from "../header/MainHeader.js";

const MainContainer = () => {
  return createElement(
    "div",
    {
      class: "main-container",
    },
    MainHeader(),
    MainBody(),
    MainFooter()
  );
};

export default MainContainer;
