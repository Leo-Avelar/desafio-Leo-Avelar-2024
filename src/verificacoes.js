import { informacoesAnimais, carnivoros} from './dados.js';

function verificaTamanho(possiveisRecintos, dadosAnimal, quantidade){
    let espacoNecessario = dadosAnimal.tamanho * quantidade;

    possiveisRecintos = possiveisRecintos.filter(recinto => (calculaEspacoOcupado(recinto) + espacoNecessario <= recinto.tamanhoTotal));
    return verificaViabilidade(possiveisRecintos);
};

function verificaCarnivoro(possiveisRecintos, animal){
    let isCarnivorous = carnivoros.includes(animal);

    if(isCarnivorous == true){
        possiveisRecintos = possiveisRecintos.filter(recinto => (recinto.animaisExistentes.length == 0) || (recinto.animaisExistentes[0][0] == animal));
    }
    else{
        possiveisRecintos = possiveisRecintos.filter(recinto => (recinto.animaisExistentes.length == 0) || (carnivoros.includes(recinto.animaisExistentes[0][0]) == false));
    }
    return verificaViabilidade(possiveisRecintos);
};

function verificaHipopotamo(possiveisRecintos, animal){
    if(animal == 'HIPOPOTAMO'){
        possiveisRecintos = possiveisRecintos.filter(recinto => recinto.animaisExistentes.length == 0 || (recinto.bioma.includes('savana') && recinto.bioma.includes('rio')));
    }
    return verificaViabilidade(possiveisRecintos);
};

function verificaMacaco(possiveisRecintos, animal, quantidade){
    if(animal == 'MACACO' && quantidade == 1){
        possiveisRecintos = possiveisRecintos.filter(recinto => recinto.animaisExistentes[0] != null)
    }
    return verificaViabilidade(possiveisRecintos);
};

function verificaViabilidade(possiveisRecintos){
    if(possiveisRecintos <= 0){
        return { erro: "Não há recinto viável" };
    }
    return possiveisRecintos;
};

function calculaEspacoOcupado(recinto, animal){
    let espacoOcupado = 0;

    recinto.animaisExistentes.forEach(
        ([especie, quantidade]) => {
            espacoOcupado += ((informacoesAnimais[especie].tamanho) * quantidade);
        }
    );
    
    if(outraEspecie(recinto, animal) == true){
        espacoOcupado++;
    }
    return espacoOcupado;
};

function outraEspecie(recinto, animal){
    let outraEspecie = false;

    recinto.animaisExistentes.forEach(
        animalExistente => {

            if(animalExistente[0] != animal){
                outraEspecie = true;
            }
        }
    );
    return outraEspecie;
}

export { verificaTamanho, verificaCarnivoro, verificaHipopotamo, verificaMacaco, verificaViabilidade, calculaEspacoOcupado };