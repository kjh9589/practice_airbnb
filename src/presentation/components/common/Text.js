import { createElement } from "../../../core/react.js";

const Text_12 = (text, textColor = "#000000") => {
  return createElement(
    "span",
    { style: `color: ${textColor}`, class: "text_12" },
    text
  );
};

const Text_14 = (text, textColor = "#000000") => {
  return createElement(
    "span",
    { style: `color: ${textColor}`, class: "text_14" },
    text
  );
};

const Text_16 = (text, textColor = "#000000") => {
  return createElement(
    "span",
    { style: `color: ${textColor}`, class: "text_16" },
    text
  );
};

const textMap = {
  text_12: Text_12,
  text_14: Text_14,
  text_16: Text_16,
};

const TextType = {
  text_12: "text_12",
  text_14: "text_14",
  text_16: "text_16",
};

const TextColor = {
  black: "#000000",
  white: "#FFFFFF",
  _717171: "#717171",
  _FF385C: "#FF385C"
}

const generateText = (map) => (type, text, textColor) =>
  map[type](text, textColor);

const Text = generateText(textMap);

export { TextType, TextColor };
export default Text;
