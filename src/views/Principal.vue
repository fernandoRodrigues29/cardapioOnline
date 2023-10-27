<template>
   <div>
    <article class="secaoCardapio"  id="app">
		<div id="logoBox">
			<div id="logo">
				<img src="./img/logo.jpg" alt="">
			</div>
		</div>
		<div id="listaProdutoBox">
			<ul id="listaProduto">
				<li style="--i:0;" class="listaProdutoItem ativo">Crepe</li>
				<li style="--i:1;" class="listaProdutoItem">Cachorro quente</li>
				<li style="--i:2;" class="listaProdutoItem">Batata</li>
				<li style="--i:3;" class="listaProdutoItem">Bebidas</li>
			</ul>
		</div>
		<div id="pratosRecomendadosBox">
			<div class="subiTitulo">
				Recomendados
			</div>
			<div id="cardsRecomendadosList">
				<div style="--i:4;" class="cardsRecomendadosItem">
					<div class="imgBox">
						<img src="./img/produtos/bf_rb_2.png">
					</div> 
					<div class="infoBox">
						<div class="descricaoBox">
							<p>
								Batata Frita
							</p>
							<p class="subDescricao">
								130g
							</p>
						</div>
						<div class="acaoBox">
							<div class="precoBox">$ 67,95</div>
							<a href="./ingredientes.html" class="btn acoaButton">Adicionar</a>
						</div>
					</div>
				</div>
				<div style="--i:5;" class="cardsRecomendadosItem">
					<div class="imgBox">
						<img src="./img/produtos/bf_rb_2.png">
					</div> 
					<div class="infoBox">
						<div class="descricaoBox">
							<p>
								Batata Frita
							</p>
							<p class="subDescricao">
								130g
							</p>
						</div>
						<div class="acaoBox">
							<div class="precoBox">$ 67,95</div>
							<a href="./ingredientes.html" class="btn acoaButton">Adicionar</a>
						</div>
					</div>
				</div>
				<div style="--i:6;"  class="cardsRecomendadosItem">
					<div class="imgBox">
						<img src="./img/produtos/bf_rb_2.png">
					</div> 
					<div class="infoBox">
						<div class="descricaoBox">
							<p>
								lajlkjdal
							</p>
							<p class="subDescricao">
								subdescricao
							</p>
						</div>
						<div class="acaoBox">
							<div class="precoBox">$ 67,95</div>
							<a href="./ingredientes.html" class="btn acoaButton">Adicionar</a>
						</div>
					</div>
				</div>
				<div style="--i:7;"  class="cardsRecomendadosItem">
					<div class="imgBox">
						<img src="./img/produtos/bf_rb_2.png">
					</div> 
					<div class="infoBox">
						<div class="descricaoBox">
							<p>
								lajlkjdal
							</p>
							<p class="subDescricao">
								subdescricao
							</p>
						</div>
						<div class="acaoBox">
							<div class="precoBox">$ 67,95</div>
							<a href="./ingredientes.html" class="btn acoaButton">Adicionar</a>
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
  export default {
	data() {
		return {
			campo:""
		}
	},
	methods:{}
  }
  </script>
  
  <style>
  /* @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  } */
  @import '../assets/main2.css';
  @import '../assets/app.css';
  @import '../assets/animacao.css';
  </style>
  