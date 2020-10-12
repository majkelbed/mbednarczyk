<template>
    <section class="projects">
        <h2>PROJECTS</h2>
        <h2 class="stroke">PROJECTS</h2>
        <h2 class="gradient">PROJECTS</h2>

        <div class="projects-group" v-for="n in 3" :key="n">
            <article class="project-card">
                <section class="title">
                    <p class="section-title">NAME</p>
                    <h3 class="project-title">
                        Lorem ipsum dolor sit amet.
                    </h3>
                </section>
                <section class="description">
                    <p class="section-title">DESCRIPTION</p>
                    <p class="project-description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati neque itaque voluptates iusto eaque aut aperiam nam optio harum, tempora consequatur atque dolore impedit dolorem accusantium eos unde ex magnam?
                    </p>
                </section>
                <section class="tech">
                    <p class="section-title">TECH</p>
                    <p class="project-stack">CSS, Angular, React</p>
                    <a class="project-link" href="/">
                        Website
                        <span class="link-icon">
                            {@html LinkIcon}
                        </span>
                    </a>
                </section>
            </article>
        </div>
    </section>
</template>

<style lang="scss">
    .projects-group {
        grid-column: 4 / -1;
        display: flex;
        margin-top:4.25rem;
    }

    .section-title {
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        text-align: right;
        margin-right: 2.5rem;
        color: $color-gray-500;
    }

    .section-title,
    .project-stack,
    .project-link {
        font-size: $font-xs;
        line-height: $line-height-xs;
    }

    .project-description {
        font-size: $font-sm;
        line-height: $line-height-sm;
    }

    section {
        display: flex;
        margin-bottom: 1.25rem;
    }

    section.description {
        margin-bottom:3rem;
    }

    section.tech {
        align-items: flex-end;
    }

    .project-link {
        display: flex;
        align-items: center;
        margin-left:auto;
    }

    .link-icon {
        margin-left:0.625rem;
    }

    .project-title {
        font-size: $font-xl;
        line-height: $line-height-xl;
    }

    .project-card {
        min-width: 32rem;
        padding: 1.5rem;
        margin-right:1.25rem;
        background:$color-gray-800;
    }
</style>