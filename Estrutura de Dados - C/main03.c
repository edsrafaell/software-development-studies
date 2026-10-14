#include <stdio.h>

int main(void) {
    int a = 10;

    printf("&a = %p, a = %d\n", (void *)&a, a);

    int *p1 = NULL;
    printf("p1 antes: %p\n", (void *)p1);

    int *p2;
    // p2 ainda não foi inicializado: não devemos utilizá-lo aqui.

    p1 = &a;
    printf("p1 depois: %p\n", (void *)p1);

    p2 = p1;
    printf("p2: %p\n", (void *)p2);

    *p2 = 4;

    printf("*p2 = %d\n", *p2);
    printf("a = %d\n", a);

    return 0;
}
