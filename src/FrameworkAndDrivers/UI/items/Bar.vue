<template>
  <div :class="'bar ' + state" :style="{ height: value + 'px' }">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const BarProps = Vue.extend({
  props: {
    value: Number,
    state: String
  }
})

export default class Bar extends BarProps {

}
</script>

<style scoped>
.bar {
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    border: 3px solid black;
}

.done {
    background-color: #A3BE8C;
}

.selected {
    background-color: #B48EAD;
}

.normal {
    background-color: #88C0D0;
}
</style>
