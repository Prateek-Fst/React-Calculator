import React from 'react'
import styles from './Display.module.css'

export default function Display({data}) {
  return (
   
      <input type="text"className={styles.display} value={data} readOnly/>

  )
}
