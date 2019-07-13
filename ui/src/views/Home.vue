<template>
  <div class="home">
    <HelloWorld msg="Welcome" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
@import '../style/mixins/px-rem-converter.scss';

.home {
  margin-top: rem(40px);
}
</style>
