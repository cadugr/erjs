/**primeira coisa que devemos fazer é importar o styled-components */
import styled from 'styled-components'

/**feature: tagged template literals.
 * 
 * utilizamos o elemento div da api do styled componentes para determinar a estilização, por exemplo,
 * de uma div.  Quando criamos o código abaixo o styled components cria uma classe com um nome aleatório.
 * Podemos criar vários styled-components dentro do mesmo.  Podemos adicionar tipagens, como no exemplo da div
 * abaixo, de maneira que podemos passar propriedades aos nossos styled-components e trabalhar com renderização
 * condicional
 */
export const Wrapper = styled.div<{align: 'center' | 'left' | 'right'}>`
    background-color: rgba(0,0,0,.25);
    border-radius: 8px;
    padding: 16px;
    text-align: ${props => props.align}
`

export const Title = styled.h2`
  font-size: 1.3em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
`