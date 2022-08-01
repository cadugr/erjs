import { useState } from "react"

export default function Person() {
   //aqui usamos o operador de desestruturação e declaramos o hook useState para declarar um estado
   //desta forma, estamos criando um estado
   const [person, setPerson] = useState<string>('Daniel')
   //setTimeout tbm não é o jeito certo de gerenciarmos efeito colateral dentro do react
   setTimeout(() => {
    //Podemos passar para método, um valor, ou até mesmo uma função de callback que retorna um valor
    //Pq isto pode ser útil?  Pq um estado pode ser definido com tipos mais complexos, assim, podemos receber o state nessa função de callback, como a seguir: 
     setPerson((state)=> {
        //este é o spread operator.  Com ele estamos adicionando um valor ao nosso array
        return 'Cleberson'
     })
   }, 2000)

    return <div>
        <h1>Perfil</h1>
        <p>Este é o perfil de {person}</p>
    </div>
}