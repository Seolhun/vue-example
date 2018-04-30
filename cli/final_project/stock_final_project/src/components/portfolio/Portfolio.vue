<template>
  <div class="container">
    <div
      class="row"
    >
      <div
        class="col-sm-6 col-md-4"
        v-for="stock in stocks"
      >
        <app-stock
          :stock="stock"
          :key="stock.id"
        ></app-stock>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Stock from './Stock.vue'

  export default {
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    },
    components: {
      appStock: Stock
    }
  }
</script>
