<template>
  <div>
    <button class="carousel-controll left" @click="$emit('pre')">Pre</button>
    <button class="carousel-controll right" @click="$emit('next')">Next</button>
  </div>
</template>

<script>
export default {
  emits: ['pre', 'next'],
}
</script>

<style scoped>
.carousel-controll {
  @apply bg-black border-0 inline-block absolute w-[70px] h-[50px] top-[calc(50%-25px)] text-[#f3f3f3] cursor-pointer;
}
.left {
  @apply left-0;
}
.right {
  @apply right-0;
}
</style>