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
        <v-layout class="schedule__wrapper" wrap>
          <v-flex xs12 sm1>
            <div class="grey--text lighten-5 schedule__time">
              <span class="schedule__time--hour">08</span>
              <span class="schedule__time--minute">00</span>
            </div>
          </v-flex>
          <v-flex xs12 sm11>
            <div>
              <h2 class="schedule__item-headline">Headline</h2>
            </div>
            <a class="schedule__item-read-more">More...</a>
            <div class="schedule__item-text">
              Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
              sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus
              eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum.
            </div>
            <v-layout align-start justify-end row>
              <div>Tags1</div>
              <div>Tags2</div>
              <div>Tags3</div>
            </v-layout>
            <div>
              <v-layout align-start justify-start fill-height>
                <div style="width:80px;">
                  IMAGE
                </div>
                <div>
                  <div>Speaker Name</div>
                  <div>Company</div>
                </div>
              </v-layout>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';

@Component({
  components: {
    Tabs
  }
})
export default class Schedule extends Vue {
  // @Prop() private propMessage!: string;

  // initial data
  private msg = '';

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
<style lang="scss" scoped>
@import '../style/mixins/px-rem-converter.scss';
@import '../style/mixins/animations.scss';
@import '../style/mixins/breakpoint.scss';

.schedule {
  &__wrapper {
    padding: 0 rem(10px);
  }

  &__time {
    &--hour {
      font-weight: 100;
      font-size: rem(30px);
    }

    &--minute {
      font-weight: 300;
    }
  }

  &__item-headline {
    font-weight: 300;
  }

  &__item-read-more {
    @include base-transition;
  }

  &__item-text {
    line-height: rem(22px);
    padding: 10px 0 20px 0;

    @include breakpoint('s') {
      max-width: 80%;
    }
  }
}
</style>
