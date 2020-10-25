<script>
export default {
    props: [
        'isVisible'
    ]
}
</script>
<template>
    <transition name="fade">
        <div v-if="isVisible" class="spinner-box">
            <div class="circle-border">
                <div class="circle-core"></div>
            </div>  
        </div>
    </transition>
</template>
<style lang="scss" scoped>

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
  transition-delay: 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.circle-border {
  width: 3rem;
  height: 3rem;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: $color-pink;
  background: linear-gradient(0deg, rgba($color-pink, 0.1) 33%, $color-pink 100%);
  animation: spin 1.2s linear 0s infinite;
}

.circle-core {
  width: 100%;
  height: 100%;
  background-color: $color-black;
  border-radius: 50%;
}

.spinner-box {
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
</style>