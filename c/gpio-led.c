#include <stdio.h>
#include <wiringPi.h>

#define LED 4

int main() {
    if (wiringPiSetup() == -1) return 1;

    pinMode(LED, OUTPUT);

    for (;;) {
        digitalWrite(LED, HIGH);
        printf("on\n");
        delay(1000);
        digitalWrite(LED, LOW);
        printf("off\n");
        delay(1000);
    }

    return 0;
}
