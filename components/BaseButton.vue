<template>
  <wrapper-component
    :tag="tag"
    v-on="$listeners"
    v-bind="$attrs"
    :class="btnClass ? btnClass : 'btn'"
    :disabled="processing"
  >
    <slot v-if="!processing"></slot>
    <span v-else>Пожалуйста подождите...</span>
  </wrapper-component>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    btnClass: {
      type: [Object, String],
      default: null
    },
    processing: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.btn {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  @apply relative px-2 py-4 uppercase text-base;
}

.btn.btn-lg {
  @apply py-3 px-8;
}

.btn.btn-g-green {
  background: linear-gradient(84.89deg, #abf43d, #22cdd8 99.21%);
  color: #000 !important;
}

.btn.btn-g-orange {
  background: linear-gradient(to right, #fb7414, #e23569);
  @apply text-white;
}
</style>
