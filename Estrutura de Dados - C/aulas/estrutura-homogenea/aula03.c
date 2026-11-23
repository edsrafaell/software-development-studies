#include <stdio.h>
#include <string.h>

#define max 3

typedef struct {
    char modelo[30];
    char placa[8];
    int qtdeLugares;
} Carro;

void mostrar(Carro c)
{
    printf("Modelo: %s\n", c.modelo);
    printf("Placa: %s\n", c.placa);
    printf("Quantidade de lugares: %d\n", c.qtdeLugares);
}

void inserir(char modelo[], char placa[], int qtdeLugares)
{
    Carro c;

    strcpy(c.modelo, modelo);
    strcpy(c.placa, placa);
    c.qtdeLugares = qtdeLugares;

    mostrar(c);
}

int main()
{
    inserir("Fusca", "LWN5967", 5);
    inserir("Uno", "PTO4520",9)

    return 0;
}
