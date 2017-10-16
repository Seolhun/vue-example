export const fruitMixin = {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Orange', 'Mango'],
      filterText: ''
    }
  },
  computed: {
    filterFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      })
    }
  },
  created(){
    console.log('Created mixin in fruitMixin.js');
  }
};
