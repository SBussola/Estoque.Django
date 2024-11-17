import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom'

const ListarProdutos = () => {
    const [produtos, setProdutos] = useState([]);
  
    useEffect(() => {
      const fetchProdutos = async () => {
        try {
          const response = await api.get('produtos/'); 
          // Endpoint do Django
          setProdutos(response.data);
        } catch (error) {
          console.error('Erro ao buscar produtos:', error);
        }
      };
  
      fetchProdutos();
    }, []);
  
    return (
      <div>
        <h1>Lista de Produtos</h1>
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
            {produto.nome} - {produto.quantidade} unidades - R$ {produto.preco} 
            <Link to={`/editar/${produto.id}`} style={{ marginLeft: '10px' }}>
              Editar
            </Link>
          </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ListarProdutos;