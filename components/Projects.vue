<script>
export default {
    props: [
        'projects'
    ]
}
</script>
<template>
    <section class="projects grid">
        <div class="projects_headings">
            <h2 class="projects_heading">PROJECTS</h2>
            <h2 class="projects_heading text-stroke">PROJECTS</h2>
            <h2 class="projects_heading text-gradient">PROJECTS</h2>
        </div>
        <div class="projects_group-wrapper left-container">
            <overlay-scrollbars
                :options="{ scrollbars: { autoHide: 'move' } }"
                ref="scrollbars"
            >
                <div class="projects_group" ref="scroll">
                    <article class="project-card" v-for="(project, index) in projects" :key="index">
                        <section class="project-card_section title">
                            <p class="section-title">NAME</p>
                            <h3 class="project-title">
                                {{project.title}}
                            </h3>
                        </section>
                        <section class="project-card_section description">
                            <p class="section-title">DESCRIPTION</p>
                            <p class="project-description">
                                {{project.description}}
                            </p>
                        </section>
                        <section class="project-card_section tech">
                            <p class="section-title">TECH</p>
                            <p class="project-stack">
                                {{project.tech}}
                            </p>
                            <a class="project-link" v-bind:href="project.link" target="_blank">
                                Website
                                <span class="link-icon">
                                    <img src="/media/link.svg" alt="Link icon">
                                </span>
                            </a>
                        </section>
                    </article>
                </div>
            </overlay-scrollbars>
        </div>
    </section>
</template>

<style lang="scss">
    .projects {
        grid-row-gap: 4.25rem;
        row-gap: 4.25rem;
        
        @include media-breakpoint-up(lg) {
            grid-template-rows: 1fr 18.43rem;
            grid-row-gap: 4.25rem;
            row-gap: 4.25rem;
        }

        &_headings {
            grid-column: 1 / -1;

            @include media-breakpoint-up(lg) {
                grid-column: 2 / -1;
            }
        }

        &_heading {
            z-index: 1;
            font-size: $font-3xl;
            line-height: $line-height-3xl;
            font-weight: 800;

            @media screen and (min-width: 350px) {
                font-size: $font-4xl;
                line-height: $line-height-4xl;
            }
        }

        &_group-wrapper {
            grid-column: 1 / -1;

            @include media-breakpoint-up(lg) {
                position: absolute;
                bottom: 0;
                width: 100vw;
            }
        }

        &_group {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;

            @include media-breakpoint-up(lg) {
                flex-direction: row;
                transform: translateX(3/11*100%);
            }
        }
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

    .project-stack {
        align-self: center;
        margin-right: 1rem;
    }

    .project-description {
        font-size: $font-sm;
        line-height: $line-height-sm;
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
    }

    .project-card {
        display: grid;
        grid-template-rows: 2rem 1fr minmax(2rem, auto);
        grid-row-gap: 1rem;
        row-gap: 1rem;
        width: 100%;
        max-width: 100%;
        min-height: 18.43rem;
        padding: 1.5rem;
        background: $color-gray-800;

        @include media-breakpoint-up(lg) {
            min-width: 32.43rem;
        }

        &_section {
            display: flex;
        }
    }
</style>