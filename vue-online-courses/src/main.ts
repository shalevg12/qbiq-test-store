import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

// PrimeVue UI library and components
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Toast from 'primevue/toast';

// Import PrimeVue and Tailwind CSS styles
import './assets/tailwind.css';                            // TailwindCSS styles (compiled via PostCSS)
import 'primevue/resources/themes/saga-blue/theme.css';    // PrimeVue theme
import 'primevue/resources/primevue.min.css';              // Core PrimeVue styles
import 'primeicons/primeicons.css';                        // PrimeIcons for icons

const app = createApp(App);

// Install plugins
app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

// Register PrimeVue components globally
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Card', Card);
app.component('Toast', Toast);

app.mount('#app');
