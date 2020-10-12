<template>
  <div class="grid">
    <Nav />
    <SideNav />
    <Hero />
    <Projects />
  </div>
</template>

<style lang="scss">
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
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
}

a {
	color: $color-primary;
}

.grid {
	position: relative;
	display: grid;
	grid-template-columns:repeat(12, 1fr);
	column-gap: 15px;
	max-width: 1280px;
	width: 100%;
	margin:0 auto;
	padding-bottom: 2rem;
}

main {
	grid-column: 2 / span 11;
	margin-top:120px;
}
</style>