<template>
  <div>
    <span class="1">ad</span>
    <button @click="emita()">Emita</button>
  </div>
</template>
<script lang="ts" setup>
import { defineEmits, defineProps, PropType} from '@nuxtjs/composition-api'

const props = defineProps({
  order: {
    type: String as PropType<String>,
    required: true,
  }
})

const emit = defineEmits<{
  (event: string, value: any): void
}>()

function emita() {
  emit('rere', props.order)
}
</script>
