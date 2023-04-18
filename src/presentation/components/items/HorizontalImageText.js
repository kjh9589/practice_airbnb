import { createElement } from "../../../core/react.js";
import Image from "../common/Image.js";
import Text from "../common/Text.js";

const HorizontalImageText = (
  imageType,
  imageUri,
  textType,
  textColor,
  text
) => {
  return createElement(
    "div",
    { style: `display: inline-block` },
    createElement(
      "div",
      { style: `display: flex; align-items: center` },
      Image(imageType, imageUri),
      Text(textType, text, textColor)
    )
  );
};

export default HorizontalImageText;
