<template>
  <div id="networkAnalyzer" class="row justify-content-center">
   <CcvLineChart :data="data" :options="options" />
  </div>
</template>

<script>
import { CcvLineChart } from '@carbon/charts-vue';

import data from './data.js';
import options from './options.js';

export default {
  name: 'NetworkAnalyzer',

  data() {
  return {
          data,
          options
      }
},

  components: {
      CcvLineChart
  },

  created() {
      this.$emit('ready')
  }
}
</script>

<style>
@import '@carbon/styles/css/styles.css';
@import '@carbon/charts-vue/styles.css';

.p-1 {
padding: 2rem;
}
</style>