import React from 'react'
import logoFacebook from './facebook.svg'
import logoTwitter from './twitter.svg'
import logoInstagram from './instagram.svg'
import styles from './Rodape.module.scss'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <ul className={styles.rodape__lista}>
            <li>
                <img src={logoFacebook} alt='Logo do Facebook'/>
            </li>
            <li>
                <img src={logoTwitter} alt='Logo do Twitter'/>
            </li>
            <li>
                <img src={logoInstagram} alt='Logo do Instagram'/>
            </li>
        </ul>
        <p className={styles.rodape__texto}>Desenvolvido por Erike Nascimento.</p>
    </footer>
  )
}
