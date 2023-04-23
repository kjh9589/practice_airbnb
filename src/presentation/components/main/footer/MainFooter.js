import { createElement } from "../../../../core/react.js";
import { footerNotice } from "../../../../strings/strings.js";
import Text, { TextType } from "../../common/Text.js";
import FooterInfo from "./info/FooterInfo.js";

const MainFooter = () => {
  return createElement("div", { class: "main-footer" }, 
  FooterInfo(),
  Text(TextType.text_12, footerNotice));
};

export default MainFooter;
