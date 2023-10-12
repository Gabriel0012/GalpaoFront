<script setup lang="ts">
// Props and emites
defineProps<{ text: string; color: string; shape: string }>()
</script>

<template>
  <section :class="shape">
    <button :class="[color]">{{ text }}</button>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  &.shape {
    display: block;
  }
}

button {
  border: 0;
  color: var(--color-);
  box-shadow: none;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  cursor: pointer;

  padding: 5px 10px;
  border-radius: 6px;
  &.primary {
    background-color: var(--color-primary);
    color: var(--vt-c-black-mute);
  }
}
</style>
