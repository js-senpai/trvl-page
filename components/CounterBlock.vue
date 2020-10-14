<template>
  <div id="watchedElement" class="counter-block w-full xs:w-1/2 xl:w-auto">
    <h3 class="conter-number text-5xl lg:text-6xl text-dark">
      <CountUp :delay="3000" :endVal="+max" />
    </h3>
    <p v-html="text" class=""></p>
  </div>
</template>
<script>
export default {
  props: ['text', 'max']
}
</script>
