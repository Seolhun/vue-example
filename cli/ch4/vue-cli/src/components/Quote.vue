<template>
  <div class="col-sm-6 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-body quote">
        <slot>

        </slot>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .panel-body {
    font-family: 'Arizonia', cursive;
    font-size: 24px;
    border: solid #cccccc 1px;
    color: #6e6e6e;
    padding: 5px;
    margin: 20px;
  }

  .quote {
    cursor: pointer;
  }

  .quote:hover {
    background-color: #ffe2e2;
  }
</style>
