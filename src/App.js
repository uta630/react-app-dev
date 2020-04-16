import React from 'react';
// 上記Reactはどこにも記載されていないのでいらないように見えるが、
// jsxをトランスパイルする時には必須

function App() {
  // 文字列の変数化した場合、{変数名}でjsxに挿入できる
  const text = "Hello, world!!!";
  // jsx構文を変数に記述できる
  // reactでhtmlに属性名を記述するにはアッパーケースで記述する
  // class名のような予約語は、classNameのようにアッパーケースで記述する
  const dom =<h1 className="heading">{text}</h1>;

  // clickイベントも同様にアッパーケースで記述する
  // 出力されるhtmlには記述されないがイベントは問題なく実行される
  // また、閉じタグのないhtmlは末尾に「/」を入れ、「<... />」の形で記述する
  const input = <input type="text" onClick={() => {console.log(true)}} />

  // labelのforも同様
  const label = <label htmlFor="reactlabel">this is label</label>

  return (
    // jsxでreturnする場合、親は一つのタグでないといけない
    <div>
      {dom}
      {input}
      {label}
    </div>
  );

  // トランスパイルはbabelによって行われる
  // トランスパイルされた結果は下記ページから確認できる
  // https://babeljs.io/repl
}

export default App;
