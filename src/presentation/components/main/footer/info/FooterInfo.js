import { createElement } from "../../../../../core/react.js";
import { footerInfo, footerKR } from "../../../../../strings/strings.js";
import { ImageType } from "../../../common/Image.js";
import Text, { TextColor, TextType } from "../../../common/Text.js";
import HorizontalImageText from "../../../items/HorizontalImageText.js";

const FooterInfo = () => {
  const infoArr = createElement("div", { class: "main-footer-info-left" });
  const krArr = createElement("div", {class: "main-footer-info-right"});

  footerInfo.forEach((value, index) => {
    if (index === 0) {
      infoArr.children.push(Text(TextType.text_14, value));
    } else {
      infoArr.children.push(Text(TextType.text_12, "•"));
      infoArr.children.push(
        createElement("a", { href: "#", class: `footer-info-${index}` }, value)
      );
    }
  });

  footerKR.forEach((value, index) => {
    if (index === 0) {
      krArr.children.push(
        HorizontalImageText(
          ImageType.ic_16,
          "https://a0.muscache.com/im/pictures/331fa2c9-96a8-4b3f-9234-8f4e47cecb83.jpg?im_w=720",
          TextType.text_14,
          TextColor.black,
          value
        )
      );
    } else {
      krArr.children.push(
        Text(TextType.text_14, value)
      )
    }
  });

  return createElement("div", { class: "main-footer-info" }, infoArr, krArr);
};

export default FooterInfo;
