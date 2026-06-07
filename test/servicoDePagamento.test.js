import ServicoDePagamento from '../src/servicoDePagamento.js';
import assert from 'node:assert'; 

describe('Classe de Serviço de Pagamento', () => {

  it('Validar o ultimo pagamento da lista e verificar se valor maior que R$100 retorna cara', () => {     
    //Arrange
    const servicoPag = new ServicoDePagamento();
    //Act
    servicoPag.pagar('0987-7656-3475', 'Microsoft', 50000);
    const pagamento = servicoPag.consultarUltimoPagamento();
    const ultimoPagamento = pagamento;

    //Assert
    assert.equal(ultimoPagamento.codigoBarras, '0987-7656-3475');
    assert.equal(ultimoPagamento.empresa, 'Microsoft');
    assert.equal(ultimoPagamento.valor, 50000);
    const ultimoCat = ultimoPagamento.categoria();
    assert.equal(ultimoCat, 'cara' ) ;

    });
    
    it('Validar o ultimo pagamento da lista e verificar se valor menor que R$100 retorna padrão', () => {     
    //Arrange
    const servicoPag = new ServicoDePagamento();
    //Act
    servicoPag.pagar('0987-7656-0000', 'Microsoft', 80);
    const pagamento = servicoPag.consultarUltimoPagamento();
    const ultimoPagamento = pagamento;

    //Assert
    assert.equal(ultimoPagamento.codigoBarras, '0987-7656-0000');
    assert.equal(ultimoPagamento.empresa, 'Microsoft');
    assert.equal(ultimoPagamento.valor, 80);
    const ultimoCat = ultimoPagamento.categoria();
    assert.equal(ultimoCat, 'padrão' ) ;

    });
})

