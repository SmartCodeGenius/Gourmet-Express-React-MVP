import { Navigate, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Estabelecimentos from "./AuthPages/Estabelecimentos";
import Desempenho from "./AuthPages/Desempenho";
import Configuracoes from "./AuthPages/Configuracoes";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Context/Auth";
import { GetNomeContext } from "./Context/Nome";
import CriaEstabelecimento from "./AuthPages/CriaEstabelecimento";
import { EstabelecimentoContext } from "./Context/EstabelecimentoMode";

export default function RoutesAuth() {
  const { setAuth, EhAuth } = useContext(AuthContext);
  const { getNome, nome } = useContext(GetNomeContext);
  const { estabelecimentoMode, dentroDoEstabelecimento, idDefinido, id_estabelecimento } = useContext(EstabelecimentoContext);

  useEffect(() => {
    getNome();
  }, [getNome]);

  if (!EhAuth) {
    return <Navigate to='/' />;
  }

  return (
    <SideBar setAuth={setAuth} nome={nome}>
      <Routes>
        <Route index path='/criaestabelecimento' element={!estabelecimentoMode ? <CriaEstabelecimento /> : <Navigate to={`/estabelecimento/${id_estabelecimento}/pedidos`}/>} />
        <Route path='/estabelecimentos' element={!estabelecimentoMode ? <Estabelecimentos setEstabelecimentoMode={dentroDoEstabelecimento} setId={idDefinido} /> : <Navigate to={`/estabelecimento/${id_estabelecimento}/pedidos`}/>} />
        <Route path='/desempenho' element={!estabelecimentoMode ? <Desempenho /> : <Navigate to={`/estabelecimento/${id_estabelecimento}/pedidos`}/>} />
        <Route path='/configuracoes' element={!estabelecimentoMode ? <Configuracoes setAuth={setAuth} /> : <Navigate to={`/estabelecimento/${id_estabelecimento}/pedidos`}/>} />
        <Route path="/*" element={<h1>Essa página não existe :(</h1>} />
      </Routes>
    </SideBar>
  );
}