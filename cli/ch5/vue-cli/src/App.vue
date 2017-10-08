<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <!-- :value + @event  ==  v-model -->
            <input
              type="text"
              id="email"
              class="form-control"
              :value="userData.email"
              @input="userData.email = $event.target.value"
            >
            <p>{{ userData.email }} </p>
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.lazy="userData.password"
            >
            <p>{{ userData.password }} </p>
          </div>

          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-control"
              v-model="userData.age"
            >
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea
            id="message"
            rows="5"
            class="form-control"
            v-model="userData.message"
          ></textarea>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input
                type="checkbox"
                id="sendmail"
                value="SendMail"
                v-model="userData.isSend"
              > Send Mail
            </label>
            <label for="sendInfomail">
              <input
                type="checkbox"
                id="sendInfomail"
                value="SendInfoMail"
                v-model="userData.isSend"
              > Send Infomail
            </label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input
              type="radio"
              id="male"
              value="Male"
              v-model="userData.gender"
            > Male
          </label>
          <label for="female">
            <input
              type="radio"
              id="female"
              value="Female"
              v-model="userData.gender"
            > Female
          </label>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select
            id="priority"
            class="form-control"
            v-model="userData.selectedPriority"
          >
            <option
              v-for="priority in priorities"
              :selected="priority"
            >
              {{ priority }}
            </option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <app-switch v-model="dataSwitched">

          </app-switch>
        </div>
      </div>

      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
            class="btn btn-primary"
            @click.prevent="submitted"

          >Submit!
          </button>
        </div>
      </div>
    </form>

    <hr>
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age: {{ userData.age }} </p>
            <p style="white-space: pre">Message: {{ userData.message }} </p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="item in userData.isSend"> {{ item }}</li>
            </ul>
            <p>Gender: {{ userData.gender }} </p>
            <p>Priority: {{ userData.selectedPriority }} </p>
            <p>Switched: {{ dataSwitched }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Switch from './components/Switch.vue'

  export default {
    components: {
      appSwitch: Switch
    },

    data() {
      return {
        userData: {
          email: 'shun10114@gmail.com',
          password: 'password',
          age: 28,
          message: 'A new Text',
          isSend: [],
          gender: 'Male',
          selectedPriority: 'High'
        },
        priorities: ['High', ',Medium', 'Low'],
        dataSwitched: true,
        isSubmitted: false
      }
    },
    methods: {
      submitted () {
        this.isSubmitted = true;
      }
    }
  }
</script>

<style>

</style>
