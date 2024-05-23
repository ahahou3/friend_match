import { createApp } from 'vue'

import { NavBar, Tabbar, TabbarItem } from 'vant';
import App from "./App.vue";


const app = createApp(App);
app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);
app.mount('#app');
