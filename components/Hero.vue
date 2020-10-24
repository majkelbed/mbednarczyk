<template>
	<div class="grid">
        <section class="hero grid">
            <h1 class="hero_heading">
                Hi, I’m Michael.<br>
                Frontend <br> 
                developer.
            </h1>
            <Skills></Skills>
        </section>
	</div>
</template>

<style lang="scss" scoped>
	.hero {
		grid-column: 1 / -1;
		row-gap: 3rem;
		margin-bottom: 15rem;

		@include media-breakpoint-up(lg) {
			margin-bottom: 5rem;
			row-gap: 1rem;
		}

		&_heading {
			position: absolute;
			bottom: -10rem;
			left: 0;
			z-index: 1;
			font-size: $font-4xl;
			line-height: $line-height-4xl;
			grid-column: 1 / -1;
			font-weight: 800;

			@include media-breakpoint-up(lg) {
				position: relative;
				bottom: unset;
				left: unset;
				grid-column: 2 / span 6;
			}
		}
	}

	.skills {
		grid-row: 1;
		grid-column: 1 / -1;
		margin: 3rem 0;

		@include media-breakpoint-up(lg) {
				grid-column: 8 / -1;
		}
	}
</style>

