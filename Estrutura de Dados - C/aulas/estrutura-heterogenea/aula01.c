#include <stdio.h>
#include <string.h>

struct Aluno {
    char nome[50];
    float media;
};

int main() {
    struct Aluno Aluno1;

    strcpy(Aluno1.nome, "Fael");
    Aluno1.media = 8.5;

    printf("Nome: %s\n", Aluno1.nome);
    printf("Media: %.2f\n", Aluno1.media);

    return 0;
}