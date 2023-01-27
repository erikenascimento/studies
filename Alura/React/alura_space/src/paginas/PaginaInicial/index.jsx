import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import styles from './PaginaInicial.module.scss'
import banner from './banner.png'
import Rodape from "../../componentes/Rodape";
import Galeria from "../../componentes/Galeria";

export default function PaginaInicial(){
  return (
    <>
    <Cabecalho />
    <main>
      <section className={styles.principal}>
    <Menu />
    <div className={styles.principal__imagem}>
      <h1>A galeria mais completa do espaço</h1>
      <img src={banner} alt="Terra vista do espaço"/>
    </div>

      </section>
    </main>
    <div>
      <Galeria />
    </div>
    <Rodape />
    </>
  )
}