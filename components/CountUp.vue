<template>
  <!-- <i-countup
    ref="counter"
    :endVal="endVal"
    :delay="delay"
    @ready="onReady"
    :options="options"
  /> -->
  <span
    v-countUp:onWindowScroll.once="{
      watchedElId: 'podcast-info',
      startValue: 0,
      endValue: endVal,
      options: { duration: 5, suffix: '+' }
    }"
  />
</template>

<script>
export default {
  props: {
    endVal: {
      type: Number,
      required: false
    },
    delay: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      options: {
        suffix: '+'
      }
    }
  },
  methods: {
    onReady(instance, CountUp) {
      const currentCounter = this.$el
      const counterTop = currentCounter.getBoundingClientRect().top
      const these = this
      window.addEventListener('scroll', function onScroll() {
        if (window.pageYOffset > counterTop - window.innerHeight / 2) {
          this.removeEventListener('scroll', onScroll)
          instance.update(these.endVal)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
