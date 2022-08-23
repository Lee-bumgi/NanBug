let code_dict = {
    "a": 0,
    "b": 0,
    "c": 0,
    "d": 0,
    "e": 0,
    "f": 0,
}

let arr_string = []

let string_dict = {
    "a": false,
    "b": false,
    "c": false,
    "d": false,
    "e": false,
    "f": false,
}


// code_dict, string_dict 에 프로퍼티 추가 금지
Object.seal(code_dict);
Object.seal(string_dict);

let state_string = "";
let state_plat = 0;

// arr_dict과 code 비교
let code_jdg = function (arr, code) {
    return JSON.stringify(arr) === JSON.stringify(code);
}

// 이펙트 넣어줘야함.
let code_display = function (arr) {
    let end_time = new Date().getTime();
    console.log(Object.values(string_dict))
    if (Object.values(string_dict).toString == [true,true,true,true,true,true].toString){
        if (code_jdg(arr, code_c)) {
            console.log("code_c")
        } else if (code_jdg(arr, code_d)) {
            console.log("code_d")
        } else if (code_jdg(arr, code_e)) {
            console.log("code_e")
        } else if (code_jdg(arr, code_f)) {
            console.log("code_f")
        } else if (code_jdg(arr, code_g)) {
            console.log("code_g")
        } else if (code_jdg(arr, code_a)) {
            console.log("code_a")
        } else {
            console.log("noncode")
        }
    }
}


let play_music = function (state_string, state_plat) {
    console.log(`.${state_string}${state_plat}`)
    document.querySelector(`.${state_string}${state_plat}`).pause();
    document.querySelector(`.${state_string}${state_plat}`).currentTime = 0;
    document.querySelector(`.${state_string}${state_plat}`).play();
}

let play_process = function (state_string, state_plat) {
    try {
        let start_time = new Date().getTime();
        // 입력된 문자 Object 형태로 만들기
        code_dict[state_string] = state_plat;

        // 입력된 줄 배열에 추가
        string_dict[state_string] = (string_dict[state_string] == false ) ? true : false
        arr_string.push(state_string)

        // 음악재생
        play_music(state_string, code_dict[state_string])
        console.log(code_dict)

        // 코드판단
        if(arr_string.length == 6){
            code_display(code_dict)
            arr_string = []
            console.log("6번초기화")
            string_dict = {
                "a": false,
                "b": false,
                "c": false,
                "d": false,
                "e": false,
                "f": false,
            }
        }
    } catch {
        // a b c d e f 및 플랫 잘못입력시 발생
        console.log("똑바로입력하쇼")
    }
}


let input_key = function (e) {
    if (Object.is(Number(e.key), NaN)) {
        // 키보드 입력값이 숫자가 아닐때
        state_string = e.key;
    } else {
        // 키보드 입력값이 숫자일때
        state_plat = Number(e.key);
        // 프로세스 진행
        try {
            play_process(state_string, Number(e.key));
        } catch {
            console.log("첫오류")
        }
        state_string = "";
        state_plat = 0;
    }
}


document.addEventListener("keydown", input_key);
