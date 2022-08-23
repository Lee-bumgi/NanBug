let arr_key = []
let arr_dict = {
    "a": 0,
    "b": 0,
    "c": 0,
    "d": 0,
    "e": 0,
    "f": 0
}

let play_music = function () {
    let pt = 75;
    let pt_sum = (5 * pt);
    for(let i = 0;i<6;i++){
        setTimeout(function () {
            // console.log(`.${Object.keys(arr_dict)[i]+arr_dict[(Object.keys(arr_dict)[i])]}`)
            document.querySelector(`.${Object.keys(arr_dict)[i]+arr_dict[(Object.keys(arr_dict)[i])]}`).pause();
            document.querySelector(`.${Object.keys(arr_dict)[i]+arr_dict[(Object.keys(arr_dict)[i])]}`).currentTime = 0;
            document.querySelector(`.${Object.keys(arr_dict)[i]+arr_dict[(Object.keys(arr_dict)[i])]}`).play();
        }, (pt_sum-(i*pt)));
        console.log((pt_sum-(i*pt)))
    }
    
}

let dict_create = function () {

    arr_key.forEach(function(element, index, arr){
        if (typeof element == typeof "string") {
            
        } else if (typeof element == typeof 1) {
            console.log("dict추가")
            if ( typeof arr[index - 1] == typeof "string" ){
                arr_dict[arr[index - 1]] = element;
            }
        }
    });
}

let input_key = function (e) {
    console.log("keydown")
    // console.log(arr_key)
    // console.log(Number(e.key))
    // console.log(Object.is(Number(e.key), NaN))

    if (Object.is(Number(e.key), NaN)) {
        if (e.key == "s") {
            arr_key = []
            arr_dict = {
                "a": 0,
                "b": 0,
                "c": 0,
                "d": 0,
                "e": 0,
                "f": 0
            }
        } else if (e.key == "p") {
            // play_music(arr_key);
            let start = new Date();
            console.log(arr_key,"p누름");
            dict_create();
            console.log(arr_dict);
            play_music();
            let end = new Date();
            console.log(end.getTime()-start.getTime())
        } else {
            arr_key.push(e.key)
        }
    } else {
        arr_key.push(Number(e.key))
    }
}

document.addEventListener("keydown", input_key);

