<template>
  <div class="container">
    <div class="row">
      <h1>Http using Axios</h1>
      <div class="col-sm-6 col-sm-offset-3">
        UserName
        <input class="form-control" v-model="user.name">
        Email
        <input class="form-control" v-model="user.email">
        <hr>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr>
        <input class="form-control" v-model="node">
        <br><br>
        <button class="btn btn-warning" @click="fetchData">Get</button>
      </div>
      <ul>
        <li v-for="u in users"> {{ u.email }} -- {{ u.name }} </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          email: 'shun10114@gmail.com',
          name: 'seolhun'
        },
        users: [],
        resource: {},
        node: 'data'
      };
    },
    methods: {
      submit() {
        this.$http.post('data.json', {
          user: this.user
        }).then(response => {
          console.log(response);
        }).catch(error => {
          console.log(error);
        });

        //this.resource.save({}, this.user);
        this.resource.saveAlt(this.user);
      },
      fetchData() {
        this.$http.get('data.json').then(response => {
          const data = response.json();
          console.log(data);
        }).catch(error => {
          console.log(error);
        });

        this.resource.getData({node: this.node});
      }
    },
    created() {
      const customActions = {
        saveAlt: {
          method: 'POST',
          url: 'alternative.json'
        },
        getData: {
          method: 'GET'
        }
      };

      this.resource = this.$resource('{node}.json', {}, customActions)
    }
  }
</script>

<style>

</style>
