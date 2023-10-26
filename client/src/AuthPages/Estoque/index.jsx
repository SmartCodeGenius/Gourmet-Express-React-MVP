import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { EstabelecimentoContext } from '../../Context/EstabelecimentoMode';

import styles from './Estoque.module.css';

export default function Estoque() {
  const [produtos, setProdutos] = useState([]);
  const [idProduto, setIdProduto] = useState([]);
  const { id_estabelecimento } = useContext(EstabelecimentoContext);

  const deleteProduto = async() => {
    try {
      const response = await fetch('http://localhost:5000/produtos', {
        method: 'DELETE',
        headers: { 'Estabelecimento-ID': idProduto }
      });

      const parseRes = await response.json();
      console.log(parseRes);
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
        console.log(parseRes);
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
              <h3>R$ {produto.preco_produto}</h3>
            </div>
            <div>
              <Link onClick={() => alert('Ainda em desenvolvimento :)')} style={{ color: '#FFF', backgroundColor: '#F39A13' }} className={styles.opcao}>Editar</Link>
              <button onClick={() => deleteProduto(produto.id_produto)} style={{ color: '#FFF', backgroundColor: '#7C0B0B' }} className={styles.opcao}>Excluir</button>
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