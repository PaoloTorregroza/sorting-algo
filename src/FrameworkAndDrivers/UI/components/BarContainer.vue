<template>
  <div class="bar-container">
      <transition-group name="bar-complete" tag="p">
        <Bar
            v-for="(item, index) in items"
            v-bind:key="index"
            :value="item.value"
            :state="item.state"
            class="bar-complete-item"
            >
        </Bar>
      </transition-group>
      <button v-on:click="shuffle">Mezclar</button>
  </div>
</template>

<script lang="ts">
import * as _ from 'lodash';

import { Component, Vue } from 'vue-property-decorator';
import Bar from '../items/Bar.vue';

@Component({
  components: {
    Bar,
  },
})

export default class BarContainer extends Vue {
  public items: Array<object> = [
    {
      value: 100,
      state: 'done'
    },
    {
      value: 120,
      state: 'normal'
    },
    {
      value: 160,
      state: 'normal'
    },
    {
      value: 30,
      state: 'done'
    },
    {
      value: 300,
      state: 'done'
    },
    {
      value: 120,
      state: 'normal'
    },
    {
      value: 10,
      state: 'done'
    },
    {
      value: 135,
      state: 'normal'
    },
  ]

  public shuffle(): void {
        this.items = _.shuffle(this.items)
  }
  
  public randomIndex (): number {
        return Math.floor(Math.random() * this.items.length)
  }
}
</script>

<style scoped>
  .bar-container {
      height: 85vh;
      background-color: #3B4252;
      padding: 15px;
      padding-left: 12%;
      padding-right: 12%;
  }

  .bar-container > p {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    transition: all 1s;
  }

  .bar-complete-enter, .bar-complete-leave-to {
    opacity:0;
    transform: translateY(30px);
  }

  .bar-complete-leave-active {
    position: absolute;
  }

</style>
