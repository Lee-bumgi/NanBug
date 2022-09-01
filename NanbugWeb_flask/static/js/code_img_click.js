let pt = 75;
let pt_sum = (5 * pt);
let code_C = document.querySelector("#code_C")
let code_D = document.querySelector("#code_D")
let code_E = document.querySelector("#code_E")
let code_F = document.querySelector("#code_F")
let code_G = document.querySelector("#code_G")
let code_A = document.querySelector("#code_A")

let code_C7 = document.querySelector("#code_C7")
let code_D7 = document.querySelector("#code_D7")
let code_E7 = document.querySelector("#code_E7")
let code_F7 = document.querySelector("#code_F7")
let code_G7 = document.querySelector("#code_G7")
let code_A7 = document.querySelector("#code_A7")

let code_B7 = document.querySelector("#code_B7")
let code_Dm = document.querySelector("#code_Dm")
let code_Em = document.querySelector("#code_Em")
let code_Fm = document.querySelector("#code_Fm")
let code_Am = document.querySelector("#code_Am")


code_C.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_list['code_c'])[i]+Object.values(code_list['code_c'])[i])
        }, (pt_sum-(i*pt)));
    }
});
code_D.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_list['code_d'])[i]+Object.values(code_list['code_d'])[i])
        }, (pt_sum-(i*pt)));
    }
});
code_E.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_list['code_e'])[i]+Object.values(code_list['code_e'])[i])
        }, (pt_sum-(i*pt)));
    }
});
code_F.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_list['code_f'])[i]+Object.values(code_list['code_f'])[i])
        }, (pt_sum-(i*pt)));
    }
});
code_G.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_list['code_g'])[i]+Object.values(code_list['code_g'])[i])
        }, (pt_sum-(i*pt)));
    }
});
code_A.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_list['code_a'])[i]+Object.values(code_list['code_a'])[i])
        }, (pt_sum-(i*pt)));
    }
});



code_C7.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_list['code_c7'])[i]+Object.values(code_list['code_c7'])[i])
        }, (pt_sum-(i*pt)));
    }
});
code_D7.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_list['code_d7'])[i]+Object.values(code_list['code_d7'])[i])
        }, (pt_sum-(i*pt)));
    }
});
code_E7.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_list['code_e7'])[i]+Object.values(code_list['code_e7'])[i])
        }, (pt_sum-(i*pt)));
    }
});
code_F7.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_list['code_f7'])[i]+Object.values(code_list['code_f7'])[i])
        }, (pt_sum-(i*pt)));
    }
});
code_G7.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_list['code_g7'])[i]+Object.values(code_list['code_g7'])[i])
        }, (pt_sum-(i*pt)));
    }
});
code_A7.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_list['code_a7'])[i]+Object.values(code_list['code_a7'])[i])
        }, (pt_sum-(i*pt)));
    }
});

code_B7.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_list['code_b7'])[i]+Object.values(code_list['code_b7'])[i])
        }, (pt_sum-(i*pt)));
    }
});
code_Dm.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_list['code_dm'])[i]+Object.values(code_list['code_dm'])[i])
        }, (pt_sum-(i*pt)));
    }
});
code_Em.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_list['code_em'])[i]+Object.values(code_list['code_em'])[i])
        }, (pt_sum-(i*pt)));
    }
});
code_Fm.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_list['code_fm'])[i]+Object.values(code_list['code_fm'])[i])
        }, (pt_sum-(i*pt)));
    }
});
code_Am.addEventListener("click", function(){
    for(let i = 0;i <6;i++){
        setTimeout(() => {
            play_music(Object.keys(code_list['code_am'])[i]+Object.values(code_list['code_am'])[i])
        }, (pt_sum-(i*pt)));
    }
});


let play_music_test = function (state_string, state_plat) {
    console.log(`.${state_string}${state_plat}`)
    document.querySelector(`.${state_string}${state_plat}`).pause();
    document.querySelector(`.${state_string}${state_plat}`).currentTime = 0;
    document.querySelector(`.${state_string}${state_plat}`).play();
}

let test_play = function(e){
    // z == a7sus
    if(e.key =="z"){
        console.log("a7sus")
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_a7sus4'])[0],Object.values(code_list['code_a7sus4'])[0])
        }, 200);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_a7sus4'])[1],Object.values(code_list['code_a7sus4'])[1])
        }, 150);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_a7sus4'])[2],Object.values(code_list['code_a7sus4'])[2])
        }, 100);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_a7sus4'])[3],Object.values(code_list['code_a7sus4'])[3])
        }, 66);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_a7sus4'])[4],Object.values(code_list['code_a7sus4'])[4])
        }, 50);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_a7sus4'])[5],Object.values(code_list['code_a7sus4'])[5])
        }, 10);
    } else if (e.key == 'x') {
        // em7
        console.log("em7")
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_em7'])[0],Object.values(code_list['code_em7'])[0])
        }, 200);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_em7'])[1],Object.values(code_list['code_em7'])[1])
        }, 150);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_em7'])[2],Object.values(code_list['code_em7'])[2])
        }, 100);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_em7'])[3],Object.values(code_list['code_em7'])[3])
        }, 66);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_em7'])[4],Object.values(code_list['code_em7'])[4])
        }, 50);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_em7'])[5],Object.values(code_list['code_em7'])[5])
        }, 10);
    } else if (e.key == 'q') {
        // am7
        console.log("am7")
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_am7'])[0],Object.values(code_list['code_am7'])[0])
        }, 200);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_am7'])[1],Object.values(code_list['code_am7'])[1])
        }, 176);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_am7'])[2],Object.values(code_list['code_am7'])[2])
        }, 97);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_am7'])[3],Object.values(code_list['code_am7'])[3])
        }, 66);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_am7'])[4],Object.values(code_list['code_am7'])[4])
        }, 50);
    } else if (e.key == 'w') {
        // fm7
        console.log("fm7")
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_fm7'])[0],Object.values(code_list['code_fm7'])[0])
        }, 187);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_fm7'])[1],Object.values(code_list['code_fm7'])[1])
        }, 88);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_fm7'])[2],Object.values(code_list['code_fm7'])[2])
        }, 57);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_fm7'])[3],Object.values(code_list['code_fm7'])[3])
        }, 9);
    } else if (e.key == 'y') {
        // fm7
        console.log("g")
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_g'])[0],Object.values(code_list['code_g'])[0])
        }, 187);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_g'])[1],Object.values(code_list['code_g'])[1])
        }, 88);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_g'])[2],Object.values(code_list['code_g'])[2])
        }, 57);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_g'])[3],Object.values(code_list['code_g'])[3])
        }, 25);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_g'])[4],Object.values(code_list['code_g'])[4])
        }, 15);
        setTimeout(() => {
            play_music_test(Object.keys(code_list['code_g'])[5],Object.values(code_list['code_g'])[5])
        }, 0);
    }
}





code_A7.addEventListener("click", function () {
    setTimeout(() => {
        play_music(Object.keys(code_list['code_a7'])[i] + Object.values(code_list['code_a7'])[i])
    }, (pt_sum - (i * pt)));
});


document.addEventListener("keydown", test_play);