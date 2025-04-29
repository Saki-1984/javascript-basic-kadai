//html要素を取得し、代入する
const btn = document.getElementById('btn');
const text =document.getElementById('text');

//ボタンをクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  //テキストの変更
  text.textContent ='ボタンをクリックしました'  
});
