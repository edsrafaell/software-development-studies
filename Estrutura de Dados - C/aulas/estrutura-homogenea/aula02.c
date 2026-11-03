#include <stdio.h>

int main(){
    float notas[5] = {7.0, 10.0, 3.0, 5.0, 2.0};

    for (int i = 0; i < 5; i++)
    {
        printf("\nNota: %.2f", notas[i]);
    }
    
    return 0;
}