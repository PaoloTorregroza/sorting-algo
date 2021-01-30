<template>
  <div :class="'bar ' + state" :style="{ height: value + 'px' }">
    {{ value }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const BarProps = Vue.extend({
  props: {
    value: Number,
    state: String
  }
});

@Component
export default class Bar extends BarProps {}
</script>

<style scoped>
.bar {
  width: 100%;
  margin-left: 10px;
  transition: all 1s;
  margin-right: 10px;
  border: 3px solid black;
}

.done {
  background-color: #a3be8c;
}

.selected {
  background-color: #b48ead;
}

.normal {
  background-color: #88c0d0;
}
</style>
