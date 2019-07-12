<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <v-img :src="require('./assets/mhp-logo.png')" class="mhp__logo"></v-img>
        <span class="mhp__headline">MHP</span>
        <span class="font-weight-light">SUDTP</span>
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

<style lang="scss">
@import './style/mixins/breakpoint.scss';
@import './style/index.scss';

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
