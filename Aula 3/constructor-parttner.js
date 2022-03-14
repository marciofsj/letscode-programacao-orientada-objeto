function Conta(agencia=0, numero=0, digito=0, saldo=0, titular=null, tipo="CC", lancamentos=[]) {
    // propriedades
    this.agencia = agencia;
    this.numero = numero;
    this.digito = digito;
    this.saldo = saldo;
    this.titular = titular;
    this.tipo = tipo;
    this.lancamentos = [`Saldo: R$${saldo}`];
    // métodos (adicionar ao corpo do construtor == má prática)
    /*
    this.sacar = function() {};
    this.depositar = function() {};
    this.transferir = function() {};
    this.extrato = function() {
      return this.saldo;
    };
    */
  }
  
  // métodos e props (adicionar ao protótipo do construtor == boa prática)
  Conta.prototype.banco = "C6 Bank";
  
  Conta.prototype.depositar = function(valor) {
        this.saldo += valor;
        this.lancamentos.push(`+R$${valor} = R$${this.saldo}`);
        return this.saldo
  }
  
  Conta.prototype.sacar = function(valor) {
    if (this.saldo >= valor) {
        this.saldo -= valor;
        this.lancamentos.push(`-R$${valor} =  R$${this.saldo}`);
        return this.saldo
    }
    return "Saldo Insuficiente!";
  }
  
  Conta.prototype.transferir = function(valor, conta) {
    this.sacar(valor); // origem
    conta.depositar(valor); // destino
    return this.saldo;
  }

  Conta.prototype.extrato = function() {
      return this.lancamentos;
  }
  
  const contaJoao = new Conta(336, 1234, 0, 1500, "João");
  const contaMaria = new Conta(336, 4567, 8, 3000, "Maria", "CP");
  
  // Conta do João
  console.log(contaJoao);
  console.log(contaJoao.extrato());
  console.log(contaJoao.banco);
  console.log(contaJoao.depositar(1000));
  console.log(contaJoao.sacar(1900));
  console.log(contaJoao.sacar(2));
  console.log(contaJoao.transferir(98, contaMaria));
  console.log(contaJoao.depositar(2000));
  console.log(contaJoao.depositar(53));
  console.log(contaJoao.extrato());
  
  // Conta da Maria
  console.log(contaMaria);
  console.log(contaMaria.extrato());
  console.log(contaMaria.banco);
  console.log(contaMaria.depositar(225));
  console.log(contaMaria.sacar(3200));
  console.log(contaMaria.sacar(25));
  console.log(contaMaria.transferir(50, contaJoao));
  console.log(contaMaria.extrato());
  
  console.log( new Conta() );
