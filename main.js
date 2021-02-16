//アロー関数
document.getElementById("btn1").onclick = () => {
    document.getElementById("pics").src="img/arupaka.png";
  }
//普通関数
document.getElementById("btn2").onclick = function(){
    document.getElementById("pics").src="img/gorira.png";
  }
//コードを簡単にしてみたやつ
const pushBtn = (btn,src) => {
  document.getElementById(btn).onclick = function(){
    document.getElementById("pics").src=src;
  }
}
pushBtn("btn3","img/hituzi.png")
pushBtn("btn4","img/kaba.png")
pushBtn("btn5","img/tori.png")
pushBtn("btn6","img/uma.png")
pushBtn("btn7","img/usi.png")
pushBtn("btn8","img/yagi.png")


// 単純なコード
// document.getElementById("btn1").onclick = function(){
//     document.getElementById("pics").src="img/arupaka.png";
//   }
// document.getElementById("btn2").onclick = function(){
//     document.getElementById("pics").src="img/gorira.png";
//   }
// document.getElementById("btn3").onclick = function(){
//     document.getElementById("pics").src="img/hituzi.png";
//   }
// document.getElementById("btn4").onclick = function(){
//     document.getElementById("pics").src="img/kaba.png";
//   }
// document.getElementById("btn5").onclick = function(){
//     document.getElementById("pics").src="img/tori.png";
//   }
// document.getElementById("btn6").onclick = function(){
//     document.getElementById("pics").src="img/uma.png";
//   }
// document.getElementById("btn7").onclick = function(){
//     document.getElementById("pics").src="img/usi.png";
//   }
// document.getElementById("btn8").onclick = function(){
//     document.getElementById("pics").src="img/yagi.png";
//   }
