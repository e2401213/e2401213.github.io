// 条件分岐(if ... else)

let condition = 5;
condition = 0;
condition = -5;
condition = "0"; // 文字列の"0"は数値の0とは異なるため, elseブロックが実行されます.

// if ... else ...は, 上から順に条件を評価し, 最初に真となる条件のブロックのみを実行します.
// どの条件も真でない場合は, 最後のelseブロックが実行されます.
if (condition > 0) {
    console.log("comditionは0より大きいです")
} else if (condition === 0) {
    console.log("conditionは0です");
} else if (condition < 0) {
    console.log("conditionは0より小さいです");
} else {
    console.log("conditionは数値ではありません");
}

// 引数で指定された数字によって, いろいろな言語で「こんにちは」を表示する関数を定義します.
function sayHello(language) {

    let message = "";

    if (language === 0) {
        message = "こんにちは";
    } else if (language === 1) {
        message = "Hello";
    } else if (language === 2) {
        message = "Bonjour";
    } else if (language === 3) {
        message = "Hola";
    } else {
        message = "指定された言語はサポートされていません"
    }

    console.log(message);

    // 挨拶をHTMLに表示する
    // idが"say_hello"の要素を取得し, その中に挨拶を表示する
    const p_hello = document.querySelector("#say_hello");
    p_hello.textContent = message;

}

// 作成した関数を呼び出して, いろいろな言語で「こんにちは」を表示します.
// sayHello(0);
// sayHello(1);
// sayHello(2);
// sayHello(3);
// sayHello(4);

// 繰り返し（while）
// ループに複雑な条件処理を組み合わせる場合に使うことが多い
let count = 0;
while (count < 5) {
    console.log("countの値は：" + count);

    // 条件に応じてループを終了する
    if (count === 3) {
        break;
    }

    // count = count + 1; // countを1増やす
    count++; // インクリメント
}

// 繰り返し（for）
// 事前に繰り返しの回数がわかっている場合や配列と組み合わせることが多い
for (let i = 0; i < 10; i++) {
    console.log("iの値は：" + i);
}

let player_hand = ["グー", "チョキ", "パー"];
for (let i = 0; i < 3; i++) {
    console.log("プレイヤーの手：" + player_hand[i]);
}

console.log("配列の要素の数：" + player_hand.length);

// 配列の長さを使ってループを回す
for (let i = 0; i < player_hand.length; i++) {
    console.log("プレイヤーの手：" + player_hand[i]);
}