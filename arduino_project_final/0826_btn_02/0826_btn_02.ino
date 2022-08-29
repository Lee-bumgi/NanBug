#include <Wire.h>
// 블루투스 키보드 라이브러리
#include <BleKeyboard.h>
BleKeyboard bleKeyboard("NaNbug_2");
// 거리센서 라이브러리
#include "Adafruit_VL53L0X.h"

Adafruit_VL53L0X lox5 = Adafruit_VL53L0X();
Adafruit_VL53L0X lox3 = Adafruit_VL53L0X();
Adafruit_VL53L0X lox1 = Adafruit_VL53L0X();

VL53L0X_RangingMeasurementData_t measure5;
VL53L0X_RangingMeasurementData_t measure3;
VL53L0X_RangingMeasurementData_t measure1;

#define LOX5_ADDRESS 0x35
#define LOX3_ADDRESS 0x33
#define LOX1_ADDRESS 0x31

int output_pin[3] = {18, 19, 23};

int flag_5 = 0;
int flag_3 = 0;
int flag_1 = 0;

int delay_time = 10;
int delay_5 = 11;
int delay_3 = 11;
int delay_1 = 11;

int ir_length = 250;

int input_pin_5[3] = {26, 25, 17};
int input_pin_3[3] = {16, 27, 14};
int input_pin_1[3] = {12, 13, 36};

int btn_flag_5[3] = {0, 0, 0};
int btn_flag_3[3] = {0, 0, 0};
int btn_flag_1[3] = {0, 0, 0};

String result_5 = "g";
String result_3 = "9";
String result_1 = "1";

void setup() {
  // put your setup code here, to run once:
  Wire.begin();
  Serial.begin(115200);
    bleKeyboard.begin(); // 블루투스 키보드를 시작
  delay(10);
  for (int i = 0; i < 3; i++) {
    pinMode(input_pin_5[i], INPUT);
    pinMode(input_pin_3[i], INPUT);
    pinMode(input_pin_1[i], INPUT);
    pinMode(output_pin[i], OUTPUT);
    digitalWrite(output_pin[i], 0);
  }
  //  while (!Serial);

  // (5번 스트링, e - 적외선 연결)
  digitalWrite(output_pin[0], 1);
  Serial.println("Sensor_5 try to connect!");

  while (1) {
    if (lox5.begin(LOX5_ADDRESS)) { // 기본 I2C 어드레스에 연결합니다.
      Serial.println("Sensor_5 connected");
      break;
    } else if (lox5.begin(0x29)) { // 기본 I2C 어드레스에 연결합니다.
      Serial.println("Sensor_5 found!");
      lox5.setAddress(LOX5_ADDRESS); // I2C 어드레스를 0x35으로 변경합니다.
      Serial.println("Sensor_5 change address");
      break;
    }
    continue;
  }

  // (3번 스트링, c - 적외선 센서 연결)
  digitalWrite(output_pin[1], 1);
  Serial.println("Sensor_3 try to connect!");

  while (1) {
    if (lox3.begin(LOX3_ADDRESS)) { // 기본 I2C 어드레스에 연결합니다.
      Serial.println("Sensor_3 connected");
      break;
    } else if (lox3.begin(0x29)) { // 기본 I2C 어드레스에 연결합니다.
      Serial.println("Sensor_3 found!");
      lox3.setAddress(LOX3_ADDRESS); // I2C 어드레스를 0x33으로 변경합니다.
      Serial.println("Sensor_3 change address");
      break;
    }
    continue;
  }

  // (1번 스트링, a - 적외선 센서 연결)
  digitalWrite(output_pin[2], 1);
  Serial.println("Sensor_1 try to connect!");

  while (1) {
    if (lox1.begin(LOX1_ADDRESS)) { // 기본 I2C 어드레스에 연결합니다.
      Serial.println("Sensor_1 connected");
      break;
    } else if (lox1.begin(0x29)) { // 기본 I2C 어드레스에 연결합니다.
      Serial.println("Sensor_1 found!");
      lox1.setAddress(LOX1_ADDRESS); // I2C 어드레스를 0x31으로 변경합니다.
      Serial.println("Sensor_1 change address");
      break;
    }
    continue;
  }
}

void loop() {
  while (bleKeyboard.isConnected()) {
    // put your main code here, to run repeatedly:
    lox5.rangingTest(&measure5, false); // pass in 'true' to get debug data printout!
    lox3.rangingTest(&measure3, false); // pass in 'true' to get debug data printout!
    lox1.rangingTest(&measure1, false); // pass in 'true' to get debug data printout!

    for (int i = 0; i < 3; i++) {
      //5번 btn 클릭 (e, 5 - 개방(g), 1(h), 2(i), 3(j))
      if (digitalRead(input_pin_5[i])) {
        if (btn_flag_5[i] == 0) {
          btn_flag_5[i] = 1;
        }
      } else {
        if (btn_flag_5[i] == 1) {
          btn_flag_5[i] = 0;
        }
      }
      //3번 btn 클릭 (c, 3 - 개방(9), 1(0), 2(a), 3(b))
      if (digitalRead(input_pin_3[i])) {
        if (btn_flag_3[i] == 0) {
          btn_flag_3[i] = 1;
        }
      } else {
        if (btn_flag_3[i] == 1) {
          btn_flag_3[i] = 0;
        }
      }
      //1번 btn 클릭 (a, 1 - 개방(1), 1(2), 2(3), 3(4))
      if (digitalRead(input_pin_1[i])) {
        if (btn_flag_1[i] == 0) {
          btn_flag_1[i] = 1;
        }
      } else {
        if (btn_flag_1[i] == 1) {
          btn_flag_1[i] = 0;
        }
      }
    }

    // 5번 출력 (e, 5 - 개방(g), 1(h), 2(i), 3(j))
    if (btn_flag_5[2] == 1) {
      //    Serial.println("j");
      result_5 = "j";
    } else if (btn_flag_5[1] == 1) {
      //    Serial.println("i");
      result_5 = "i";
    } else if (btn_flag_5[0] == 1) {
      //    Serial.println("h");
      result_5 = "h";
    } else {
      //    Serial.println("g");
      result_5 = "g";
    }

    // 3번 출력 (c, 3 - 개방(9), 1(0), 2(a), 3(b))
    if (btn_flag_3[2] == 1) {
      //    Serial.println("b");
      result_3 = "b";
    } else if (btn_flag_3[1] == 1) {
      //    Serial.println("a");
      result_3 = "a";
    } else if (btn_flag_3[0] == 1) {
      //    Serial.println("0");
      result_3 = "0";
    } else {
      //    Serial.println("9");
      result_3 = "9";
    }

    // 1번 출력 (a, 1 - 개방(1), 1(2), 2(3), 3(4))
    if (btn_flag_1[2] == 1) {
      //    Serial.println("4");
      result_1 = "4";
    } else if (btn_flag_1[1] == 1) {
      //    Serial.println("3");
      result_1 = "3";
    } else if (btn_flag_1[0] == 1) {
      //    Serial.println("2");
      result_1 = "2";
    } else {
      //    Serial.println("1");
      result_1 = "1";
    }



    // e번 적외선 거리 센서 값 측정. 일반적으로 4면 에러. 0이면 측정값이 정상임을 나타냄.
    if (delay_5 > delay_time) {
      if (measure5.RangeStatus != 4 & measure5.RangeMilliMeter < ir_length) {
        if (flag_5 == 0) {
//          Serial.print(result_5);
                  bleKeyboard.print(result_5);
          flag_5 = 1;
          delay_5 = 0;
        }
      } else {
        flag_5 = 0;
      }
    }
    // c번 적외선 거리 센서 값 측정. 일반적으로 4면 에러. 0이면 측정값이 정상임을 나타냄.
    if (delay_3 > delay_time) {

      if (measure3.RangeStatus != 4 & measure3.RangeMilliMeter < ir_length) {
        if (flag_3 == 0) {
//          Serial.print(result_3);
                  bleKeyboard.print(result_3);
          flag_3 = 1;
          delay_3 = 0;
        }
      } else {
        flag_3 = 0;
      }
    }
    // a번 적외선 거리 센서 값 측정. 일반적으로 4면 에러. 0이면 측정값이 정상임을 나타냄.
    if (delay_1 > delay_time) {
      if (measure1.RangeStatus != 4 & measure1.RangeMilliMeter < ir_length) {
        if (flag_1 == 0) {
//          Serial.print(result_1);
                  bleKeyboard.print(result_1);
          flag_1 = 1;
          delay_1 = 0;
        }
      } else {
        flag_1 = 0;
      }
    }
    // delay 증가시키기
    if (0 <= delay_5 & delay_5 <= delay_time) {
      delay_5 ++;
    }
    if (0 <= delay_3 & delay_3 <= delay_time) {
      delay_3 ++;
    }
    if (0 <= delay_1 & delay_1 <= delay_time) {
      delay_1 ++;
    }
  }

}
