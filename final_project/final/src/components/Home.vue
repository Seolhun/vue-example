<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>Trade ir View your Portfolio</h1>
        <h6>You may Save & Load you Data</h6>
        <h6>Click on 'End Day' to begin a New Day!</h6>
        <hr>
        <p>Your Funds: {{ funds }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      funds () {
        return this.$store.getters.funds
      }
    }
  }
</script>
