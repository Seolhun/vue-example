<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <p>Counter : {{ counter }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      counter () {
        return this.$store.state.counter.value
      }
    }
  }
</script>

<style scoped>

</style>
