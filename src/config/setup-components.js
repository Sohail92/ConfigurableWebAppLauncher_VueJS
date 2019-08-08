import HomeLayout from '../components/HomeLayout.vue'
import DarkLayout from '../components/DarkLayout.vue';

function setupComponents(Vue) {
    Vue.component('home-layout', HomeLayout);
    Vue.component('dark-layout', DarkLayout);
}

export {
    setupComponents
}
