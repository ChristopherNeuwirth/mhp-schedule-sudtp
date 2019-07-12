<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <h1>Schedule</h1>
      </v-flex>
      <v-flex xs12>
        <Tabs />
      </v-flex>
      <v-flex xs12>
        <div v-for="(item, index) in scheduleItems" v-bind:key="index">
          <ScheduleItemElement class="item elevation-1" v-bind:item="item"></ScheduleItemElement>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import axios from 'axios';
import { Vue, Prop, Component } from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import { ScheduleItem } from '../model/schedule-entry';
import ScheduleItemElement from '@/components/Schedule-Item.vue';

@Component({
  components: {
    Tabs,
    ScheduleItemElement
  }
})
export default class Schedule extends Vue {
  // @Prop() private propMessage!: string;

  // initial data
  private scheduleItems: any = {};

  // pass Props to component: <Component prop-message="Hello World"></Component>
  // use prop values for initial data
  // private helloMsg = 'Hello, ' + this.propMessage;

  // computed
  // get computedMsg() {
  //   return 'computed ' + this.propMessage;
  // }

  // lifecycle hook
  protected beforeMount() {
    this.getData();
  }

  // methods
  private getData(): void {
    const api = `data/schedule.json`;
    axios({
      method: 'GET',
      url: api,
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((result) => {
        this.scheduleItems = result.data;
        console.log(this.scheduleItems);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
</script>
<style lang="scss" scoped>
@import '../style/mixins/px-rem-converter.scss';

.item {
  margin-bottom: rem(30px);
  border: rem(1px) solid #dedede;
  border-radius: rem(4px);
  padding: rem(20px);
}
</style>
