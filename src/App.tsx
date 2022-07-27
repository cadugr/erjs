import './App.css';
import Clock from './Clock';
import Person from './Person';


// const Component = React
//   .createElement('div', { style: { background: 'red' } }, 'Olá, Mundo')

// const HTMLElement = document.createElement('div')
// HTMLElement.style.background = 'red'
// HTMLElement.innerText = 'Olá, mundo!'

// console.log(Component);
// console.dir(HTMLElement);

// // @ts-ignore
// // document.body.appendChild(Component)


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock/>
        <Person/>
      </header>
    </div>
  );
}

export default App;