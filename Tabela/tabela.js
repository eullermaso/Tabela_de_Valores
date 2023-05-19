const salvar = document.getElementById('bt2')
const cancelar = document.getElementById('cancelar')
//const nome = document.getElementById('nome')

class Produto{
    constructor(){
        this.nome = '';
        this.arrayProduto = [];

    }

    salvar(){

        // Variável criada para receber o método lerDados. OBS: poderia ser declarado qualquer nome na variável.
       let produto = this.lerDados();
       
       if(this.validacampos(produto)){
        this.adicionar(produto)
        alert('salvar')
       }
       this.listaTabela();
       console.log(produto)

    }


    //verifica o tamanho da array e percorre a mesma adicionando a linha e as colunas
    listaTabela(){
        let tbody = document.getElementById('tbody')
        let caption = document.getElementById('caption')
        let percent = document.getElementById('percent')
        let lucro = document.getElementById('lucro')
        let total3 = 0;

        tbody.innerText = '';

        for(let i = 0; i < this.arrayProduto.length; i++){


            let tr = tbody.insertRow();

            let td_insumo = tr.insertCell()
            let td_qtdeProd = tr.insertCell()
            let td_qtdeEmbalagem = tr.insertCell()
            let td_valor = tr.insertCell()


            caption.innerText = this.arrayProduto[i].Nome
            percent.innerText = this.arrayProduto[i].Porcentagem
            td_insumo.innerText = this.arrayProduto[i].Insumo
            td_qtdeProd.innerText = this.arrayProduto[i].QtdeProd
            td_qtdeEmbalagem.innerText = this.arrayProduto[i].QtdeEmbalagem
            td_valor.innerText = this.arrayProduto[i].Valor

            let total = (this.arrayProduto[i].QtdeProd*(this.arrayProduto[i].Valor/this.arrayProduto[i].QtdeEmbalagem))

            let total2 = total+(total*(this.arrayProduto[i].Valor/100));

            total3 = total2+total3


            lucro.innerText = total3;

        }
    }

    adicionar(produto){
        this.arrayProduto.push(produto);
        this.id++;

    }


    //esse método irá ler os campos e depois devolver para o salvar
    lerDados(){
        let produto = {}

       produto.Nome = document.getElementById('nome').value;
       produto.Insumo = document.getElementById('insumo').value;
       produto.QtdeProd = document.getElementById('qtdeProd').value;
       produto.QtdeEmbalagem = document.getElementById('qtdeEmbalagem').value;
       produto.Valor = document.getElementById('valor').value;
       produto.Porcentagem = document.getElementById('porcentagem').value;

        return produto;

    }



    validacampos(produto){

        let msg ='';



        if(produto.Nome == ''){
            msg+=' Informe o nome do produto';
            let aquario1 = document.getElementById('aquario1')
            aquario1.value = 'Informe o nome do produto';
            aquario1.setAttribute('type', 'text')
        }
        if(produto.Insumo == ''){
            msg+=' Informe o nome do produto';
            let aquario2 = document.getElementById('aquario2')
            aquario2.value = 'Digie o nome do insumo';
            aquario2.setAttribute('type', 'text')
        }
        if(produto.QtdeProd == ''){
            msg+=' Informe o nome do produto';
            let aquario3 = document.getElementById('aquario3')
            aquario3.value = 'Digite a quantidade de insumo';
            aquario3.setAttribute('type', 'text')
        }
        if(produto.QtdeEmbalagem == ''){
            msg+=' Informe o nome do produto';
            let aquario4 = document.getElementById('aquario4')
            aquario4.value = 'Digite a quantidade de insumo';
            aquario4.setAttribute('type', 'text')
        }
        if(produto.Valor == ''){
            msg+=' Informe o nome do produto';
            let aquario5 = document.getElementById('aquario5')
            aquario5.value = 'Digite o valor do insumo';
            aquario5.setAttribute('type', 'text')
        }
        if(produto.Porcentagem == ''){
            msg+=' Informe a porcentagem desejada';
            let aquario6 = document.getElementById('aquario6')
            aquario6.value = 'Digite o valor do insumo';
            aquario6.setAttribute('type', 'text')
        }

        if(msg != ''){
            return false
        }

        return true;
              
    }

    cancelar(){

    }
}

var produto = new Produto(); 

salvar.addEventListener('click', ()=>{
    produto.salvar();
    return
})

