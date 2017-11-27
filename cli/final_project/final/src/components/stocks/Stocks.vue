<template>
  <div class="container">
    <div class="row">
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
  import Stock from './Stock.vue'

  export default {
    components: {
      appStock: Stock
    },
    computed: {
      stocks () {
        return this.$store.getters.stocks
      }
    },
    methods: {}
  }
</script>

<style>

</style>
