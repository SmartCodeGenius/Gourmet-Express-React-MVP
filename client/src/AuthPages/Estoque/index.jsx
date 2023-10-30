import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { EstabelecimentoContext } from '../../Context/EstabelecimentoMode';

import styles from './Estoque.module.css';

export default function Estoque() {
  const [produtos, setProdutos] = useState([]);
  const { id_estabelecimento } = useContext(EstabelecimentoContext);

  const deleteProduto = async(id) => {
    try {
      const response = await fetch('http://localhost:5000/produtos/deletaProduto', {
        method: 'DELETE',
        headers: { token: localStorage.token, 'Produto-ID': id, 'Estabelecimento-ID': id_estabelecimento }
      });

      const parseRes = await response.json();

      parseRes.forEach((produto) => {
        produto.preco_produto = parseFloat(produto.preco_produto).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
      });

      setProdutos(parseRes);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    async function getProdutos() {
      try {
        const response = await fetch('http://localhost:5000/produtos', {
          method: 'GET',
          headers: { token: localStorage.token, 'Estabelecimento-ID': id_estabelecimento }
        });

        const parseRes = await response.json();

        parseRes.forEach((produto) => {
          produto.preco_produto = parseFloat(produto.preco_produto).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
        });

        setProdutos(parseRes);

      } catch (err) {
        console.error(err.message);
      }
    }
    getProdutos();
  }, [id_estabelecimento]);

  if (produtos.length !== 0) {
    return (
      <section className={styles.background}>
        {produtos.map(produto => (
          <div key={produto.id_produto} className={styles.objProduto}>
            <div>
              <h2>{produto.nome_produto}</h2>
              <h3>{produto.preco_produto}</h3>
            </div>
            <div>
              <Link onClick={() => alert('Ainda em desenvolvimento :)')} style={{ color: '#FFF', backgroundColor: '#F39A13' }} className={styles.opcao}>Editar</Link>
              <button onClick={() => {deleteProduto(produtos[0].id_produto)}} style={{ color: '#FFF', backgroundColor: '#7C0B0B' }} className={styles.opcao}>Excluir</button>
            </div>
          </div>
        ))}
        <div className={styles.background}>
          <Link className={styles.botaoCriarProduto} to={`/estabelecimento/${id_estabelecimento}/criaProduto`}>Cadastrar Produto</Link>
        </div>
      </section>
    )
  }

  return (
    <div className={styles.background}>
      <Link className={styles.botaoCriarProduto} to={`/estabelecimento/${id_estabelecimento}/criaProduto`}>Cadastrar Produto</Link>
    </div>
  )
}