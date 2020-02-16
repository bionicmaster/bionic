require('./bootstrap');

window.Vue = require('vue');

// Declaracion de componentes a utilizar
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('landing', require('./components/Landing.vue').default);
Vue.component('weapons', require('./components/Weapons.vue').default);

const app = new Vue({
    el: '#app',
});
