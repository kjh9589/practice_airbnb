import { createElement, render } from "../../../../../core/react.js";
import { filters_kr } from "../../../../../strings/strings.js";
import { ImageType } from "../../../common/Image.js";
import { TextColor, TextType } from "../../../common/Text.js";
import VerticalImageText from "../../../items/VerticalImageText.js";

const filterArr = createElement("div", { id: "header-slider" });

const HeaderSlider = () => {

  return filterArr;
};

window.onload = function () {
  const elementWidth = document.getElementById("header-slider").offsetWidth;

  const itemArr = createElement("div", {})
  filters_kr.forEach((value, index) => {
    if (index < elementWidth / 100 )
      filterArr.children.push(
        createElement(
          "div",
          { class: "filter-item" },
          VerticalImageText(
            ImageType.ic_24,
            "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
            TextType.text_14,
            TextColor.black,
            value
          )
        )
      );
  });

  render(filterArr, document.querySelector("#header-slider"));
};

export default HeaderSlider;
