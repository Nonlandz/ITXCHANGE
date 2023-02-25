import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Component from primevue
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Card from 'primevue/card';
import Button from 'primevue/button';


// Set path of CSS
// import './assets/main.css'

const app = createApp(App)

app.use(router)
app.component("InputText", InputText)
app.component("Textarea", Textarea)
app.component("Button", Button)
app.component("Card", Card)

app.mount('#app')
