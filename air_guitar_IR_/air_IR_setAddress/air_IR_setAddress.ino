#include <Wire.h>

#include "Adafruit_VL53L0X.h"
Adafruit_VL53L0X TOF = Adafruit_VL53L0X();
void setup() {
  Serial.begin(9600); // wait for serial port to open on native usb devices
  Serial.println("VL53L0X test");
  if (!TOF.begin(0x29)) { // 기본 I2C 어드레스에 연결합니다.
    Serial.println("Failed to find sensor");
    while (1);
  }
  Serial.println("Sensor found!");
  TOF.setAddress(0x30); // I2C 어드레스를 0x30으로 변경합니다.
  Serial.println("change address to 0x31");
  Serial.println();
  Serial.println("try connect default address");
  if (! TOF.begin(0x29)) { //변경 후에 다시 기본 어드레스로 연결을 시도하면 실패합니다.
    Serial.println("Failed to find sensor");
  } Serial.println("try connect new address");
  if (! TOF.begin(0x30)) { //변경된 어드레스로 연결하면 정상적으로 연결하는 것을 확인 할 수 있습니다.
    Serial.println("Failed to find sensor");
  }
  Serial.println("Sensor found!");
}
void loop() {
//  VL53L0X_RangingMeasurementData_t measure; // 측정값을 담을 구조체 변수
//
//  Serial.print("Reading a measurement... ");
//
//  TOF.rangingTest(&measure, false); // true를 주면 디버그용 데이터를 받아옴
//
//  // 이번 측정의 상태값. 장치 의존적인 값. 일반적으로 4면 에러. 0이면 측정값이 정상임을 나타냄.
//  if (measure.RangeStatus != 4) {
//    Serial.print("Distance (mm): "); Serial.println(measure.RangeMilliMeter);
//  }
//  else {
//    Serial.println(" out of range ");
//  }
//
//  delay(1000);

  byte error, address;
  int nDevices;

  Serial.println("Scanning...");

  nDevices = 0;
  for (address = 1; address < 127; address++ )
  {
    // The i2c_scanner uses the return value of
    // the Write.endTransmisstion to see if
    // a device did acknowledge to the address.
    Wire.beginTransmission(address);
    error = Wire.endTransmission();

    if (error == 0)
    {
      Serial.print("I2C device found at address 0x");
      if (address < 16)
        Serial.print("0");
      Serial.print(address, HEX);
      Serial.println("  !");

      nDevices++;
    }
    else if (error == 4)
    {
      Serial.print("Unknown error at address 0x");
      if (address < 16)
        Serial.print("0");
      Serial.println(address, HEX);
    }
  }
  if (nDevices == 0)
    Serial.println("No I2C devices found\n");
  else
    Serial.println("done\n");

  delay(5000);
}
