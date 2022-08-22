let state_string = "";
let state_plat = 0;

let play_music = function (state_string,state_plat) {
    setTimeout(function () {
        console.log(`.${state_string}${state_plat}`)
        document.querySelector(`.${state_string}${state_plat}`).pause();
        document.querySelector(`.${state_string}${state_plat}`).currentTime = 0;
        document.querySelector(`.${state_string}${state_plat}`).play();
    }, 0);
}

let input_key = function (e){
    if(Object.is(Number(e.key), NaN)){
        state_string = e.key
    } else {
        state_plat = Number(e.key);
        play_music(state_string,Number(e.key));
        state_string = "";
        state_plat = 0;
    }
}



document.addEventListener("keydown", input_key);