// p 누르면 도 나오는 테스트 함수
let test_p = function (e) {

    console.log(e.key);
    console.log(e.keyCode)
    if (e.key == "p") {
        setTimeout(function () {
            document.querySelector('.do_5-001').pause();
            document.querySelector('.do_5-001').currentTime = 0;
            document.querySelector('.do_5-001').play();
        }, 0)
        console.log("play1")

        setTimeout(function () {
            document.querySelector('.do_5-001').pause();
            document.querySelector('.do_5-001').currentTime = 0;
            document.querySelector('.do_5-001').play();
        }, 100)
        console.log("play2")

        // setTimeout(function(){
        //     document.querySelector('.mi_1-000').play();
        // },500)
        // console.log("play3")

    }


}

let arr_total = [];
let arr_1 = [];
let arr_2 = [];
let arr_3 = [];
let arr_4 = [];
let arr_5 = [];
let arr_6 = [];




let gan = 75;
let arr_1_t = gan * 5;
let arr_2_t = gan * 4;
let arr_3_t = gan * 3;
let arr_4_t = gan * 2;
let arr_5_t = gan;
let arr_6_t = 0;





// 1. 적외선 하나당 소리 출력?

// 2. 거꾸로도 인식해야함

// 두개 양립 불가

let play_gi = function (e) {

    console.log(e.key);
    console.log(e.keyCode)

    if (e.key == "s") {
        // arr_total = [];
        // arr_1 = [];
        // arr_2 = [];
        // arr_3 = [];
        // arr_4 = [];
        // arr_5 = [];
        // arr_6 = [];


        // let p_a = document.querySelectorAll('.play_audio');
        // for (let j = 0; j < gan * 5; j += gan) {
        //     setTimeout(function () {
        //         for (let i = 0; i < p_a.length; i++) {
        //             p_a[i].pause();
        //             p_a[i].currentTime = 0;
        //         }
        //     }, j)
        // }


    } else if (e.key == "1") {
        arr_total.push(1);
    } else if (e.key == "0") {
        arr_total.push(0);
    } else if (e.key == "e") {
        console.log(arr_total);
        arr_6 = arr_total.slice(0, 3);
        arr_5 = arr_total.slice(3, 6);
        arr_4 = arr_total.slice(6, 9);
        arr_3 = arr_total.slice(9, 12);
        arr_2 = arr_total.slice(12, 15);
        arr_1 = arr_total.slice(15, 18);
        console.log(arr_1);
        console.log(arr_2);
        console.log(arr_3);
        console.log(arr_4);
        console.log(arr_5);
        console.log(arr_6);
        // 1번째줄 맵핑
        

        if (arr_1 == [0, 0, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.mi_1-000').pause();
                document.querySelector('.mi_1-000').currentTime = 0;
                document.querySelector('.mi_1-000').play();
            }, arr_1_t);
        } else if (arr_1 == [1, 0, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.fa_1-100').pause();
                document.querySelector('.fa_1-100').currentTime = 0;
                document.querySelector('.fa_1-100').play();
            }, arr_1_t);
        } else if (arr_1 == [0, 1, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.fa_shap_1-010').pause();
                document.querySelector('.fa_shap_1-010').currentTime = 0;
                document.querySelector('.fa_shap_1-010').play();
            }, arr_1_t);
        } else if (arr_1 == [0, 0, 1].toString()) {
            setTimeout(function () {
                document.querySelector('.sol_1-001').pause();
                document.querySelector('.sol_1-001').currentTime = 0;
                document.querySelector('.sol_1-001').play();
            }, arr_1_t);
        } else { console.log("fail"); }
        // 2번째줄 맵핑
        if (arr_2 == [0, 0, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.si_2-000').pause();
                document.querySelector('.si_2-000').currentTime = 0;
                document.querySelector('.si_2-000').play();
            }, arr_2_t);
        } else if (arr_2 == [1, 0, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.do_2-100').pause();
                document.querySelector('.do_2-100').currentTime = 0;
                document.querySelector('.do_2-100').play();
            }, arr_2_t);
        } else if (arr_2 == [0, 1, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.do_shap_2-010').pause();
                document.querySelector('.do_shap_2-010').currentTime = 0;
                document.querySelector('.do_shap_2-010').play();
            }, arr_2_t);
        } else if (arr_2 == [0, 0, 1].toString()) {
            setTimeout(function () {
                document.querySelector('.re_2-001').pause();
                document.querySelector('.re_2-001').currentTime = 0;
                document.querySelector('.re_2-001').play();
            }, arr_2_t);
        } else { console.log("fail"); }
        // 3번째줄 맵핑
        if (arr_3 == [0, 0, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.sol_3-000').pause();
                document.querySelector('.sol_3-000').currentTime = 0;
                document.querySelector('.sol_3-000').play();
            }, arr_3_t);
        } else if (arr_3 == [1, 0, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.sol_shap_3-100').pause();
                document.querySelector('.sol_shap_3-100').currentTime = 0;
                document.querySelector('.sol_shap_3-100').play();
            }, arr_3_t);
        } else if (arr_3 == [0, 1, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.la_3-010').pause();
                document.querySelector('.la_3-010').currentTime = 0;
                document.querySelector('.la_3-010').play();
            }, arr_3_t);
        } else if (arr_3 == [0, 0, 1].toString()) {
            setTimeout(function () {
                document.querySelector('.la_shap_3-001').pause();
                document.querySelector('.la_shap_3-001').currentTime = 0;
                document.querySelector('.la_shap_3-001').play();
            }, arr_3_t);
        } else { console.log("fail"); }
        // 4번째줄 맵핑
        if (arr_4 == [0, 0, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.re_4-000').pause();
                document.querySelector('.re_4-000').currentTime = 0;
                document.querySelector('.re_4-000').play();
            }, arr_4_t);
        } else if (arr_4 == [1, 0, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.re_shap_4-100').pause();
                document.querySelector('.re_shap_4-100').currentTime = 0;
                document.querySelector('.re_shap_4-100').play();
            }, arr_4_t);
        } else if (arr_4 == [0, 1, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.mi_4-010').pause();
                document.querySelector('.mi_4-010').currentTime = 0;
                document.querySelector('.mi_4-010').play();
            }, arr_4_t);
        } else if (arr_4 == [0, 0, 1].toString()) {
            setTimeout(function () {
                document.querySelector('.fa_4-001').pause();
                document.querySelector('.fa_4-001').currentTime = 0;
                document.querySelector('.fa_4-001').play();
            }, arr_4_t);
        } else { console.log("fail"); }
        // 5번째줄 맵핑
        if (arr_5 == [0, 0, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.la_5-000').pause();
                document.querySelector('.la_5-000').currentTime = 0;
                document.querySelector('.la_5-000').play();
            }, arr_5_t);
        } else if (arr_5 == [1, 0, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.la_shap_5-100').pause();
                document.querySelector('.la_shap_5-100').currentTime = 0;
                document.querySelector('.la_shap_5-100').play();
            }, arr_5_t);
        } else if (arr_5 == [0, 1, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.si_5-010').pause();
                document.querySelector('.si_5-010').currentTime = 0;
                document.querySelector('.si_5-010').play();
            }, arr_5_t);
        } else if (arr_5 == [0, 0, 1].toString()) {
            setTimeout(function () {
                document.querySelector('.do_5-001').pause();
                document.querySelector('.do_5-001').currentTime = 0;
                document.querySelector('.do_5-001').play();
            }, arr_5_t);
        } else { console.log("fail"); }
        // 6번째줄 맵핑
        if (arr_6 == [0, 0, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.mi_6-000').pause();
                document.querySelector('.mi_6-000').currentTime = 0;
                document.querySelector('.mi_6-000').play();
            }, arr_6_t);
        } else if (arr_6 == [1, 0, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.fa_6-100').pause();
                document.querySelector('.fa_6-100').currentTime = 0;
                document.querySelector('.fa_6-100').play();
            }, arr_6_t);
        } else if (arr_6 == [0, 1, 0].toString()) {
            setTimeout(function () {
                document.querySelector('.fa_shap_6-010').pause();
                document.querySelector('.fa_shap_6-010').currentTime = 0;
                document.querySelector('.fa_shap_6-010').play();
            }, arr_6_t);
        } else if (arr_6 == [0, 0, 1].toString()) {
            setTimeout(function () {
                document.querySelector('.sol_6-001').pause();
                document.querySelector('.sol_6-001').currentTime = 0;
                document.querySelector('.sol_6-001').play();
            }, arr_6_t);
        } else { console.log("fail"); }
    }


    if (e.key == "t") {
        console.log(arr_total);
        console.log(arr_1);
        console.log(arr_2);
        console.log(arr_3);
        console.log(arr_4);
        console.log(arr_5);
        console.log(arr_6);
    }

    if (e.key == "c") {
        arr_total = [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
    }
    if (e.key == "d") {
        arr_total = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0];
    }
    if (e.key == "2") {
        arr_total = [0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (e.key == "o") {
        arr_total = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

}

document.addEventListener("keydown", play_gi);
document.addEventListener("keydown", test_p);