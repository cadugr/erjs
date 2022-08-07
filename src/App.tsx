import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [names, setNames] = useState(['Daniel', 'Thiago', 'Alex', 'Jão', 'Alex'])

  //const[toggle, setToggle] = useState(false)

  useEffect(() => {
    //esse bloco de código é executado no momento que o componente foi montado
    console.log('componente foi montado')

    return () => {
      console.log('componente foi desmontado')
    }
  }, [])

  /**Podemos adicionar vários useEffect.  Podemos também determinar um retorno como uma função para o nosso useEffect.
   * Isso fará com que seja executado assim que o nosso componente for desmontado.
   */

  // useEffect(() => {
  //   console.log('toggle', toggle)
  // }, [toggle])

  return (
    <div className="App">
      <header className="App-header">
        <ul>
           {
            names.map((name, index) => <li key={index}>{name}</li>)
           } 
        </ul> 
        <button onClick={() => 
          setNames([...names, 'jeremias'])
        }>
          adicionar jeremias
        </button>
      </header>
    </div>
  );
}

export default App;