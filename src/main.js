import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

const routes = {
    '/1': App,
    '/2': App,
    '/3': App
};


new Vue({
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            if (routes[this.currentRoute] === undefined)
                window.location.replace(window.location.origin + '/1');
            return routes[this.currentRoute];
        }
    },
    render(h) {
        return h(this.ViewComponent)
    }
}).$mount('#app');
