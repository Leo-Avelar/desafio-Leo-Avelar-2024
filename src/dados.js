const informacoesAnimais = {
    'LEAO':       { tamanho: 3, biomas: ['savana']},
    'LEOPARDO':   { tamanho: 2, biomas: ['savana']},
    'CROCODILO':  { tamanho: 3, biomas: ['rio']},
    'MACACO':     { tamanho: 1, biomas: ['savana', 'floresta']},
    'GAZELA':     { tamanho: 2, biomas: ['savana']},
    'HIPOPOTAMO': { tamanho: 4, biomas: ['savana', 'rio']}
};

const recintos = [
    { numero: 1, bioma: ['savana'],        tamanhoTotal: 10, animaisExistentes: [['MACACO', 3]]},
    { numero: 2, bioma: ['floresta'],      tamanhoTotal: 5,  animaisExistentes: []},
    { numero: 3, bioma: ['savana', 'rio'], tamanhoTotal: 7,  animaisExistentes: [['GAZELA', 1]]},
    { numero: 4, bioma: ['rio'],           tamanhoTotal: 8,  animaisExistentes: []},
    { numero: 5, bioma: ['savana'],        tamanhoTotal: 9,  animaisExistentes: [['LEAO', 1]]}
];

const carnivoros = ['LEAO', 'LEOPARDO', 'CROCODILO'];

export { informacoesAnimais, recintos, carnivoros};