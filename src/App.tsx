import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LateralMenu from './Components/LateralMenu';
import Dashboard from './pages/Dashboard';
import NewCard from './pages/NewCard';
import CardDetail from './pages/CardDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/newCard',
    element: <NewCard />,
  },
  {
    path: '/card/:id',
    element: <CardDetail />,
  }
])

function App() {

  return (
    <div className="App">
      <LateralMenu />
      <RouterProvider router={router} />
    </div>
  )
}

export default App;