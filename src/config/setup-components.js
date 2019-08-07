//Core Components

import Navigation from '../components/core/NavigationDrawer.vue';
import PageFooter from '../components/core/PageFooter.vue';
import Toolbar from '../components/core/Toolbar.vue';

function setupComponents(Vue) {
    Vue.component('navigation', Navigation);
    Vue.component('page-footer', PageFooter);
    Vue.component('toolbar', Toolbar);
}


export {
    setupComponents
}
