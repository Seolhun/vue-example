# Vue Cli Getting started 10

[Vue-Cli Github](https://github.com/vuejs/vue-cli)

---
### Handling Router

1. Run Vue-Cli with Webpack
```bash
$ vue init webpack vue-cli
$ cd vue-cli
$ npm install
$ npm run dev
```

2. Router

3. Navigating Router Link

4. Setting up Route Parameters

5. Setting up Child Routes(Nested Routes)
```vue
{
  path: '/user',
  name: 'User',
  component: User,
  children: [
    {path: '', component: UserStart},
    {path: ':id', component: UserDetail},
    {path: ':id/edit', component: UserEdit}
  ]
}
```

6. Dynamic Route
```vue
<p>User loaded has ID : {{ $route.params.id }}</p>

<!--Method 1-->
<router-link
  class="btn btn-info"
  tag="button"
  :to="{ name: 'userEdit', params: {id: $route.params.id}}"
>
  Edit User
</router-link>

<!--Method 2-->
<router-link
  class="btn btn-info"
  tag="button"
  :to="'/user/' + $route.params.id + '/edit'"
>
  Edit User
</router-link>
```

7. Using Query Parameter
```vue
<p>Locale : {{ $route.query.locale }} </p>
<p>Analytics : {{ $route.query.q }} </p>

<router-link
  class="btn btn-info"
  tag="button"
  :to="{ name: 'userEdit', params: {id: $route.params.id}, query: {locale: 'en', q:100}}"
>
  <!--:to="'/user/' + $route.params.id + '/edit'"-->
  Edit User
</router-link>
```
 
8. Multiple Router Views
```vue
{
  path: '/user',
  name: 'User',
  components: {
    default: User,
    'header-bottom': Header
  },
  children: [
    {path: '', component: UserStart},
    {path: ':id', component: UserDetail},
    {path: ':id/edit', component: UserEdit, name: 'userEdit'}
  ]
}
```
9. Redirecting and Catch All Routes
```vue
<!-- One Redirect -->
{path: '/redirect-me', redirect: {name: 'Home'}}

<!-- All Redirect -->
{path: '*', redirect: '/'}
```

10. Animating Route Transition
```vue
<transition name="slide" mode="out-in">
  <router-view></router-view>
</transition>
```
11. Passing the Hash Fragment
```vue
 routes: [
    {}
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return {x: 0, y: 700};
  }
```

12. Using the 'beforeEnter' Guard
