import { render, createElement } from "../core/react.js";
import MainContainer from "./components/main/container/MainContainer.js";

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

// const test = () => {
//   getPicsumImages(1).then((res) => {
//     const elements = createElement("div", {});

//     res.forEach((item) => {
//       elements.children.push(
//         createElement("img", {
//           src: `${item.download_url}`,
//           width: "100",
//           height: "100",
//         })
//       );
//     });

//     render(elements, document.querySelector("#here"));
//   });
//   return createElement("div", { id: "here" });
// };

// const test2 = () => {
//   const test = createElement("div", {
//     style: `background: black; width: 100px; height: 100px`,
//   });

//   render(test, document.querySelector("#here"));
// };

// const testImg =
//   "https://cdn.pixabay.com/photo/2023/04/03/11/45/water-7896610_640.jpg";

// const virtualDom = createElement(
//   "p",
//   {},
//   createElement("h1", {}, "React 만들기"),
//   createElement(
//     "ul",
//     {},
//     createElement(
//       "li",
//       { id: "test", onClick: `console.log("???")` },
//       "첫번째 아이템"
//     ),
//     createElement("li", { style: "color: green" }, "두번째 아이템"),
//     createElement("li", { style: "color: blue" }, "세번째 아이템")
//   ),
//   test(),
//   createElement("img", { src: `${testImg}` }),
//   Image(
//     ImageType.ic_300,
//     "https://cdn.pixabay.com/photo/2023/04/03/11/45/water-7896610_640.jpg"
//   ),
//   Text(TextType.text_16, "테에스으트", TextColor._FF385C),
//   HorizontalImageText(
//     ImageType.ic_24,
//     "https://cdn.pixabay.com/photo/2023/04/03/11/45/water-7896610_640.jpg",
//     TextType.text_12,
//     TextColor.black,
//     "거미 기억해줘요 내 모든 날과 그때를"
//   ),
//   VerticalImageText(
//     ImageType.ic_24,
//     "https://cdn.pixabay.com/photo/2023/04/03/11/45/water-7896610_640.jpg",
//     TextType.text_12,
//     TextColor.black,
//     "듣고 있나요?"
//   )
// );

const App = MainContainer();

render(App, document.querySelector("#root"));

// test2();
