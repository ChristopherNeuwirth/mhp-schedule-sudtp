<template>
  <v-layout align-space-around justify-center column fill-height class="fold__wrapper">
    <div class="fold__overlay"></div>
    <v-flex xs12>
      <div class="fold__container">
        <h1 class="fold__headline">If you can dream it, you can do it. Welcome to the SUDTP AgileDay</h1>
        <v-flex xs12 text-xs-center class="fold__buttons">
          <v-btn outline color="white" @click="$vuetify.goTo('#about', { duration: 400, offset: 10 })"
            >Mehr Erfahren</v-btn
          >
          <v-btn outline color="white" to="/schedule">Agenda</v-btn>
        </v-flex>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as easings from 'vuetify/es5/util/easing-patterns';

@Component
export default class HomeFoldComponent extends Vue {}
</script>


<style scoped lang="scss">
@import '../style/mixins/px-rem-converter.scss';
@import '../style/mixins/breakpoint.scss';
@import '../style/base/colors.scss';

.fold {
  &__wrapper {
    position: relative;
    background: url('/cold-daylight-desktop-wallpaper-1366919.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__overlay {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
  }

  &__buttons {
    margin-top: rem(20px);

    @include breakpoint('xs') {
      margin-top: rem(50px);
    }
  }

  &__container {
    width: 80%;
    border: rem(5px) solid white;
    position: relative;
    margin: rem(80px) auto;
    padding: rem(22px);
    text-transform: uppercase;

    @include breakpoint('xs') {
      border: rem(10px) solid white;
    }
  }

  &__headline {
    font-size: rem(30px);
    font-weight: 300;
    color: white;

    @include breakpoint('xs') {
      font-size: rem(60px);
      line-height: rem(70px);
    }
  }
}
</style>
