/**
     * por padrão o numero é gerado uma quantidade
     * mas o usuario pode modificar a quantidade
     * sem ultrapassar o limite de verificação
     */
export function mega(quantidade = 6, numeros = []){
    let qtde = +quantidade
    /**
     * verifica se a quantidade é menor que 6
     * e maior que 60
     * se a verificação for valida ele retorna um erro
     */

    if( qtde < 6 && qtde > 60){
        throw " quantidade invalida"
    }
    /**
     * verifica se o tamanho do array
     * esta do mesmo tamanho que a 
     * quantidade e também 
     * mostra o resultado em ordem crescente
     */
    if(numeros.length === qtde){
        return numeros.sort((n1, n2) => n1 - n2)
    }

    /**
     * cria uma constante que recebe como valor
     * um número aleatório inteiro + 1
     */

    const numeroAleatorio = parseInt(Math.random() * 60) + 1

    /**
     * verifica se o numero aleatório ja esta
     * incluso dentro do array, caso esteja
     * ele retorna de forma recursiva e inicia
     * a função novamente tentando um outro valor
     */

    if(!numeros.includes(numeroAleatorio)){
        return mega(qtde, [...numeros, numeroAleatorio])
    }else{
        return mega(qtde, numeros)
    }

}