#include <stdio.h>
#include <stdlib.h>

int main(){
    int vetor[3] = {10, 20, 30};
    int *p = vetor;
    p++;
    printf("%d\n", *p);
    (*p)++;
    printf("%d\n", *p);
    return 0;
}