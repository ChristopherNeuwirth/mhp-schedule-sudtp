<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 text-xs-center>
        <h1 class="display-1 font-weight-bold mb-3">AgileDay@SUDTP</h1>
      </v-flex>
      <v-flex xs12>
        <h2>Summary</h2>
        <p>
          Wenn sie 10 Personen Fragen, was „Agile” bedeutet, werden Sie wahrscheinlich 10 verschiedene Antworten
          erhalten. Dabei reichen die Perspektiven von Lean Management über Scrum bis hin zum Agile Coaching. Bei allen
          Perspektiven ist aber gleich, dass diese neben agilen Kernprinzipien auch immer auf einem gemeinsamen Mindset,
          Austausch und stetigem Lernen basieren. Genau hier möchten wir ansetzen.
        </p>
        <h2>Ziel</h2>
        <p>
          Basierend auf unseren unterschiedlichen Projekten und Einsätzen möchten wir den Tag nutzen, um neue Impulse
          mitzunehmen und uns gegenseitig auszutauschen.
        </p>
        <p>Datum/ Zeit 18.10.2019 09:00 bis 15 Uhr //MAKE COOL</p>
        <p>Ort MHP Lab Ludwigsburg Hindenburgstrasse 45 //MAKE MAP</p>
        <p>CTA Agenda</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HomeContent extends Vue {}
</script>


<style scoped lang="scss">
@import '../style/mixins/breakpoint.scss';
</style>
