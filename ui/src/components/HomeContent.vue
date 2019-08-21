<template>
  <div>
    <v-container>
      <v-layout wrap>
        <v-flex xs12 id="about">
          <!-- <p>Add Countdown visible as long as not at deadline</p> -->

          <h2 class="section-headline">Wieso Weshalb Warum</h2>
          <p class="subheading center-on-desktop">
            Wenn sie 10 Personen Fragen, was <i>Agile</i> bedeutet, werden Sie wahrscheinlich 10 verschiedene Antworten
            erhalten. Dabei reichen die Perspektiven von Lean Management über Scrum bis hin zum Agile Coaching. Bei
            allen Perspektiven ist aber gleich, dass diese neben agilen Kernprinzipien auch immer auf einem gemeinsamen
            Mindset, Austausch und stetigem Lernen basieren. Genau hier möchten wir ansetzen.
          </p>
          <v-layout wrap>
            <v-flex xs12>
              <div class="illustration__container">
                <v-img :src="require('../assets/illustration.png')" class="my-3 illustration" contain></v-img>
              </div>
            </v-flex>
            <v-flex xs12 style="position: relative;">
              <h2 class="section-headline">Das wollen wir erreichen</h2>
              <p class="subheading center-on-desktop">
                Basierend auf unseren unterschiedlichen Projekten und Einsätzen möchten wir den Tag nutzen, um neue
                Impulse mitzunehmen und uns gegenseitig auszutauschen.
              </p>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <div>
      <v-container>
        <v-layout wrap>
          <v-flex xs12>
            <h2 class="section-headline">Wann</h2>
            <div class="centering">
              <p class="headline">Freitag, 18.10.2019</p>
              <p class="title">09:00 bis 15 Uhr</p>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <v-container>
      <v-layout wrap>
        <v-flex xs12>
          <h2 class="section-headline">Location</h2>
          <div class="centering">
            <p class="headline">MHP Lab Ludwigsburg Hindenburgstrasse 45</p>
          </div>
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
        <v-flex xs12 text-xs-center class="cta">
          <v-btn outline large color="#004b86" to="/schedule">Sieh dir die Agenda an</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
    const basePath = 'https://api.mapbox.com/styles/v1/capbb/cjy9wgiah0cf21cqx1c24v65e';
    return {
      url: `${basePath}/tiles/256/{z}/{x}/{y}?access_token=${token}`,
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
@import '../style/mixins/px-rem-converter.scss';
@import '../style/mixins/breakpoint.scss';
@import '../style/base/colors.scss';

.map {
  width: 100%;
  height: rem(350px);
  margin-top: rem(70px);
}

.cta {
  margin: rem(70px) 0 rem(40px) 0;
}

.subheading {
  line-height: rem(33px);
}

.centering {
  text-align: center;
}

.illustration {
  height: rem(250px);

  // @include breakpoint('s') {
  //   height: inherit;
  // }

  &__container {
    margin-top: rem(70px);
  }
}

.section-headline {
  font-size: rem(30px);
  line-height: rem(37px);
  text-transform: uppercase;
  text-align: center;
  display: block;
  margin: rem(50px) 0 rem(30px) 0;
  color: $blue-default;

  &::after {
    display: block;
    position: absolute;
    content: '';
    border: 1px solid $blue-default;
    width: rem(100px);
    margin: rem(7px);
    left: 50%;
    margin-left: rem(-50px);
  }
}

.center-on-desktop {
  @include breakpoint('s') {
    text-align: center;
  }
}
</style>
