const createDom = (node) => {
  // 하위 요소가 객체가 아니고 문자열일 때
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.tag);

  // props 처리
  Object.entries(node.props).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  // 재귀로 구현 => depth 모름
  // context 고정을 위해 bind
  node.children.map(createDom).forEach(element.appendChild.bind(element));

  return element;
};

const render = (virtualDom, container) => {
  container.appendChild(createDom(virtualDom));
};

// react의 태그
const createElement = (tag, props, ...children) => {
  props = props || {};
  children = children || [];

  return { tag, props, children };
};

export { createDom, render, createElement };
