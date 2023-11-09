import styles from './Pedidos.module.css';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { EstabelecimentoContext } from '../../Context/EstabelecimentoMode';

export default function Pedidos() {
    const { id_estabelecimento } = useContext(EstabelecimentoContext);

    const opcoes = [{ id: 3, mensagem: 'Em Espera' }
        , { id: 3, mensagem: 'Em Preparo' }
        , { id: 3, mensagem: 'Prontos' }
    ]

    return (
        <>
            <header className={styles.opcoes}>
                {opcoes.map(opcao => (
                    <button key={opcao.id} className={styles.opcao}>{opcao.mensagem}</button>
                ))}
            </header>
            <section className={styles.sessaoPedidos}>
                <div className={styles.caixa}>
                    <div className={styles.id}>
                        <h1>ID: 1</h1>
                    </div>
                    <div className={styles.descricao}>
                        <h3>Preparo: 2 Min</h3>
                        <h3>Tamanho: 4</h3>
                        <div>
                            <h3>25/10/2023</h3>
                            <h3>11:05</h3>
                        </div>
                    </div>
                    <Link className={styles.botao} to={`/estabelecimento/${id_estabelecimento}/pedidos/detalhes`}>
                        Acessar pedido
                    </Link>
                </div>
            </section>
        </>
    )
}
