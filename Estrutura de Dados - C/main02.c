#include <stdio.h>
int main(void) {
    int numero;
    int adicao(int x);
    printf("DIGITE UM NUMERO: ");
    scanf("%i", &numero);
    adicao(numero);
    return 0;
}

int adicao(int x){
    if (x <= 0){ 
        printf("0\n");
    } else {
        return x + adicao(x-1);
    }
    return 0;
}