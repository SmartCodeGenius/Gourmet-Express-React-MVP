import styles from './Card.module.css';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { EstabelecimentoContext } from '../../../Context/EstabelecimentoMode';

export default function Card({ id, quantia, valor }) {
    const { id_estabelecimento } = useContext(EstabelecimentoContext);

    return (
        <>
            <section className={styles.sessaoPedidos}>
                <div className={styles.caixa}>
                    <div className={styles.id}>
                        <h1>ID: {id}</h1>
                    </div>
                    <div className={styles.descricao}>
                        <h3>Quantia: {quantia}</h3>
                        {/* <h3>Valor: {valor}</h3> */}
                    </div>
                    <Link className={styles.botao} to={`/estabelecimento/${id_estabelecimento}/pedidos/detalhes`}>
                        Acessar pedido
                    </Link>
                </div>
            </section>
        </>
    )
}
