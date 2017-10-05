<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn()">Reset Name2</button>
  </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    //this props matched above {{ myName }} and methods
    //this props check validation type
    props: {
      myName: {
        type: String
//      required: true,
//      default: 'SeolHun',
      },
      resetFn: Function,
      userAge: Number
    },
    methods: {
      switchName() {
        return this.myName.split("").reverse().join("");
      },

      /*
      [Vue warn]: Avoid mutating a prop directly since the value will be overwritten
      whenever the parent component re-renders. Instead, use a data or computed
      property based on the prop's value. Prop being mutated: "myName"
      => Must create method Root(App.vue) ex)resetFn in prop
      */
      resetName() {
        this.myName = 'SeolHun';
        this.$emit('nameWasReset', this.myName);
      }
    },
    created() {
      eventBus.$on('ageWasEdited', (age) => {
        this.userAge = age;
      });

    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
