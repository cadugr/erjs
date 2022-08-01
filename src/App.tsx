import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Post from './components/Post';


function App() {
  const [post] = useState({
    title: 'Título maneiro',
    content: 'Lorem Isum ate mera atme'
  })
  //Quando abrimos e fechamos um componente e passamos um conte[udo pra ele, as props deste componente passam a ter 
  //a propriedade children
  return (
    <div className="App">
      <header className="App-header">
        <Card align='right' title='Card'>
          <Post post={post} totalComments={12}/>
        </Card>    
      </header>
    </div>
  );
}

export default App;