<script>
export default {
    data() {
        return {
            shouldNavHide: false,
            prevScrollY: 0,
        };
    },
    methods: {
        handleScroll() {
            const { scrollY } = window;

            this.shouldNavHide = this.prevScrollY < scrollY;
            this.prevScrollY = scrollY;
        },
    },
    created() {
        process.client && window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        process.client && window.removeEventListener("scroll", this.handleScroll);
    },
};
</script>

<template>
    <nav class="nav container" v-bind:class="{ 'nav--hidden': shouldNavHide }">
        <span> majkelbed </span>
        <a class="link" href="#contact"> .contact me </a>
    </nav>
</template>


<style lang="scss" scoped>
.nav {
    z-index: 50;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background: $color-black;
    transition: transform 0.4s;
    transition-delay: 0.25s;
    transform-origin: top center;

    @include media-breakpoint-up(lg) {
        padding-top: 3.75rem;
        padding-bottom: 3.75rem;
    }

    &--hidden {
        transform: translateY(-100%);
        transition-delay: 0s;
    }
}

.link {
    margin-left: auto;
}
</style>
