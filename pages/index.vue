<script>
export default {
    async asyncData ({ $content }) {
        const projects = await $content('projects').fetch();
        projects.sort((p1, p2) => p1.order - p2.order);
        return {
            projects
        }
    }
}
</script>

<template>
    <div>
      <Hero />
      <Projects v-bind:projects="projects" />
      <ContactForm />
    </div>
</template>