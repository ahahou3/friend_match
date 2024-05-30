import { createApp } from 'vue'

import Vant from 'vant';
import App from "./App.vue";

import * as VueRouter from 'vue-router';
import routes from "./config/router";
import { Search, TreeSelect, Form, Field, CellGroup } from 'vant';


const app = createApp(App);

const router = VueRouter.createRouter({
    history: VueRouter.createMemoryHistory(),
    routes,
})

app.use(Vant);
app.use(router);
app.use(Search);
app.use(TreeSelect);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.mount('#app');
