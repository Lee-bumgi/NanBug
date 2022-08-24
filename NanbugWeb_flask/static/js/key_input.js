// code_dict : 각 줄의 플랫 상태
let code_dict = {
    "a": 0,
    "b": 0,
    "c": 0,
    "d": 0,
    "e": 0,
    "f": 0,
}

// 연속 누름 검사
let arr_string = []

// string_dict : 각 줄 중복 상태 검사
let string_dict = {
    "a": false,
    "b": false,
    "c": false,
    "d": false,
    "e": false,
    "f": false,
}

// timer 전역변수 선언
let timer;

// timer 함수 실행되면 데이터 리셋하는 함수
let reset_dict = function () {
        code_dict = {
            "a": 0,
            "b": 0,
            "c": 0,
            "d": 0,
            "e": 0,
            "f": 0,
        }
        arr_string = []
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

// 음악 출력 함수
let play_music = function (state_string, state_plat) {
    console.log(`.${state_string}${state_plat}`)
    document.querySelector(`.${state_string}${state_plat}`).pause();
    document.querySelector(`.${state_string}${state_plat}`).currentTime = 0;
    document.querySelector(`.${state_string}${state_plat}`).play();
}

// 전체 프로세스 진행 함수
let play_process = function (state_string, state_plat) {

    // code_dict, string_dict 에 프로퍼티 추가 금지
    Object.seal(code_dict);
    Object.seal(string_dict);
    // try catch try에서 오류나면 catch로 진입
    try {
        // 첫번째 입력시 타이머 시작
        if (arr_string.length == 0) {
            timer = setTimeout(reset_dict, 5000);
            console.log("타이머시작!")
        }

        // 입력된 문자 Object 형태로 만들기
        code_dict[state_string] = state_plat;

        // 입력 중복 검사
        string_dict[state_string] = (string_dict[state_string] == false) ? true : false

        // 입력수 누적
        arr_string.push(state_string)

        // 음악재생
        play_music(state_string, code_dict[state_string])
        console.log(code_dict)

        // 6번 입력시 코드판단
        if (arr_string.length == 6) {
            console.log("(타이머 & code) 초기화")
            clearTimeout(timer);
            code_display(code_dict)
            arr_string = []
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

// 키보드 입력시 실행 함수
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
let browserPoint = (event)=>{
    console.log(`브라우저 좌표 : (${event.pageX}, ${event.pageY})`);
}
let clientPoint = (event) =>{
    console.log(`화면 좌표 : (${event.clientX}, ${event.clientY})`);
}
document.addEventListener('click',e=>{
    browserPoint(e);
    clientPoint(e);
});

