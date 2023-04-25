const createDom = (node) => {
  // 하위 요소가 객체가 아니고 문자열일 때
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.tag);

  // props 처리
  Object.entries(node.props).forEach(([key, value]) => {
    if (key.startsWith("on")) {
      /*
       props의 key가 "on"으로 시작하는지를 확인하고, 이벤트 리스너를 등록
       이를 위해 startsWith 함수를 사용하여 "on"으로 시작하는 key를 찾아내고, 
       addEventListener 함수를 사용하여 해당 이벤트에 대한 콜백 함수를 등록
      */
      element.addEventListener(key.substring(2), value);
    } else {
      element.setAttribute(key, value);
    }
  });

  // 재귀로 구현 => depth 모름
  // context 고정을 위해 bind
  node.children.map(createDom).forEach(element.appendChild.bind(element));

  return element;
};

const render = (virtualDom, container) => {
  container.appendChild(createDom(virtualDom));
};

const reRender = (virtualDom, container) => {
  container.replaceChildren(createDom(virtualDom));
}

// react의 태그
const createElement = (tag, props, ...children) => {
  props = props || {};
  children = children || [];

  return { tag, props, children };
};

export { createDom, render, createElement, reRender };
