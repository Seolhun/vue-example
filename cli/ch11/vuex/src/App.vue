<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>
          {{ message }}
        </h1>
        <hr>
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr>
        <app-counter></app-counter>
        <app-another-counter></app-another-counter>
        <hr>
        <input class="form-control" v-model="value">
        <p>{{value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue'
  import AnotherCounter from './components/AnotherCounter.vue'
  import Result from './components/Result.vue'
  import AnotherResult from './components/AnotherResult.vue'

  export default {
    data () {
      return {
        message: 'Welcome to Vuex app'
      }
    },
    methods: {
      updateValue (event) {
        this.$store.dispatch('updateValue', event.target.value)
      }
    },
    computed: {
      //Computed Getter/Setter
      value: {
        get () {
          return this.$store.getters.value
        },
        set (value) {
          return this.$store.dispatch('updateValue', value)
        }
      }
    },
    components:
      {
        appCounter: Counter,
        appAnotherCounter: AnotherCounter,
        appResult: Result,
        appAnotherResult: AnotherResult

      }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
