<template>
  <div class="bar-container">
    <Bar :value="10" :state="'normal'" />
    <Bar :value="50" :state="'normal'"/>
    <Bar :value="90" :state="'normal'"/>
    <Bar :value="10" :state="'normal'"/>
    <Bar :value="40" :state="'selected'"/>
    <Bar :value="100" :state="'selected'"/>
    <Bar :value="500" :state="'normal'"/>
    <Bar :value="120" :state="'normal'"/>
    <Bar :value="110" :state="'normal'"/>
    <Bar :value="10" :state="'normal'" />
    <Bar :value="500" :state="'normal'"/>
    <Bar :value="120" :state="'normal'"/>
    <Bar :value="110" :state="'normal'"/>
    <Bar :value="140" :state="'done'"/>
    <Bar :value="540" :state="'done'"/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Bar from '../items/Bar.vue';

@Component({
  components: {
    Bar,
  },
})
export default class BarContainer extends Vue {}
</script>

<style scoped>
.bar-container {
    height: 85vh;
    display: flex;
    align-items: flex-end;
    background-color: #3B4252;
    padding: 15px;
    padding-left: 12%;
    padding-right: 12%;
}
</style>
