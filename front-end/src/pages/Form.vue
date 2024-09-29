<template>
    <main>
      <h1>Cadastro de Capivara</h1>
      <form @submit.prevent="submitForm">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="formData.nome" required>
  
        <label for="idade">Idade:</label>
        <input type="number" id="idade" v-model="formData.idade">
  
        <label for="peso">Peso (kg):</label>
        <input type="number" id="peso" v-model="formData.peso" step="0.01">
  
        <label for="estado_de_saude">Estado de Saúde:</label>
        <textarea id="estado_de_saude" v-model="formData.estado_de_saude"></textarea>
  
        <label for="habitat">Habitat:</label>
        <textarea id="habitat" v-model="formData.habitat"></textarea>
  
        <label for="comportamento">Comportamento:</label>
        <textarea id="comportamento" v-model="formData.comportamento"></textarea>
  
        <label for="dieta">Dieta:</label>
        <textarea id="dieta" v-model="formData.dieta"></textarea>
  
        <label for="genero">Gênero:</label>
        <select id="genero" v-model="formData.genero">
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>
  
        <label for="observacoes">Observações:</label>
        <textarea id="observacoes" v-model="formData.observacoes"></textarea>
  
        <label for="foto">Url da Imagem:</label>
        <input type="url" id="foto" v-model="formData.foto_url"> <!-- Alterado para formData.foto_url -->
  
        <button type="submit">Cadastrar</button>
      </form>
    </main>
  </template>
  

  <script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        nome: '',
        idade: null,
        peso: null,
        estado_de_saude: '',
        habitat: '',
        comportamento: '',
        dieta: '',
        genero: 'M',
        observacoes: '',
        foto_url: '' // Altere para receber a URL da imagem
      },
    };
  },
  methods: {
  async submitForm() {
    // Log para verificar os dados enviados
    console.log('Dados enviados:', this.formData);

    try {
      const response = await axios.post('http://localhost:3000/api/capivaras', this.formData, {
        headers: {
          'Content-Type': 'application/json', // Tipo de conteúdo para JSON
        },
      });

      console.log('Resposta da API:', response.data);
      alert('Capivara cadastrada com sucesso!');
      
      // Redireciona para o catálogo após o cadastro bem-sucedido
      this.$router.push('/catalogo');

      // Limpa o formulário
      this.resetForm();
    } catch (error) {
      console.error('Erro ao cadastrar capivara:', error);
      alert('Erro ao cadastrar capivara. Veja o console para mais detalhes.');
    }
  },
  resetForm() {
    this.formData = {
      nome: '',
      idade: null,
      peso: null,
      estado_de_saude: '',
      habitat: '',
      comportamento: '',
      dieta: '',
      genero: 'M',
      observacoes: '',
      foto_url: '' // URL da imagem
    };
  },
},
}

</script>
  <style scoped>
  main {
    padding: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto; /* Centraliza o formulário horizontalmente */
   
  }

  h1{
    text-align: center;
    font-size: 25px;
  }
  
  label {
    margin-top: 10px;
  }
  
  input, textarea, select {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px;
    background-color: var(--color-background-nav);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: darken(var(--color-background-nav), 10%);
  }

  @media (min-width: 700px) {
  form {
    width: 50%; 
    max-width: 600px; 
    
  }
  h1{
    text-align: center;
  }

}


  </style>
  