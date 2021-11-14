import style from '../styles/Porta.module.css'
import PortaModel from '../model/porta'
import Presente from './Presente'

interface Portaprops {
    value: PortaModel,
    onChange: (newPorta: PortaModel) => void
}

export default function Porta (props: Portaprops) {
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? style.selecionada : ''

    const alternarSelecao = e => props.onChange(porta.alternarSelecao())
    const abrir = e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function renderizaPorta() {
        return (
        <div className={style.porta}>
            <div className={style.numero}>{porta.numero}</div>
            <div className={style.macaneta} onClick={abrir} ></div>
        </div>
        )
    }

    return (
        <div className={style.area} onClick={alternarSelecao}>
            <div className={`${style.frame} ${selecionada}`}>
                {porta.fechada ?
                    renderizaPorta() :
                        porta.temPresente? <Presente></Presente> : false }
            </div>
            <div className={style.chao}>

            </div>
        </div>
    )
}