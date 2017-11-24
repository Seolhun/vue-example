<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <button
          class="btn btn-info"
          @click="asyncIncrement({by: 50, duration: 500})">
          Another Increment
        </button>
        <button
          class="btn btn-info"
          @click="asyncDecrement({by: 50, duration: 500})">
          Another Decrement
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    methods: mapActions([
      'asyncIncrement',
      'asyncDecrement'
    ])
//    methods: {
//      increment () {
//        this.$store.commit('increment')
//      },
//      decrement () {
//        this.$store.commit('decrement')
//      }
//    }
  }
</script>

<style scoped>

</style>
