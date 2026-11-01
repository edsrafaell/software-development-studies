#include <stdio.h>
#include <stdlib.h>

int main(){
    int x = 10;
    int *pont = &x;
    *pont = 30;
    printf("%d\n", x);
    *pont = 50;
    printf("%d", x);
}