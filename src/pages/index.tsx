import Cartao from "../components/Cartao"
import styles from "../styles/Formulario.module.css"
import Link from "next/dist/client/link"
import EntradaNumerica from "../components/EntradaNumerica"
import { useState } from "react"

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor={"red"}>
          <h1>Mont Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Qtde de portas?" value={qtdePortas} 
            onChange={novaQtde => setQtdePortas(novaQtde)}></EntradaNumerica>
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Porta com Presente?" value={comPresente}
            onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}></EntradaNumerica>
        </Cartao>
        <Cartao bgcolor={"green"}>
          <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
            <h2 className={styles.iniciar}>Iniciar</h2>
            </Link>
        </Cartao>
      </div>
    </div>
  )
}