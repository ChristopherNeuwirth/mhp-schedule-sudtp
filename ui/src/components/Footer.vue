<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="color--primary">
        <v-btn flat small to="/impressum">Impressum</v-btn>
        <v-btn flat small to="/privacy">Privacy</v-btn>
        <v-spacer></v-spacer>
      </v-card-title>

      <v-card-actions class="color--secondary justify-center">
        &copy;2019 — &nbsp;<strong>MHP SU Digital Touchpoints & Plattforms</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>


<style scoped lang="scss">
@import '../style/base/colors.scss';

.color {
  &--primary {
    background: $blue-dark;
  }
  &--secondary {
    background: #2f2f2f;
  }
}
</style>
