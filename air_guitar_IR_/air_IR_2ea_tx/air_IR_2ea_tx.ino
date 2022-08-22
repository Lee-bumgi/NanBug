#include "Adafruit_VL53L0X.h"
#define LOX1_ADDRESS 0x30
#define LOX2_ADDRESS 0x29

Adafruit_VL53L0X lox1 = Adafruit_VL53L0X();
Adafruit_VL53L0X lox2 = Adafruit_VL53L0X();

VL53L0X_RangingMeasurementData_t measure1;
VL53L0X_RangingMeasurementData_t measure2;

int flag_1 = 0;
int flag_2 = 0;

void setup() {
  Serial.begin(115200);
  Serial.println("VL53L0X test");

  if (!lox1.begin(LOX1_ADDRESS)) { // VL53L0X 변경 I2C 주소:0x30, 디버그 모드:false로 센서 준비.
    Serial.println(F("Failed to boot VL53L0X_0x30"));
    while (1);
  }

  if (!lox2.begin(LOX2_ADDRESS)) { // VL53L0X 변경 I2C 주소:0x31, 디버그 모드:false로 센서 준비.
    Serial.println(F("Failed to boot VL53L0X_0x29"));
    while (1);
  }
}


void loop() {

  lox1.rangingTest(&measure1, false); // pass in 'true' to get debug data printout!
  lox2.rangingTest(&measure2, false); // true를 주면 디버그용 데이터를 받아옴!

  //  Serial.print("Reading a measurement... ");

  // 1번 적외선 거리 센서 값 측정. 일반적으로 4면 에러. 0이면 측정값이 정상임을 나타냄.
  if (measure1.RangeStatus != 4 & measure1.RangeMilliMeter < 300) {
    if (flag_1 == 0) {
      Serial.print("1_Distance (mm): "); Serial.println(measure1.RangeMilliMeter);
      flag_1 = 1;
    }

  }
  else {
    flag_1 = 0;
  }

  // 2번 적외선 거리 센서 값 측정. 일반적으로 4면 에러. 0이면 측정값이 정상임을 나타냄.
  if (measure2.RangeStatus != 4 & measure2.RangeMilliMeter < 300) {
    if (flag_2 == 0) {
      Serial.print("2_Distance (mm): "); Serial.println(measure2.RangeMilliMeter);
      flag_2 = 1;
    }
  }
  else {
    flag_2 = 0;
  }
  delay(10);

}
