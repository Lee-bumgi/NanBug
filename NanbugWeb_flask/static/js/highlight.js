const outline = document.querySelector('#code_C');

let text = document.querySelector('.text');

//코드 값이 입력되면 마우스 오버함.
// if(code_C){
//     outline.addEventListener('mouseover')
// }

let num = 1;
outline.addEventListener('mouseover', ()=> {
  console.log("확인")
  text.innerHTML = `mouseover ${num}`;
  num++;
});