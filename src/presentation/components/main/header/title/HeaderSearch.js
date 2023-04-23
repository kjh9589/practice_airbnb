import { createElement } from "../../../../../core/react.js";
import Image, { ImageType } from "../../../common/Image.js";
import Text, { TextColor, TextType } from "../../../common/Text.js";

const HeaderSearch = () => {
  // console.log(search)
  return createElement(
    "div",
    { class: "main-header-search" },
    Text(TextType.text_14, "어디든지"),
    createElement("div", { class: "col-divider" }),
    Text(TextType.text_14, "언제든 일주일"),
    createElement("div", { class: "col-divider" }),
    createElement(
      "div",
      { style: `display: flex`},
      Text(TextType.text_14, "게스트 추가", TextColor._717171),
      createElement("div", {style: `width: 10px`}),
      Image(ImageType.ic_16, "../../../../../../assets/search.svg")
    )
  );
};

export default HeaderSearch;
