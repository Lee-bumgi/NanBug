#include "Adafruit_VL53L0X.h"
#include <SoftwareSerial.h>
SoftwareSerial mySerial(12, 13); // RX, TX

int input_pin_1_1[3] = {2,3,4};
int input_pin_2_1[3] = {5,6,7};
int input_pin_3_1[3] = {8,9,10};
String response_1 ="s";
char re[12];
int number_list_1[]={0,0,0};
int number_list_2[]={0,0,0};
int number_list_3[]={0,0,0};
int flag = 0;

Adafruit_VL53L0X TOF = Adafruit_VL53L0X();
 
void setup() {
  mySerial.begin(2400);
  Serial.begin(9600);
  for (int i =0; i<3; i++){
    pinMode(input_pin_1_1[i], INPUT);
    pinMode(input_pin_2_1[i], INPUT);
    pinMode(input_pin_3_1[i], INPUT);
  }

  Serial.println("VL53L0X test");
 
  // 일반적으로는 I2C 주소와 디버그 모드 설정값을 넘겨줘서 시작.
  // boolean Adafruit_VL53L0X::begin(uint8_t i2c_addr, boolean debug ) 
  
  if (!TOF.begin()) { // VL53L0X 기본 I2C 주소:0x29, 디버그 모드:false로 센서 준비.
    Serial.println(F("Failed to boot VL53L0X"));
    while(1);
  }
}
 
 
void loop() {
  if(Serial.available()==0) {
    VL53L0X_RangingMeasurementData_t measure; // 측정값을 담을 구조체 변수
    
  //  Serial.print("Reading a measurement... ");
    
    TOF.rangingTest(&measure, false); // true를 주면 디버그용 데이터를 받아옴
  // input_1 스위치 버튼 누를 시 최초 한번만 if문 통과하고 number_list의 인덱스를 1로 변경
  // input_1 스위치 버튼 해제 시 최초 한번만 if문 통과하고 number_list의 인덱스를 0으로 초기화
    for (int i =0; i<3; i++){
      if(digitalRead(input_pin_1_1[i])){
        if (number_list_1[i] == 0){
          number_list_1[i] = 1;
        }
      }else{
        if (number_list_1[i] == 1){
          number_list_1[i] = 0;
        }
      }

      if(digitalRead(input_pin_2_1[i])){
        if (number_list_2[i] == 0){
          number_list_2[i] = 1;
        }
      }else{
        if (number_list_2[i] == 1){
          number_list_2[i] = 0;
        }
      }

      if(digitalRead(input_pin_3_1[i])){
        if (number_list_3[i] == 0){
          number_list_3[i] = 1;
        }
      }else{
        if (number_list_3[i] == 1){
          number_list_3[i] = 0;
        }
      }
    }

   
  // 이번 측정의 상태값. 장치 의존적인 값. 일반적으로 4면 에러. 0이면 측정값이 정상임을 나타냄.
  //  Serial.println(measure.RangeStatus);
    if(measure.RangeStatus != 4 & measure.RangeMilliMeter < 300 & measure.RangeMilliMeter > 50) {  
  //    Serial.print("Distance (mm): "); 
      if (flag == 0){
        Serial.println(measure.RangeMilliMeter);
        for (int j = 0; j<3; j++){
          response_1 += number_list_1[j];
        }
        int number_list_1[]={0,0,0};
        for (int j = 0; j<3; j++){
          response_1 += number_list_2[j];
        }
        int number_list_2[]={0,0,0};
        for (int j = 0; j<3; j++){
          response_1 += number_list_3[j];
        }
        int number_list_3[]={0,0,0};

        response_1 += "e";
        response_1.toCharArray(re, 12);
        mySerial.write(re);
        flag = 1; 
        response_1 = "s";
        re[12];
      }
    } 
    else {
        flag = 0;
//        Serial.println(" out of range ");
    }
      
    delay(10);
    
  }

}
