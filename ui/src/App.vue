<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <div class="goToHome" @click="goToHome">
          <v-img :src="require('./assets/mhp-logo.png')" class="mhp__logo"></v-img>
          <span class="mhp__headline">MHP</span>
          <span class="font-weight-light">SUDTP</span>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/">
        <span>Home</span>
      </v-btn>
      <v-btn flat to="/schedule">
        <span>Schedule</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import router from './router';

@Component
export default class App extends Vue {
  private goToHome() {
    router.push({ path: '/' });
  }
}
</script>

<style lang="scss">
@import './style/mixins/breakpoint.scss';
@import './style/mixins/animations.scss';
@import './style/index.scss';

.goToHome {
  cursor: pointer;
  @include base-transition;

  &:hover {
    opacity: 0.7;
  }
}

.mhp {
  &__logo {
    display: inline-block !important;
    width: 17px;
    height: auto;
    margin-right: 5px;
  }

  &__headline {
    @include breakpoint('xs') {
      display: initial;
    }

    display: none;
  }
}
</style>
