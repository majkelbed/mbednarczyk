<script>
    export default {
        data() {
            return {
                skills: [
                    'svelte',
                    'typescript',
                    'bootstrap',
                    'webpack',
                    'react',
                    'bootstrap',
                    'webpack',
                    'react'
                ]
            }
        },
        computed: {
            formatedSkills() {
                return this.skills.reduce((acc, skill) => {
                    return acc = [...acc, ...skill.split(''), ' '];
                }, []).map((skill, index, arr) => ({
                    char:skill,
                    deg: (360 / arr.length * index)
                }));
            }
        }
    }
</script>

<template>
    <div class="skills">
        <div class="halo">
            <div 
                class="char"
                v-for="(skill, index) in formatedSkills" 
                :key="index"
                v-bind:style="{transform: `rotate(${skill.deg}deg) scale(1.2)`}"
            >
                {{skill.char}}
            </div>
        </div>
        <div class="circle-wrapper">
            <div class="circle"></div>
        </div>
    </div>
</template>


<style lang="scss">
    .skills {
        grid-column: 7 / -1;
        position: relative;
        display: flex;
        justify-content: center;
    }

    .halo {
        position: relative;
        height: 362px;
        width: 100%;
        animation:rotate 200s infinite linear forwards;
    }

    .char {
        position: absolute;
        top:0;
        left:calc(50% - 0.5ch);
        height: 362px;
        color: $color-pink;
    }

    .circle-wrapper {
        position: absolute;
        top:0;
        left:0;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .circle {
        width: 362px;
        height: 362px;
        border-radius: 999px;
        background: linear-gradient(131.29deg, #EBF3D0 0%, rgba(235, 243, 208, 0) 18.4%), radial-gradient(29.9% 70.94% at 44.25% 86.96%, #DC8DDC 0%, rgba(220, 141, 220, 0) 100%), radial-gradient(33.83% 53.57% at 35.87% 100%, #DC8DDC 0%, rgba(220, 141, 220, 0) 100%), radial-gradient(42.66% 49.72% at 45.56% 44.65%, #CBADEB 0%, rgba(194, 166, 241, 0) 100%), linear-gradient(142.76deg, #CDF9E8 20.63%, rgba(205, 249, 232, 0) 47.84%), linear-gradient(208.96deg, rgba(192, 169, 240, 0) -16.52%, #C0A9F0 -1.04%, rgba(192, 169, 240, 0) 16.99%), linear-gradient(136.74deg, rgba(192, 169, 240, 0) 28.63%, #C0A9F0 38.5%, rgba(192, 169, 240, 0) 50.26%), radial-gradient(40.75% 97.37% at 90.75% 40.15%, #FFFDB1 0%, #FEE4BF 34.46%, #F0BDD0 69.5%, rgba(255, 129, 38, 0) 100%), #C2A6F1;
    }

    @keyframes rotate {
        to {
            transform: rotate(359.9999deg);
        }
    }
</style>