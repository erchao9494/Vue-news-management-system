// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

//  vue-cli        
//  vue-router   luyou
//  vue-resource http
//  iview        ui