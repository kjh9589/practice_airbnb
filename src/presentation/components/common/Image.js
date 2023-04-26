import { createElement } from "../../../core/react.js";

const Image_16 = (uri, callback) => {
  return createElement("img", {
    src: `${uri}`,
    class: "ic-image-16",
    onclick: callback,
  });
};

const Image_24 = (uri, callback) => {
  return createElement("img", {
    src: `${uri}`,
    class: "ic-image-24",
    onclick: callback,
  });
};

const Image_30 = (uri, callback) => {
  return createElement("img", {
    src: `${uri}`,
    class: "ic-image-30",
    onclick: callback,
  });
};

const Image_32 = (uri, callback) => {
  return createElement("img", {
    src: `${uri}`,
    class: "ic-image-32",
    onclick: callback,
  });
};

const Image_40 = (uri, callback) => {
  return createElement("img", {
    src: `${uri}`,
    class: "ic-image-40",
    onclick: callback,
  });
};

const Image_280 = (uri, callback) => {
  return createElement("img", {
    src: `${uri}`,
    class: "ic-image-280",
    onClick: callback,
  });
};

const imageMap = {
  ic_16: Image_16,
  ic_24: Image_24,
  ic_30: Image_30,
  ic_32: Image_32,
  ic_40: Image_40,
  ic_280: Image_280,
};

const ImageType = {
  ic_16: "ic_16",
  ic_24: "ic_24",
  ic_30: "ic_30",
  ic_32: "ic_32",
  ic_40: "ic_40",
  ic_280: "ic_280",
};

const generateImage = (map) => (type, uri, callback) =>
  map[type](uri, callback);

const Image = generateImage(imageMap);

export { ImageType };
export default Image;
