import { useEffect, useState } from 'react';
import Card from './Card';

export default function PedidoDetalhes() {
  const [pedidos, setPedidos] = useState([])

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
    <Card/>
  )
}