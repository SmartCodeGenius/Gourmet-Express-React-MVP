import { useContext } from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom'
import { EstabelecimentoContext } from '../../../Context/EstabelecimentoMode';

export default function Card({ id, quantia, valor }) {
  const { id_estabelecimento } = useContext(EstabelecimentoContext);

  return (
    <div className={styles.caixaPedidoDetalhes}>
        <section className={styles.id}>
            <h1>Pedido: {id}</h1>
            <div className={styles.data}>
                <h3>09/11/2023</h3>
                <h3>14:29</h3>
            </div>
        </section>
        <section className={styles.pedidos}>
            <div className={styles.pedido}>
                <h3>Produto: Coxinha</h3>
                <h3>Unidades: {quantia}</h3>
                <h3>Adicional: Com ketchup e maionese</h3>
            </div>
        </section>
        <div className={styles.botoes}>
            <Link to={`/estabelecimento/${id_estabelecimento}/pedidos`} style={{ backgroundColor: '#FFF', color: '#000', padding: 5, borderRadius: 10 }}>Voltar</Link>
            <Link style={{ backgroundColor: '#7C0B0B', color: '#FFF', padding: 5, borderRadius: 10 }}>Confimar Pedido</Link>
        </div>
    </div>  );
}
