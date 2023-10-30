import styles from './Pedidos.module.css';
import { Link } from 'react-router-dom'

export default function Pedidos() {
    return (
        <main>
            <section className={styles.caixa}>
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
                <Link className={styles.botao}>
                    Acessar pedido
                </Link>
            </section>
        </main>
    )
}
