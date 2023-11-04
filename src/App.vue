<template>
  <div class="test">
    <div class="test-child">test</div>
  </div>
</template>

<style lang="scss">
@import './style.scss';

.test {

  background-color: red;

  &-child {
    color: rebeccapurple;
  }
}
</style>
