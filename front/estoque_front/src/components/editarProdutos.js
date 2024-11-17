import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Para pegar o ID do produto
import api from '../services/api';

const EditarProdutos = () => {
  const { id } = useParams(); // Captura o ID da URL
  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    quantidade: 0,
    preco: 0.0,
  });

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await api.get(`produtos/${id}/`);
        setProduto(response.data);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    };

    fetchProduto();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`produtos/${id}/`, produto);
      alert('Produto atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      alert('Erro ao atualizar produto.');
    }
  };

  return (
    <div>
      <h1>Editar Produto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={produto.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Descrição:</label>
          <input
            type="text"
            name="descricao"
            value={produto.descricao}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantidade:</label>
          <input
            type="number"
            name="quantidade"
            value={produto.quantidade}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Preço:</label>
          <input
            type="number"
            step="0.01"
            name="preco"
            value={produto.preco}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditarProdutos;
