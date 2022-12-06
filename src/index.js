/**
 * const,let 等の変数宣言
 *  */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数上書き";
// console.log(val1);

// // var変数の再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数上書き";

// const val3 "const再宣言";

// const val4 = {
//   name: "みたろ",
//   age: "35"
// };
// val4.name = "ほげほげ";
// val4.address = "saitama";
// console.log(val4);

// constで定義したオブジェクト、配列はプロパティの変更が可能

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列　←``と${}によって指定のプロパティを使用する事ができる
 */
// const name = "みたろ";
// const age = "35";
// // 「わたしの名前はみたろです。年齢は35歳です。」を表示する場合

// // 従来の方法
// const message1 = "わたしの名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を使うと
// const message2 = `わたしの名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数　← =>で関数に引数を入れる書き方
 */
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// 処理が1行で終わって返却の場合はreturnは省略できる
const func2 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));

/**
 * 分割代入 ←オブジェクトから指定のプロパティを抜き出して利用する事ができる
 */
// const myProfile = {
//   name: "みたろ",
//   age: 35
// };
// const message1 = `わたしの名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// //　これを分割代入して書くと
// const { name, age } = myProfile;
// const message2 = `わたしの名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// オブジェクトだけでなく配列にも使える
const myProfile = ["みたろ", 35];
const message3 = `わたしの名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3);

// //　これを分割代入して書くと
const [name, age] = myProfile; /* 配列は名前をつけた順番で入る */
const message4 = `わたしの名前は${name}です。年齢は${age}歳です。`;
console.log(message4);

/**
 * デフォルト値、引数など ←変数のあとに=でデフォルト値を設定できる
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
sayHello("みたろ");

/**
 * スプレット構文
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(arr1[0] + arr1[1]);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// const arr7 = [...arr4, ...arr5];
// console.log(arr6);
// console.log(arr7);
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

/**
 * mapやfilterをつかった配列の処理
 */
