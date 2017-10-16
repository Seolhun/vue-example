# Vue Cli Getting started 6

[Vue-Cli Github](https://github.com/vuejs/vue-cli)

---
### Handling Directives

1. Run Vue-Cli with Webpack
```bash
$ vue init webpack vue-cli
$ cd vue-cli
$ npm install
$ npm run dev
```

2. Directives

3. Hooks
- bind (el, binding, vnode)     >   Once Directive is Attached
- inserted (el, binding, vnode) >   Inserted in Parent Node
- update (el, binding, vnode)   >   Once Component is Updated (without Children)
- componentUpdated (el, binding, vnode)   > Once Component is Updated (with Children) 
- unbind (el, binding, vnode)   > Once Directive is Removed

4. Build Simple Directives
    - el, binding, vnode
    
5. binding, value, modifiers, arg

6. Multiple Directives
