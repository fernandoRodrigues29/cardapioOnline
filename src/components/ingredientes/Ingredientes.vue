<template>
    <div id="mainBox">
    <header>
       <div class="btn-voltar">
        <RouterLink to="/">
            <i class="fa fa-reply" aria-hidden="true"></i>
        </RouterLink>
       </div>
        <div class="perfilImg">
           <img :src="imgPerfil" alt="">
        </div>
    </header>
    <div class="imagemGrande">
        <img :src="hilightProduct" alt="">
    </div>
    <div class="tituloValorBox">
        <div class="prato">{{prato}}</div>
        <div class="valorBox">${{ valor_prato }}</div>
    </div>
    <div class="ingredientesBox">
        <div class="titulo">
            Ingredientes
        </div>
        <div class="boxIgredientes">
            <div class="ingredientes-items" v-for="(item,index) in listIngredientes" :key="item.id"
             @click="adicionarIgrediente(index)"
             :class="{selecionado: igredienteSelecionado.includes(index)}">
                <img class="img_ingrediente" :src="item.img" alt="">
                <p class="nome_ingrediente">{{item.nome}}</p>
            </div>
        </div>
    </div>
    <div class="ingredientesAdicionaisBox">
        <div class="btnAdicionais">
            <button class="btn_adicionais">Adicionais</button>
        </div>
        <div class="boxIgredientesAdicionais">
            <div class="ingredientes-items"  v-for="(item,index) in listaAdicionais" :key="item.id"
            @click="adicionarAdicionais(index)"
             :class="{selecionado: adicionaisSelecionado.includes(index)}">
                <img class="img_ingrediente" :src="item.img" alt="">
                <p class="nome_ingrediente">{{item.nome}}</p>
            </div>
        </div>
    </div>
    <div class="rodapeAcoes">
        <div class="contadorBox">
            <div class="inputBox">
                <button  id="btnMenos" class="btn button-numeros-esquerdo" @click="reduzirQuantidade()">-</button>
                <input class="number-input" type="number" name="" id="" v-model="quantidade" >
                <button id="btnMais"  class="btn button-numeros-direito"  @click="adicionarQuantidade()">+</button>
            </div>
        </div>
        <div class="carrinhoBox">
                <a href="#" @click.prevent="adicionarNoCarrinho()">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </a>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name:'Ingredientes',
    data(){
		return{
            imgPerfil:"/img/face1.png",
            imgQueijo:'/img/ingredientes/queijo.png',
            imgPimenta:'/img/ingredientes/pimenta.png',
            imgCebola:'/img/ingredientes/cebola.png',
            imgTomate:'/img/ingredientes/tomate.png',
            imgRucula:'/img/ingredientes/rucula.png',
            imgAlface:'/img/ingredientes/alface.png',
			imgP1:'',
			imgP2:'/img/produtos/bf_rb_2.png',
			logo:'/img/logo.jpg',
            hilightProduct:'',
            listIngredientes:[],
            listaAdicionais:[],
            prato:"default prato",
            valor_prato:0.0,
            valor_prato_base:0.0,
            baseJson:"http://localhost:5173/dbjson/pratos_principais.json",
            quantidade:1,
            objPrato:null,
            objPedido:null,
            igredienteSelecionado:[],
            adicionaisSelecionado:[],
		}
    },
    methods:{
        async carregarListas(){
            const req = await fetch(this.baseJson);
			const data = await req.json();
           
			this.listIngredientes = data.ingredientes;
            this.listaAdicionais = data.adicionais;
            this.objPedido = data.pedido;
        },
        carregar_prato(){
            let data = localStorage.getItem('produto_salvo');
            this.objPrato = JSON.parse(data);
            
            this.prato = this.objPrato.nome;
            this.valor_prato = this.objPrato.valor;
            this.valor_prato_base = this.objPrato.valor;
            this.hilightProduct = `/img/produtos/${this.objPrato.img}`;
        },
        adicionarQuantidade(){
            console.log('aumentar!');
            if(this.quantidade >= 1){
                this.quantidade++;
                this.valor_prato = this.valor_prato + this.valor_prato_base;
                
            }
        },
        reduzirQuantidade(){
            console.log('diminuir!');
            this.quantidade--;
            this.valor_prato = this.valor_prato-this.valor_prato_base;
            if(this.quantidade <= 1){
                this.quantidade=1;
                this.valor_prato = this.valor_prato_base;
            }
        },
        adicionarIgrediente(indice){
            //selecionado
            if(this.igredienteSelecionado.includes(indice)){
                this.igredienteSelecionado = this.igredienteSelecionado.filter(i=>i !== indice);
            }else{
                this.igredienteSelecionado.push(indice);
            }
        },
        adicionarAdicionais(indice){
            //selecionado
            if(this.adicionaisSelecionado.includes(indice)){
                this.adicionaisSelecionado = this.adicionaisSelecionado.filter(i=>i !== indice);
                 this.valor_prato_base = this.valor_prato -= this.listaAdicionais[indice].valor;

            }else{
                this.adicionaisSelecionado.push(indice);
                this.valor_prato_base = this.valor_prato += this.listaAdicionais[indice].valor;
            }
        },
        
        adicionarNoCarrinho(){
           
            this.objPedido[0].ingredientes = this.igredienteSelecionado; 
            this.objPedido[0].adicionais = this.adicionaisSelecionado;
            this.objPedido[0].valor = this.valor_prato;
            this.objPedido[0].quantidade =  this.quantidade;
            this.objPedido[0].tituloPrato =  this.prato;

            console.log('Pedido Objeto:',this.objPedido[0]);
                localStorage.setItem('pedido_salvo', JSON.stringify(this.objPedido[0]));
                    this.$router.push('/ticket');
        }

    },
    mounted(){
        this.carregarListas();
        this.carregar_prato();
    }
}
</script>

<style>
@import '@/assets/app.css';
 @import '@/assets/main2.css';
 @import '@/assets/ingredientes.css';
 @import '@/assets/animacao.css';
</style>