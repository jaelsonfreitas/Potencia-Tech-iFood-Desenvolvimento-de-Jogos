/*
    boolen 
    null
    undefined
    number
    string
    Symbol*/
    //Object

    const pessoa = {
        nome: "Jaelson",
        idade: 30,
        falar: function() {
            console.log(`Meu nome é: ${this.nome}`);
        }

    }
    pessoa.falar()

    // x.sobrenome = "Jose de Freitas"

    // console.log(x['sobrenome']);
