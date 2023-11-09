import { Route, Routes } from 'react-router-dom';
import SideBarEstabelecimento from './components/SideBarEstabelecimento';
import Estoque from './AuthPages/Estoque';
// import { EstabelecimentoDetalhes } from './AuthPages/EstabelecimentoDetalhes';
import { useContext, useEffect } from 'react';
import { EstabelecimentoContext } from './Context/EstabelecimentoMode';
import CriaProduto from './AuthPages/CriaProduto';
import Pedidos from './AuthPages/Pedidos';
import Graficos from './AuthPages/Graficos';
import Promocoes from './AuthPages/Promocoes';
import Funcionarios from './AuthPages/Funcionarios';
import { useState } from 'react';
import PedidoDetalhes from './AuthPages/PedidoDetalhes';

export default function RoutesEstabelecimento() {
  const { id_estabelecimento, dentroDoEstabelecimento } = useContext(EstabelecimentoContext);
  const [nomeEstabelecimento, setNomeEstabelecimento] = useState('')
  
  useEffect(() => {
    async function getnomeEstabelecimento () {
      try {
        const response = await fetch('http://localhost:5000/estabelecimento', {
          method: 'GET',
          headers: { token: localStorage.token }
        });
  
        const parseRes = await response.json();
        setNomeEstabelecimento(parseRes[0].nome_estabelecimento)
  
      } catch (err) {
        console.error(err.message);
      }
    }
    getnomeEstabelecimento();
  }, [id_estabelecimento]);

  return (
    <SideBarEstabelecimento id={id_estabelecimento} dentroDoEstabelecimento={dentroDoEstabelecimento} nome={nomeEstabelecimento}>
      <Routes>
        <Route path={`/estabelecimento/${id_estabelecimento}/pedidos`} element={<Pedidos/>} />
        <Route path={`/estabelecimento/${id_estabelecimento}/pedidos/detalhes`} element={<PedidoDetalhes/>} />
        <Route path={`/estabelecimento/${id_estabelecimento}/estoque`} element={<Estoque/>} />
        <Route path={`/estabelecimento/${id_estabelecimento}/criaProduto`} element={<CriaProduto/>} />
        <Route path={`/estabelecimento/${id_estabelecimento}/graficos`} element={<Graficos/>} />
        <Route path={`/estabelecimento/${id_estabelecimento}/promocoes`} element={<Promocoes/>} />
        <Route path={`/estabelecimento/${id_estabelecimento}/funcionarios`} element={<Funcionarios/>} />
        <Route path='/*' element={<button onClick={() => window.location.href = `/estabelecimento/${id_estabelecimento}/pedidos`}>Essa página não existe :( Retornar</button>} />
        {/* <Route path={`/estabelecimento/${id_estabelecimento}/detalhes`} element={<EstabelecimentoDetalhes/>} /> */}
      </Routes>
  </SideBarEstabelecimento>
  )
}