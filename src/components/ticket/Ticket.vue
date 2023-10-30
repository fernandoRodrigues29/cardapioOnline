<template>
<div id="app2x">
    <header>
    
       <div class="btn-voltar">
        <RouterLink to="/ingredientes">
            <i class="fa fa-reply" aria-hidden="true"></i>
        </RouterLink>
        
       </div>
        <div class="perfilImg">
           <img src="/img/face1.png" alt="">
        </div>
    </header>
    <div class="imagemGrande">
        <img :src="imagemProduto" alt="">
    </div>
    <div class="tituloValorTiketBox">
        <div class="prato">
           <h2>
               {{this.pedido.tituloPrato}}
           </h2> 
        </div>
        <div class="valorBox">
            <b>R$ {{this.pedido.valor}}</b>
        </div>
    </div>
   
    <div class="tiketBox">
        <div class="numeroBox">
            <span><b>{{this.guicheNumber | formatarNumeros}}</b></span>
            
            <!-- <span>{{this.guicheNumber.slice(0,4)}}</span> -->
            <!-- <span>-</span>
            <span>{{this.guicheNumber.slice(4,8)}}</span>
            <span>-</span>
            <span>{{this.guicheNumber.slice(8,10)}}</span> -->
           
        </div>
    </div>
    <div>
        <span>Tempo para Entrega:</span>
        <span>{{contadorTempo}}</span>
    </div>
</div>
</template>

<script>

export default {
    name:'Ticket',
    data(){
		return{
           imgP2:'/img/produtos/bf_rb_2.png',
			logo:'/img/logo.jpg',
            baseJson:"http://localhost:5173/dbjson/pratos_principais.json",
            pedido:'',
            guicheNumber:0,
            contadorTempo:"00:00",
            imagemProduto:''
		}
    },
    methods:{
		async carregarListas(){
                let dataProduto = localStorage.getItem('produto_salvo');
                let produtoObj = JSON.parse(dataProduto); 
                console.log('produto:',produtoObj);
                this.imagemProduto =  `/img/produtos/${produtoObj.img}`;

            //carregar pedido
            let dataPedido = localStorage.getItem('pedido_salvo');
                let pedidoObj = JSON.parse(dataPedido); 
                console.log('pedido:',pedidoObj);
                    this.pedido=pedidoObj;
                    this.guicheNumber = this.gerarNumeroPedido();


        },
        gerarNumeroPedido(){
            let randonNumbers = Math.random().toString().slice(2,12);
            return randonNumbers
        },
        gerarContadorTempo(){
            var minutos = 20;
            var segundos = 60;
            var exibirMinutos='00';
            var exibirSegundos='00';
                var intervalo = setInterval(()=>{
                    segundos--;

                        if(segundos < 0){
                            minutos--;
                            segundos = 3;
                                if(minutos <= 0 && segundos <= 0){
                                    minutos=0;
                                    segundos=0
                                }
                        }
                        
                        exibirMinutos = minutos;
                        exibirSegundos = segundos;

                        if(minutos < 10){
                            exibirMinutos = `0${minutos}`; 
                        }
                        if(segundos < 10){
                            exibirSegundos = `0${segundos}`; 
                        }

                        this.contadorTempo = `${exibirMinutos}:${exibirSegundos}`;
                            if(minutos <= 0){
                                if(segundos <= 0){
                                            console.log('parou a contagem!');
                                                clearInterval(intervalo);
                                }
                            }
                },1000);
        },
        filtroNumero(){

        }

    },
    filters:{
        formatarNumeros(str){
            return `${str.slice(1,4)} - ${str.slice(4,4)}`
        }
    },
    mounted(){
        this.carregarListas();
        this.gerarContadorTempo();
    }
}
</script>

<style>
@import '@/assets/app.css';
 @import '@/assets/main2.css';
 @import '@/assets/ingredientes.css';
 @import '@/assets/animacao.css';
 
 /* ./font-awesome-4.7.0/css/font-awesome.min.css */
 /* @import '@/assets/font-awesome-4.7.0/css/font-awesome.min.css '; */
 
  /* @import '@/assets/main2.css';
  @import '@/assets/app.css';
  @import '@/assets/animacao.css'; */
  .valorBox{
    font-size: 3rem;
    color:orangered
  }
  .numeroBox{
    font-size: 44px;
    color: #84807d;
  }
</style>