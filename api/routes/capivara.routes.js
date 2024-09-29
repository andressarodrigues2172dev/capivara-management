const express = require('express');
const router = express.Router();
const CapivaraController = require('../controllers/capivara.controller');


// Rota para criar capivara com URL de imagem
router.post('/', CapivaraController.create); 

// Rota para listar todas as capivaras
router.get('/', CapivaraController.findAll);

// Rota para deletar capivara (agora com 'deletar' no caminho)
router.delete('/deletar/:id', CapivaraController.delete);

// Rota para atualizar capivara
router.put('/:id', CapivaraController.update);





module.exports = router;
