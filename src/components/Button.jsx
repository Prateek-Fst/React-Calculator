import React from 'react'
import styles from './Button.module.css'

export default function Button({btnClick}) {
    let btn = ['1','2','3','+','4','5','6','-','7','8','9','*','.','0','=','/','<','C']
  return (
    <div>
        {btn.map((val,index)=><button className={val==='C'?styles.clearBtn:styles.calcBtn} key = {index} onClick={()=>btnClick(val)}>{val}</button>)}
      
    </div>
  )
}
