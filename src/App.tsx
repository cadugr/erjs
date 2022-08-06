import React from 'react';
import './App.css';


function App() {
  console.log('renderizou app')
  // const [post, setPost] = useState<PostObject | undefined>({
  //   title: 'Título maneiro',
  //   content: 'Lorem Isum ate mera atme'
  // })
  //Quando abrimos e fechamos um componente e passamos um conte[udo pra ele, as props deste componente passam a ter 
  //a propriedade children
  //renderizando condicionalmente desta forma, ficamos obrigados a retornar o componente inteiro.
  // if(!post) 
  //   return <h1>404 - Post não encontrado</h1>
  /**A manipulação de eventos dentro do React, acontece por meio de atributos. */

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* {
          !!post && 
            <Card align='right' title='Card'>
              <Post post={post} totalComments={12}/>
            </Card>
            
        } */}
        <form action='/test'>
          <button onClick={handleClick}>
            Clique em mim
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;