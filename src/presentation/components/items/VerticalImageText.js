import { createElement } from "../../../core/react.js";
import Image from "../common/Image.js";
import Text from "../common/Text.js";

const VerticalImageText = (
  imageType,
  imageUri,
  textType,
  textColor,
  text,
  space = 12
) => {
  return createElement(
    "div",
    { style: `display: inline-block` },
    createElement(
      "div",
      { style: `display: flex; align-items: center; flex-direction: column` },
      Image(imageType, imageUri),
      createElement("div", { style: `height: ${space}px` }),
      Text(textType, text, textColor)
    )
  );
};

export default VerticalImageText;
