<template>
  <ManageBookings />
</template>

<script>
import ManageBookings from "@/components/ManageBookings.vue";

export default {
  name: 'App',
  components: {
    ManageBookings
  }
}
</script>

<style>
  html {
    background: #1c1c1c;
  }

  @font-face {
      font-family: 'Avenir';
      font-style: normal;
      font-weight: 400;
      src: url('./assets/fonts/AvenirLTStd-Roman.otf') format('opentype');
  }
  @font-face {
      font-family: 'Avenir';
      font-style: normal;
      font-weight: 500;
      src: url('./assets/fonts/AvenirLTStd-Medium.otf') format('opentype');
  }

  @font-face {
      font-family: 'Avenir';
      font-style: normal;
      font-weight: 700;
      src: url('./assets/fonts/AvenirLTStd-Heavy.otf') format('opentype');
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Avenir';
      /* line-height: 1.2; */
      -webkit-tap-highlight-color: transparent;
  }
</style>
