<template>
  <div>
    <Vitor order="12" @rere="evento($event)" />
  </div>
</template>
<script>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
import Vitor from '@/components/Vitor.vue'
export default defineComponent({
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Vitor
  },
  setup() {
    function evento(event) {
      alert(event)
    }
    const route = useRoute()
    console.log(route.value.params)
    return {
      evento,
    }
  }
})
</script>
