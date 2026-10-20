#include <stdio.h>
#include <stdlib.h>

void alterar(int *p){
    *p = *p + 10;
}

int main(){
    int a = 20;

    alterar(&a);
    printf("%d", a);
    return 0;
}