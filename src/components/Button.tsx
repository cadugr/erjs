import { Component } from "react";

/**Os componentes baseados em classe tabém utilizam jsx, por isso criamos o arquivo com a estensão tsx 
 * Por padrão os componentes baseados em classe devem estender a classe Component lá do React
 * 
*/
interface ButtonProps {
    onClick?: () => any
    children: any,
    initializeClicked?: boolean
}

interface ButtonState {
    alreadyClicked: boolean
}

class Button extends Component<ButtonProps, ButtonState> {
    /**Um componente baseado em classe precisa ter métodos.  Neste caso,
     * o método render que vai dizer o que ele deve renderizar.  E neste caso,
     * precisamos retornar qualquer coisa que satisfaça um nó do React 
     * */
    constructor(props: ButtonProps) {
        super(props)
        this.state = {
            alreadyClicked: !!props.initializeClicked
        }
    }

    render() {
        /**Um componente baseado em classe já trás o props.children automaticamente 
         * devido ä versão do React, utilizar o this.props.children apresenta erro, o que podemos resolver, alterando a 
         * extensão do arquivo de tsx para jsx
        */
        console.log(this.props)
        return <button 
                onClick={() => {
                    this.setState({
                        alreadyClicked: true
                    })
                    this.props.onClick?.call([])
                }}
                disabled={this.state.alreadyClicked}
                >
            { this.props.children }
        </button>
    }
}

export default Button