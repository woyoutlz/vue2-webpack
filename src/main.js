import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//开启debug模式
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Element)
    // 定义组件, 也可以像教程之前教的方法从别的文件引入
const bar = {
    template: `<div>sss </div>`
};
import firstcompo from "./component/firstcomponent.vue"
import second from "./component/secondcomponent.vue"
const router = new VueRouter({
    routes: [{
        path: '/frist',
        component: firstcompo
    }, {
        path: "/second",
        component: second
    }]
})

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
