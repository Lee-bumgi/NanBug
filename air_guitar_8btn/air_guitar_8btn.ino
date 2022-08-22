int input_pin_1[7] = {7,8,9,10,11,12,13};
int input_pin_2[1] = {2};
//String input = "";
//String response ="";
//String cmd = "temp";
int number_list[]={0,0,0,0,0,0,0};
int flag = 0;
void setup(){
  Serial.begin(9600);
  for (int i =0; i<7; i++){
    pinMode(input_pin_1[i], INPUT);
  }
  for (int i =0; i<1; i++){
    pinMode(input_pin_2[i], INPUT);
  }
}
void loop(){
  if(Serial.available()==0) {
  // input_1 스위치 버튼 누를 시 최초 한번만 if문 통과하고 number_list의 인덱스를 1로 변경
  // input_1 스위치 버튼 해제 시 최초 한번만 if문 통과하고 number_list의 인덱스를 0으로 초기화
    for (int i =0; i<7; i++){
      if(digitalRead(input_pin_1[i])){
        if (number_list[i] == 0){
          number_list[i] = 1;
        }
      }else{
        if (number_list[i] == 1){
          number_list[i] = 0;
        }
      }
    }
  // input_2 스위치 버튼 누를 시 number_list 값을 출력하고, number_list {0,0,0,0}으로 초기화
  // flag 변수 이용하여 최초 한번만 if문 통과
    for (int i =0; i<1; i++){
      if(digitalRead(input_pin_2[i])) {
        if (flag ==0){
          for (int j = 0; j<7; j++){
            Serial.print(number_list[j]);
          }
          delay(10);
          Serial.println(" ");
          flag =1;
          int number_list[]={0,0,0,0,0,0,0};
        }
      }else{
          flag =0;
      }
    }
  }
  delay(10);
}
