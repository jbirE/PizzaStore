import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ProductsPage from './components/ProductsPage.vue'; // Import ProductsPage component
import 'mdb-vue-ui-kit/css/mdb.min.css';

const app = createApp(App);
app.component('ProductsPage', ProductsPage); // Register ProductsPage component globally
app.use(router);
app.mount('#app');
