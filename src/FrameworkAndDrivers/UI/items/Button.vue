<template>
  <div v-on:click="action" class="button">
    <p>{{ info }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const ButtonProps = Vue.extend({
  props: {
    info: String
  }
});

@Component
export default class Button extends ButtonProps {
  action() {
    this.$emit('action');
  }
}
</script>

<style scoped>
.button {
  padding: 1px 45px 1px 45px;
  background-color: #d8dee9;
  color: #4c566a;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
}

.button p {
  margin: 10px;
  font-weight: bold;
}

.button:active {
  background-color: #4c566a;
  color: #d8dee9;
}
</style>
