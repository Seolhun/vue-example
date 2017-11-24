<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <button
          class="btn btn-primary"
          @click="increment(100)">
          Increment
        </button>
        <button
          class="btn btn-primary"
          @click="decrement(100)">
          Decrement
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    methods: mapActions([
      'increment',
      'decrement'
    ]),
    increment(by) {
      this.$store.dispatch('increment', by)
    }
//    methods: {
//      increment () {
//        this.$store.state.counter++
//      },
//      decrement () {
//        this.$store.state.counter--
//      }
//    }
  }
</script>

<style scoped>

</style>
