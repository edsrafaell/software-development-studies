#include <stdio.h>
#include <stdlib.h>

int main(){
    int idade = 19;
    int *p = &idade;
    printf("%d", *p);
    printf("\n%p", &idade);

    int numero = 10;
    int *ponteiro = &numero;
    *ponteiro = 50;
    printf("\n%d", numero);
    return 0;
}