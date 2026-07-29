import { createBrowserRouter } from 'react-router'
import Home from './pages/Home'
import ServicosPage from './pages/ServicosPage'
import ComoFuncionaPage from './pages/ComoFuncionaPage'
import AvaliacaoPage from './pages/AvaliacaoPage'
import ContatoPage from './pages/ContatoPage'

export const router = createBrowserRouter([
  { path: '/',              Component: Home },
  { path: '/servicos',      Component: ServicosPage },
  { path: '/como-funciona', Component: ComoFuncionaPage },
  { path: '/avaliacao',     Component: AvaliacaoPage },
  { path: '/contato',       Component: ContatoPage },
])
