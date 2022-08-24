let pt = 75;
let pt_sum = (5 * pt);
let code_C = document.querySelector("#code_C")
let code_D = document.querySelector("#code_D")
let code_E = document.querySelector("#code_E")
let code_F = document.querySelector("#code_F")
let code_G = document.querySelector("#code_G")
let code_A = document.querySelector("#code_A")


code_C.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_c)[i],Object.values(code_c)[i])
        }, (pt_sum-(i*pt)));
    }
});
code_D.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_c)[i],Object.values(code_d)[i])
        }, (pt_sum-(i*pt)));
    }
});
code_E.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_c)[i],Object.values(code_e)[i])
        }, (pt_sum-(i*pt)));
    }
});
code_F.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_c)[i],Object.values(code_f)[i])
        }, (pt_sum-(i*pt)));
    }
});
code_G.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_c)[i],Object.values(code_g)[i])
        }, (pt_sum-(i*pt)));
    }
});
code_A.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_c)[i],Object.values(code_a)[i])
        }, (pt_sum-(i*pt)));
    }
});