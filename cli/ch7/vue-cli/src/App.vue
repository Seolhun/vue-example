<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUppercase | to-lowercase }}</p>
        <hr>
        <button @click="fruits.push('Barries')">New fruit</button>
        <input v-model="filterText">
        <ul>
          <li
            v-for="fruit in filterFruits"
          >
            {{ fruit }}
          </li>
        </ul>
      </div>
      <hr>
      <app-list></app-list>
    </div>
  </div>
</template>

<script>
  import List from './components/List.vue'
  import { fruitMixin } from './components/fruitMixin.js';

  export default {
    mixins: [fruitMixin],
    data() {
      return {
        text: 'Hello, There!!',
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    components: {
      appList: List
    },
    created(){
      console.log('Created In App Vue');
    }
  }
</script>

<style>
</style>
