<template>
  <div>
    <app-header>

    </app-header>
    <transition
      name="slide"
      mode="out-in"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'

  export default {
    data () {
      return {}
    },
    methods: {},
    components: {
      appHeader: Header
    },
    created () {
      this.$store.dispatch('initStocks')
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

  .slide-enter-active {
    animation: slide-in 500ms ease-out forwards;
  }

  .slide-leave.active {
    animation: slide-out 500ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
