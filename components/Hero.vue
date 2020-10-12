<style lang="scss">
	h1,
	h2 {
		z-index: 1;
		font-size: $font-4xl;
		line-height: $line-height-4xl;
		grid-column: span 6;
		font-weight: 800;
	}

	.hero,
	.projects {
		position: relative;
		display: grid;
		grid-template-columns: repeat(11, 1fr);
		margin-top:60px;
	}

	.hero {
		grid-column: 2 / -1;
		margin-bottom: 120px;
	}

	.blur {
		position: absolute;
		top:375px;
		left:0;
		height: 560px;
		width: 100%;
		background: rgba(21, 21, 21, 0.36);
		backdrop-filter: blur(40px);
	}

	.stroke {
		color: $color-black;
		-moz-text-fill-color: $color-black;
		-webkit-text-fill-color: $color-black;
		-moz-text-stroke-color: $color-white;
		-webkit-text-stroke-color: $color-white;
		-moz-text-stroke-width: 1px;  
		-webkit-text-stroke-width: 1px;
	}

	.gradient {
		background: linear-gradient(103.46deg, #EBF3D0 10.48%, rgba(235, 243, 208, 0) 24.26%), radial-gradient(29.9% 38.48% at 44.25% 66.28%, #DC8DDC 0%, rgba(220, 141, 220, 0) 100%), radial-gradient(33.83% 29.05% at 35.87% 73.35%, #DC8DDC 0%, rgba(220, 141, 220, 0) 100%), radial-gradient(42.66% 26.97% at 45.56% 43.34%, #CBADEB 0%, rgba(194, 166, 241, 0) 100%), linear-gradient(109.72deg, #CDF9E8 26.87%, rgba(205, 249, 232, 0) 46.05%), linear-gradient(243.78deg, rgba(192, 169, 240, 0) 2.53%, #C0A9F0 12.95%, rgba(192, 169, 240, 0) 25.09%), linear-gradient(106.15deg, rgba(192, 169, 240, 0) 32.21%, #C0A9F0 39.39%, rgba(192, 169, 240, 0) 47.95%), radial-gradient(40.75% 52.81% at 90.75% 40.89%, #FFFDB1 0%, #FEE4BF 34.46%, #F0BDD0 69.5%, rgba(255, 129, 38, 0) 100%), #C2A6F1;
		background-position: bottom center;
		background-size:150%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>

<template>
        <section class="hero">
            <h1>
                Hi , I’m Michael.<br>
                Frontend <br> 
                developer.
            </h1>
            <Skills></Skills>
        	<div class="blur"></div>
        </section>
</template>

