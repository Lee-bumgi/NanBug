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
            input.value = input.value +"c"
            input.click();
        } else if (code_jdg(arr, code_d)) {
            console.log("code_d")
            input.value = input.value +"d"
            input.click();
        } else if (code_jdg(arr, code_e)) {
            console.log("code_e")
            input.value = input.value +"e"
            input.click();
        } else if (code_jdg(arr, code_f)) {
            console.log("code_f")
            input.value = input.value +"f"
            input.click();
        } else if (code_jdg(arr, code_g)) {
            console.log("code_g")
            input.value = input.value +"g"
            input.click();
        } else if (code_jdg(arr, code_a)) {
            console.log("code_a")
            input.value = input.value +"a"
            input.click();
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
        if (string_stack.length == 0) {
            play_timer = setTimeout(reset_dict, 5000);
            console.log("타이머시작!")
        }

        // 입력된 string_arr Object 형태로 만들기
        code_dict[state_string] = state_plat;

        // 입력 중복 검사
        string_dict[state_string] = (string_dict[state_string] == false) ? true : false

        // 입력수 누적
        string_stack.push(state_string)

        // 음악재생
        play_music(state_string, code_dict[state_string])
        console.log(code_dict)

        // 6번 입력시 코드판단
        if (string_stack.length == 6) {
            console.log("(타이머 & code) 초기화")
            clearTimeout(play_timer);
            code_display(code_dict)
            string_stack = []
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
            if(string_arr.length>6){
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
                if (i == 0) {
                    start_timer = new Date();
                }
                play_process(string_arr[i], num_arr[i]);
                if (i == (string_arr.length - 1)) {
                    end_timer = new Date()
                    let get_time = end_timer - start_timer
                    console.log("재생시간", get_time)
                }
            }
            string_arr = [];
            num_arr = [];
        }
        state_string = "";
        state_plat = 0;
    }
}

document.addEventListener("keydown", input_key);
