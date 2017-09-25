var data = { status: 'Critical' };

// Vue.component('my-component', { });
var cmp = {
    data: function () {
        return data;
    },
    methods: {
        changeStatus: function () {
            this.status = 'Normal'
        }
    },
    template:
    '<p>Server Status: {{ status }} ' +
        '(<button @click="changeStatus">Change</button>)' +
    '</p>'
};

new Vue({
    el: '#app',
    components: {
        'my-component': cmp
    }
});

new Vue({
    el: '#app2'
});



