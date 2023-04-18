import { createElement } from "../../../core/react.js";

const Image_16 = (uri) => {
  return createElement("img", { src: `${uri}`, class: "ic-image-16" });
};

const Image_24 = (uri) => {
  return createElement("img", { src: `${uri}`, class: "ic-image-24" });
};

const Image_30 = (uri) => {
  return createElement("img", { src: `${uri}`, class: "ic-image-30" });
};

const Image_32 = (uri) => {
  return createElement("img", { src: `${uri}`, class: "ic-image-32" });
};

const Image_40 = (uri) => {
  return createElement("img", { src: `${uri}`, class: "ic-image-40" });
};

const Image_300 = (uri) => {
  return createElement("img", { src: `${uri}`, class: "ic-image-300" });
};

const imageMap = {
  ic_16: Image_16,
  ic_24: Image_24,
  ic_30: Image_30,
  ic_32: Image_32,
  ic_40: Image_40,
  ic_300: Image_300,
};

const ImageType = {
  ic_16: "ic_16",
  ic_24: "ic_24",
  ic_30: "ic_30",
  ic_32: "ic_32",
  ic_40: "ic_40",
  ic_300: "ic_300",
};

const generateImage = (map) => (type, uri) => map[type](uri);

const Image = generateImage(imageMap);

export { ImageType };
export default Image;
