import styles from './Card.module.scss'
import React from 'react'
import iconeFavoritar from './favoritar.png'

export default function Card({id,titulo,capa}) {
  return (
    <div className={styles.container}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
        <img src={iconeFavoritar} alt='Favoritar filme' className={styles.favoritar} />
    </div>
  )
}
