<template>
  <div class="navbar">
    <div class="settings"></div>
    <div class="buttons">
      <Button @action="randomButton" info="Random" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Button from '../items/Button.vue';

@Component({
  components: {
    Button
  }
})
export default class NavBar extends Vue {
  randomButton() {
    alert('Hello from button');
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  height: 10vh;
}
</style>
