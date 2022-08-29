#include <Wire.h>
// 블루투스 키보드 라이브러리
#include <BleKeyboard.h>
BleKeyboard bleKeyboard("NaNbug");
// 거리센서 라이브러리
#include "Adafruit_VL53L0X.h"

Adafruit_VL53L0X lox6 = Adafruit_VL53L0X();
Adafruit_VL53L0X lox4 = Adafruit_VL53L0X();
Adafruit_VL53L0X lox2 = Adafruit_VL53L0X();

VL53L0X_RangingMeasurementData_t measure6;
VL53L0X_RangingMeasurementData_t measure4;
VL53L0X_RangingMeasurementData_t measure2;

#define LOX6_ADDRESS 0x36
#define LOX4_ADDRESS 0x34
#define LOX2_ADDRESS 0x32

int output_pin[3] = {18, 19, 23};

int flag_6 = 0;
int flag_4 = 0;
int flag_2 = 0;

int delay_time = 10;
int delay_6 = 11;
int delay_4 = 11;
int delay_2 = 11;

int ir_length = 250;

int input_pin_6[3] = {26, 25, 17};
int input_pin_4[3] = {16, 27, 14};
int input_pin_2[3] = {12, 13, 36};

int btn_flag_6[3] = {0, 0, 0};
int btn_flag_4[3] = {0, 0, 0};
int btn_flag_2[3] = {0, 0, 0};

String result_6 = "k";
String result_4 = "c";
String result_2 = "8 ";

void setup() {
  // put your setup code here, to run once:
  Wire.begin();
  Serial.begin(115200);
    bleKeyboard.begin(); // 블루투스 키보드를 시작
  delay(10);
  for (int i = 0; i < 3; i++) {
    pinMode(input_pin_6[i], INPUT);
    pinMode(input_pin_4[i], INPUT);
    pinMode(input_pin_2[i], INPUT);
    pinMode(output_pin[i], OUTPUT);
    digitalWrite(output_pin[i], 0);
  }
  //  while (!Serial);

  // (6번 스트링, f - 적외선 연결)
  digitalWrite(output_pin[0], 1);
  Serial.println("Sensor_6 try to connect!");

  while (1) {
    if (lox6.begin(LOX6_ADDRESS)) { // 기본 I2C 어드레스에 연결합니다.
      Serial.println("Sensor_6 connected");
      break;
    } else if (lox6.begin(0x29)) { // 기본 I2C 어드레스에 연결합니다.
      Serial.println("Sensor_6 found!");
      lox6.setAddress(LOX6_ADDRESS); // I2C 어드레스를 0x36으로 변경합니다.
      Serial.println("Sensor_6 change address");
      break;
    }
    continue;
  }

  // (4번 스트링, d - 적외선 센서 연결)
  digitalWrite(output_pin[1], 1);
  Serial.println("Sensor_4 try to connect!");

  while (1) {
    if (lox4.begin(LOX4_ADDRESS)) { // 기본 I2C 어드레스에 연결합니다.
      Serial.println("Sensor_4 connected");
      break;
    } else if (lox4.begin(0x29)) { // 기본 I2C 어드레스에 연결합니다.
      Serial.println("Sensor_4 found!");
      lox4.setAddress(LOX4_ADDRESS); // I2C 어드레스를 0x34으로 변경합니다.
      Serial.println("Sensor_4 change address");
      break;
    }
    continue;
  }

  // (2번 스트링, b - 적외선 센서 연결)
  digitalWrite(output_pin[2], 1);
  Serial.println("Sensor_2 try to connect!");

  while (1) {
    if (lox2.begin(LOX2_ADDRESS)) { // 기본 I2C 어드레스에 연결합니다.
      Serial.println("Sensor_2 connected");
      break;
    } else if (lox2.begin(0x29)) { // 기본 I2C 어드레스에 연결합니다.
      Serial.println("Sensor_2 found!");
      lox2.setAddress(LOX2_ADDRESS); // I2C 어드레스를 0x32으로 변경합니다.
      Serial.println("Sensor_2 change address");
      break;
    }
    continue;
  }
}

void loop() {
  while (bleKeyboard.isConnected()) {
    // put your main code here, to run repeatedly:
    lox6.rangingTest(&measure6, false); // pass in 'true' to get debug data printout!
    lox4.rangingTest(&measure4, false); // pass in 'true' to get debug data printout!
    lox2.rangingTest(&measure2, false); // pass in 'true' to get debug data printout!

    for (int i = 0; i < 3; i++) {
      //6번 btn 클릭 (f, 6 - 개방(k), 1(l), 2(m), 3(n))
      if (digitalRead(input_pin_6[i])) {
        if (btn_flag_6[i] == 0) {
          btn_flag_6[i] = 1;
        }
      } else {
        if (btn_flag_6[i] == 1) {
          btn_flag_6[i] = 0;
        }
      }
      //4번 btn 클릭 (d, 4 - 개방(c), 1(d), 2(e), 3(f))
      if (digitalRead(input_pin_4[i])) {
        if (btn_flag_4[i] == 0) {
          btn_flag_4[i] = 1;
        }
      } else {
        if (btn_flag_4[i] == 1) {
          btn_flag_4[i] = 0;
        }
      }
      //2번 btn 클릭 (b, 2 - 개방(5), 1(6), 2(7), 3(8))
      if (digitalRead(input_pin_2[i])) {
        if (btn_flag_2[i] == 0) {
          btn_flag_2[i] = 1;
        }
      } else {
        if (btn_flag_2[i] == 1) {
          btn_flag_2[i] = 0;
        }
      }
    }

    // 6번 출력 (f, 6 - 개방(k), 1(l), 2(m), 3(n))
    if (btn_flag_6[2] == 1) {
      //    Serial.println("j");
      result_6 = "n";
    } else if (btn_flag_6[1] == 1) {
      //    Serial.println("i");
      result_6 = "m";
    } else if (btn_flag_6[0] == 1) {
      //    Serial.println("h");
      result_6 = "l";
    } else {
      //    Serial.println("g");
      result_6 = "k";
    }

    // 4번 출력 (d, 4 - 개방(c), 1(d), 2(e), 3(f))
    if (btn_flag_4[2] == 1) {
      //    Serial.println("b");
      result_4 = "f";
    } else if (btn_flag_4[1] == 1) {
      //    Serial.println("a");
      result_4 = "e";
    } else if (btn_flag_4[0] == 1) {
      //    Serial.println("0");
      result_4 = "d";
    } else {
      //    Serial.println("9");
      result_4 = "c";
    }

    // 2번 출력 (b, 2 - 개방(5), 1(6), 2(7), 3(8))
    if (btn_flag_2[2] == 1) {
      //    Serial.println("4");
      result_2 = "8";
    } else if (btn_flag_2[1] == 1) {
      //    Serial.println("3");
      result_2 = "7";
    } else if (btn_flag_2[0] == 1) {
      //    Serial.println("2");
      result_2 = "6";
    } else {
      //    Serial.println("1");
      result_2 = "5";
    }



    // e번 적외선 거리 센서 값 측정. 일반적으로 4면 에러. 0이면 측정값이 정상임을 나타냄.
    if (delay_6 > delay_time) {
      if (measure6.RangeStatus != 4 & measure6.RangeMilliMeter < ir_length) {
        if (flag_6 == 0) {
//          Serial.print(result_6);cc
                  bleKeyboard.print(result_6);
          flag_6 = 1;
          delay_6 = 0;
        }
      } else {
        flag_6 = 0;
      }
    }
    // c번 적외선 거리 센서 값 측정. 일반적으로 4면 에러. 0이면 측정값이 정상임을 나타냄.
    if (delay_4 > delay_time) {

      if (measure4.RangeStatus != 4 & measure4.RangeMilliMeter < ir_length) {
        if (flag_4 == 0) {
//          Serial.print(result_4);
                  bleKeyboard.print(result_4);
          flag_4 = 1;
          delay_4 = 0;
        }
      } else {
        flag_4 = 0;
      }
    }
    // a번 적외선 거리 센서 값 측정. 일반적으로 4면 에러. 0이면 측정값이 정상임을 나타냄.
    if (delay_2 > delay_time) {
      if (measure2.RangeStatus != 4 & measure2.RangeMilliMeter < ir_length) {
        if (flag_2 == 0) {
//          Serial.print(result_2);
                  bleKeyboard.print(result_2);
          flag_2 = 1;
          delay_2 = 0;
        }
      } else {
        flag_2 = 0;
      }
    }
    // delay 증가시키기
    if (0 <= delay_6 & delay_6 <= delay_time) {
      delay_6 ++;
    }
    if (0 <= delay_4 & delay_4 <= delay_time) {
      delay_4 ++;
    }
    if (0 <= delay_2 & delay_2 <= delay_time) {
      delay_2 ++;
    }

  }
}
