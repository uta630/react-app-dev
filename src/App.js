import React from 'react';
import PropTypes from 'prop-types';

// props
// 属性データを元に参照できるデータのこと
// 数値・文字列・配列・オブジェクトなんでも使える

const App = () => {
  const profiles = [
    { name: "たろう", age: 10 },
    { name: "はなこ", age: 5  },
    { name: "名無し", age: 1 },
  ]

  return (
    <div>
      {
        // ループ処理にはkeyが必要になる
        // reactはバーチャルdomというものがある
        // これは、どのdomの記述が変更されたかを管理し、変更点のみ反映してくれる
        // この管理にkeyが利用されているため必要
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

// Userを作成（タグ/コンポーネント）
// タグ記述時に付与される属性をpropsで参照する
const User = (props) => {
  // 以下の形で参照し、出力する
  return <p>I am {props.name}, and {props.age} years old.</p>
}

// コンポーネントに与えるpropsに型を設定できる
// 入力されるデータに不具合がないか、これでチェックできる
// -> 「数値が欲しいのに文字列が来ている」などをコンポーネントで検知できる
// また、「isRequired」を付与することで必須の属性チェックができる
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
