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
        <img src="/img/produtos/hb-rb.png" alt="">
    </div>
    <div class="tituloValorTiketBox">
        <div class="prato">{{this.pedido.tituloPrato}}</div>
        <div class="valorBox">R$ {{this.pedido.valor}}</div>
    </div>
   
    <div class="tiketBox">
        <div class="numeroBox">
            <span><b>{{this.guicheNumber}}</b></span>
            
            <!-- <span>{{this.guicheNumber.slice(0,4)}}</span> -->
            <!-- <span>-</span>
            <span>{{this.guicheNumber.slice(4,8)}}</span>
            <span>-</span>
            <span>{{this.guicheNumber.slice(8,10)}}</span> -->
           
        </div>
    </div>
</div>
</template>

<script>

export default {
    name:'Ticket',
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
            baseJson:"http://localhost:5173/dbjson/pratos_principais.json",
            pedido:'',
            guicheNumber:0
		}
    },
    methods:{
		async carregarListas(){
            const req = await fetch(this.baseJson);
			    const data = await req.json();
                    console.log('conteudo',data);

            //carregar pedido
            let dataPedido = localStorage.getItem('pedido_salvo');
                let pedidoObj = JSON.parse(dataPedido); 
                    this.pedido=pedidoObj;
                    this.guicheNumber = this.gerarNumeroPedido();


        },
        gerarNumeroPedido(){
            let randonNumbers = Math.random().toString().slice(2,12);
            return randonNumbers
        }
    },
    mounted(){
        this.carregarListas();
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
</style>