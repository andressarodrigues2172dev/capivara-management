<template>
  <div>
    <h1>Catálogo de Capivaras</h1>

    <div>
      <label for="habitat-filter">Filtrar por Habitat:</label>
      <select v-model="selectedHabitat" id="habitat-filter">
        <option value="">Todos</option>
        <option v-for="habitat in habitats" :key="habitat" :value="habitat">{{ habitat }}</option>
      </select>
    </div>

    <div class="capivaras-container">
      <div 
        class="capivara-card" 
        v-for="capivara in filteredCapivaras" 
        :key="capivara.id"
        @click="showDetails(capivara)"
      >
        <img :src="capivara.foto_url" alt="Capivara" />
        <h2>{{ capivara.nome }}</h2>
      </div>
    </div>

    <div v-if="selectedCapivara" class="details-card details-card-custom">
      <h2>Detalhes da Capivara</h2>
      <p>Nome: {{ selectedCapivara.nome }}</p>
      <p>Idade: {{ selectedCapivara.idade }} anos</p>
      <p>Peso: {{ selectedCapivara.peso }} kg</p>
      <p>Estado de Saúde: {{ selectedCapivara.estado_de_saude }}</p>
      <p>Habitat: {{ selectedCapivara.habitat }}</p>
      <p>Comportamento: {{ selectedCapivara.comportamento }}</p>
      <p>Dieta: {{ selectedCapivara.dieta }}</p>
      <p>Gênero: {{ selectedCapivara.genero }}</p>
      <p>Observações: {{ selectedCapivara.observacoes }}</p>
      <img :src="selectedCapivara.foto_url" alt="Foto da Capivara" />
      <div class="button-select">
        <button @click="deleteCapivara(selectedCapivara.id)">Deletar</button>
        <button @click="showEditForm">Atualizar</button>
      </div>
    </div>

    <div v-if="selectedCapivara && isEditFormVisible" class="update-form">
      <h2>Atualizar Capivara</h2>
      <form @submit.prevent="updateCapivara">
        <!-- Campos do formulário -->
        <div>
          <label>Nome:</label>
          <input v-model="selectedCapivara.nome" type="text" required />
        </div>
        <div>
          <label>Idade:</label>
          <input v-model="selectedCapivara.idade" type="number" required />
        </div>
        <div>
          <label>Peso:</label>
          <input v-model="selectedCapivara.peso" type="number" required />
        </div>
        <div>
          <label>Estado de Saúde:</label>
          <input v-model="selectedCapivara.estado_de_saude" type="text" required />
        </div>
        <div>
          <label>Habitat:</label>
          <input v-model="selectedCapivara.habitat" type="text" required />
        </div>
        <div>
          <label>Comportamento:</label>
          <input v-model="selectedCapivara.comportamento" type="text" required />
        </div>
        <div>
          <label>Dieta:</label>
          <input v-model="selectedCapivara.dieta" type="text" required />
        </div>
        <div>
          <label>Gênero:</label>
          <select v-model="selectedCapivara.genero" required>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </div>
        <div>
          <label>Observações:</label>
          <textarea v-model="selectedCapivara.observacoes"></textarea>
        </div>
        <div>
          <label>URL da Foto:</label>
          <input v-model="selectedCapivara.foto_url" type="text" />
        </div>

        <!-- Botões de Salvar e Cancelar -->
        <div class="button-select-edit">
          <button type="submit">Salvar</button>
          <button type="button" @click="cancelEdit">Cancelar</button>
        </div>
      </form>
    </div>

    <div v-else>
      <p></p>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      capivaras: [],
      selectedHabitat: '',
      selectedCapivara: null,
      isEditFormVisible: false // Variável para controlar a visibilidade do formulário de edição
    };
  },
  computed: {
    filteredCapivaras() {
      if (this.selectedHabitat) {
        return this.capivaras.filter(capivara => capivara.habitat === this.selectedHabitat);
      }
      return this.capivaras;
    },
    habitats() {
      return [...new Set(this.capivaras.map(capivara => capivara.habitat))];
    }
  },
  methods: {
    async fetchCapivaras() {
      try {
        const response = await axios.get('http://localhost:3000/api/capivaras');
        this.capivaras = response.data;
        this.selectedHabitat = '';
      } catch (error) {
        console.error('Erro ao buscar capivaras:', error);
      }
    },
    showDetails(capivara) {
      this.selectedCapivara = capivara;
      this.isEditFormVisible = false; // Esconde o formulário de edição ao mostrar detalhes
    },
    async deleteCapivara(id) {
      const confirmDelete = confirm("Tem certeza que deseja deletar esta capivara?");
      if (confirmDelete) {
        try {
          const response = await axios.delete(`http://localhost:3000/api/capivaras/deletar/${id}`);  
          if (response.status === 200) {
            alert('Capivara deletada com sucesso.');
            this.capivaras = this.capivaras.filter(capivara => capivara.id !== id);
            this.selectedCapivara = null;
          } else {
            alert('Erro ao deletar a capivara.');
          }
        } catch (error) {
          console.error('Erro ao deletar capivara:', error);
          if (error.response) {
            alert(`Erro ao deletar a capivara: ${error.response.data.message || 'Erro desconhecido'}`);
          } else {
            alert('Erro ao deletar a capivara. Verifique a conexão com o servidor.');
          }
        }
      }
    },
    async updateCapivara() {
      try {
        const response = await axios.put(`http://localhost:3000/api/capivaras/${this.selectedCapivara.id}`, this.selectedCapivara);

        if (response.status === 200) {
          alert('Capivara atualizada com sucesso.');
          this.fetchCapivaras();
          this.selectedCapivara = null;
          this.isEditFormVisible = false; // Oculta o formulário após a atualização
        } else {
          alert('Erro ao atualizar a capivara.');
        }
      } catch (error) {
        console.error('Erro ao atualizar capivara:', error);
        alert('Erro ao atualizar a capivara. Verifique a conexão com o servidor.');
      }
    },
    cancelEdit() {
      this.isEditFormVisible = false; // Oculta o formulário de edição ao cancelar
    },
    showEditForm() {
      this.isEditFormVisible = true; // Mostra o formulário de edição quando o botão "Atualizar" for clicado
    }
  },
  created() {
    this.fetchCapivaras();
  }
};
</script>


<style scoped>
 .capivaras-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
    padding: 20px;
    gap: 20px; 
  }
  
  h1 {
    text-align: center;
    font-size: 30px; 
    margin: 20px 0; 
  }
  
  .capivara-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(45% - 10px); 
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px;
    box-sizing: border-box;
    transition: transform 0.3s; 
  }
  
  .capivara-card:hover {
    transform: scale(1.05); 
  }
  
  .capivara-card img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .details-card button {
    background-color: #b89070; 
    border: none;
    border-radius: 5px;
    padding: 8px 12px;
    cursor: pointer;
    transition: background-color 0.3s;

  }
  
  .details-card button:hover {
    background-color: var(--color-background-home); 
  }
  
  .details-card {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
  }
  
  .details-card img {
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: auto;
  }
  
  .details-card p {
    text-align: center;
  }
  
  .details-card h2 {
    padding: 20px;
    margin: 20px 0;
    text-align: center;
    font-size: 18px; 
  }
  
  .details-card-custom {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }
  
  .details-card-custom img {
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: contain;
  }
  
  .details-card-custom p {
    text-align: center;
    margin: 10px 0;
  }
  
  .details-card-custom h2 {
    padding: 10px;
    margin: 10px 0;
    text-align: center;
  }
  
  #habitat-filter {
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    width: calc(100% - 22px);
    max-width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    transition: border-color 0.3s;
  }
  
  #habitat-filter:focus {
    border-color: #463918;
    outline: none;
  }
  
  label {
    font-weight: bold;
    margin-right: 10px;
    margin-left: 10px;
  }
  
  .button-select{
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }



  .update-form {
    margin-top: 20px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding: 20px;
    background-color: var(--color-background-home);
    border-radius: 10px; 
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
}

.update-form h1 {
    text-align: center;
    margin-bottom: 20px; 
}

.update-form label {
    margin-top: 10px;
    font-weight: bold;
}

.update-form input, 
.update-form textarea, 
.update-form select {
    background-color: white;
    border: 1px solid #ccc; 
    color: black;
    padding: 10px;
    width: 100%; 
    max-width: 300px; 
    margin: 8px 0; 
    border-radius: 5px; 
    transition: border-color 0.3s; 
}

.update-form input:focus,
.update-form textarea:focus,
.update-form select:focus {
    border-color: var(--color-primary);
    outline: none; 
}


  
  
  @media (min-width: 700px) {
    .capivara-card {
      width: calc(30% - 20px);
    }
  
    .details-card-custom {
      max-width: 500px;
    }
  }
  
  @media (min-width: 1000px) {
    .capivara-card {
      width: calc(30% - 20px);
      max-width: 500px;
    }

    .details-card-custom {
      max-width: 600px;
    }
  }

</style>