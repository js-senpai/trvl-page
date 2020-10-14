import Vue from 'vue'
import ICountUp from 'vue-countup-v2/dist/VueCountUp'
Vue.component('ICountUp', ICountUp)

Vue.directive('scroll', {
  inserted(el, binding) {
    const f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})
