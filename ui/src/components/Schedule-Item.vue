<template>
  <v-layout class="schedule__wrapper" wrap>
    <img v-if="item.icon" v-bind:src="item.icon" class="schedule__icon" alt="Icon" />
    <v-flex xs12 sm1>
      <div class="grey--text lighten-5 schedule__time">
        <span class="schedule__time--hour">{{ item.time.hour }}</span>
        <span class="schedule__time--minute">{{ item.time.minute }}</span>
      </div>
    </v-flex>
    <v-flex xs12 sm11 style="padding-top: 4px;">
      <div>
        <h2 class="schedule__item-headline">{{ item.headline }}</h2>
      </div>
      <a v-if="item.description" class="schedule__item-read-more" @click="showHideDescription">More...</a>
      <div
        v-if="item.description"
        class="schedule__item-text schedule__item-text--hide grey--text text--lighten-1"
        v-bind:class="{ 'schedule__item-text--show': !hidden }"
      >
        {{ item.description }}
      </div>
      <v-layout align-start justify-end row class="schedule__item-tag-wrapper">
        <div class="schedule__item-tag" v-for="(tag, index) in item.tags" v-bind:key="index">{{ tag }}</div>
      </v-layout>
      <div v-if="item.speaker">
        <v-layout align-start justify-start fill-height>
          <div class="schedule__item-image-wrapper">
            <v-avatar :tile="false" :size="40" color="grey lighten-4 elevation-3">
              <img v-bind:src="item.speaker.image" v-bind:alt="item.speaker.name + ' Avatar'" />
            </v-avatar>
          </div>
          <div>
            <div class="schedule__item-speaker-name grey--text">{{ item.speaker.name }}</div>
            <div class="schedule__item-speaker-company grey--text">{{ item.speaker.company }}</div>
          </div>
        </v-layout>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ScheduleItem } from '../model/schedule-entry';

@Component
export default class ScheduleItemElement extends Vue {
  @Prop() private item!: ScheduleItem;

  private hidden: boolean = true;

  public showHideDescription() {
    this.hidden = !this.hidden;
  }
}
</script>


<style scoped lang="scss">
@import '../style/mixins/px-rem-converter.scss';
@import '../style/mixins/animations.scss';
@import '../style/mixins/breakpoint.scss';

.schedule {
  &__wrapper {
    padding: 0 rem(10px);
    position: relative;
    overflow: hidden;
  }

  &__icon {
    opacity: 0.1;
    display: block;
    position: absolute;
    width: rem(80px);
    height: auto;
    right: 20px;
    bottom: -3px;
  }

  &__time {
    display: inline-block;

    &--hour {
      font-weight: 100;
      font-size: rem(30px);
    }

    &--minute {
      font-weight: 300;
      margin-left: rem(2px);
    }
  }

  &__item-headline {
    font-weight: 300;
  }

  &__item-read-more {
    @include base-transition;

    display: block;
    margin-bottom: rem(7px);
  }

  &__item-text {
    line-height: rem(22px);
    padding: rem(10px) 0 rem(20px) 0;
    margin-bottom: rem(20px);
    transition: max-height 0.75s ease-in-out;

    @include breakpoint('s') {
      max-width: 80%;
    }

    &--hide {
      max-height: 0px;
      overflow: hidden;
      padding: 0;
    }

    &--show {
      height: auto;
      max-height: rem(200px);
    }
  }

  &__item-image-wrapper {
    width: rem(60px);
  }

  &__item-tag {
    display: inline-block;
    background: #f9f9f9;
    border: rem(1px) solid #d4d4d4;
    padding: rem(1px) rem(7px) 0 rem(7px);
    border-radius: rem(5px);
    margin: 0 rem(2px);
    text-transform: uppercase;
    font-size: rem(11px);
    font-weight: normal;
    cursor: default;
  }

  &__item-tag-wrapper {
    margin-bottom: rem(20px);
  }

  &__item-speaker-name {
    text-transform: uppercase;
    font-size: rem(18px);
  }

  &__item-speaker-company {
    font-size: rem(14px);
  }
}
</style>
