#include <stdio.h>
#include <stdlib.h>

int soma(int x, int y){
    int z = x + y;
    
    printf("Resultado: %d\n",z);
    return 0;
}

int main(){
    int a = 10;
    int b = 20;
    int c = soma(a, b);

    return 0;
}