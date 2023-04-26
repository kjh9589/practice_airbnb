import { createElement } from "../../../core/react.js";
import Image, { ImageType } from "../common/Image.js";
import Text, { TextColor, TextType } from "../common/Text.js";
import HorizontalImageText from "./HorizontalImageText.js";

const GridItem = (imgaeUris, author, rate, subtitle1, subtitle2, subtitle3) => {
  let targetIdx = 0;

  return createElement(
    "div",
    {
      class: "grid-item",
    },
    createElement(
      "div",
      { class: "grid-item-favorite" },
      Image(ImageType.ic_24, "../../../../assets/disable_favorite.svg")
    ),
    createElement(
      "div",
      { class: "grid-item-image" },
      createElement(
        "div",
        { class: "grid-item-left" },
        Image(ImageType.ic_24, "../../../../assets/arrow_back.svg")
      ),
      Image(ImageType.ic_280, imgaeUris[targetIdx]),
      createElement(
        "div",
        { class: "grid-item-right" },
        Image(ImageType.ic_24, "../../../../assets/arrow_forward.svg")
      ),
    ),
    createElement(
      "div",
      { class: "grid-item-title" },
      Text(TextType.text_16, author),
      HorizontalImageText(
        ImageType.ic_16,
        "../../../../assets/enable_star.svg",
        TextType.text_12,
        TextColor.black,
        `${rate}`
      )
    ),
    createElement(
      "div",
      { class: "grid-item-description" },
      Text(TextType.text_14, subtitle1, TextColor._717171),
      Text(TextType.text_14, subtitle2, TextColor._717171),
      Text(TextType.text_16, subtitle3, TextColor.black)
    )
  );
};

export default GridItem;
