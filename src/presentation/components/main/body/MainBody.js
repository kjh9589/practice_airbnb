import { createElement, reRender } from "../../../../core/react.js";
import GridItem from "../../items/GirdItem.js";

const MainBody = () => {
  return createElement(
    "div",
    { id: "main-body" },
    GridItem(
      [
        "https://a0.muscache.com/im/pictures/cdcad94d-8d6d-4072-9c03-aeeaf20cd764.jpg?im_w=720",
      ],
      "test",
      4.4,
      "subtitle1",
      "subtitle2",
      "subtitle3"
    )
  );
};

export default MainBody;
