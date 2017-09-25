//Instance
var data = {
    title: 'The VueJS Instance',
    showParagraph: false
};

//Components
//We can use <hello></hello> throughout.
Vue.component('hello', {
    template: '<h1>Hello!, Tag using Components</h1>'
});

var vm1 = new Vue({
    el: '#app1',
    data: data,
    methods: {
        show: function () {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)');
            <!-- I can access all references I registered using the name -->
            this.$refs.myButton.innerText = 'Refs Test';
            console.log(this.$refs);
        },
        updateTitle: function (title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function () {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function (value) {
            alert('Title changed, new value: ' + value);
        }
    }
});

vm1.newProp = 'New!';
//you can see this properties on the console.
console.log(vm1);

console.log(vm1.$data === data);

//Mount
vm1.$mount('#app1');

console.log(vm1.$data === data);
vm1.$refs.heading.innerText = 'Something else';

var vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'The VueJS Instance2',
        showParagraph: false
    },
    methods: {
        onChange: function () {
            vm1.title = 'Changed by vm2 Button!!'
        }
    },
    computed: {
        lowercaseTitle: function () {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function (value) {
            alert('Title changed, new value: ' + value);
        title: 'The second Instance'
    },
    methods: {
        onChange: function () {
            vm1.title = 'Changed!';
        }
    }
});

//Switching El
var vm3 = new Vue({
    // el: '.hello',
    el: 'hello',
    // el: '#hello',
    template: '<h1>Hello!, Tag using Components</h1>'
});

var vm4 = new Vue({
    template: '<h1>Instance mount and Component append</h1>'
});

vm4.$mount();
document.getElementById('app4').appendChild(vm4.$el);