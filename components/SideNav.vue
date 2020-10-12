<template>
   <aside class="sections-indicator">
        <span class="section-label active">
            Hi
        </span>
        <span class="dash"></span>
        <span class="section-label">
            Technologies
        </span>
        <span class="dash"></span>    
        <span class="section-label">
            Projects
        </span>
        <span class="dash"></span>
        <span class="section-label">
            About me
        </span>
    </aside> 
</template>


<style>
    .sections-indicator {
        z-index: 1;
        position: fixed;
        top:220px;
        left:calc((100% - 1280px) / 2);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .section-label {
        writing-mode: vertical-rl;
        transform: rotate(180deg);
    }

    .active {
        padding: 1rem 0;
        color: var(--color-black);
        font-weight: 600;
        background: linear-gradient(109.15deg, #EBF3D0 0%, rgba(235, 243, 208, 0) 18.4%), radial-gradient(29.9% 70.94% at 44.25% 86.96%, #DC8DDC 0%, rgba(220, 141, 220, 0) 100%), radial-gradient(33.83% 53.57% at 35.87% 100%, #DC8DDC 0%, rgba(220, 141, 220, 0) 100%), radial-gradient(42.66% 49.72% at 45.56% 44.65%, #CBADEB 0%, rgba(194, 166, 241, 0) 100%), linear-gradient(117.48deg, #CDF9E8 20.63%, rgba(205, 249, 232, 0) 47.84%), linear-gradient(234.46deg, rgba(192, 169, 240, 0) -16.52%, #C0A9F0 -1.04%, rgba(192, 169, 240, 0) 16.99%), linear-gradient(112.79deg, rgba(192, 169, 240, 0) 28.63%, #C0A9F0 38.5%, rgba(192, 169, 240, 0) 50.26%), radial-gradient(40.75% 97.37% at 90.75% 40.15%, #FFFDB1 0%, #FEE4BF 34.46%, #F0BDD0 69.5%, rgba(255, 129, 38, 0) 100%), #C2A6F1;
    }

    .dash {
        margin:1rem 0;
        width: 1px;
        height: 1em;
        background: var(--color-white);
    }

</style>