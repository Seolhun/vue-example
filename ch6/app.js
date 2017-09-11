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
            this.$refs.myButton.innerText = 'Test';
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

//Mount
vm1.$mount('#app1');

console.log(vm1.$data === data);
vm1.$refs.heading.innerText = 'Something else';

var vm2 = new Vue({
    el: '#app2',
    data: {
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




