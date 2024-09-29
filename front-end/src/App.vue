

<template>
  <div id="app">
    <!-- O Header será exibido em todas as páginas -->
    <Header></Header>
    
    <!-- O conteúdo da página vai mudar com base na rota -->
    <router-view></router-view>
  </div>
</template>

<script>

import './styles/global.css'
import Header from './components/Header.vue';
import Home from './pages/Home.vue';
import Form from './pages/Form.vue';
import Catalogo from './pages/Catalogo.vue';



export default{
name: 'App',
components:{
  Header,
  Home,
  Form,
  Catalogo,
  
}

}
</script>

