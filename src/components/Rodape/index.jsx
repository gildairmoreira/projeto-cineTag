import React from 'react'
import styles from './Rodape.module.scss'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <h2>
        Desenvolvido por <a href="https://github.com/gildairmoreira" target={'_blank'}>Gildair</a>
        .
      </h2>
    </footer>
  );
}