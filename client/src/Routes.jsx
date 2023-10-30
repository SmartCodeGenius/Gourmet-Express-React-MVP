import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// Estilo global
import './index.css';

// Páginas
import PaginaInicial from './pages/PaginaInicial';
import Planos from './pages/Planos';
import QuemSomos from './pages/QuemSomos';
import Suporte from './pages/Suporte';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import RoutesAuth from './RoutesAuth';

// Componentes
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import { useContext, useEffect } from 'react';
import { AuthContext } from './Context/Auth';
import PaginaNEncontrada from './pages/PaginaNEncontrada';
import { EstabelecimentoContext } from './Context/EstabelecimentoMode';
import RoutesEstabelecimento from './RoutesEstabelecimento';

export default function AppRoutes() {
  const { ehAutenticado, EhAuth, setAuth } = useContext(AuthContext);
  const { estabelecimentoMode } = useContext(EstabelecimentoContext);

  useEffect(() => {
    EhAuth();
  }, [EhAuth]);

  return (
    <BrowserRouter>
      {/* Redirecionamento para Rotas de usuário autenticado */}
      {ehAutenticado && estabelecimentoMode ? <RoutesEstabelecimento/> : ''}
      {ehAutenticado ? <RoutesAuth/> : ''}

      {!ehAutenticado ? <Navbar /> : ''}
      {/* Rotas para usuário sem login */}
      <Routes>
        <Route index path="/" element={!ehAutenticado ? <PaginaInicial /> : <Navigate to='/estabelecimentos' />} />
        <Route path='/login' element={!ehAutenticado ? <Login setAuth={setAuth} /> : <Navigate to='/estabelecimentos' />} />
        <Route path='/cadastro' element={!ehAutenticado ? <Cadastro setAuth={setAuth} /> : <Navigate to='/estabelecimentos' />} />
        <Route path="/planos" element={!ehAutenticado ? <Planos /> : <Navigate to='/estabelecimentos' />} />
        <Route path="/quemsomos" element={!ehAutenticado ? <QuemSomos /> : <Navigate to='/estabelecimentos' />} />
        <Route path="/suporte" element={!ehAutenticado ? <Suporte /> : <Navigate to='/estabelecimentos' />} />

        {/* Erro 404 - Página não encontrada*/}
        <Route path="/*" element={!ehAutenticado ? <PaginaNEncontrada/> : ''} />

      </Routes>
      {!ehAutenticado ? <Footer /> : ''}
    </BrowserRouter>
  );
}