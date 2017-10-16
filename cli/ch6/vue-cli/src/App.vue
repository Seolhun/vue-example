<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built in Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Some Strong Text</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Global(main.js) Custom Directives</h1>
        <p v-highlight>Color this</p>
        <p v-highlight="'aqua'">Color this</p>
        <p v-highlight:background>Color this</p>
        <p v-highlight:background.delayed="'yellow'">Delay Color this</p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Local Custom Directives</h1>
        <p v-local-highlight:background.delayed="{mainColor: 'yellow'}">Delay Color this</p>
        <p v-local-highlight:background.delayed.blink="{mainColor: 'yellow', secondColor: 'aqua', delay: 500}">Delay & Interval Color this</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    directives: {
      'local-highlight': {
        bind (el, binding, vnode) {
          var delay =0;
          if(binding.modifiers['delayed']) {
            delay = 3000;
          }
          if(binding.modifiers['blink']) {
            let mainColor = binding.value.mainColor;
            let secondColor = binding.value.secondColor;
            let currentColor = mainColor;
            setTimeout(() => {
              setInterval(() => {
                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                if (binding.arg == 'background') {
                  el.style.backgroundColor = currentColor;
                } else {
                  el.style.color = currentColor;
                }
              }, binding.value.delay);
            }, delay);
          } else {
            setTimeout(() => {
              if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value.mainColor;
              } else {
                el.style.color = binding.value.mainColor;
              }
            }, delay);
          }
        }
      }
    }
  }
</script>

<style>

</style>
