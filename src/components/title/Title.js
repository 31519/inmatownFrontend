

import React from 'react'
import style from './Title.module.css'

function Title({title}) {
  return (
    <div >
        <h2 className={style.title}>{title.slice(0, 100)}</h2>
    </div>
  )
}

export default Title