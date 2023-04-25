import { render, createElement, reRender } from "../core/react.js";
import MainContainer from "./components/main/container/MainContainer.js";
import { filters_kr } from "../strings/strings.js";
import { ImageType } from "./components/common/Image.js";
import { TextColor, TextType } from "./components/common/Text.js";
import VerticalImageText from "./components/items/VerticalImageText.js";
import { filterArr } from "./components/main/header/filter/HeaderSlider.js";

const App = MainContainer();

render(App, document.querySelector("#root"));

window.onload = function () {
  const elementWidth = document.getElementById("header-slider").offsetWidth;
  filters_kr.forEach((value, index) => {
    if (index < elementWidth / 100)
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

  const headerHeight = document.getElementById("main-header").offsetHeight;
  const footerHeight = document.getElementById("main-footer").offsetHeight;

  document.getElementById("main-body").style.paddingTop = 
    `${headerHeight}px`;
  document.getElementById("main-body").style.paddingBottom = 
    `${footerHeight}px`;
};

window.addEventListener("resize", function () {
  const elementWidth = document.getElementById("header-slider").offsetWidth;
  filterArr.children = [];
  filters_kr.forEach((value, index) => {
    if (index < elementWidth / 100) {
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
    }
  });

  reRender(filterArr, document.querySelector("#header-slider"));
});

// test2();
