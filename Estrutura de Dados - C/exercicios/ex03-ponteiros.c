#include <stdio.h>

int main() {
    int a, b, *p1, *p2;

    a = 5;
    b = 4;
    p1 = &a;
    p2 = &b;

    *p1 = *p1 + *p2;
    *p2 = *p1 - *p2;
    *p1 = *p1 - *p2;

    printf("%d %d\n", *p1, *p2);
    printf("%d %d\n", a, b);

    return 0;
} 