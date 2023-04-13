<template>
  <transition :name="transitionEffect">
    <div
      class="carousel-item"
      v-show="currentSlide === index"
      @mouseenter="$emit('mouseenter')"
      @mouseout="$emit('mouseout')"
    >
      <img :src="slide" />
    </div>
  </transition>
</template>

<script>
export default {
  props: ['slide', 'currentSlide', 'index', 'direction'],
  emit: ['mouseenter', 'mouseout'],
  computed: {
    transitionEffect() {
      return this.direction === 'right' ? 'slide-out' : 'slide-in'
    },
  },
}
</script>

<style scoped>
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 3s ease-in-out;
}

.slide-in-enter-active {
  transform: translateX(-100%);
}

.slide-in-enter-to {
  transform: translateX(0%);
}

.slide-in-leave-active {
  transform: translateX(0%);
}

.slide-in-leave-to {
  transform: translateX(100%);
}

.slide-out-enter-active {
  transform: translateX(100%);
}

.slide-out-enter-to {
  transform: translateX(0%);
}

.slide-out-leave-to {
  transform: translateX(-100%);
}
</style>