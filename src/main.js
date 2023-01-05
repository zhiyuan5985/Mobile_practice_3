import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import { Button, Menu, Input, Table } from "ant-design-vue";

createApp(App).use(store).use(router).use(Antd)
.use(Button).use(Menu).use(Table).use(Input)
.mount('#app')
