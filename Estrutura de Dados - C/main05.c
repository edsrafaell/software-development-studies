
#include <stdio.h>
#include <stdlib.h> 

int X(int n) {
    if (n == 0) {
        return 1;
    }

    if (n == 1) {
        return 1;
    }

    return X(n - 1) + 2 * X(n - 2);
}

int main() {
    int n;

    printf("Digite um numero: ");
    scanf("%d", &n);

    if (n < 0) {
        printf("Digite um numero maior ou igual a zero.\n");
    } else {
        printf("Resultado: %d\n", X(n));
    }

    return 0;
}
