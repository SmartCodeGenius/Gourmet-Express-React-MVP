import styles from './Pedidos.module.css';
import Card from './Card';
import { useEffect, useState } from 'react';

export default function Pedidos() {
    const [pedidos, setPedidos] = useState([])

    const opcoes = [{ id: 1, mensagem: 'Em Espera' }
        , { id: 2, mensagem: 'Em Preparo' }
        , { id: 3, mensagem: 'Prontos' }
    ]

    useEffect(() => {
        const pegaPedidos = async() => {
            try {
              const response = await fetch('http://localhost:5000/pedidos', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'token': localStorage.token },
              });

              const parseRes = await response.json();
              setPedidos(parseRes);
            } catch (err) {
                console.error(err.message)
            }
        }
        pegaPedidos();
    }, [pedidos])

    return (
        <>
            <header className={styles.opcoes}>
                {opcoes.map(opcao => (
                    <button key={opcao.id} className={styles.opcao}>{opcao.mensagem}</button>
                ))}
            </header>
            {pedidos.map((pedido, index) => (
                <Card key={index} id={pedido.id_pedido} quantia={pedido.quantia}/>
            ))}
        </>
    )
}
