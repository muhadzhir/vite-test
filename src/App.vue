<template>
  <div class="test">
    <div class="test-child">{{ test }}</div>
  </div>
</template>
<script lang="ts" setup>
const test = 'test'
</script>
<style lang="scss">
.test {
  &-child {
    color: rebeccapurple;
  }
}
</style>
