//Scroll suave
gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

ScrollSmoother.create({
	smooth: 1.5,
	effects: true
});

// Animações hero
gsap.from(".hero",{
	opacity: 0,
	duration: 1
})

gsap.from("picture:nth-child(2)",{
	y:60,
	duration: 1
})

gsap.from("picture:nth-child(1)",{
	y:-60,
	duration: 1
})

// Animação cards
gsap.from(".card",{
	opacity: 0,
	// A propriedade "filter" é usada para aplicar um efeito de desfoque (blur) aos elementos durante a animação. No caso, os cards começarão com um desfoque de 20 pixels e, à medida que a animação progride, o desfoque será reduzido até desaparecer completamente, criando um efeito visual interessante.
	filter: "blur(10px)",
	// A propriedade "stagger" é usada para criar um atraso entre as animações de elementos semelhantes. No caso, cada card terá um atraso de 0.2 segundos em relação ao anterior, criando um efeito de cascata.
	stagger: 0.2,
	scrollTrigger: {
		trigger: ".cards",
		start:'0% 80%',
		end:'100% 70%',
		// scrub é uma propriedade do ScrollTrigger que permite sincronizar a animação com o scroll do usuário. Quando scrub é definido como true, a animação será controlada pelo scroll, ou seja, ela avançará ou retrocederá conforme o usuário rolar a página. Isso cria um efeito de animação mais fluida e interativa, pois a velocidade da animação será diretamente proporcional à velocidade do scroll.
		scrub: true
	}
})

// Animação seção_obrigado
gsap.from(".seção_obrigado ul li",{
	opacity: 0,
	x: 40,
	filter: "blur(10px)",
	stagger: 0.1,
	scrollTrigger: {
		trigger: ".seção_obrigado ul",
		start: '0% 80%',
		end: '100% 50%',
		scrub: true
	}
})

// Animações footer
gsap.from("footer",{
	y: "-30%",
	immediateRender: false,
	scrollTrigger: {
		trigger: "footer",
		scrub: true,
		invalidateOnRefresh: true,
		end:"100% 100%"
	}
})

// Letras surgindo
const split = SplitText.create(".hero .direita p", {
	// É importante destacar que a propriedade "type" é usada para especificar como o texto deve ser dividido. No caso, "words, chars" indica que o texto será dividido tanto em palavras quanto em caracteres, evitando que as palavras sejam divididas em caracteres individuais, o que pode ser útil para criar animações mais complexas e controladas.
	type: "lines, words, chars",
	mask: "lines"
})

// Colocamos chars pois dentro do "grupo" split temos diversos elementos como palavras, caracteres, mascaras, etc. E queremos animar os caracteres, por isso usamos split.chars para acessar os caracteres individuais do texto e aplicar a animação desejada a cada um deles.
gsap.from(split.chars,{
	y: 40,
	duration: 0.3,
	stagger: 0.03
})

// Pré loader