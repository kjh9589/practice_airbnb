import { render, createElement, reRender } from "../core/react.js";
import MainContainer from "./components/main/container/MainContainer.js";
import { filters_kr } from "../strings/strings.js";
import { ImageType } from "./components/common/Image.js";
import { TextColor, TextType } from "./components/common/Text.js";
import VerticalImageText from "./components/items/VerticalImageText.js";
import { filterArr } from "./components/main/header/filter/HeaderSlider.js";
import { getPicsumImages } from "../network/network.js";
import GridItem from "./components/items/GirdItem.js";
import { GRID_ITEM_SIZE } from "../constants/constants.js";

const App = MainContainer();

render(App, document.querySelector("#root"));

let page = 1;

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

  document.getElementById("main-body").style.paddingTop = `${Math.ceil(
    (headerHeight * 100) / window.innerHeight
  )}vh`;
  document.getElementById("main-body").style.paddingBottom = `${Math.ceil(
    (footerHeight * 100) / window.innerHeight
  )}vh`;

  const grid = document.querySelector("#main-body");
  const gridColumns = window.innerWidth;
  grid.style.gridTemplateColumns = `repeat(${parseInt(
    gridColumns / GRID_ITEM_SIZE
  )}, 1fr)`;

  getPicsumImages(page, 100).then((res) => {
    res.forEach((item) => {
      render(
        GridItem(
          [
            item.download_url,
            "https://cdn.pixabay.com/photo/2023/04/29/07/30/bengal-tiger-7957960__340.jpg",
            "https://cdn.pixabay.com/photo/2022/09/30/12/56/cat-7489398__340.jpg",
            "https://cdn.pixabay.com/photo/2023/03/11/20/24/animal-7845217__340.jpg",
            "https://cdn.pixabay.com/photo/2023/03/07/18/07/chocolate-7836231__340.png",
          ],
          item.author,
          (Math.random() * 4 + 1).toFixed(1),
          `가로: ${item.width}`,
          `세로: ${item.height}`,
          `ID: ${item.id}`
        ),
        document.querySelector("#main-body")
      );
    });
  });
  page += 1;
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

  const headerHeight = document.getElementById("main-header").offsetHeight;
  const footerHeight = document.getElementById("main-footer").offsetHeight;

  document.getElementById("main-body").style.paddingTop = `${Math.ceil(
    (headerHeight * 100) / window.innerHeight
  )}vh`;
  document.getElementById("main-body").style.paddingBottom = `${Math.ceil(
    (footerHeight * 100) / window.innerHeight
  )}vh`;

  const grid = document.querySelector("#main-body");
  const gridColumns = window.innerWidth;
  grid.style.gridTemplateColumns = `repeat(${parseInt(
    gridColumns / 300
  )}, 1fr)`;
});

window.addEventListener("scroll", () => {
  /*
  위 코드에서는 scroll 이벤트를 추가하고, scrollHeight와 innerHeight를 사용하여 스크롤 가능한 전체 높이와 창 높이를 가져오고, 
  scrollY를 사용하여 현재 스크롤 위치를 가져옵니다.

  그런 다음 Math.ceil() 함수를 사용하여 현재 스크롤 위치를 올림하여 끝에 도달한 경우를 확인합니다. 
  스크롤 위치가 스크롤 가능한 높이와 정확하게 일치하지 않을 수 있으므로, Math.ceil() 함수를 사용하여 스크롤 위치를 올립니다.
  */
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  if (Math.ceil(scrolled) === scrollable) {
    getPicsumImages(page).then((res) => {
      res.forEach((item) => {
        render(
          GridItem(
            [
              item.download_url,
              "https://cdn.pixabay.com/photo/2023/04/29/07/30/bengal-tiger-7957960__340.jpg",
              "https://cdn.pixabay.com/photo/2022/09/30/12/56/cat-7489398__340.jpg",
              "https://cdn.pixabay.com/photo/2023/03/11/20/24/animal-7845217__340.jpg",
              "https://cdn.pixabay.com/photo/2023/03/07/18/07/chocolate-7836231__340.png",
            ],
            item.author,
            (Math.random() * 4 + 1).toFixed(1),
            `가로: ${item.width}`,
            `세로: ${item.height}`,
            `ID: ${item.id}`
          ),
          document.querySelector("#main-body")
        );
      });
    });
    page += 1;
  }
});
