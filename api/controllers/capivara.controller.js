const Capivara = require('../models/capivara.model');
const { body, validationResult } = require('express-validator'); 

// Função de validação
const validateCapivara = () => {
    return [
        body('nome').notEmpty().withMessage('Nome é obrigatório.'),
        body('idade').isInt({ min: 0 }).withMessage('Idade deve ser um número inteiro não negativo.'),
        body('peso').isDecimal().withMessage('Peso deve ser um número decimal.'),
        body('estado_de_saude').notEmpty().withMessage('O estado de saúde é obrigatório'),
        body('habitat').notEmpty().withMessage('O habitat é obrigatório'),
        body('comportamento').notEmpty().withMessage('O comportamento é obrigatório'),
        body('dieta').notEmpty().withMessage('A dieta é obrigatória'),
        body('genero').isIn(['M', 'F']).withMessage('Gênero deve ser "M" ou "F".'),
        body('observacoes').optional().isString().withMessage('Observações devem ser uma string.'),
    ];
};

// Manipulador da criação
exports.create = async (req, res) => {
  try {
    const { nome, idade, peso, estado_de_saude, habitat, comportamento, dieta, genero, observacoes, foto_url } = req.body;

    console.log('Dados recebidos:', req.body);

    const novaCapivara = new Capivara({
      nome,
      idade,
      peso,
      estado_de_saude,
      habitat,
      comportamento,
      dieta,
      genero,
      observacoes,
      foto_url, 
    });

    await novaCapivara.save();

    res.status(201).json(novaCapivara);
  } catch (error) {
    console.error('Erro ao criar capivara:', error);
    res.status(500).json({ error: 'Erro ao cadastrar capivara.' });
  }
};

  exports.findAll = async (req, res) => {
    try {
      const capivaras = await Capivara.findAll();
      res.json(capivaras);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar capivaras.' });
    }
  };



  exports.update = async (req, res) => {
    try {
      const id = req.params.id; // Obtém o ID da capivara a partir da requisição
      const [updatedRows] = await Capivara.update(req.body, { where: { id } });
  
      if (updatedRows === 0) {
        return res.status(404).json({ error: 'Capivara não encontrada.' });
      }
  
      res.json({ message: 'Capivara atualizada com sucesso.' });
    } catch (err) {
      console.error('Erro ao atualizar capivara:', err);
      res.status(500).json({ error: 'Erro ao atualizar capivara.' });
    }
  };


exports.delete = async (req, res) => {
  try {
      const id = req.params.id; // Obtém o ID da capivara a partir dos parâmetros da requisição
      const deletedRows = await Capivara.destroy({ where: { id } }); // Tenta deletar a capivara com o ID fornecido

      // Verifica se alguma linha foi deletada
      if (deletedRows === 0) {
          return res.status(404).json({ error: 'Capivara não encontrada.' }); // Retorna 404 se nenhuma capivara foi encontrada
      }

      res.json({ message: 'Capivara removida com sucesso.' }); // Retorna mensagem de sucesso
  } catch (err) {
      console.error('Erro ao deletar capivara:', err); // Log do erro
      res.status(500).json({ error: 'Erro ao deletar capivara.' }); // Retorna erro genérico se houver exceção
  }
};
