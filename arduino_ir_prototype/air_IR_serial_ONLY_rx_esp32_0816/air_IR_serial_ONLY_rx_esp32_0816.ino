// 블루투스 키보드 라이브러리
#include <BleKeyboard.h>
BleKeyboard bleKeyboard("NaNbug");
// ESP32 시리얼 사용 라이브러리
#include <HardwareSerial.h>
HardwareSerial mySerial_1(1); //3개의 시리얼 중 2번 채널을 사용
HardwareSerial mySerial_2(2); //3개의 시리얼 중 2번 채널을 사용


String response_1 = "";
String response_2 = "";
int flag = 0;

void setup() {
  Serial.begin(115200);
  mySerial_1.begin(115200, SERIAL_8N1, 12, 13);//추가로 사용할 시리얼. RX:12 / TX:13번 핀 사용(12<->13, 13<->12)
  mySerial_2.begin(115200, SERIAL_8N1, 19, 18);//추가로 사용할 시리얼. RX:19 / TX:18번 핀 사용(19<->13, 18<->12)
  bleKeyboard.begin(); // 블루투스 키보드를 시작

}

void loop() {
  // 블루투스 연결성공시 실행
  while (bleKeyboard.isConnected()) {
    if (mySerial_1.available()) {
      String command_1 = mySerial_1.readStringUntil('\n'); //추가 시리얼의 값을 수신하여 String으로 저장
      response_1 += command_1.substring(0, 9);
//      Serial.println(response_1);
      if (response_1 != "") {
        Serial.println(response_1);
        bleKeyboard.print("s");
        delay(20);
        bleKeyboard.print(response_1.substring(0, 4));
        delay(20);
        bleKeyboard.print(response_1.substring(4, 7));
        delay(20);
        bleKeyboard.print(response_1.substring(7, 10));
        delay(20);
        bleKeyboard.releaseAll();
        response_1 = "";
      }
    }
    if (mySerial_2.available()) {
      String command_2 = mySerial_2.readStringUntil('\n'); //추가 시리얼의 값을 수신하여 String으로 저장
      //      Serial.println(command); //기본 시리얼에 추가 시리얼 내용을 출력
      response_2 += command_2.substring(0, 9);
//      Serial.println(response_2);
      // response_2 출력값이 있을 때
      if (response_2 != "") {
        Serial.println(response_2);
        bleKeyboard.print(response_2.substring(0, 4));
        delay(20);
        bleKeyboard.print(response_2.substring(4, 7));
        delay(20);
        bleKeyboard.print(response_2.substring(7, 10));
        delay(20);
        bleKeyboard.println("e");
        delay(20);
        bleKeyboard.releaseAll();
        response_2 = "";
      }
    }

        delay(10);
//    delay();
  }
}
