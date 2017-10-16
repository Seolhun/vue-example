// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import http from 'vue-resource'

Vue.config.productionTip = false

//Axios
Vue.prototype.$http = axios;

//Vue Resource
Vue.use(http);
// Vue.http.options.root = 'https://vuejs-http.firebaseio.com/';
// Vue.http.interceptors.push((request, next) =>{
//   console.log(request);
//   if(request.method === "POST"){
//
//   } else if(request.method === "GET"){
//
//   }
//
//   next(response => {
//     response.json = () => {
//       return {messages: response.body}
//     }
//   })
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
