import Vue from 'vue'

Vue.component('wrapper-component', {
  name: 'WrapperComponent',
  props: {
    tag: {
      type: String,
      required: true
    }
  },
  render(createElement) {
    return createElement(
      this.tag,
      { on: this.$listeners, attrs: this.$attrs },
      [this.$slots.default]
    )
  }
})
