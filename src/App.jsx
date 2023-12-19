import NavBar from "./componentes/NavBar/NavBar"
import './App.css'
import ItemListContainer from './componentes/NavBar/itemListContainer/itemListContainer'

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <ItemListContainer greeting={`Bienvenidos`}/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
