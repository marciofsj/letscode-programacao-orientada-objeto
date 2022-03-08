const pessoa = {};

//Adicionando propriedades;
pessoa.nome = "Marcio";
pessoa.idade = 33;
pessoa.sexo = "M";
pessoa.altura = 1.77;
pessoa.peso = 88;
pessoa.signo = "gêmeos"

//Adicionando métodos;
pessoa.falar = function() {
    return "Olá, Mundo!";
}
pessoa.dormir = function() {
    return "zzzZZZzzzZZZ";
}
pessoa.correr = function() {
    return false;
}
pessoa.programar = function() {
    return "JavaScript"
}

console.log(pessoa);