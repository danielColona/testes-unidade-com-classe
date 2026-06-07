/*
Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento.
Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos. 
Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor. 
Quando um pagamento for realizado e o valor for maior que 100.00, 
o pagamento também terá a propriedade 'categoria' preenchida pela função como 'cara', 
caso contrário, a propriedade 'categoria' será preenchida pela função como 'padrão'. 
O método de consultar trará apenas o último pagamento.
*/


export default class ServicoDePagamento {

  #pagamentos
  
  constructor() { 
    this.#pagamentos = [];
  }
  
  pagar (cod, empresa, valor) { 
  
    this.#pagamentos.push({
      codigoBarras: cod,
      empresa: empresa,
      valor: valor,
      categoria: function () {
        if (valor > 100) {
          return 'cara';
        } else {
          return 'padrão';
        }
      }
   });
  }
  
  consultar() {
    return this.#pagamentos;
  }

  consultarUltimoPagamento() {
    return this.#pagamentos.at(-1);
  }
}

