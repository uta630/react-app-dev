import React from 'react';
// 上記Reactはどこにも記載されていないのでいらないように見えるが、
// jsxをトランスパイルする時には必須

function App() {
  // 文字列の変数化した場合、{変数名}でjsxに挿入できる
  const text = "Hello, world!!!";
  // jsx構文を変数に記述できる
  const dom =<h1>{text}</h1>;
  return dom;
}

export default App;
