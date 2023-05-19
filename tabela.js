const salvar = document.getElementById('bt2')
const cancelar = document.getElementById('cancelar')
const form = document.querySelector('#form')
const per = document.getElementById('porcentagem')

const mome = document.getElementById('nome')
const cuidado = document.getElementById('cuidado');





class Produto{
    constructor(){
        this.nome = '';
        this.arrayProduto = [];
        this.arraySoma = [];
        this.id = 0;
        this.total3 = 0;
        this.total4 = 0;
        this.soma = this.total3;
        this.determina = 0;
        this.bloqueado = 0;

    }

    salvar(){

        // Variável criada para receber o método lerDados. OBS: poderia ser declarado qualquer nome na variável.
       let produto = this.lerDados();
       
       if(this.validacampos(produto)){
        this.adicionar(produto)
        this.listaTabela()
        
       }


    }


    //verifica o tamanho da array e percorre a mesma adicionando a linha e as colunas
    listaTabela(){
        let tbody = document.getElementById('tbody')
        let caption = document.getElementById('caption')
        let percent = document.getElementById('percent')
        let lucro = document.getElementById('lucro')
        var i = 0;
        tbody.innerText = '';

        for(i; i < this.arrayProduto.length; i++){



            let tr = tbody.insertRow();

            let td_insumo = tr.insertCell()
            let td_qtdeProd = tr.insertCell()
            let td_qtdeEmbalagem = tr.insertCell()
            let td_valor = tr.insertCell()

            

            caption.innerText = this.arrayProduto[i].Nome
            percent.innerText = this.arrayProduto[i].Porcentagem + '%'
            td_insumo.innerText = this.arrayProduto[i].Insumo
            td_qtdeProd.innerText = this.arrayProduto[i].QtdeProd
            td_qtdeEmbalagem.innerText = this.arrayProduto[i].QtdeEmbalagem
            td_valor.innerText = "R$ " + this.arrayProduto[i].Valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); 

            console.log(i)
        
    

            if(i ==this.determina){
                console.log(this.soma)
                console.log(this.total3)
                    
                this.total3 += (this.arrayProduto[i].QtdeProd*(this.arrayProduto[i].Valor/this.arrayProduto[i].QtdeEmbalagem));
                console.log(this.total3)
                
                console.log(this.total3)
                this.total4 = (this.total3+(this.total3*(this.arrayProduto[i].Porcentagem/100)));
                console.log(this.total4)
                lucro.innerText = "R$ " + Math.round(this.total4).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

                this.determina = this.determina + 1;
        }
            


        }
    }

  

    adicionar(produto){
        this.arrayProduto.push(produto);
       // this.arraySoma.push(leitura)
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
            msg +='-Informe o nome do produto <br>';
            cuidado.innerHTML = msg
            this.bloqueado = 1;
        }
        if(produto.Insumo == ''){
            msg +='-Digite o nome do insumo <br>';
            cuidado.innerHTML = msg
            this.bloqueado = 1;
        }

        if(produto.QtdeProd == ''){
            msg +='-Digite a quantidade de insumo <br>';
            cuidado.innerHTML = msg
            this.bloqueado = 1;
        }

        if(produto.QtdeEmbalagem == ''){
            msg +='-Digite a quantidade de insumo <br>';
            cuidado.innerHTML = msg
            this.bloqueado = 1;
        }

        if(produto.Valor == ''){
            msg +='-Digite o valor do insumo <br>';
            cuidado.innerHTML = msg
            this.bloqueado = 1;
        }

        if(produto.Porcentagem == ''){
            msg +=  '-Informe a porcentagem desejada <br>';
            cuidado.innerHTML = msg
            this.bloqueado = 1;
        }

        if(msg != ''){
            return false;
           
        }
       cuidado.innerHTML = '';
        return true;
              
    }

    cancelar(){

    }
}

var produto = new Produto(); 

salvar.addEventListener('click', ()=>{
    produto.salvar();
    form.reset();
    

    if(produto.bloqueado !=1){
        per.setAttribute('disabled','');
        mome.setAttribute('disabled','');
        
    }
})

