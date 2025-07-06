#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n, char control[10000]) {
    int i;
    for (i = 0; control[i] != '\0'; i++) {
        switch (control[i]) {
        case 'w':
            n += 1;
            break;
        case 's':
            n -= 1;
            break;
        case 'a':
            n -= 10;
            break;
        case 'd':
            n += 10;
            break;
        }
    }
    return n;
}