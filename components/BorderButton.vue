<template>
  <wrapper-component
    :tag="tag"
    v-on="$listeners"
    v-bind="$attrs"
    :class="btnClass"
  >
    <div class="btn-container">
      <slot></slot>
    </div>
  </wrapper-component>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  extends: BaseButton,
  inheritAttrs: false,
  props: {
    btnClass: {
      type: [Object, String],
      default: 'btn btn-g-orange'
    }
  }
}
</script>

<style scoped>
.btn {
  max-width: 750px;
  padding: 0.5rem;
  position: relative;
  padding: 3px;
  display: inline-block;
  @apply uppercase;
}
.btn > .btn-container {
  transition: all 0.4s ease-out;
  @apply inline-block py-3 px-12 text-white bg-dark;
}

.btn.btn-gb-orange {
  max-width: 250px;
  padding: 0.5rem;
  position: relative;
  background: linear-gradient(to right, #fb7414, #e23569);
  padding: 3px;
  display: inline-block;
}

.btn.btn-gb-orange:hover .btn-container {
  @apply bg-transparent;
}
</style>
