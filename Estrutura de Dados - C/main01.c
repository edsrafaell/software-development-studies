#include <stdio.h>
int main(void) {
    int numero;
    int subtracao(int x);
    printf("DIGITE UM NUMERO: ");
    scanf("%i", &numero);
    subtracao(numero);
    return 0;
}

int subtracao(int x){
    if (x == 0){
        printf("0\n");

    } else if (x > 0){
        printf("%i\n", x);
        x--;
        subtracao(x);
    } else if (x < 0){
        printf("%i\n", x);
        x++;
        subtracao(x);
    }
    return 0;
}