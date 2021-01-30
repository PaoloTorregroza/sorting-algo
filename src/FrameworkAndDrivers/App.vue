<template>
  <div id="app">
    <NavBar />
    <BarContainer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BarContainer from './UI/components/BarContainer.vue';
import NavBar from './UI/components/NavBar.vue';

@Component({
  components: {
    BarContainer,
    NavBar
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
