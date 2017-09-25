new Vue({
    el: '#app',
    data: {
        title: 'VueJs Instace lifecycle'
    },
    //Open the browser console
    beforeCreate: function () {
        console.log('beforeCreate');
    },
    create: function () {
        console.log('create');
    },
    beforeMount: function () {
        console.log('beforeMount');
    },
    mounted: function () {
        console.log('mounted');
    },
    beforeUpdate: function () {
        console.log('beforeUpdate');
    },
    updated: function () {
        console.log('updated');
    },
    beforeDestroy: function () {
        console.log('beforeDestroy');
    },
    destroyed: function () {
        console.log('destroyed');
    },
    methods: {
        destroy: function () {
            //Instance be destroyed.
            this.$destroy()
        }
    }
});