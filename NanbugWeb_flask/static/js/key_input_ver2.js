let key_map = {
    "1" : "a0",
    "2" : "a1",
    "3" : "a2",
    "4" : "a3",

    "5" : "b0",
    "6" : "b1",
    "7" : "b2",
    "8" : "b3",

    "9" : "c0",
    "0" : "c1",
    "a" : "c2",
    "b" : "c3",

    "c" : "d0",
    "d" : "d1",
    "e" : "d2",
    "f" : "d3",

    "g" : "e0",
    "h" : "e1",
    "i" : "e2",
    "j" : "e3",

    "k" : "f0",
    "l" : "f1",
    "m" : "f2",
    "n" : "f3"
}
Object.seal(key_map);

/**
 * @type {{ string: HTMLAudioElement} }
 */
 let audio_dict = {
    'f0': document.querySelector('.play_audio.f0'),
    'f1': document.querySelector('.play_audio.f1'),
    'f2': document.querySelector('.play_audio.f2'),
    'f3': document.querySelector('.play_audio.f3'),
    'e0': document.querySelector('.play_audio.e0'),
    'e1': document.querySelector('.play_audio.e1'),
    'e2': document.querySelector('.play_audio.e2'),
    'e3': document.querySelector('.play_audio.e3'),
    'd0': document.querySelector('.play_audio.d0'),
    'd1': document.querySelector('.play_audio.d1'),
    'd2': document.querySelector('.play_audio.d2'),
    'd3': document.querySelector('.play_audio.d3'),
    'c0': document.querySelector('.play_audio.c0'),
    'c1': document.querySelector('.play_audio.c1'),
    'c2': document.querySelector('.play_audio.c2'),
    'c3': document.querySelector('.play_audio.c3'),
    'b0': document.querySelector('.play_audio.b0'),
    'b1': document.querySelector('.play_audio.b1'),
    'b2': document.querySelector('.play_audio.b2'),
    'b3': document.querySelector('.play_audio.b3'),
    'a0': document.querySelector('.play_audio.a0'),
    'a1': document.querySelector('.play_audio.a1'),
    'a2': document.querySelector('.play_audio.a2'),
    'a3': document.querySelector('.play_audio.a3'),
}

// string_dict : 각 줄 중복 상태 검사
let string_dict = {
    "a": false,
    "b": false,
    "c": false,
    "d": false,
    "e": false,
    "f": false,
}

let text_c = document.querySelector(".text_c")
let text_d = document.querySelector(".text_d")
let text_e = document.querySelector(".text_e")
let text_f = document.querySelector(".text_f")
let text_g = document.querySelector(".text_g")
let text_a = document.querySelector(".text_a")

let code_text = document.querySelectorAll(".code_text");
let img_code = document.querySelectorAll(".img_code");

for (let i = 0; i < code_text.length; i++) {
    code_text[i].addEventListener("click", function (e) {
        e.preventDefault;
        // code_dict.previousSibling.click()
        console.log("클릭!")
        this.classList.remove("bounce");
        this.offsetWidth = this.offsetWidth;
        this.classList.add("bounce");
    });
}

let tmep_str;
let stack_play = [];

// play_timer 전역변수 선언
let play_timer; // 음악재생시 사용할 타이머

// code_dict, code 비교 함수 code_display함수의 간결화때문에 사용
let code_jdg = function (arr, code) {
    return JSON.stringify(arr) === JSON.stringify(code);
}

let reset_stack = ()=>{
    stack_play=[]
    console.log("리셋")
}

// 음악 출력 함수
let play_music = function (key) {
    /** @type {HTMLAudioElement} */
    let audio = audio_dict[key];
    audio.currentTime = 0;
    audio.play();
}

let input_key = function(e){
    if (stack_play.length==0){
        play_timer = setTimeout(reset_stack, 5000);
        console.log("타이머시작!");
    }
    //키보드 맵핑 변환
    tmep_str = key_map[e.key];
    stack_play.push(tmep_str);
    console.log("키보드",e.key,"맵핑값",tmep_str)

    //플레이
    new Promise(() => play_music(tmep_str));
    
    //코드검사
    string_dict[tmep_str[0]] = (string_dict[tmep_str[0]] == false) ? true : false
    let bool = Object.values(string_dict);
    if(stack_play.length==6) {
        console.log("코드판단&리셋")
        clearTimeout(play_timer);
        let arr = {};
        stack_play.sort();
        for(let i=0;i<stack_play.length;i++){
            arr[stack_play[i][0]] = Number(stack_play[i][1]);
        }
        stack_play = [];
        console.log(arr)
        if (code_jdg(arr, code_c)) {
            console.log("code_c")
            text_c.click();
        } else if (code_jdg(arr, code_d)) {
            console.log("code_d")
            text_d.click();
        } else if (code_jdg(arr, code_e)) {
            console.log("code_e")
            text_e.click();
        } else if (code_jdg(arr, code_f)) {
            console.log("code_f")
            text_f.click();
        } else if (code_jdg(arr, code_g)) {
            console.log("code_g")
            text_g.click();
        } else if (code_jdg(arr, code_a)) {
            console.log("code_a")
            text_a.click();
        } else {
            console.log("noncode")
        }
    }






}

document.addEventListener("keydown", input_key);