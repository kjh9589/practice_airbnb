import { createElement } from "../../../../../core/react.js";
import Image, { ImageType } from "../../../common/Image.js";
import { TextColor, TextType } from "../../../common/Text.js";
import HorizontalImageText from "../../../items/HorizontalImageText.js";
import HeaderSlider from "./HeaderSlider.js";

const HeaderFilter = () => {
  let isLeftVisible = false;
  let isRightVisible = true;
  let offset = 0;

  const test = () => {
    console.log("hi");
  };

  return createElement(
    "div",
    { class: "main-header-filter" },
    createElement(
      "div",
      { class: "main-filter-slider" },
      isLeftVisible
        ? Image(ImageType.ic_24, "../../../../../../assets/arrow_back.svg")
        : "",
      HeaderSlider(),
      isRightVisible
        ? Image(ImageType.ic_24, "../../../../../../assets/arrow_forward.svg")
        : ""
    ),
    createElement(
      "div",
      { class: "main-filter-button" },
      HorizontalImageText(
        ImageType.ic_16,
        "../../../../../../assets/menu.svg",
        TextType.text_12,
        TextColor.black,
        "필터"
      )
    )
  );
};




export default HeaderFilter;
