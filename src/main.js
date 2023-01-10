import { createApp } from 'vue'
import App from './App.vue'
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
const app = createApp(App);
app.provide('base_url_api', "http://localhost:3000/")
app.use(VCalendar, {}).mount('#app')