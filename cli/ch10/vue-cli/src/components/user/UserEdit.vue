<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale : {{ $route.query.locale }} </p>
    <p>Analytics : {{ $route.query.q }} </p>
    <hr>
    <button class="btn btn-danger">Confirm</button>
    <div style="height: 1000px"></div>
    <p id="data">Some extra Data</p>
  </div>
</template>
