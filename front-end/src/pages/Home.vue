<template>
  <main>
    <div class="text-top">
      <h1>Bem vindo ao catálogo de <b>capivaras!</b></h1>
    </div>

    <img class="subscribe" src="../assets/foto_home-sem_fundo.png" alt="capivara">

    <div class="text-bottom">

      <!-- Botão para redirecionar à página do formulário -->
      <router-link to="/form" class="cadastro-botao">Cadastre a capivara aqui!</router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
main {
  background-color: var(--color-background-home);
  min-height: 100vh;
  justify-content: center;
  text-align: center; 
 
}

b {
  color: rgba(100, 52, 52, 0.747);
}

.text-top {
  color: var(--color-text-light);
  font-size: 16px;
  margin-bottom: 20px;
}

.text-bottom {
  background-color: var(--color-background-nav);
  font-size: 18px;
  padding: 10px; 
  margin: 20px 0; 
  width: 200px;
  border-radius: 6px;
  margin: 10px auto;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}

.cadastro-botao {
  color: #ffffff !important; 
  text-decoration: none; 
}

.text-bottom:hover {
  background-color: var(--color-background-nav);
  transform: translateY(1px);
}

img.subscribe {
  width: 100%; 
  max-width: 340px; 
  height: auto; 
  display: block; 
  margin: 0 auto; 

@media (min-width: 700px) {
  .text-top {
    color: var(--color-text-light);
    font-size: 20px;
    margin-bottom: 20px;
  }

  img.subscribe {
    max-width: 400px; 
  }

  .text-bottom {
    background-color: var(--color-background-nav);
    color: #ffffff!important;
    font-size: 18px;
    padding: 10px; 
    margin: 40px 0; 
    border-radius: 5px;
    margin: 10px auto;
    margin-top: 40px;
  }
  .cadastro-botao {
  color: #ffffff !important; 
  text-decoration: none; 
}

}
}
</style>
