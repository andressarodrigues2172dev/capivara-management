
//Módulo creatApp
import { createApp } from 'vue'

//Importar arquivo App.veu
import App from './App.vue'

// Importar o roteador
import router from './routes/index';

//Renderizar
createApp(App).mount('#app')

// Usando o roteador
createApp(App).use(router).mount('#app');