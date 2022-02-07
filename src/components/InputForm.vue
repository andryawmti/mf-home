<template>
    <input class="input" type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>

export default {
    name: 'InputForm',
    props: ['modelValue'],
    emits: ['update:modelValue'],
}
</script>

<style scoped>
  .input {
      padding: 6px 8px;
      border-radius: 4px;
      border: 1px solid #001833;
      background: #fff
  }
</style>