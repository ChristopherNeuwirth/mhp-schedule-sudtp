<template>
  <div class="tab__wrapper">
    <v-tabs v-model="active" color="light-blue darken-4" dark slider-color="yellow">
      <div class="white--text tab__heading">Date:</div>
      <v-tab ripple> 18. Oktober </v-tab>
      <v-tab-item v-for="n in 3" :key="n"> </v-tab-item>
    </v-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Tabs extends Vue {
  // @Prop() private propMessage!: string;
  // initial data
  private active: number = 0;
  // pass Props to component: <Component prop-message="Hello World"></Component>
  // use prop values for initial data
  // private helloMsg = 'Hello, ' + this.propMessage;
  // computed
  // get computedMsg() {
  //   return 'computed ' + this.propMessage;
  // }
  // lifecycle hook
  // protected mounted() {
  //   // do sth
  // }
  // methods
}
</script>


<style scoped lang="scss">
.tab {
  &__wrapper {
    margin: 20px 0;
  }

  &__heading {
    opacity: 0.7;
    height: 100%;
    padding: 6px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: inherit;
  }
}
</style>
