<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 id="about">
        <p>Add Countdown visible as long as not at deadline</p>

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
      <v-flex xs12>
        <div class="map mapboxgl-map">
          <l-map
            :zoom="mapData.zoom"
            :center="mapData.center"
            :options="mapData.mapOptions"
            style=""
            @update:center="centerUpdate"
            @update:zoom="zoomUpdate"
          >
            <l-tile-layer :url="mapData.url" :attribution="mapData.attribution" />
            <l-marker :lat-lng="mapData.marker"> </l-marker>
          </l-map>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { latLng, tileLayer } from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from 'vue2-leaflet';

// import * as contentful from 'contentful';

@Component({
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  }
})
export default class HomeContent extends Vue {
  // private client = contentful.createClient({
  //   space: 'heiibemt676c',
  //   accessToken: '68GY1sZJJo5DijZstDgp30nU0frQ4eGNBoFfPVuqTXU'
  // });

  private image: any = {
    imgUrl: ''
  };

  protected mounted() {
    // this.client.getAsset('1Prri9wlSNuaml9m5TVmxI').then((asset) => (this.image.imgUrl = `${asset.fields.file.url}`));
  }

  private loadResponsiveMediaFromContentful() {
    // get current viewport size
    // get retina
    // make request to contentful with dimentions
    // load image
    // return image
  }

  get mapData() {
    const token = 'pk.eyJ1IjoiY2FwYmIiLCJhIjoiY2p5OXM4Nzc3MDZ0NzNka2hmam1qZm1xeCJ9.kGcqZDWgCKNju1Do2K0TDw';
    return {
      url: `https://api.mapbox.com/styles/v1/capbb/cjy9wgiah0cf21cqx1c24v65e/tiles/256/{z}/{x}/{y}?access_token=${token}`,
      zoom: 30,
      center: latLng(48.891598, 9.200914),
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(48.891598, 9.200914),
      currentZoom: 11.5,
      currentCenter: latLng(48.891598, 9.200914),
      showParagraph: false
    };
  }

  private zoomUpdate(zoom: any) {
    this.mapData.currentZoom = zoom;
  }
  private centerUpdate(center: any) {
    this.mapData.currentCenter = center;
  }
}
</script>


<style scoped lang="scss">
@import '../style/mixins/breakpoint.scss';

.map {
  width: 100%;
  height: 350px;
}
</style>
