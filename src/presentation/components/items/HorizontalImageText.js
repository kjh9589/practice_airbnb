import { createElement } from "../../../core/react.js";
import Image from "../common/Image.js";
import Text from "../common/Text.js";

const HorizontalImageText = (
  imageType,
  imageUri,
  textType,
  textColor,
  text,
  space = 10
) => {
  return createElement(
    "div",
    { style: `display: inline-block` },
    createElement(
      "div",
      { style: `display: flex; align-items: center` },
      Image(imageType, imageUri),
      createElement(
        "div",
        {style: `display: inline-block; width: ${space}px`},
      ),
      Text(textType, text, textColor)
    )
  );
};

export default HorizontalImageText;
