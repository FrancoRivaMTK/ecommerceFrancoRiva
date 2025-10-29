import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import ItemListContainer from './Containers/ItemListContainer'
import ItemDetailContainer from './Containers/ItemDetailContainer'

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Routes>
          {/* Catálogo principal */}
          <Route path="/" element={<ItemListContainer greeting="¡STAG BIKES!" />} />
          {/* Catálogo filtrado por categoría */}
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Catálogo por categoría" />} />
        
          <Route path="/item/:id" element={<ItemDetailContainer />} />
         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App