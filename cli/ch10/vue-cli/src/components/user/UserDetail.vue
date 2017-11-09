<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID : {{ $route.params.id }}</p>
    <router-link
      class="btn btn-info"
      tag="button"
      :to="link"
    >
      <!--:to="'/user/' + $route.params.id + '/edit'"-->
      Edit User
    </router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        link: {
          name: 'userEdit',
          params: {
            id: this.$route.params.id
          },
          query: {
            locale: 'en',
            q: 100
          },
          hash: '#data'
        }
      }
    },
    beforeRouteLeave (to, from, next) {
      console.log('beforeRouterEnter in UserDetail ')
      if (true) {
        next();
      } else {
        next(false);
      }
    }
  }
</script>

<style>

</style>
