import styles from "./NaoEncontrada.module.scss";

import React from 'react'

export default function NaoEncontrada() {
  return (
    <section className={styles.container}>
        <h2>Ops!</h2>
        <p>O Conteudo que você procura não foi encontrado!</p>
    </section>
  )
}
