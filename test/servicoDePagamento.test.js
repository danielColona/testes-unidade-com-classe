import ServicoDePagamento from '../src/servicoDePagamento.js';
import assert from 'node:assert'; 

describe('Classe de Serviço de Pagamento', () => {

  it('Validar que o pagamento é adicionado na lista de #pagamento', () => {
    const servicoDePagamento = new ServicoDePagamento();
    servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
    console.log(servicoDePagamento.consultarUltimoPagamento());
    {
      codigoBarras: '0987-7656-3475',
      empresa: 'Samar',
      valor: 56.87,
      categoria: 'cara'
    }
    
    //Arrange
    const servicoPag = new ServicoDePagamento();

    //Act
    servicoPag.transferir('Daniel', 'Ariane', 50000);
    const pagamentos = servicoPag.consultarUltimoPagamento();
    const ultimoPagamento = pagamentos.at(-1);

    //Assert
    assert.equal(minhaTransferencia.remetente, 'Daniel');
    assert.equal(minhaTransferencia.destinatario, 'Ariane');
    assert.equal(minhaTransferencia.valorTransferencia, 50000);

    });
    
})

