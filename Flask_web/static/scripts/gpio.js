// GPIO : LED 제어 부분
var Gpio = require('onoff').Gpio;
let btn = new Gpio(15,'in','both')


    // LED = new GPIO(18, 'out'),
    // ON_sw = new GPIO(24, 'in', 'both'),
    // OFF_sw = new GPIO(23, 'in', 'both'),
    // btn = new GPIO(12, 'in', 'both');
 
// ON_sw.watch(function(err, state){
//          if(state == 1){
//                  LED.writeSync(1);                               
//          }
// });
 
// OFF_sw.watch(function(err, state){
//          if(state == 1){
//                  LED.writeSync(0);
//          }
// });

btn.watch(function(err,state){
    if(state == 1){
        div = document.getElementsByTagName('div')
        div.style.backgroundColor = "red"
        console.log('btn push')
    }
})