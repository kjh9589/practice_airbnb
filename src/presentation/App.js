import { render, createElement } from "../core/React.js";

// const virtualDom = {
//   tag: "p",
//   props: {},
//   children: [
//     {
//       tag: "h1",
//       props: {
//         style: "color: red"
//       },
//       children: ["React 만들기"],
//     },
//   ],
// };

const test = () => {
  return createElement("h2", {}, "야호~!!");
};

const testImg =
  "https://cdn.pixabay.com/photo/2023/04/03/11/45/water-7896610_640.jpg";

const virtualDom = createElement(
  "p",
  {},
  createElement("h1", {}, "React 만들기"),
  createElement(
    "ul",
    {},
    createElement(
      "li",
      { id: "test", onClick: `console.log("???")` },
      "첫번째 아이템"
    ),
    createElement("li", { style: "color: green" }, "두번째 아이템"),
    createElement("li", { style: "color: blue" }, "세번째 아이템")
  ),
  test(),
  createElement("img", { src: `${testImg}` }, "")
);

render(virtualDom, document.querySelector("#root"));
