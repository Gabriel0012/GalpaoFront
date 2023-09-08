<script setup lang="ts">
import { computed } from 'vue'

// Props and emites
const props = defineProps<{ type: string; modelValue: string; label: string }>()
const emit = defineEmits<{ 'update:modelValue': [modelValue: string] }>()

// Computeds
const getInputId = computed(() => props.label.replace(' ', '_').toLocaleLowerCase())

// Methods
function setInputValue(event: Event) {
  const value = (event.target as HTMLInputElement).value
  emit('update:modelValue', value)
}
</script>

<template>
  <label :for="getInputId">{{ label }}</label>
  <input :type="type" :value="modelValue" :id="getInputId" @input="setInputValue" />
</template>

<style></style>
