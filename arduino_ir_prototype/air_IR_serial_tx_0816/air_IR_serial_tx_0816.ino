#include "Adafruit_VL53L0X.h"
#include <SoftwareSerial.h>
SoftwareSerial mySerial(12, 13); // RX, TX

int input_pin[9] = {2, 3, 4, 5, 6, 7, 8, 9, 10};
String response_1 = "";
int number_list[9] = {0, 0, 0, 0, 0, 0, 0, 0, 0};

int flag = 0;

Adafruit_VL53L0X TOF = Adafruit_VL53L0X();

void setup() {
  mySerial.begin(115200);
  Serial.begin(9600);
  for (int i = 0; i < 9; i++) {
    pinMode(input_pin[i], INPUT);
  }

  Serial.println("VL53L0X test");

  // 일반적으로는 I2C 주소와 디버그 모드 설정값을 넘겨줘서 시작.
  // boolean Adafruit_VL53L0X::begin(uint8_t i2c_addr, boolean debug )

  if (!TOF.begin()) { // VL53L0X 기본 I2C 주소:0x29, 디버그 모드:false로 센서 준비.
    Serial.println(F("Failed to boot VL53L0X"));
    while (1);
  }
}


void loop() {
  if (Serial.available() == 0) {
    VL53L0X_RangingMeasurementData_t measure; // 측정값을 담을 구조체 변수

    //  Serial.print("Reading a measurement... ");

    TOF.rangingTest(&measure, false); // true를 주면 디버그용 데이터를 받아옴
    // input_1 스위치 버튼 누를 시 최초 한번만 if문 통과하고 number_list의 인덱스를 1로 변경
    // input_1 스위치 버튼 해제 시 최초 한번만 if문 통과하고 number_list의 인덱스를 0으로 초기화
    for (int i = 0; i < 9; i++) {
      if (digitalRead(input_pin[i])) {
        if (number_list[i] == 0) {
          number_list[i] = 1;
        }
      } else {
        if (number_list[i] == 1) {
          number_list[i] = 0;
        }
      }

    }


    // 이번 측정의 상태값. 장치 의존적인 값. 일반적으로 4면 에러. 0이면 측정값이 정상임을 나타냄.
    //    Serial.println(measure.RangeStatus);
    if (measure.RangeStatus != 4 & measure.RangeMilliMeter < 200) {
      //    if (measure.RangeStatus == 0) {

      if (flag == 0) {
        //        Serial.print("Distance (mm): ");
        //        Serial.println(measure.RangeMilliMeter);
        for (int j = 0; j < 9; j++) {
          response_1 += number_list[j];
        }
        int number_list[] = {0, 0, 0, 0, 0, 0, 0, 0, 0};

        mySerial.println(response_1);
        Serial.println(response_1);
        flag = 1;
        response_1 = "";
      }
    }
    else {
      flag = 0;
      //        Serial.println(" out of range ");
    }

    delay(10);

  }

}
