import './index.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
      
        <ItemListContainer greeting="¡Bienvenido/a a STAG Bikes! Encontrá todo para tu próxima salida." />
      </main>
    </>
  )
}

export default App
