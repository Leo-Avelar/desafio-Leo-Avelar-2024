import { informacoesAnimais, recintos} from './dados.js';
import { verificaTamanho, verificaCarnivoro, verificaHipopotamo, verificaMacaco, verificaViabilidade, calculaEspacoOcupado } from './verificacoes.js';


class RecintosZoo {
    analisaRecintos(animal, quantidade) {

        let dadosAnimal = informacoesAnimais[animal];

        if (!dadosAnimal) {
            return { erro: "Animal inválido" };
        }
        if(quantidade <= 0){
            return { erro: "Quantidade inválida" };
        }

        let possiveisRecintos = recintos.filter(recinto => dadosAnimal.biomas.some(bioma => recinto.bioma.includes(bioma)));

        possiveisRecintos = verificaTamanho(possiveisRecintos, dadosAnimal, quantidade);
        if (possiveisRecintos.erro) return possiveisRecintos;
        possiveisRecintos = verificaCarnivoro(possiveisRecintos, animal);
        if (possiveisRecintos.erro) return possiveisRecintos;
        possiveisRecintos = verificaHipopotamo(possiveisRecintos, animal);
        if (possiveisRecintos.erro) return possiveisRecintos;
        possiveisRecintos = verificaMacaco(possiveisRecintos, animal, quantidade);
        if (possiveisRecintos.erro) return possiveisRecintos;
            
        let espacoUsado = dadosAnimal.tamanho * quantidade;
        return formatarResultado(possiveisRecintos, espacoUsado, animal);
    }
}

function formatarResultado(possiveisRecintos, espacoUsado, animal){
    let recintosViaveis = [];

    possiveisRecintos.forEach(recinto => {
        recintosViaveis.push("Recinto " + recinto.numero + " (espaço livre: " + (recinto.tamanhoTotal - (calculaEspacoOcupado(recinto,animal) + espacoUsado)) + " total: " + recinto.tamanhoTotal + ")");
    });

    return {recintosViaveis};
}

export { RecintosZoo as RecintosZoo };






