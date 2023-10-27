<template>
    <div>
    <article class="secaoCardapio"  id="app2">
		<div id="logoBox">
			<div id="logo">
				<img :src="logo" alt="">
			</div>
		</div>
		<!--navegação interna-->
		<div id="listaProdutoBox">
			<ul id="listaProduto">
				<li style="--i:0;" class="listaProdutoItem ">Crepe</li>
				<li style="--i:1;" class="listaProdutoItem">Cachorro quente</li>
				<li style="--i:2;" class="listaProdutoItem">Batata</li>
				<li style="--i:3;" class="listaProdutoItem ativo">Bebidas</li>
			</ul>
		</div>
		<div id="pratosRecomendadosBox">
			<div class="subiTitulo">
				Recomendados
			</div>
			<div id="cardsRecomendadosList">
				<div style="--i:4;" class="cardsRecomendadosItem" v-for="item in listProdutos" :key="item.id">
					<div class="imgBox">
						<img :src="'/img/produtos/'+item.img">
					</div> 
					<div class="infoBox">
						<div class="descricaoBox">
							<p>
								{{ item.nome }}
							</p>
							<p class="subDescricao">
								{{ item.grama }}
							</p>
						</div>
						<div class="acaoBox">
							<div class="precoBox">R$ {{item.valor}}</div>
							<a href="#" @click.prevent="adicionarProduto(item)" class="btn acoaButton">Adicionar</a>
							<!-- <RouterLink to="/ingredientes" class="btn acoaButton">Adicionar</RouterLink> -->
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</article>
	
	<article class="secaoCardapio none" style="display: none;" id="ingredientes">
		<section id="ingredientesBox">
			<div class="navbarr">
				<div class="btnVoltar">
					<button>voltar</button>
				</div>
				<div id="indicadoValor">
					<span>R$</span>
					<span>25,00</span>
				</div>
			</div>
			<div class="sacolaButtonBox">
				<div class="imgBox">
					<img src="">
				</div>
			</div>
			<div class="ingredientesLista">
				<div class="ingerdientesBoxIntem">
					<div class="iconIgrediente">
						<img src="#">
					</div>
					<div class="igretientTitulo">
						titulo simples I
					</div>
				</div>
				<div class="ingerdientesBoxIntem">
					<div class="iconIgrediente">
						<img src="#">
					</div>
					<div class="igretientTitulo">
						titulo simplesII
					</div>
				</div>
				<div class="ingerdientesBoxIntem">
					<div class="iconIgrediente">
						<img src="#">
					</div>
					<div class="igretientTitulo">
						titulo simplesIII
					</div>
				</div>				
			</div>
			<section id="carrinhoDeCompras">
				<div class="sacolaButtonBox">
					<div class="imgBox">
						<img src="">
					</div>
				</div>
				<div class="qtdButtonBox">
					<span>+</span>
					<span>num</span>
					<span>-</span>
				</div>
			</section>
		</section>
	</article>
	
	<article class="secaoCardapio none"  id="finalizarMain">
		<section id="finalizarCarrinhoDeCompras">
			<div class="infoProdutos">
				<div class="infoTab">
					<div class="tabInfo">
						<b>Valor</b>
					</div>
					<div class="tabInfo">
						R$ 25,00
					</div>					
				</div>
			</div>
			<div class="retiradaBox">
				<div class="retiradaItem">
					<div class="retiradaTitulo">
						Local
					</div>
					<div class="imgBox">
						<img src="">
					</div>						
				</div>
				<div class="retiradaItem">
					<div class="retiradaTitulo">
						Entrega
					</div>
					<div class="imgBox">
						<img src="">
					</div>						
				</div>				
			</div>
		</section>
	</article>
	
	<article class="secaoCardapio none"  id="mensagemFinal">
		<section id="msgFinalizacao">
			<div class="animacao"></div>
		</section>
	</article>
	
	<article class="secaoCardapio none"  id="faturaFinal">
		<section id="listaTarifa">
			<div class="tarifas"></div>
		</section>
	</article>
    </div>
</template>

<script>
import imgProd1 from '../../assets/img/produtos/bf_rb_2.png';
export default {
    name:'Principal',
    data(){
		return{
			imgP1:imgProd1,
			imgP2:'/img/produtos/bf_rb_2.png',
			logo:'/img/logo.jpg',
			baseJson:"http://localhost:5173/dbjson/pratos_principais.json",
			listProdutos:[]

		}
    },
    methods:{
		async carregraPratos(){
			const req = await fetch(this.baseJson);
			const data = await req.json();
			// console.log(data.pratos);
			this.listProdutos = data.pratos
		},
		salvarProdutoLocalStorage(item){
			localStorage.setItem('produto_salvo', JSON.stringify(item));
		},
		adicionarProduto(item){
			console.log('item salvo',item);
			this.salvarProdutoLocalStorage(item);
			this.$router.push('/ingredientes');
		}
    },
	mounted(){
		this.carregraPratos();
	}
}
</script>

<style>
@import '@/assets/app.css';
 @import '@/assets/main2.css';
 @import '@/assets/animacao.css';
  /* @import '@/assets/main2.css';
  @import '@/assets/app.css';
  @import '@/assets/animacao.css'; */
</style>