let next_btn = document.getElementById("next")
let prev_btn = document.getElementById("prev")

let page1 = document.querySelector(".page1")
let page2 = document.querySelector(".page2")
let page3 = document.querySelector(".page3")
function next_page(){
    if(page1.style.display !=='none'){
        page1.style.display = 'none'
        page2.style.display = 'flex'
        page3.style.display = 'none'
        prev_btn.style.visibility = 'inherit'
    } else if (page2.style.display !=='none') {
        page1.style.display = 'none'
        page2.style.display = 'none'
        page3.style.display = 'flex'
        next_btn.style.visibility = 'hidden'
    } else {
        page1.style.display = 'flex'
        page2.style.display = 'none'
        page3.style.display = 'none'
    }
    console.log("next")
}
function prev_page(){
    if(page3.style.display !=='none'){
        page3.style.display = 'none'
        page2.style.display = 'flex'
        page1.style.display = 'none'
        next_btn.style.visibility = 'inherit'
    } else if (page2.style.display !=='none') {
        page3.style.display = 'none'
        page2.style.display = 'none'
        page1.style.display = 'flex'
        prev_btn.style.visibility = 'hidden'
    } else {
        page3.style.display = 'flex'
        page2.style.display = 'none'
        page1.style.display = 'none'
    }
    console.log("prev")
}