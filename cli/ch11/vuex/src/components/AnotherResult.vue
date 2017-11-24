<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <p>DoubleCounter : {{ doubleCounter }}</p>
        <p>Number of clicks : {{ stringCounter }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import * as alias from '../vuex/alias'

  export default {
    computed: mapGetters({
      doubleCounter: alias.DOUBLE_COUNTER,
      stringCounter: alias.CLICK_COUNTER
    })
    // Same Result (Use this. When you not es6)
//    computed: {
//      ...mapGetters([
//        'doubleCounter',
//        'stringCounter'
//      ])
//    }
  }
</script>

<style scoped>

</style>
