import { createElement } from "../../../../../core/react.js";
import Image, { ImageType } from "../../../common/Image.js";
import Text, { TextType } from "../../../common/Text.js";

const HeaderProfile = () => {
  return (
    createElement(
      "div",
      { class: "main-header-profile" },
      Text(TextType.text_14, "당신의 공간을 에어비앤비하세요"),
      Image(ImageType.ic_24, "../../../../../../assets/language.svg"),
      createElement(
        "div",
        { class: "profile-icons" },
        Image(ImageType.ic_24, "../../../../../../assets/menu.svg"),
        createElement("div", {style: `width: 10px`}),
        Image(ImageType.ic_24, "../../../../../../assets/profile.svg")
      )
    )
  );
};

export default HeaderProfile;
