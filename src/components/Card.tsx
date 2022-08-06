import { PropsWithChildren, useState 
//    ReactNode 
} 
from "react"
import Button from "./Button"
import './Card.css'
import * as C from './Card.styles'
//Um ponto importante é que mesmo que criemos um arquivo css por componente, ao final, ao montar o bundle da aplicação
// o webpack compila todos estes arquivos em um único e grande arquivo css

//Esta é uma forma de encapsularmos o nosso children das props para trabalharmos com as tipagens corretas 
//do typescript.  Um outra forma de fazer seria esta que esta comentada a seguir:

// type CardProps = {
//     title: string,
//     children?: ReactNode
// }

type CardProps = PropsWithChildren<{
    title: string
    align?: 'center' | 'left' | 'right'
}>

//Podemos também utilizar o PropsWithChildren passando desta forma como tipo para o parametro props abaixo: props: PropsWithChildren<CardProps>
export default function Card (props: CardProps) {
    /**O ideal é não utilizarmos a estilização inline, pois a mesma pode ser prejudicial a longo
     * prazo.  Por isso devemos dar preferencia a estilização com css.
     * A explicação para utilizarmos um objeto para declarar nossa estilização vem do fato de ser muito mais fácil 
     * a conversão para a api do DOM.  O caso de propriedades como por exemplo o borderRadius e o padding, reparamos
     * que mesmo não declarando a unidade de medida, ele já coloca o px(pixels) por default.  Para utilizarmos outras
     * unidades de medida, basta ao invés de declarar um número diretamente, declarar como uma string e então indicar a unidade
     * de medida que desejamos.
     * 
     * Falando do styled components, o mesmo não possui uma tipagem padrão. Isso significa dizer que precisamos instalar
     * um pacote adicional de tipagens para ele.  Este pacote é instalado como uma dependencia de desenvolvimento
     * 
     * Falando um pouco de componentes baseados em classe, os mesmos estão caindo em desuso por ter uma api mais verbosa
     */
    //abaixo utilizamos uma trick para renderizar nosso css de forma dinamica
    const [showButton, setShowButton] = useState(true)


    return <C.Wrapper align={props.align || 'left'}>
        <C.Title>{props.title}</C.Title>
        {props.children}
        <div>
            {
                showButton &&
                <Button 
                    onClick={() => setShowButton(false)}
                    >
                    ver mais
                </Button>

            }
        </div>
    </C.Wrapper>
}