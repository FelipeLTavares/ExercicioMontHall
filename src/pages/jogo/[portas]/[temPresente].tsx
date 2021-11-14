import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/criarPortas";
import styles from '../../../styles/Jogo.module.css'
import Link from 'next/link'
import { useRouter } from "next/dist/client/router";

export default function jogo () {
  const router = useRouter()

  const [portas, setPortas] = useState([])
  const [valido, setvalido] = useState(false)

  useEffect( () => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    setPortas(criarPortas(portas, temPresente))
  }, [router?.query] )

  useEffect( () => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    const qtdePortasValida = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= portas

    setvalido( qtdePortasValida && temPresenteValido )
  }, [portas] )

  function renderizarPortas() {
    return portas.map( porta => {
      return <Porta key={porta.numero} value={porta}
      onChange={ novaPorta => setPortas(atualizarPortas(portas, novaPorta)) }/>
    } )
  }

  return (
      <div id={styles.jogo}>
          <div className={styles.portas}>
              {valido?
                renderizarPortas():
                <h2>Valores Inválidos</h2>
              }
          </div>
          <div className={styles.botoes}>
              <Link href='/'><button>Reiniciar Jogo</button></Link>
          </div>
        
      </div>
    )
}