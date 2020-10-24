<template>
  <div class="layout container">
    <Nav />
    <!-- <SideNav /> -->
    <Nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family:
    'IBM Plex Mono',
    'Helvetica Neue',
    sans-serif;
  font-size: 12px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;

  @include media-breakpoint-up(lg) {
    font-size: 16px;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
	background: $color-black;
  color:	$color-white;
  overflow-x: hidden;
}

a {
	color: $color-primary;
}

.text-stroke {
    color: $color-black;
    -moz-text-fill-color: $color-black;
    -webkit-text-fill-color: $color-black;
    -moz-text-stroke-color: $color-white;
    -webkit-text-stroke-color: $color-white;
    -moz-text-stroke-width: 1px;  
    -webkit-text-stroke-width: 1px;
}

.text-gradient {
    background: linear-gradient(103.46deg, #EBF3D0 10.48%, rgba(235, 243, 208, 0) 24.26%), radial-gradient(29.9% 38.48% at 44.25% 66.28%, #DC8DDC 0%, rgba(220, 141, 220, 0) 100%), radial-gradient(33.83% 29.05% at 35.87% 73.35%, #DC8DDC 0%, rgba(220, 141, 220, 0) 100%), radial-gradient(42.66% 26.97% at 45.56% 43.34%, #CBADEB 0%, rgba(194, 166, 241, 0) 100%), linear-gradient(109.72deg, #CDF9E8 26.87%, rgba(205, 249, 232, 0) 46.05%), linear-gradient(243.78deg, rgba(192, 169, 240, 0) 2.53%, #C0A9F0 12.95%, rgba(192, 169, 240, 0) 25.09%), linear-gradient(106.15deg, rgba(192, 169, 240, 0) 32.21%, #C0A9F0 39.39%, rgba(192, 169, 240, 0) 47.95%), radial-gradient(40.75% 52.81% at 90.75% 40.89%, #FFFDB1 0%, #FEE4BF 34.46%, #F0BDD0 69.5%, rgba(255, 129, 38, 0) 100%), #C2A6F1;
    background-position: bottom center;
    background-size:150%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Inter', sans-serif;
}

h1, h2, h3 {
  font-weight: 800;
}

h4, h5, h6 {
  font-weight: 700;
}
</style>

<style lang="scss" scoped>
  .layout {
    padding-top: 5.5rem;
    padding-bottom: 5.5rem;

    @include media-breakpoint-up(lg) {
      padding-top: 9rem;
      padding-bottom: 9rem;
    }
  }
</style>