// code_dict : 각 줄의 플랫 상태
let code_dict = {
    "a": 0,
    "b": 0,
    "c": 0,
    "d": 0,
    "e": 0,
    "f": 0,
}

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


// 연속 누름 검사
let string_stack = []

// string_dict : 각 줄 중복 상태 검사
let string_dict = {
    "a": false,
    "b": false,
    "c": false,
    "d": false,
    "e": false,
    "f": false,
}

// play_timer 전역변수 선언
let play_timer; // 음악재생시 사용할 타이머
let arr_timer;

// play_timer 함수 실행되면 데이터 리셋하는 함수
let reset_dict = function () {
    code_dict = {
        "a": 0,
        "b": 0,
        "c": 0,
        "d": 0,
        "e": 0,
        "f": 0,
    }
    string_stack = []
    string_dict = {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
    }
    console.log("리셋!")
}

// 줄과 플렛이 잠시 머무르는 변수
let state_string = "";
let state_plat = 0;

// code 글자 클릭하는 이벤트 리스너
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

// code_dict, code 비교 함수 code_display함수의 간결화때문에 사용
let code_jdg = function (arr, code) {
    return JSON.stringify(arr) === JSON.stringify(code);
}

// code 판단 함수
let code_display = function (arr) {
    console.log(Object.values(string_dict)) // 현재 code 중복상태 출력 모두 true면 정상
    if (Object.values(string_dict).toString == [true, true, true, true, true, true].toString) {
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

// 음악 출력 함수
let play_music = function (state_string, state_plat) {
    let key = `${state_string}${state_plat}`;
    /** @type {HTMLAudioElement} */
    let audio = audio_dict[key];

    audio.currentTime = 0;
    audio.play();
}

// 전체 프로세스 진행 함수
let play_process = function (state_string, state_plat) {

    play_music(state_string, code_dict[state_string])

}

let string_arr = [];
let num_arr = [];
let start_timer;
let end_timer;

// 키보드 입력시 실행 함수
let input_key = function (e) {
    if (Object.is(Number(e.key), NaN)) {
        // 키보드 입력값이 숫자가 아닐때
        state_string = e.key;
        if (Object.keys(code_dict).includes(state_string)) {
            string_arr.push(state_string);
            console.log(string_arr)
            if (string_arr.length > 6) {
                string_arr = [];
                console.log("너무많이입력해서 초기화")
            }
        } else {
            console.log("이상한거입력하지마쇼")
        }
    } else {
        // 키보드 입력값이 숫자일때
        if (string_arr.length == 0) {
            console.log("숫자먼저입력금지")
        } else {
            state_plat = Number(e.key);
            num_arr.push(state_plat)
            console.log(num_arr)
        }

        // 프로세스 진행
        if ((num_arr.length == string_arr.length) && (string_arr.length != 0)) {
            let temp = (string_arr.length == 1) ? "정상입력" : "중복입력"
            console.log(temp)
            for (let i = 0; i < string_arr.length; i++) {
                new Promise(() => play_process(string_arr[i], num_arr[i]));
            }
            string_arr = [];
            num_arr = [];
        }
        state_string = "";
        state_plat = 0;
    }
}


document.addEventListener("keydown", input_key);
