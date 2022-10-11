import React from 'react'
import style from './Date.module.css'

function Date({date}) {
  return (
    <div>
        <p className={style.date}>{date}</p>
    </div>
  )
}

export default Date