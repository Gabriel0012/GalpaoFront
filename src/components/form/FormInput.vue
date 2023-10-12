<script setup lang="ts">
import { computed } from 'vue'

// Props and emites
const props = defineProps<{ type: string; modelValue: string; label: string; color: string }>()
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
  <section :class="color">
    <label :for="getInputId">{{ label }}</label>
    <input :type="type" :value="modelValue" :id="getInputId" @input="setInputValue" />
  </section>
</template>

<style scoped lang="scss">
section {
  &:hover {
    input {
      border-color: var(--color-border-hover);
    }
  }
  input {
    background-color: transparent;
    border: 1px solid var(--color-border);
    color: var(--color-text);
    height: 32px;
    border-radius: 8px;
    padding: 5px;
    &:focus-visible {
      outline: none;
    }
  }
  &.primary {
    &:hover{
      input {
        border-color: var(--color-primary);
      }
      label {
        color: var(--color-primary);
      }
    }
  }
}
</style>
