import { createElement } from "../../../../../core/react.js";
import { ImageType } from "../../../common/Image.js";
import { TextColor, TextType } from "../../../common/Text.js";
import HorizontalImageText from "../../../items/HorizontalImageText.js";

const HeaderTitle = () => {
  return createElement(
    "div",
    { style: `display: grid; grid-template-columns: repeat(3, 1fr)` },
    HorizontalImageText(
      ImageType.ic_40,
      "https://cdn.pixabay.com/photo/2022/11/23/18/31/birds-7612651__340.png",
      TextType.text_16,
      TextColor._FF385C,
      "airbnb"
    ),
    
  )
};

export default HeaderTitle;
