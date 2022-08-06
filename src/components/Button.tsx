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
    timerId?: NodeJS.Timeout
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

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             alreadyClicked: false
    //         })
    //     }, 5000)
    // }

    // componentDidUpdate (prevProps: ButtonProps, prevState: ButtonState) {
    //     //podemos dentro deste método do ciclo de vida, fazer algumas comparações com os estados anteriores
    //     console.log('anterior: ', prevState)
    //     console.log('atual: ', this.state)
    // }

    // componentDidMount () {
    //     const timerId = setInterval(() => {
    //       console.log('to rodando')
    //     }, 5000)
    //     this.setState({ timerId })
    //   }
    
    //   componentWillUnmount () {
    //     console.log('Button será desmontado')
    //     if (this.state.timerId)
    //       clearInterval(this.state.timerId)
    //   }
    

    render() {
        /**Um componente baseado em classe já trás o props.children automaticamente 
         * devido ä versão do React, utilizar o this.props.children apresenta erro, o que podemos resolver, alterando a 
         * extensão do arquivo de tsx para jsx
        */
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